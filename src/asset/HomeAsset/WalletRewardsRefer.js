import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import normalize from '../../../utils/normalize'

const WalletRewardsRefer = () => {
  const data = [
    {
      id: 1,
      name: 'PhonePe Wallet',
      image: require('../../image/wallet.png')
    },
    {
      id: 2,
      name: 'Rewards',
      image: require('../../image/gift.png')
    }, {
      id: 3,
      name: 'Refer & Get ₹150',
      image: require('../../image/speaker.png')
    }
  ]
  return (
    <View
    style={{
      alignItems:'center',
      justifyContent:'space-around'
    }}
    >
      <FlatList
        data={data}
        horizontal
        style={{
          //justifyContent:'center'
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              // key={index}
              style={{
                alignItems:'center',
                backgroundColor:'#4f84db',
                gap: normalize(6),
                height: normalize(56),
                width: normalize(95),
                borderRadius: normalize(11),
                justifyContent:'center',
                margin: normalize(6)
              }}
            >
              <Image
                source={item.image}
                style={{
                  height: normalize(20),
                  width:normalize(20),
                  resizeMode:'contain',
                  tintColor:'white',
                }}
              />
              <Text
              style={{
                color:'white'
              }}
              >{item.name}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default WalletRewardsRefer

const styles = StyleSheet.create({})