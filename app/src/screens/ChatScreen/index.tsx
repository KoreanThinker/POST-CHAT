import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import TopGradientOutView from '../../component/View/TopGradientOutView'
import Footer from './Footer'
import Body from './Body'

const ChatScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setParams({ navigateTo: 'Home' })
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: '#eee' }} >
            <TopGradientOutView style={{ height: 32 }} />
            <Body />
            <Footer />
        </View>
    )
}

export default ChatScreen
