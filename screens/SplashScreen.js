import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {globalStyles} from '../styles/global';

const SplashScreen = ({navigation}) => {
    
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('dice')
        }, 3000)
    })
    
    return(
        <View style={globalStyles.container}>
            <Image style={{height: '90%', width: '90%'}} source={require('../styles/dices/background_splash.png')}/>
        </View>
    )
}

export default SplashScreen;