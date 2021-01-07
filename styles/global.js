import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    subContainer:{
        marginBottom: 50,
        flexDirection: 'row',
    },

    numberBox: {
        height: 60,
        width: 80,
        borderWidth: 1,
        borderTopColor: '#333',
        borderBottomColor: '#333'
    },
    
    boldText: {
        fontWeight: 'bold'
    },

    incrimentDecrementButton:{
        height: 60,
        width: 30,
        borderWidth: 1,
        borderColor: '#333',
        justifyContent: 'center',
        alignItems: 'center'
    },

    dicePresentation:{
        flexDirection: 'row',
        height: 60,
        width: '100%',
        justifyContent: 'space-evenly',
        
    },

    diceBox: {
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },

    diceImage: {
        height:60,
        width: 60
    },

    resetButton: {
        marginTop: 30,
        height: 50,
        width: 100,
        backgroundColor: 'red',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    rollButton: {
        marginTop: 30,
        height: 50,
        width: 100,
        backgroundColor: 'black',
        color: 'white', 
        alignItems: 'center',
        justifyContent: 'center'
    },

    

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },

    textInput:{
        width: 150,
        borderWidth: 1,
        borderColor: '#333'
    }

})