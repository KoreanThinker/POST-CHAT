import React from 'react'
import { View, Text } from 'react-native'
import { useQuery } from '@apollo/react-hooks';
import GET_PROFILE, { getProfileData } from '../../graphql/profile/GET_PROFILE';



const HomeScreen = () => {
    const { loading, data } = useQuery<getProfileData>(GET_PROFILE);
    return (
        <View>
            <Text>{!loading && data && data.profile.map(item => item.id + " : " + item.name).join('\n')}</Text>
        </View>
    )
}

export default HomeScreen
