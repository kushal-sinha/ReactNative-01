import React, { useReducer, useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const reducer = (state, action) => {
    if (action.type === 'INCREMENT') {
        return state + 1;
    }
    else if (action.type === 'DECREMENT') {
        return state - 1;
    }
}

const CounterScreen = () => {
    // const [counter, setcounter] = useState(0);
    const [counter, dispath] = useReducer(reducer, 0);
    return (
        <View>
            <Button title="increase" onPress={() => { dispath({ type: 'INCREMENT' }) }} />
            <Button title="decrease" onPress={() => { dispath({ type: 'DECREMENT' }) }} />
            <Text>{counter}</Text>
        </View>

    )
};

const styles = StyleSheet.create({

});

export default CounterScreen;