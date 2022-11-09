import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Screen/Header';
import Home from '../my-project/Screen/Home';

export default function App() {
  return (
    <View style={styles.container}>
    <Header/>
      <Home/>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0000',
    alignItems: 'center',
   
  },
});
