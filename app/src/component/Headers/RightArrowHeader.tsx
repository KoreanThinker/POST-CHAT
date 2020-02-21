import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BaseButton } from 'react-native-gesture-handler'
import { StackHeaderProps } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/AntDesign'

const RightArrowHeader: React.FC<StackHeaderProps> = ({ scene, navigation }) => {
    const params: any = scene.route.params
    const navigateTo: string = params && params.navigateTo
        ? params.navigateTo
        : scene.route.name

    return (
        <View style={styles.container} >
            {scene.descriptor.options.headerLeft}
            <BaseButton
                onPress={() => navigateTo !== scene.route.name && navigation.replace(navigateTo, undefined)}
                style={styles.buttonContainer}
            >
                <Text style={styles.title} >{navigateTo.toUpperCase()}</Text>
                <Icon name='arrowright' size={18} />
            </BaseButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: '#eee',
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 24
    },
    title: {
        marginRight: 24
    }
})


export default RightArrowHeader
