import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useQuery } from '@apollo/react-hooks';
import GET_POSTINGS, { getPostingData, getPostingVariables } from '../../graphql/posting/GET_POSTINGS';
import PostCard from '../../component/Card/PostCard';

const Body = () => {
    const { loading, data } = useQuery<getPostingData, getPostingVariables>(GET_POSTINGS, {
        variables: {
            limit: 10,
            offset: 0,
        }
    });
    if (!loading) console.log(data?.posting[0].like)
    return (
        <View style={styles.conatiner} >
            <LinearGradient
                colors={['#eee', '#eeeeee00']}
                style={styles.topLinear}
            />
            <FlatList
                style={styles.flatList}
                showsVerticalScrollIndicator={false}
                data={data && data.posting}
                renderItem={({ item }) => <PostCard {...item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
    },
    topLinear: {
        position: 'absolute',
        width: '100%',
        height: 10,
        zIndex: 99
    },
    flatList: {
        flex: 1,
        paddingTop: 10
    }
})


export default Body
