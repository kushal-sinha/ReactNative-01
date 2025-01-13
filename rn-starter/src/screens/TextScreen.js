import React, { useState } from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";

const TextScreen = () => {
    const [name, SetName] = useState('');
    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput onChangeText={newValue =>
                SetName(newValue)
            } value={name} style={styles.input} autoCapitalize="none" autoCorrect={false} />

            <Text>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});
export default TextScreen;

