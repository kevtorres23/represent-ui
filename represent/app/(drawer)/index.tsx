import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, ScrollView, SafeAreaView, RefreshControl, ImageBackground } from 'react-native';
import React, { useState, useEffect } from "react";

function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000)
  }, []);

  return (
    <SafeAreaView style={styles.safe} className='items-center justify-center'>
      <ScrollView contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View className="flex-1 items-center justify-center w-screen gap-6 h-screen flex-col">
          <ImageBackground source={require('../../assets/images/fw19-cover.jpg')} resizeMode="cover" className='flex-1 w-full h-full items-center justify-center'>
            <View className='w-full h-full items-center justify-center' style={styles.image1}>
              <Text style={styles.titles} className='text-6xl text-white'>FW19</Text>
            </View>
          </ImageBackground>

          <ImageBackground source={require('../../assets/images/terrier-cover.jpg')} resizeMode="cover" className='flex-1 w-full h-full items-center justify-center'>
            <View className='w-full h-full items-center justify-center' style={styles.image2}>
              <View>
                <Text style={styles.titles} className='text-6xl text-white'>THE</Text>
              </View>
              <View>
                <Text style={styles.titles} className='text-6xl text-white'>TERRIER</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 0 : 20,
  },

  scrollView: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    width: "auto",
  },

  titles: {
    fontFamily: "FugazOne",
  },

  image1: {
    backgroundColor: 'rgba(0,0,0, 0.15)',
  },

  image2: {
    backgroundColor: 'rgba(0,0,0, 0.30)',
  }
});
