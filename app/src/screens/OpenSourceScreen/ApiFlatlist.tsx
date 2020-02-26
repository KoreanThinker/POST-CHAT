import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface ApiFlatlistProps {
    title: string;
    data: string[];
}

const ApiFlatlist: React.FC<ApiFlatlistProps> = ({ title, data }) => {
    return (
        <View style={styles.container} >
            {/* <Text style={styles.title} >{title}</Text> */}
            {data.map((item) =>
                <Text style={styles.contentText} >{item}</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    title: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 14
    },
    contentText: {
        color: '#fff',
        lineHeight: 20
    }
})


export default ApiFlatlist
