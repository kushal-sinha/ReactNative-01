import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
    // state  = {red :number , green:number , blue:number}
    // action  ==== {colorToChange: 'red || green || 'blue}
    switch (action.colorToChange) {
        case 'red':
            if (state.red + action.amount > 255 || state.red + action.amount < 0) {

                return state;
            }
            return { ...state, red: state.red + action.amount }
        case 'green':
            if (state.green + action.amount > 255 || state.green + action.amount < 0) {
                return state;
            }
            return { ...state, green: state.green + action.amount }
        case 'blue':
            if (state.blue + action.amount > 255 || state.blue + action.amount < 0) {
                return state;
            }
            return { ...state, blue: state.blue + action.amount }
        default:
            return state;
    }

}

const SquareScreen = () => {

    const [state, dispath] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    // console.log(state);
    const { red, green, blue } = state;


    return (
        <View>
            <ColorCounter
                onIncrease={() => dispath({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispath({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                color="Red"
            />
            <ColorCounter
                onIncrease={() => dispath({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispath({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
                color="Green"
            />
            <ColorCounter
                onIncrease={() => dispath({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispath({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
                color="Blue"
            />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${state.red},${green},${blue})` }} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
