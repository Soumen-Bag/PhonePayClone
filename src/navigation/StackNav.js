import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ButtomTabNav from './ButtomTabNav'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'

const Stack = createStackNavigator()
const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name='BottomTabNav' component={ButtomTabNav}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNav

const styles = StyleSheet.create({})