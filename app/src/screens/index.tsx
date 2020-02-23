import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import CommentScreen from './CommentScreen';
import PostScreen from './PostScreen';
import OpenSourceScreen from './OpenSourceScreen';

import LeftArrowHeader from '../component/Headers/LeftArrowHeader';
import RightArrowHeader from '../component/Headers/RightArrowHeader';
import { fromRight } from '../component/Navigation/CardTransitionStyles';

const Stack = createStackNavigator()

const AppContainer = () =>
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Home'
        >
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    cardStyleInterpolator: fromRight
                }}
            />
            <Stack.Screen
                name='Chat'
                component={ChatScreen}
                options={{
                    header: (props) => <RightArrowHeader {...props} />,
                    cardStyleInterpolator: fromRight
                }}
            />
            <Stack.Screen
                name='Comment'
                component={CommentScreen}
                options={{
                    header: (props) => <LeftArrowHeader {...props} />
                }}
            />
            <Stack.Screen
                name='Post'
                component={PostScreen}
                options={{
                    header: (props) => <LeftArrowHeader {...props} />,
                    cardStyleInterpolator: fromRight
                }}
            />
            <Stack.Screen
                name='OpenSource'
                component={OpenSourceScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>

export default AppContainer