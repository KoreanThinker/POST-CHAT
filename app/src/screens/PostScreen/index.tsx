import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView, TextInput, BaseButton } from 'react-native-gesture-handler'
import SendIcon from '../../component/SVG/SendIcon'

const PostScreen = () => {

    const onSend = () => {

    }

    return (
        <View style={styles.container} >
            <ScrollView style={styles.inputContainer} >
                <TextInput
                    style={styles.input}
                    placeholder='description...'
                    multiline

                />
            </ScrollView>
            <BaseButton
                onPress={onSend}
                style={styles.sendButton} >
                <Text style={{ fontSize: 14, color: '#777', marginRight: 20 }} >SEND</Text>
                <SendIcon />
            </BaseButton>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 20,
        flex: 1
    },
    input: {
        marginTop: 8,
    },
    sendButton: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    }
})


export default PostScreen
