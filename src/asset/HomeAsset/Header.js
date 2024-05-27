import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import normalize from '../../../utils/normalize'

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#5f259f',
        paddingHorizontal: normalize(7),
        paddingVertical: normalize(4),
        justifyContent:'space-between'
      }}
    >
      <View 
      style={{
        flexDirection:'row',
        gap: normalize(5)
      }}
      >
        <TouchableOpacity
          style={{
            flexDirection: 'row'
          }}
          onPress={() => console.warn("wdns")}
        >
          <Image source={require('../../image/man.png')}
            style={{
              height: normalize(35),
              width: normalize(35),
              resizeMode: 'contain'
            }}
          />
          <Image source={require('../../image/flag.png')}
            style={{
              height: normalize(16),
              width: normalize(16),
              resizeMode: 'contain',
              marginTop: normalize(15),
              marginLeft: normalize(-11)
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("nfjd")}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: normalize(5)
            }}
          >
            <Text
              style={{
                fontSize: normalize(16),
                fontWeight: '600',
                color: 'white'
              }}
            >Add Adress</Text>
            <Image
              source={require('../../image/down.png')}
              style={{
                height: normalize(10),
                width: normalize(10),
                resizeMode: 'contain',
                tintColor: 'white'
              }}
            />
          </View>
          <Text style={{ fontSize: normalize(11), color: '#dad3db' }}>Chandrakona 2 Subdistrict</Text>
        </TouchableOpacity>
      </View>
      <View 
      style={{
        flexDirection:'row',
        gap: normalize(8)
      }}
      >
        <TouchableOpacity>
          <Image
            source={require('../../image/qr-code.png')}
            style={{
              height: normalize(18),
              width: normalize(18),
              resizeMode: 'contain',
              tintColor: 'white'
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../image/bell.png')}
            style={{
              height: normalize(16),
              width: normalize(16),
              resizeMode: 'contain',
              tintColor: 'white'
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../image/help.png')}
            style={{
              height: normalize(15),
              width: normalize(15),
              resizeMode: 'contain',
              tintColor: 'white'
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})