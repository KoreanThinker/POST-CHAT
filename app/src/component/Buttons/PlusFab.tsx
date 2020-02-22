import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BaseButton } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { color1, color2 } from '../theme'
import Icon from 'react-native-vector-icons/AntDesign'

interface PlusFabProps {
    onPress: () => void
}

const PlusFab: React.FC<PlusFabProps> = ({ onPress }) => {
    return (
        <LinearGradient
            colors={[color1, color2]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <BaseButton
                onPress={onPress}
                style={styles.button}
            >
                <Icon name='plus' color='#fff' size={24} />
            </BaseButton>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 24,
        right: 24,
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
        elevation: 4
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default PlusFab
