import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
const COLOR_INCREMENT = 15;
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                setRed((prevRed) => {
                    const newRed = prevRed + change;
                    return newRed > 255 || newRed < 0 ? prevRed : newRed;
                });
                return;
            case 'green':
                setGreen((prevGreen) => {
                    const newGreen = prevGreen + change;
                    return newGreen > 255 || newGreen < 0 ? prevGreen : newGreen;
                });
                return;
            case 'blue':
                setBlue((prevBlue) => {
                    const newBlue = prevBlue + change;
                    return newBlue > 255 || newBlue < 0 ? prevBlue : newBlue;
                });
                return;
            default:
                return;
        }
    };

    return (
        <View>
            <ColorCounter
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
                color="Red"
            />
            <ColorCounter
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
                color="Green"
            />
            <ColorCounter
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
                color="Blue"
            />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
