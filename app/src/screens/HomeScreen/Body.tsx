import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useQuery } from '@apollo/react-hooks';
import GET_POSTINGS, { getPostingData, getPostingVariables } from '../../graphql/posting/GET_POSTINGS';
import PostCard from '../../component/Card/PostCard';
import { useUser } from '../../contexts/UserContext';

const Body = () => {
    const { loading, data, fetchMore, refetch } = useQuery<getPostingData, getPostingVariables>(GET_POSTINGS, {
        variables: {
            limit: 2,
            offset: 0,
        }
    });

    const [refreshing, setRefreshing] = useState(false)

    const onFetchMore = () => {
        fetchMore({
            variables: {
                offset: data ? data.posting.length : 0
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                    posting: [...prev.posting, ...fetchMoreResult.posting]
                });
            }
        })
    }

    const onReFetch = async () => {
        setRefreshing(true)
        await refetch()
        setRefreshing(false)
    }

    return (
        <View style={styles.conatiner} >
            <LinearGradient
                colors={['#eee', '#eeeeee00']}
                style={styles.topLinear}
            />
            {data && <FlatList
                style={styles.flatList}
                showsVerticalScrollIndicator={false}
                data={data.posting}
                renderItem={({ item }) => <PostCard {...item} />}
                ListHeaderComponent={<View style={{ height: 10 }} />}
                onEndReached={onFetchMore}
                refreshControl={<RefreshControl
                    refreshing={refreshing}
                    onRefresh={onReFetch}
                    progressViewOffset={25}
                />}
            />}
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
        flex: 1
    }
})


export default Body
