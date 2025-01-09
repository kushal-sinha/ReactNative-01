import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
    const yourname = "Kushal Sinha";
    return <View>
        <Text style={{ fontSize: 45 }}>Getting started with React Native</Text>
        <Text style={{ fontSize: 20 }}>My name is {yourname}</Text>
    </View>;
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});
export default ComponentScreen;

