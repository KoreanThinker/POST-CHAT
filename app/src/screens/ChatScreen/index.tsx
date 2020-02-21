import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ChatScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setParams({ navigateTo: 'Home' })
    }, [])

    return (
        <View>

        </View>
    )
}

export default ChatScreen
