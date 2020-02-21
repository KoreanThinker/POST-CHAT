import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { StackHeaderProps } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/AntDesign'
import { BaseButton } from 'react-native-gesture-handler'

const LeftArrowHeader: React.FC<StackHeaderProps> = ({ scene, navigation }) => {
    return (
        <BaseButton
            onPress={() => navigation.canGoBack() && navigation.goBack()}
            style={styles.container}
        >
            <Icon name='arrowleft' size={18} />
            <Text style={styles.title} >{scene.route.name.toUpperCase()}</Text>
        </BaseButton>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24
    },
    title: {
        marginLeft: 24
    }
})

export default LeftArrowHeader
