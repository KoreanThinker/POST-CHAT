import React, { useState } from 'react'
import { View, Text, StyleSheet, ToastAndroid } from 'react-native'
import { ScrollView, TextInput, BaseButton } from 'react-native-gesture-handler'
import SendIcon from '../../component/SVG/SendIcon'
import { useNavigation } from '@react-navigation/native'
import TopGradientOutView from '../../component/View/TopGradientOutView'
import { useMutation } from '@apollo/react-hooks'
import CREATE_POSTING, { createPostingData, createPostingVariables } from '../../graphql/posting/CREATE_POSTING'
import { useUser } from '../../contexts/UserContext'

const PostScreen = () => {
    const { replace } = useNavigation()
    const { id } = useUser()
    const [createPosting] = useMutation<createPostingData, createPostingVariables>(CREATE_POSTING)

    const [sending, setSending] = useState(false)
    const [description, setDescription] = useState('')


    const onSend = async () => {
        if (description == '') return
        setSending(true)
        try {
            await createPosting({
                variables: {
                    description: description,
                    userid: id
                }
            })
            replace('Home', undefined)
        } catch (error) {
            setSending(false)
            ToastAndroid.show('Try again', ToastAndroid.SHORT)
        }
    }

    return (
        <View style={styles.container} >
            <TopGradientOutView />
            <ScrollView style={styles.inputContainer} >
                <TextInput
                    style={styles.input}
                    placeholder='description...'
                    multiline
                    editable={!sending}
                    value={description}
                    onChangeText={t => setDescription(t)}
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
        marginTop: 10,
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
