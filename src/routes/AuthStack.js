import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PhoneNumberScreen from '../screens/RegisterScreen/PhoneNumberScreen';
import RecoveryPassScreen from '../screens/LoginScreen/RecoveryPassScreen';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
   return (
      <Stack.Navigator initialRouteName="Authentication">
         <Stack.Screen name="Authentication" component={AuthenticationScreen} options={{ headerShown: false }} />
         <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
               headerTitle: 'Đăng nhập',
               headerBackground: () => (
                  <View
                     style={{
                        backgroundColor: '#4A8CFE',
                        flex: 1,
                        borderBottomWidth: 1,
                        borderBottomColor: '#ddd',
                     }}
                  />
               ),
               headerTintColor: '#fff',
            }}
         />
         <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
               headerTitle: 'Tạo tài khoản',
               headerBackground: () => (
                  <View
                     style={{
                        backgroundColor: '#4A8CFE',
                        flex: 1,
                        borderBottomWidth: 1,
                        borderBottomColor: '#ddd',
                     }}
                  />
               ),
               headerTintColor: '#fff',
            }}
         />
         <Stack.Screen
            name="PhoneNumber"
            component={PhoneNumberScreen}
            options={{
               headerTitle: '',
               headerBackground: () => (
                  <View
                     style={{
                        backgroundColor: '#4A8CFE',
                        flex: 1,
                        borderBottomWidth: 1,
                        borderBottomColor: '#ddd',
                     }}
                  />
               ),
               headerTintColor: '#fff',
            }}
         />
         <Stack.Screen
            name="RecoveryPass"
            component={RecoveryPassScreen}
            options={{
               headerTitle: '',
               headerBackground: () => (
                  <View
                     style={{
                        backgroundColor: '#4A8CFE',
                        flex: 1,
                        borderBottomWidth: 1,
                        borderBottomColor: '#ddd',
                     }}
                  />
               ),
               headerTintColor: '#fff',
               headerBackTitle: 'Lấy lại mật khẩu',
            }}
         />
      </Stack.Navigator>
   );
};

export default AuthStack;
