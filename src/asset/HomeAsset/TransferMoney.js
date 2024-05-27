import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import normalize from '../../../utils/normalize'

const TransferMoney = () => {
  const elem = [
    {
      id: 1,
      name: 'To Mobile',
      name1: 'Number',
      image: require('../../image/user.png')
    },
    {
      id: 2,
      name: 'To Bank/UPI',
      name1: 'Id',
      image: require('../../image/bank2.png')
    },
    {
      id: 3,
      name: 'To Self',
      name1: 'Account',
      image: require('../../image/reload.png')
    },
    {
      id: 4,
      name: 'Check Bank',
      name1: 'Balance',
      image: require('../../image/bank.png')
    }
  ]
  return (
    <View
      style={{
        width: '94%',
        backgroundColor: '#ffffff',
        padding: normalize(5),
        marginTop: normalize(10),
        marginLeft: normalize(10),
        borderRadius: normalize(13)
      }}
    >
      <View
      style={{
        margin: normalize(4)
      }}
      >
        <Text style={{
          fontSize: normalize(15),
          fontWeight: 600,
          color: 'black',

        }}>Transfer Money</Text>
      </View>
      <View
        style={{
          // marginTop: normalize(17),
          // rowGap: normalize(20)
        }}
      >
        <FlatList
          data={elem}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: normalize(5),
            marginLeft: normalize(11)
          }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  alignItems: 'center',
                  marginRight: normalize(16)
                }}
              >
                <View
                  style={{
                    height: normalize(37),
                    width: normalize(37),
                    borderRadius: normalize(14),
                    backgroundColor: '#5f259f',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      height: normalize(20),
                      width: normalize(20),
                      resizeMode: 'contain',
                      tintColor: 'white'
                    }}
                  />
                </View>
                <Text style={{ color: 'black' }}>{item.name}</Text>
                <Text style={{ color: 'black' }}>{item.name1}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#dee5fa',
          padding: normalize(5),
          marginTop: normalize(7),
          borderBottomLeftRadius: normalize(10),
          borderBottomRightRadius: normalize(10),
          margin: normalize(-3)
        }}
      >
        <Text>UPI ID: 7063537444@ybl</Text>
        <Image source={require('../../image/next.png')}
          style={{
            height: normalize(10),
            width: normalize(10)
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default TransferMoney

const styles = StyleSheet.create({})