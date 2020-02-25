import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, ToastAndroid } from 'react-native'
import SendIcon from '../../component/SVG/SendIcon'
import { BaseButton } from 'react-native-gesture-handler'
import { useRoute } from '@react-navigation/native'
import { CommentScreenProps } from '.'
import { useMutation } from '@apollo/react-hooks'
import CREATE_POSTING_COMMENT, { createPostingCommentData, createPostingCommentVariables } from '../../graphql/posting/CREATE_POSTING_COMMENT'
import { useUser } from '../../contexts/UserContext'


interface FooterProps {
    refetch: () => void;
}


const Footer: React.FC<FooterProps> = ({ refetch }) => {
    const { params } = useRoute<CommentScreenProps>()
    const [sendComment] = useMutation<createPostingCommentData, createPostingCommentVariables>(CREATE_POSTING_COMMENT)
    const { name } = useUser()

    const [description, setDescription] = useState('')
    const [sending, setSending] = useState(false)

    const onSubmit = async () => {
        setSending(true)
        try {
            await sendComment({
                variables: {
                    description,
                    postid: params.id,
                    userid: name,
                }
            })
            setDescription('')
            refetch()
            setSending(false)
        } catch (error) {
            ToastAndroid.show('Fail', ToastAndroid.SHORT)
            setSending(false)
        }
    }


    return (
        <View style={styles.container} >
            <TextInput
                placeholder='comment...'
                value={description}
                onChangeText={t => setDescription(t)}
                editable={!sending}
                style={styles.input}
            />
            <BaseButton
                onPress={onSubmit}
                style={styles.iconContainer}
            >
                <SendIcon />
            </BaseButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 52,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    iconContainer: {
        width: 52,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        flex: 1,
        textAlignVertical: 'center',
        paddingLeft: 20
    }
})


export default Footer
