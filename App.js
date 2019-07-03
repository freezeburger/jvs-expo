import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Avatar, Header, Divider, Card , Image, Icon, Button} from 'react-native-elements';

import { BamHeader, BamGrumpyCat, BamLogoButton } from 'jvs-bam';

const users = [
 {
    name: 'Gwennolé',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
    name: 'Lucas',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
    name: 'Jordhan',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
    name: 'Franck',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },{
    name: 'Franck',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },{
    name: 'Damien',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },{
    name: 'Axel',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
    name: 'Ludovic',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
    name: 'Nicolas',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 }
];


export default function App() {
  return (
    <View>
      <BamHeader bamAction={ () => true}/>
      <BamLogoButton bamAction={ () => true}/>
      <BamGrumpyCat />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
