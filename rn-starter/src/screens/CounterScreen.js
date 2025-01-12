import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const CounterScreen = () => {
    const [counter, setcounter] = useState(0);
    return (
        <View>
            <Button title="increase" onPress={() => { setcounter(counter + 1) }} />
            <Button title="decrease" onPress={() => { setcounter(counter - 1) }} />
            <Text>{counter}</Text>
        </View>

    )
};

const styles = StyleSheet.create({

});

export default CounterScreen;