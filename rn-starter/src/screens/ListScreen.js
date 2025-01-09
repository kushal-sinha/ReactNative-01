import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native"

const ListScreen = () => {
    const friends = [{ name: 'friend1' }, { name: 'friend88' }, { name: 'friend65' }, { name: 'friend32' }, { name: 'friend5' }, { name: 'friend7' }, { name: 'friend59' }, { name: 'friend4' }]
    return <FlatList horizontal showsHorizontalScrollIndicator={false} keyExtractor={(friend) => friend.name} data={friends} renderItem={({ item }) => { return <Text style={styles.textStyle}>{item.name}</Text> }} />
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen;