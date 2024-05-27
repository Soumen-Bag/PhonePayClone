import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import normalize from '../../../utils/normalize'

const data = [
  {
    id: 1,
    name: 'Mobile\nRecharge',
    image: require('../../image/mobile.png')
  },
  {
    id: 2,
    name: 'DTH',
    image: require('../../image/satellite-dish.png')
  },
  {
    id: 3,
    name: 'Electricity',
    image: require('../../image/bulb.png')
  },
  {
    id: 4,
    name: 'Credit Card\nPayment',
    image: require('../../image/credit-card.png')
  },
  {
    id: 5,
    name: 'Loan\nRepayment',
    image: require('../../image/personal.png')
  },
  {
    id: 6,
    name: 'Book Cylinder',
    image: require('../../image/gas-tank.png')
  },
  {
    id: 7,
    name: 'Rent Payment',
    image: require('../../image/renewable.png')
  },
  {
    id: 8,
    name: 'See All',
    image: require('../../image/next.png')
  }
]
const ReachargeAndPayBills = () => {
  const renderSeparetor = () => {
    return (
      <TouchableOpacity
        style={{
          // justifyContent:'center',
          // alignItems: 'center',
          // gap: normalize(3),
          // marginRight: normalize(10),
          // width: '22%',
          // marginBottom: normalize(15)
          height: normalize(37),
          width: normalize(37),
          borderRadius: normalize(14),
          backgroundColor: '#5f259f',
        }}
      >
        <Image
          source={require('../../image/next.png')}
          style={{
            height: normalize(20),
            width: normalize(20),
            resizeMode: 'contain',
            tintColor: 'white',
            alignItems: 'center',
            marginBottom: normalize(4)
          }}
        />
        <Text
          style={{
            textAlign: 'center'
          }}
        >See All</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        marginVertical: normalize(6),
        marginHorizontal: normalize(6),
        borderRadius: normalize(10),
        height: '36%'
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: normalize(12),
          paddingVertical: normalize(8),
          marginBottom: normalize(10)
        }}
      >
        <Text
          style={{
            fontSize: normalize(15),
            fontWeight: 600,
            color: 'black',
          }}
        >Reacharge & Pay Bills</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#f3edfa',
            paddingHorizontal: normalize(12),
            paddingVertical: normalize(5),
            borderRadius: normalize(12)
          }}
        >
          <Text>My Bills</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={[...data, { key: 8 }]}
        keyExtractor={item => item.key}
        numColumns={4}
        contentContainerStyle={{ alignItems: 'center', flexWrap: 'wrap', }}
        // ItemSeparatorComponent={renderSeparetor}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                // justifyContent:'center',
                alignItems: 'center',
                gap: normalize(3),
                marginRight: normalize(10),
                width: '22%',
                marginBottom: normalize(15)
              }}
            >
              <View
                style={{
                  backgroundColor: data?.length - 1 == index ? '#5f259f' : 'white',
                  paddingVertical: normalize(4),
                  paddingHorizontal: normalize(6),
                  borderRadius: normalize(9)
                }}>
                <Image
                  source={item.image}
                  style={{
                    height: normalize(20),
                    width: normalize(20),
                    resizeMode: 'contain',
                    tintColor: data?.length - 1 == index ? 'white' : '#5f259f',
                    alignItems: 'center',
                    marginBottom: normalize(4),

                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center'
                }}
              >{item.name}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default ReachargeAndPayBills

const styles = StyleSheet.create({})