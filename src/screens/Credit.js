import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../asset/HomeAsset/Header'
import normalize from '../../utils/normalize'
import { TextInput } from 'react-native-gesture-handler'

const Credit = () => {
  return (
    <ScrollView>
      {/* searchbar */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          borderRadius: normalize(13),
          marginVertical: normalize(6),
          marginHorizontal: normalize(5),
          paddingHorizontal: normalize(6),
        }}
      >
        <Image
          source={require('../image/search.png')}
          style={{
            height: normalize(20),
            width: normalize(20),
            resizeMode: 'contain'
          }}
        />
        <TextInput
          placeholder='Search by store name or phone number'
          style={{
            marginLeft: normalize(3)
          }}
        />
      </View>
      {/* last Payment transectiom in store */}
      <View>
        <FlatList
          data={Array(6)}
          showsVerticalScrollIndicator={false}
          //contentContainerStyle={{marginBottom: normalize(2)}}
          renderItem={() => {
            return (
              <View
                style={{
                  backgroundColor: '#ffff',
                  paddingHorizontal: normalize(10),
                  paddingVertical: normalize(7),
                  marginHorizontal: normalize(7),
                  borderRadius: normalize(11),
                  marginBottom: normalize(12)
                }}
              >
                <Text
                  style={{
                    color: '#9e9e9e',
                    fontSize: normalize(10)
                  }}
                >Last Paid ₹50 ,3 months ago</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: normalize(2)
                  }}>
                  <Image
                    source={require('../image/shoip.jpeg')}
                    style={{
                      resizeMode: 'contain',
                      height: normalize(40),
                      width: normalize(40),
                      borderRadius: normalize(12)
                    }}
                  />
                  <View
                    style={{
                      marginLeft: normalize(12)
                    }}
                  >
                    <Text >XYZ Store</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: normalize(2)
                      }}
                    >
                      <Image
                        source={require('../image/rating.png')}
                        style={{
                          height: normalize(14),
                          width: normalize(14),
                          resizeMode: 'contain'
                        }}
                      />
                      <Text
                        style={{
                          color: '#9e9e9e',
                          fontSize: normalize(10)
                        }}
                      >4.3   50m  Close at 10:00pm</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: "center",
                    gap: normalize(9),
                    borderWidth: 0.4,
                    borderRadius: normalize(10),
                    height: normalize(34),
                    marginTop: normalize(7),
                    marginHorizontal: normalize(2)
                  }}
                >
                  <Image
                    source={require('../image/down-right.png')}
                    style={{
                      height: normalize(15),
                      width: normalize(15),
                      resizeMode: 'contain',
                      tintColor: '#5f259f'
                    }}
                  />
                  <Text
                    style={{
                      color: '#5f259f',
                      fontSize: normalize(11),
                      fontWeight: '500'
                    }}
                  >Pay Now</Text>
                </TouchableOpacity>
              </View>
            )
          }}
        />
      </View>

      {/* Popular Catagories */}
      <View
      style={{
        backgroundColor:'#ffff',
        paddingVertical: normalize(6),
        paddingHorizontal:normalize(4),
        marginHorizontal: normalize(8),
        borderRadius: normalize(12),
        marginVertical: normalize(5)
      }}
      >
        <Text
          style={{
            fontSize: normalize(13),
            fontWeight: '500',
            color: 'black',
            marginLeft: normalize(10),
          }}
        >Popular Catagories</Text>

        <FlatList
          data=
          {[
            {
              id: 1,
              name: 'Kirana &\nGeneral Store',
              image: require('../image/shop.png')
            },
            {
              id: 2,
              name: 'Fruit and\nVegetable',
              image: require('../image/healthy-food.png')
            },
            {
              id: 3,
              name: 'Meat Shop',
              image: require('../image/turkey.png')
            },
            {
              id: 4,
              name: 'Pharmacy',
              image: require('../image/medicine.png')
            },
            {
              id: 5,
              name: 'Doctor & Path\nlab',
              image: require('../image/pharmacy.png')
            },
            {
              id: 6,
              name: 'Fruit and\nVegetable',
              image: require('../image/healthy-food.png')
            },
            {
              id: 7,
              name: 'Food Beverage',
              image: require('../image/beverages.png')
            },
            {
              id: 8,
              name: 'Stationery',
              image: require('../image/stationery.png')
            },
          ]}
          numColumns={4}
          contentContainerStyle={{paddingVertical: normalize(4)}}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity key={index}
              style={{
                alignItems:'center',
                // justifyContent:'center',
                // rowGap: normalize(3),
                // columnGap: normalize(7),
                //marginRight: normalize(0),
                width: '25%',
                marginTop: normalize(8)
              }}>
                <Image
                  source={item.image}
                  style={{
                    height: normalize(28),
                    width: normalize(28),
                    resizeMode:'contain',
                    tintColor:'#5f259f',
                  }}
                />
                <Text
                style={{
                  textAlign:'center',
                  marginTop: normalize(4),
                  fontSize: normalize(10)
                }}
                >{item.name}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </ScrollView>
  )
}

export default Credit

const styles = StyleSheet.create({})