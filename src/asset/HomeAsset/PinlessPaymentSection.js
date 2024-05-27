import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import normalize from '../../../utils/normalize'

const PinlessPaymentSection = () => {
  return (
    <TouchableOpacity
    style={{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      backgroundColor: '#f8f5fb',
      paddingVertical: normalize(6),
      paddingHorizontal: normalize(11),
      marginHorizontal: normalize(4),
      borderRadius: normalize(10)
    }}
    >
      <Image
        source={require('../../image/upi_logo.png')}
        style={{
          height: normalize(19),
          width: normalize(54),
          resizeMode:'contain'
        }}
      />
      <Text>PIN-less Payments </Text>
      <View
      style={{
        backgroundColor:'#5f259f',
        paddingVertical: normalize(4),
        paddingHorizontal: normalize(8),
        borderRadius: normalize(13)
      }}
      >
        <Text 
        style={{
          color:'white'
        }}
        >TRY NOW</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PinlessPaymentSection

const styles = StyleSheet.create({})