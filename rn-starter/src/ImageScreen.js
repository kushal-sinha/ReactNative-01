import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetail from "./components/ImageDetail";
const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" score="7" imageSource={require('../assets/forest.jpg')} />
            <ImageDetail title="Beach" score="8" imageSource={require('../assets/beach.jpg')} />
            <ImageDetail title="Mountain" score="9" imageSource={require('../assets/forest.jpg')} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageScreen;
