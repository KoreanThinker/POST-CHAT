import React from 'react'
import { View, Text, StyleSheet, ViewProps } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'



const TopGradientOutView: React.FC<ViewProps> = ({ style }) => {
    return (
        <LinearGradient
            colors={['#eee', '#eeeeee00']}
            style={[styles.container, style && style.valueOf()]}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: 10,
        zIndex: 99
    }
})


export default TopGradientOutView
