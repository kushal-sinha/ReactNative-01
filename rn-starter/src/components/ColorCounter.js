import React, { useState } from "react";
import { StyleSheet, View, Button, Text, FlatList } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={onIncrease} title={` increase ${color}`} />
            <Button onPress={onDecrease} title={`decrease ${color}`} />
        </View>

    )
};

const styles = StyleSheet.create({

});

export default ColorCounter;