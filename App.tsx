import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'
import StackNav from './src/navigation/StackNav'
import Header from './src/asset/HomeAsset/Header'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const App = () => {
  return (
    <View style={{flex:1}}>
      <StatusBar
        translucent={false}
        backgroundColor={'#4c1e7f'}
        barStyle={'light-content'}
      />
      <Header/>
      {/* <Home/> */}
      <StackNav/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})