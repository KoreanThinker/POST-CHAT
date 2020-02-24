import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { posting } from '../../graphql/posting/GET_POSTINGS'
import { WIDTH, color1, color2 } from '../theme'
import LinearGradient from 'react-native-linear-gradient'
import { BaseButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useMutation } from '@apollo/react-hooks'
import LIKE_POSTING, { likePostingVariables, likePostingData } from '../../graphql/posting/LIKE_POSTING'
import Animated, { Value, timing, Easing, } from 'react-native-reanimated'
import { useUser } from '../../contexts/UserContext'

const PostCard: React.FC<posting> = ({ description, like, comment, id }) => {

    const { navigate } = useNavigation()
    const User = useUser()
    const [likePosting] = useMutation<likePostingData, likePostingVariables>(LIKE_POSTING)

    const [isLiked, setIsLiked] = useState(like.map(({ userid }) => userid).includes(User.id))
    const [likeNum, setLikeNum] = useState(like.length)

    const [likeAnim] = useState(new Value(isLiked ? 0 : 1))
    const likeAnimConfig: Animated.TimingConfig = {
        duration: 250,
        toValue: new Value(0),
        easing: Easing.out(Easing.ease)
    }
    const runLikeAnim = timing(likeAnim, likeAnimConfig)

    const [loadAnim] = useState(new Value(0))



    useEffect(() => {

    }, [])

    const onLike = () => {
        likePosting({
            variables: {
                postid: id,
                userid: User.id
            }
        })
        setLikeNum(likeNum + 1)
        runLikeAnim.start(() => setIsLiked(true))
    }

    const onComment = () => {
        navigate('Comment', { id })
    }

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[color1, color2]}
            style={styles.container}
        >
            <View style={styles.descriptionContainer} >
                <Text style={styles.descriptionText} >{description}</Text>
            </View>
            <View style={styles.infoContainer} >
                <Text style={styles.infoText} >like {likeNum} comment {comment.length}</Text>
            </View>
            <View style={styles.buttonContainer} >
                <Animated.View
                    style={{ flex: likeAnim }}
                >
                    {!isLiked && <BaseButton
                        onPress={onLike}
                        style={styles.button}
                    >
                        <Animated.Text style={{ ...styles.buttonText, opacity: likeAnim }} >like</Animated.Text>
                    </BaseButton>}
                </Animated.View>
                <BaseButton
                    onPress={onComment}
                    style={styles.button}
                >
                    <Text style={styles.buttonText} >comment</Text>
                </BaseButton>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH - 20,
        alignSelf: 'center',
        marginBottom: 16,
        borderRadius: 4,
        elevation: 4,
        overflow: 'hidden'
    },
    descriptionContainer: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 6
    },
    descriptionText: {
        fontSize: 16,
        color: '#fff'
    },
    infoContainer: {
        width: '100%',
        height: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    infoText: {
        fontSize: 12,
        color: '#fff'
    },
    buttonContainer: {
        width: '100%',
        height: 40,
        flexDirection: 'row'
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        position: 'absolute'
    }
})


export default PostCard
