import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import * as React from 'react';
import MainContainer from './Components/navigation/MainContainer';

export default function App() {
  return (
    // <View className="absolute top-[50%] left-10 opacity-75 shadow-lg shadow-slate-800 w-[50%] h-[30%] mx-auto bg-red-400 rounded-md">
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <MainContainer></MainContainer>
  );
}

