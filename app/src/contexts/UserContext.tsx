import React, { createContext, Dispatch, useReducer, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import { uuid } from 'short-uuid'
import newUserNameMaker from '../component/Generator/newUserNameMaker';

export type UserState = {
    id: string;
    name: string;
}

type Action =
    | { type: 'INIT'; state: UserState };


const UserStateContext = createContext<UserState | undefined>(undefined);
const UserDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);

const userReducer = (state: UserState, action: Action): UserState => {
    switch (action.type) {
        case 'INIT':
            return action.state;
        default:
            return state
    }
}

const loadingState: UserState = {
    id: "loading",
    name: "loading"
}

const initState: UserState = {
    id: uuid(),
    name: newUserNameMaker()
}


export const UserContextProvider: React.FC = ({ children }) => {

    const [user, dispatch] = useReducer(userReducer, loadingState);

    const useridInit = async () => {
        const value = await AsyncStorage.getItem('@User')
        if (!value) {
            dispatch({
                type: 'INIT',
                state: initState
            })
        } else {
            dispatch({ type: "INIT", state: JSON.parse(value) })
        }
    }

    useEffect(() => {
        useridInit()
    }, [])

    useEffect(() => {
        if (user == loadingState) return
        AsyncStorage.setItem('@User', JSON.stringify(user))
    }, [user])

    return (
        <UserStateContext.Provider value={user} >
            <UserDispatchContext.Provider value={dispatch} >
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    )
}

export const useUser = () => {
    const state = useContext(UserStateContext);
    const dispatch = useContext(UserDispatchContext);
    if (!state || !dispatch) throw console.error('useUser error')

    const onInit = (state: UserState) => dispatch({ type: 'INIT', state })

    return {
        ...state,
        onInit
    };
}