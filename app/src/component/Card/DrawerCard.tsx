import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BaseButton } from 'react-native-gesture-handler'

interface DrawerCardProps {
    onPress: () => void;
    text: string;
    icon: React.ReactNode;
}

const DrawerCard: React.FC<DrawerCardProps> = ({ onPress, text, icon }) => {
    return (
        <BaseButton
            onPress={onPress}
            style={styles.container}
        >
            <View style={styles.iconContainer} >
                {icon}
            </View>
            <Text>{text}</Text>
        </BaseButton>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconContainer: {
        width: 28,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    }
})


export default DrawerCard
