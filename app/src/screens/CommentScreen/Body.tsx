import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import GET_POSTING_COMMENT, { getPostingCommentData, getPostingCommentVariables } from '../../graphql/posting/GET_POSTING_COMMENT'
import { CommentScreenProps } from '.'
import { useRoute } from '@react-navigation/native'
import CommentCard from '../../component/Card/CommentCard'


interface BodyProps {
    refetchTrigger: boolean;
    refetchDone: () => void;
}


const Body: React.FC<BodyProps> = ({ refetchTrigger, refetchDone }) => {
    const { params } = useRoute<CommentScreenProps>()
    const { data, fetchMore, refetch } = useQuery<getPostingCommentData, getPostingCommentVariables>(GET_POSTING_COMMENT, {
        variables: {
            offset: 0,
            limit: 15,
            postid: params.id
        },
        fetchPolicy: 'network-only'
    })

    useEffect(() => {
        if (refetchTrigger) onRefetch()
    }, [refetchTrigger])

    const onFetchMore = () => {
        if (!data) return
        fetchMore({
            variables: {
                offset: data.posting_comment.length,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                    posting: [...prev.posting_comment, ...fetchMoreResult.posting_comment]
                });
            }
        })
    }

    const onRefetch = async () => {
        await refetch()
        refetchDone()
    }

    return (
        <FlatList
            data={data ? data.posting_comment : []}
            renderItem={({ item }) => <CommentCard {...item} />}
            onEndReachedThreshold={5}
            onEndReached={onFetchMore}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={{ height: 20 }} />}
        />
    )
}


export default Body
