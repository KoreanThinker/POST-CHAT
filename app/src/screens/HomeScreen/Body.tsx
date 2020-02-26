import React, { useState } from 'react'
import { View, FlatList, StyleSheet, RefreshControl, Text } from 'react-native'
import { useQuery } from '@apollo/react-hooks';
import GET_POSTINGS, { getPostingData, getPostingVariables } from '../../graphql/posting/GET_POSTINGS';
import PostCard from '../../component/Card/PostCard';
import TopGradientOutView from '../../component/View/TopGradientOutView';

const Body = () => {
    const { loading, data, fetchMore, refetch } = useQuery<getPostingData, getPostingVariables>(GET_POSTINGS, {
        variables: {
            limit: 10,
            offset: 0,
        },
        fetchPolicy: 'network-only'
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
        try {
            await refetch()
            setRefreshing(false)
        } catch (error) {
            setRefreshing(false)
        }
    }

    return (
        <View style={styles.conatiner} >
            <TopGradientOutView />
            {data ? <FlatList
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

            /> :
                <View style={styles.loadingContainer} >
                    <Text style={{ fontSize: 14, color: '#777' }} >Loading...</Text>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
    },
    flatList: {
        flex: 1
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default Body
