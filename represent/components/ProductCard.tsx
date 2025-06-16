import { View, Text, Image, StyleSheet } from "react-native";

type productProps = {
    imageSrc: any,
    name: string,
    price: number,
}

function ProductCard(props: productProps) {
    return (
        <View className="flex-col gap-2 max-h-60 items-center justify-center max-w-44">
            <View className="bg-slate-200 rounded-xl py-4">
                <Image source={props.imageSrc} className="max-w-full max-h-44" />
            </View>
            <Text style={styles.productName} className="text-center text-base">{props.name}</Text>
            <Text className="text-center text-base text-slate-500 font-semibold mt-[-5px]">${props.price} USD</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    productName: {
        fontFamily: "FugazOne",
    }
})

export default ProductCard;