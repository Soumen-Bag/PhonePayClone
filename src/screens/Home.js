import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../asset/HomeAsset/Header'
import ImageSlider from '../asset/HomeAsset/ImageSlider'
import TransferMoney from '../asset/HomeAsset/TransferMoney'
import WalletRewardsRefer from '../asset/HomeAsset/WalletRewardsRefer'
import PinlessPaymentSection from '../asset/HomeAsset/PinlessPaymentSection'
import ReachargeAndPayBills from '../asset/HomeAsset/ReachargeAndPayBills'

const Home = () => {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
    >
      {/* <Header /> */}
      <ScrollView
        style={{
          backgroundColor: '#efe6f7',
        }}
      >
        {/* image slider */}
        <ImageSlider />
        {/* Transfer Money */}
        <TransferMoney/>
        {/* Wallet,Rewards,Refer */}
        <WalletRewardsRefer/>
        {/* pin les payment */}
        <PinlessPaymentSection/>
        {/* Recharge and pay bills */}
        <ReachargeAndPayBills/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})