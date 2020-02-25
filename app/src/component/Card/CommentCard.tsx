import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { postingComment } from '../../graphql/posting/GET_POSTING_COMMENT'
import { WIDTH, color1, color2, color3, color4 } from '../theme'
import LinearGradient from 'react-native-linear-gradient'
import { useUser } from '../../contexts/UserContext'

const CommentCard: React.FC<postingComment> = ({ description, userid }) => {

    const { name } = useUser()
    const isMine = userid == name

    return (
        <View style={{ alignItems: 'flex-start' }} >
            <LinearGradient
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={isMine ? [color1, color2] : [color3, color4]}
            >
                <Text style={styles.text} >
                    {!isMine && <Text style={{ fontWeight: 'bold' }} >{userid} </Text>}
                    <Text>{description}</Text>
                </Text>

            </LinearGradient>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: WIDTH - 20,
        marginLeft: 10,
        elevation: 4,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20
    },
    text: {
        color: '#fff',
        lineHeight: 20
    }
})


export default CommentCard
