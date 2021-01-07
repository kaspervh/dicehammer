import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import {globalStyles} from '../styles/global';

const DiceScreen = () => {
    const [sums, setSums] = useState({one:0, two:0, three:0, four:0, five:0, six:0})
    const [numRolls, setNumRolls] = useState('0')
    const [rerollValue, setRerollValue] = useState('no reroll values')

    const rollDices = () => {
         let values = {one:0, two:0, three:0, four:0, five:0, six:0}
        let rerollValues = rerollValue.split('')
        
        for(let i = 0; i < parseInt(numRolls); i++){
            let val = rollDice()
            if(rerollValues.includes(val.toString())){val = rollDice()}
            // wonder if you can make this block of code smaller?
            if(val === 1){values.one = values.one +1}
            if(val === 2){values.two = values.two +1}
            if(val === 3){values.three = values.three +1}
            if(val === 4){values.four = values.four +1}
            if(val === 5){values.five = values.five +1}
            if(val === 6){values.six = values.six +1}
        }
        setSums(values)
    }
    
    const rollDice = () => 1 + Math.floor(Math.random() *6)

    const resetRolls = () => {
        setSums({one:0, two:0, three:0, four:0, five:0, six:0})
        setNumRolls('0');
        setRerollValue('No reroll value');
    }

    const incriment = () => setNumRolls((parseInt(numRolls) + 1).toString())
    const decriment = () => setNumRolls((parseInt(numRolls) - 1).toString())

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.boldText}>number of dice</Text>
            <View style={globalStyles.subContainer}>
                <TouchableOpacity style={globalStyles.incrimentDecrementButton} onPress={e => decriment()}><Text>-1</Text></TouchableOpacity>
                <TextInput style={globalStyles.numberBox} keyboardType={Platform.OS === 'android' ? "numeric" : "numbers-and-punctuation"} value={numRolls} onChangeText={value => setNumRolls(value)} />
                <TouchableOpacity style={globalStyles.incrimentDecrementButton} onPress={e => incriment()}><Text>+1</Text></TouchableOpacity>
            </View>
            
            <Text style={globalStyles.boldText}>values to reroll</Text>
            <View style={globalStyles.subContainer}>
                <TextInput keyboardType={Platform.OS === 'android' ? "numeric" : "numbers-and-punctuation"} style={globalStyles.textInput} value={rerollValue} onFocus={e => setRerollValue('')} onChangeText={value => setRerollValue(value)} />
            </View>
            <View style={globalStyles.dicePresentation}>
                <View style={globalStyles.diceBox}>
                    <Image style={globalStyles.diceImage} source={require('../styles/dices/one.png')}/>
                </View>
                <View style={globalStyles.diceBox}>
                    <Image style={globalStyles.diceImage} source={require('../styles/dices/two.png')}/>
                </View>
                <View style={globalStyles.diceBox}>
                    <Image style={globalStyles.diceImage} source={require('../styles/dices/three.png')}/>
                </View>
                <View style={globalStyles.diceBox}>
                    <Image style={globalStyles.diceImage} source={require('../styles/dices/four.png')}/>
                </View>
                <View style={globalStyles.diceBox}>
                    <Image style={globalStyles.diceImage} source={require('../styles/dices/five.png')}/>
                    </View>
                <View style={globalStyles.diceBox}>
                    <Image style={globalStyles.diceImage} source={require('../styles/dices/six.png')}/>
                </View>
            </View>
            <View style={globalStyles.dicePresentation}>
                <View style={globalStyles.diceBox}>
                    <Text style={globalStyles.boldText}>{sums.one}</Text>
                </View>
                <View style={globalStyles.diceBox}>
                    <Text style={globalStyles.boldText}>{sums.two}</Text>
                </View>
                <View style={globalStyles.diceBox}>
                    <Text style={globalStyles.boldText}>{sums.three}</Text>
                </View>
                <View style={globalStyles.diceBox}>
                    <Text style={globalStyles.boldText}>{sums.four}</Text>
                </View>
                <View style={globalStyles.diceBox}>
                    <Text style={globalStyles.boldText}>{sums.five}</Text>
                </View>
                <View style={globalStyles.diceBox}>
                    <Text style={globalStyles.boldText}>{sums.six}</Text>
                </View>
            </View>

            <View style={globalStyles.dicePresentation}>
                <TouchableOpacity title='Reset' style={globalStyles.resetButton} onPress={e => resetRolls()}>
                    <Text style={globalStyles.buttonText}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity title='Roll' style={globalStyles.rollButton} onPress={e => rollDices()}>
                    <Text style={globalStyles.buttonText}>Roll</Text>
                </TouchableOpacity> 
                
            </View>
            
        </View>
    )
}

export default DiceScreen;