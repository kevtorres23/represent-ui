import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, ScrollView, SafeAreaView, RefreshControl } from 'react-native';
import React, { useState, useEffect } from "react";

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000)
  }, []);

  return (
    <SafeAreaView style={styles.safe} className='bg-slate-100 items-center justify-center'>
      <ScrollView contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View className="flex-1 items-center justify-center w-screen bg-slate-100 px-8 gap-8">
          <Text className='text-xl text-black' style={styles.texts}>REPRESENT</Text>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 0 : 20,
    paddingBottom: 20,
  },

  scrollView: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: 20,
    width: "auto",
  }, 

  texts: {
    fontFamily: "FugazOne",
  }
});
