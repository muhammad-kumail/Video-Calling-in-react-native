import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import ZegoUIKitPrebuiltCall, { 
    ONE_ON_ONE_VIDEO_CALL_CONFIG, 
} from '@zegocloud/zego-uikit-prebuilt-call-rn';

export default function Call({navigation,route}){
    
    const { userID, userName } = route.params;

    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                // create account in zegocloud to get appID & appSign
                appID={<add your appID>} //in number
                appSign=<add your appSign> //in string
                userID={userID}
                userName={userName}
                callID='zego1234'
                
                config={{
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onHangUp: () => {navigation.navigate('Home')},
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
});
