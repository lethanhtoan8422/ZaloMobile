import { PORT, SERVER_HOST } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { toastConfig } from '../utils/toastConfig';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const Router = (props) => {
   const [userID, setUserID] = useState(1);
   useEffect(() => {
      checkLogin();
   }, []);

   const checkLogin = async () => {
      try {
         const jsonValue = await AsyncStorage.getItem('@user');
         const params = jsonValue != null ? JSON.parse(jsonValue) : null;
         if (!params) return setUserID(null);
         let res = await axios.post(`${SERVER_HOST}:${PORT}/login`, params);
         setUserID(res.data ? res.data.id : null);
      } catch (e) {
         setUserID(null);
         console.error(e);
      }
   };
   return (
      <SafeAreaProvider>
         <NavigationContainer>
            <Stack.Navigator initialRouteName={userID ? 'AppStack' : 'AuthStack'}>
               <Stack.Screen name="AppStack" component={AppStack} options={{ headerShown: false }} />
               <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
            </Stack.Navigator>
         </NavigationContainer>
         <Toast config={toastConfig} />
      </SafeAreaProvider>
   );
};

export default Router;
