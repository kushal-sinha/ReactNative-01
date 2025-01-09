import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native"

const ListScreen = () => {
    const friends = [{ name: 'friend1', age: 20 }, { name: 'friend88', age: 22 }, { name: 'friend65', age: 24 }, { name: 'friend32', age: 25 }, { name: 'friend5', age: 27 }, { name: 'friend7', age: 26 }, { name: 'friend59', age: 21 }, { name: 'friend4', age: 19 }]
    return <FlatList showsHorizontalScrollIndicator={false} keyExtractor={(friend) => friend.name} data={friends} renderItem={({ item, index }) => { return <Text style={styles.textStyle}>{item.name} - {item.age} - {index}</Text> }} />
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,

    }
})

export default ListScreen;