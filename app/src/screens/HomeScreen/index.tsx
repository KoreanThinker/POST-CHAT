import React, { useRef } from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import Drawer from './Drawer';
import Header from './Header';
import { WIDTH } from '../../component/theme';
import PlusFab from '../../component/Buttons/PlusFab';
import Body from './Body';



const HomeScreen = () => {
    const { navigate } = useNavigation()


    const drawerRef = useRef<DrawerLayout>(null)

    const onFab = () => {
        navigate('Post')
        drawerRef.current && drawerRef.current.closeDrawer()
    }

    return (
        <>
            <DrawerLayout
                ref={drawerRef}
                drawerWidth={WIDTH - 98}
                drawerType='slide'
                drawerBackgroundColor="#fff"
                renderNavigationView={Drawer}
            >
                <View style={styles.container} >
                    <Header headerLeftPress={() => drawerRef.current && drawerRef.current.openDrawer()} />
                    <Body />

                </View>

            </DrawerLayout>
            <PlusFab onPress={onFab} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    }
})


export default HomeScreen
