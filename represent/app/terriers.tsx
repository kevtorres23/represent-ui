import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";

type TerrierColor = "black" | "yellow" | "blue";

function Terriers() {
    const [terrierColor, setTerrierColor] = useState<TerrierColor>("black");

    const terrierColors: Record<TerrierColor, string> = {
        black: "BLACK",
        yellow: "YELLOW",
        blue: "BLUE",
    }

    const terrierImages: Record<TerrierColor, any> = {
        black: require('../assets/images/black-terrier.png'),
        yellow: require('../assets/images/black-terrier.png'),
        blue: require('../assets/images/black-terrier.png'),
    }

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView contentContainerStyle={styles.scrollView} className="bg-white">
                <View className="flex-1 items-center justify-center w-full gap-8 px-7">
                    <View className="w-full flex-col mt-4">
                        <View className="items-start justify-start">
                            <Text style={styles.titles} className="text-5xl">TERRIER</Text>
                            <Text style={styles.titles} className="text-4xl">{terrierColors[terrierColor]}</Text>
                        </View>
                        <View className="flex-col gap-3 max-h-60 items-center justify-center max-w-80 self-end">
                            <View className="">
                                <Image source={terrierImages[terrierColor]} className="max-w-full max-h-40" />
                            </View>
                        </View>
                    </View>

                    <View className="flex flex-row gap-10 w-full">
                        <View className="flex flex-row size-selector">
                            <Text>Sizes</Text>
                        </View>

                        <View className="flex-1 flex-col gap-5 w-full">
                            <View className="color-selector border-b border-b-gray-200 pb-5">
                                <View className="flex-row items-center justify-between">
                                    <Text className="font-bold">COLOR</Text>
                                    <TouchableOpacity className="w-10 h-10 rounded-[50%] bg-slate-900"></TouchableOpacity>
                                    <TouchableOpacity className="w-10 h-10 rounded-[50%] bg-yellow-500"></TouchableOpacity>
                                    <TouchableOpacity className="w-10 h-10 rounded-[50%] bg-red-500"></TouchableOpacity>
                                </View>
                            </View>

                            <View className="size-selector border-b border-b-gray-200 pb-5">
                                <View className="flex-row gap-5 items-center">
                                    <Text className="font-bold">SIZE</Text>
                                </View>
                            </View>

                            <View className="product-description gap-5">
                                <Text className="text-gray-500 font-medium text-base">
                                    The Terrier. A lightweight, hand-made sneaker crafter for the everyday wearer, featuring a chunky sock insert, touchable membrane with a suitable body cage.
                                </Text>

                                <Text className="text-gray-500 font-medium text-base">
                                    The Terrier. A lightweight, hand-made sneaker crafter for the everyday wearer, featuring a chunky sock insert, touchable membrane with a suitable body cage.
                                </Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity className="w-full items-center justify-center bg-black py-3 rounded-2xl">
                        <Text className="text-white text-lg font-bold">
                            $300.00 USD
                        </Text>
                    </TouchableOpacity>
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
        paddingTop: Platform.OS === "android" ? 0 : 50,
        paddingBottom: Platform.OS === "android" ? 47 : 0,
    },

    scrollView: {
        paddingHorizontal: 0,
        paddingVertical: 10,
        height: "auto",
        width: "auto",
    },

    titles: {
        fontFamily: "FugazOne",
    }
})

export default Terriers;