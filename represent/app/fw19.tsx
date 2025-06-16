import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, RefreshControl, Platform } from "react-native";
import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";

type productProps = {
    imageSrc: any,
    name: string,
    price: number,
}

function FW19(props: productProps) {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000)
    }, []);

    return (
        <SafeAreaView style={styles.safe} className='bg-slate-50 items-center justify-center'>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View className="flex-1 items-center justify-center w-screen gap-16 pt-6">
                    <View className="flex-row gap-5">
                        <ProductCard imageSrc={require('../assets/images/hoodie1.png')} name="THE ETERNAL THRILL HOODIE" price={50} />
                        <ProductCard imageSrc={require('../assets/images/tshirt1.png')} name="HONDA T-SHIRT BLACK STYLE" price={60} />
                    </View>
                    <View className="flex-row gap-5">
                        <ProductCard imageSrc={require('../assets/images/hoodie2.png')} name="GREEN BASIC STYLE HOODIE" price={80} />
                        <ProductCard imageSrc={require('../assets/images/tshirt2.png')} name="REPRESENT ORIGINALS T-SHIRT" price={45} />
                    </View>
                    <View className="flex-row gap-5">
                        <ProductCard imageSrc={require('../assets/images/hoodie1.png')} name="THE ETERNAL THRILL HOODIE" price={50} />
                        <ProductCard imageSrc={require('../assets/images/tshirt1.png')} name="HONDA T-SHIRT BLACK STYLE" price={60} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    productName: {
        fontFamily: "FugazOne",
    },

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

    titles: {
        fontFamily: "FugazOne",
    },

    image1: {
        backgroundColor: 'rgba(0,0,0, 0.15)',
    },

    image2: {
        backgroundColor: 'rgba(0,0,0, 0.30)',
    }
})

export default FW19;