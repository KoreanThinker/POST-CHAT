import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BaseButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconSimple from 'react-native-vector-icons/SimpleLineIcons'
interface HeaderProps {
    headerLeftPress: () => void
}

const Header: React.FC<HeaderProps> = ({ headerLeftPress }) => {
    const { navigate } = useNavigation()
    return (
        <View style={styles.container} >
            <BaseButton
                onPress={headerLeftPress}
                style={{ width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}
            >
                <IconSimple name='menu' size={18} color='#000' />
            </BaseButton>

            <BaseButton
                onPress={() => navigate('Chat')}
                style={styles.buttonContainer}
            >
                <Text style={styles.title} >CHAT</Text>
                <IconAnt name='arrowright' size={18} />
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

export default Header
