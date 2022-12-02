import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity as Button
} from 'react-native';


export default function Home({ navigation }) {
    const onJoinPress = (userID, userName) => {
        navigation.navigate('OnGoing', {
            userID: userID,
            userName: userName
        })
    }
    return (
        <View style={styles.container}>
            <Button
                // disabled={isPatient ? false : true}
                style={[styles.button, { backgroundColor: "#014e78", paddingVertical: 10 }]}
                onPress={() => { onJoinPress('Patient', 'Patient') }}>
                <Text style={{ color: 'white' }}>Join as Patient</Text>
            </Button>
            <Button
                // disabled={isPatient ? true : false}
                style={[styles.button, { backgroundColor: "#014e78", paddingVertical: 10 }]}
                onPress={() => { onJoinPress('Doctor', 'Doctor') }}>
                <Text style={{ color: 'white' }}>Join as doctor</Text>
            </Button>
        </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 40,
        margin: 1
    },
})