import React, { useState } from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";

const PasswordScreen = () => {
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput onChangeText={newValue =>
                setPassword(newValue)
            } value={password} style={styles.input} autoCapitalize="none" autoCorrect={false} />
            {password.length < 5 ? <Text>Password must be longer than 5 characters</Text> : null}
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
export default PasswordScreen;

