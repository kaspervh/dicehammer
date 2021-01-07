import {createStackNavigator, HeaderBackground, HeaderTitle} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SplashScreen from '../screens/SplashScreen';
import DiceScreen from '../screens/DiceScreen';

const screens = {
    splash: {
        screen: SplashScreen,
        navigationOptions: {
            header: false,
        }
    },
    dice: {
        screen: DiceScreen,
        navigationOptions:{
            title: 'Dicehammer Dice Roller',
            headerLeft: null,
            headerStyle:{
                backgroundColor: '#f4511e',
            },
            headerTintColor: 'white',
            headerTitleStyle:{
                alignSelf: 'center'
            }
        }
    },
    
    
    

}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)