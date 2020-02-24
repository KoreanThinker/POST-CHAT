import React, { useState } from 'react'
import { View, Text, StyleSheet, Linking, Clipboard, ToastAndroid } from 'react-native'
import { useUser } from '../../contexts/UserContext'
import LinearGradient from 'react-native-linear-gradient'
import { color1, color2, color3, color4 } from '../../component/theme'
import DrawerCard from '../../component/Card/DrawerCard'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

const Drawer = () => {
    const { navigate } = useNavigation()
    const { name } = useUser()

    return (
        <View style={styles.container} >
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[color1, color2]}
                style={styles.headerContainer}
            >
                <Text style={styles.headerTitle} >Welcome</Text>
                <Text style={styles.headerSubTitle} >{name}</Text>
            </LinearGradient>
            <DrawerCard
                text='Open source apis'
                icon={<Icon name='cloud' size={16} color={color1} />}
                onPress={() => navigate('OpenSource')}
            />
            <DrawerCard
                text='Github'
                icon={<Icon name='github-circle' size={18} color={color2} />}
                onPress={() => Linking.openURL('https://github.com/KoreanThinker/POST-CHAT').catch(() => {
                    Clipboard.setString('https://github.com/KoreanThinker/POST-CHAT')
                    ToastAndroid.show('Copyed', ToastAndroid.SHORT)
                })}
            />
            <DrawerCard
                text='Email'
                icon={<Icon name='email' size={16} color={color4} />}
                onPress={() => Linking.openURL('coderhyun476@gmail.com').catch(() => {
                    Clipboard.setString('coderhyun476@gmail.com')
                    ToastAndroid.show('Copyed', ToastAndroid.SHORT)
                })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerContainer: {
        width: '100%',
        height: 110,
        marginBottom: 16
    },
    headerTitle: {
        position: 'absolute',
        top: 20,
        left: 20,
        fontSize: 28,
        color: '#fff',
    },
    headerSubTitle: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        color: '#fff',
        fontSize: 18
    }
})


export default Drawer
