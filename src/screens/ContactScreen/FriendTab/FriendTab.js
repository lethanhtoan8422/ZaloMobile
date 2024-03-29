import { View, Text, SectionList } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { ContactItem } from '../../../components/ContactItem/ContactItem';
import axios from 'axios';
import { SERVER_HOST, PORT } from '@env';
import { getUserID } from '../../../utils/storage';

export const FriendTab = ({ navigation }) => {
   const [contacts, setContacts] = useState([]);
   useEffect(() => {
      getUserID().then((userID) => {
         getContacts(userID);
      });
   }, []);

   const getContacts = async (userID) => {
      const res = await axios.get(`${SERVER_HOST}:${PORT}/relationship/get-friends-of-${userID}/`);
      const transformedData = res.data.reduce((acc, obj) => {
         const title = obj.name.charAt(0).toUpperCase();
         const existingTitle = acc.find((item) => item.title === title);
         obj.image = 'https://picsum.photos/200';
         if (existingTitle) existingTitle.data.push(obj);
         else acc.push({ title, data: [obj] });
         return acc;
      }, []);
      setContacts(transformedData);
   };

   return (
      <View style={styles.container}>
         <SectionList
            sections={contacts}
            renderItem={({ item }) => <ContactItem navigation={navigation} data={item} />}
            renderSectionHeader={({ section }) => <Text style={styles.title}>{section.title}</Text>}
            keyExtractor={(item, index) => item + index}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            SectionSeparatorComponent={() => <View style={{ height: 10 }} />}
            stickySectionHeadersEnabled={false}
         />
      </View>
   );
};
