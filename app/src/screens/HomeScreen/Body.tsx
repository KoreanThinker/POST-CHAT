import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Body = () => {
    return (
        <View style={styles.conatiner} >
            <LinearGradient
                colors={['#eee', '#eeeeee00']}
                style={styles.topLinear}
            />
            {/* <FlatList
                data={}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
    },
    topLinear: {
        position: 'absolute',
        width: '100%',
        height: 10,
        zIndex: 99
    }
})


export default Body
