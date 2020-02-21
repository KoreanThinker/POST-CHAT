import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useQuery } from '@apollo/react-hooks';
import GET_PROFILE, { getProfileData } from '../../graphql/profile/GET_PROFILE';
import { useNavigation } from '@react-navigation/native';
import { BaseButton } from 'react-native-gesture-handler';



const HomeScreen = () => {
    const navigation = useNavigation()
    const { loading, data } = useQuery<getProfileData>(GET_PROFILE);

    const headerLeft =
        <BaseButton style={{ width: 50, height: 50, }} >

        </BaseButton>

    useEffect(() => {
        navigation.setParams({ navigateTo: 'Chat' })
        navigation.setOptions({ headerLeft })
    }, [])


    return (
        <View>
            <Text>{!loading && data && data.profile.map(item => item.id + " : " + item.name).join('\n')}</Text>
        </View>
    )
}

export default HomeScreen
