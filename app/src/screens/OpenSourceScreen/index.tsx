import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LeftArrowAbsoluteTransParentHeader from '../../component/Headers/LeftArrowAbsoluteTransParentHeader'
import LinearGradient from 'react-native-linear-gradient'
import { color1, color2 } from '../../component/theme'
import ApiFlatlist from './ApiFlatlist'
import { mit, apache } from './Apis'

const OpenSourceScreen = () => {
    return (
        <LinearGradient
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[color1, color2]}
        >
            <LeftArrowAbsoluteTransParentHeader title='open source apis' />
            <ScrollView style={{ flex: 1 }} >
                <View style={{ height: 50 }} />
                <ApiFlatlist title='MIT' data={mit} />
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default OpenSourceScreen
