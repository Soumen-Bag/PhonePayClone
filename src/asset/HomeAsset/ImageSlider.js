import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";
import normalize from '../../../utils/normalize';

const ImageSlider = () => {
  const images = [
    require('../../image/slideimage1.png'),
    require('../../image/slideimage2.png'),
    require('../../image/slideimage3.png'),
    require('../../image/slideimage4.png'),
    require('../../image/slideimage5.png'),
  ]
  return (
    <View
      style={{
        // marginLeft: normalize(3),
        // marginRight: normalize(3)
      }}
    >
      <SliderBox images={images}
        autoplay
        circleLoop
        sliderBoxHeight={120}
        resizeMethod={'resize'}
        resizeMode={'cover'}
        dotColor="white"
        inactiveDotColor="#635e62"
        paginationBoxStyle={{
          position: "absolute",
          bottom: 0,
          padding: 0,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          paddingVertical: 10
        }}
        ImageComponentStyle={{
          borderRadius: normalize(10),
          width: '95%',
          marginTop: normalize(10)
        }}
        dotStyle={{
          width: normalize(8),
          height: normalize(8),
          borderRadius: normalize(4),
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: "rgba(128, 128, 128, 0.92)"
        }}
      />
    </View>
  )
}

export default ImageSlider

const styles = StyleSheet.create({})