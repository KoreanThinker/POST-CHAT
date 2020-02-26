import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useSubscription } from '@apollo/react-hooks'
import SUBSCRIPTION_SCRIPTION, { subscriptionChatData, subscriptionChatVariables } from '../../graphql/chat/SUBSCRIPTION_SCRIPTION'
import ChatCard from '../../component/Card/ChatCard'

const Body = () => {

    const { data } = useSubscription<subscriptionChatData, subscriptionChatVariables>(SUBSCRIPTION_SCRIPTION, {
        variables: {
            limit: 100
        }
    })

    return (
        <View style={styles.container} >
            {data ? <FlatList
                style={styles.flatlist}
                data={data.chat}
                renderItem={({ item }) => <ChatCard {...item} />}
                inverted
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<View style={{ height: 20 }} />}
            /> :
                <View style={styles.loadingContainer} >
                    <Text style={{ color: '#777' }} >Loading...</Text>
                </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flatlist: {
        flex: 1
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})




export default Body
