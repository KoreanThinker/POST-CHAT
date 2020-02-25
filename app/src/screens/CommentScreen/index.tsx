import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Body from './Body'
import Footer from './Footer'
import TopGradientOutView from '../../component/View/TopGradientOutView'
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export interface CommentScreenProps {
    params: { id: string };
    key: string;
    name: string;
}

const CommentScreen = () => {

    const [refetchTrigger, setRefetchTrigger] = useState(false)

    return (
        <View style={styles.container} >
            <TopGradientOutView />
            <Body refetchTrigger={refetchTrigger} refetchDone={() => setRefetchTrigger(false)} />
            <Footer refetch={() => setRefetchTrigger(true)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    }
})


export default CommentScreen
