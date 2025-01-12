import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
    return (
        <View style={styles.container}>
            <Image source={imageSource} style={styles.image} />

            <Text style={styles.text}>{title}  {score} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center", // Align items vertically in the center
        margin: 10, // Add margin for spacing
    },
    image: {
        width: 50, // Adjust width for the image
        height: 50, // Adjust height for the image
        marginRight: 10, // Space between the image and the text
    },
    text: {
        fontSize: 16, // Adjust font size
    },
});

export default ImageDetail;
