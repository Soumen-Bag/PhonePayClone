import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import normalize from '../../utils/normalize';
import Home from '../screens/Home';
import Credit from '../screens/Credit';
import Insurance from '../screens/Insurance';
import Wealth from '../screens/Wealth';
import History from '../screens/History';


const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: normalize(60),
          borderTopWidth: normalize(1),
          borderTopColor: '#EFEFEF',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              <View
                style={{
                  backgroundColor: focused ? '#dfc8e6' : 'white',
                  height: normalize(24),
                  width: normalize(45),
                  borderRadius: normalize(19),
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image
                  source={require('../image/homeWhite.png')}
                  style={{
                    height: normalize(18),
                    width: normalize(18),
                    resizeMode: 'contain',
                    tintColor: focused ? '#4c165c' : 'black',
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: normalize(11),
                  color: focused ? '#9006ba' : 'black',
                  marginTop: normalize(2),
                }}>
                Home
              </Text>
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Credit"
        component={Credit}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              <View
                style={{
                  backgroundColor: focused ? '#dfc8e6' : 'white',
                  height: normalize(24),
                  width: normalize(45),
                  borderRadius: normalize(19),
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image
                  source={require('../image/rupee2.png')}
                  style={{
                    height: normalize(18),
                    width: normalize(18),
                    resizeMode: 'contain',
                    tintColor: focused ? '#55026e' : 'black',
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: normalize(11),
                  color: focused ? '#9006ba' : 'black',
                  marginTop: normalize(2),
                }}>
                Credit
              </Text>
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Insurance"
        component={Insurance}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              <View
                style={{
                  backgroundColor: focused ? '#dfc8e6' : 'white',
                  height: normalize(24),
                  width: normalize(45),
                  borderRadius: normalize(19),
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image
                  source={require('../image/insurance.png')}
                  style={{
                    height: normalize(18),
                    width: normalize(18),
                    resizeMode: 'contain',
                    tintColor: focused ? '#55026e' : 'black',
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: normalize(11),
                  color: focused ? '#9006ba' : 'black',
                  marginTop: normalize(2),
                }}>
                Insurance
              </Text>
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Wealth"
        component={Wealth}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              <View
                style={{
                  backgroundColor: focused ? '#dfc8e6' : 'white',
                  height: normalize(24),
                  width: normalize(45),
                  borderRadius: normalize(19),
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <Image
                  source={require('../image/store.png')}
                  style={{
                    height: normalize(18),
                    width: normalize(18),
                    resizeMode: 'contain',
                    tintColor: focused ? '#55026e' : 'black',
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: normalize(11),
                  color: focused ? '#9006ba' : 'black',
                  marginTop: normalize(2),
                }}>
                Wealth
              </Text>
            </>
          ),
        }}
      />

      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              <View
                style={{
                  backgroundColor: focused ? '#dfc8e6' : 'white',
                  height: normalize(24),
                  width: normalize(45),
                  borderRadius: normalize(19),
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image
                  source={require('../image/transaction.png')}
                  style={{
                    height: normalize(18),
                    width: normalize(18),
                    resizeMode: 'contain',
                    tintColor: focused ? '#55026e' : 'black',
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: normalize(11),
                  color: focused ? '#9006ba' : 'black',
                  marginTop: normalize(2),
                }}>
                History
              </Text>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({});
