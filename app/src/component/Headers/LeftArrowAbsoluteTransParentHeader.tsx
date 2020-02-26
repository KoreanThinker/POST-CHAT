import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { StackHeaderProps } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/AntDesign'
import { BaseButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

interface LeftArrowAbsoluteTransParentHeaderProps {
    title: string;
}

const LeftArrowAbsoluteTransParentHeader: React.FC<LeftArrowAbsoluteTransParentHeaderProps> = ({ title }) => {

    const { replace } = useNavigation()

    return (
        <BaseButton
            onPress={() => replace('Home', undefined)}
            style={styles.container}
        >
            <Icon name='arrowleft' size={18} color='#fff' />
            <Text style={styles.title} >{title.toUpperCase()}</Text>
        </BaseButton>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24
    },
    title: {
        marginLeft: 24,
        color: '#fff'
    }
})

export default LeftArrowAbsoluteTransParentHeader
