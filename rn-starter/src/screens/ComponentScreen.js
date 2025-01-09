import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
    const greeting = "i am kushal"
    return <View>
        <Text style={styles.textStyle}>Hi from kushal</Text>
        <Text style={styles.textStyle}>{greeting}</Text>
    </View>;
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});
export default ComponentScreen;

