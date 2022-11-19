import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , ScrollView } from 'react-native';
import Header from './Screen/Header';
import Home from '../my-project/Screen/Home';
import Keybords from './Screen/Keybords';

export default function App() {
  return (
    <View style={styles.container}>
  <Keybords/>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%',
    flex: 1,
    backgroundColor:'#0000',
    alignItems: 'center',
    display:'flex',
   
  },
});
