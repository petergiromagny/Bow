import React, {useState} from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { globalStyles, randomeStyles } from '../styles/global';
import ButtonRandom from '../shared/buttonRandom';

function getRandom(min, max) {
    return(Math.floor(Math.random() * (max - min) + min));
}

function RandomNumber() {

    const [prevNumber, setPrevNumber] = useState('');
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [number, setNumber] = useState(Math.floor(Math.random()*100)+1);

    const incrementNumber = () => {
        return(setNumber(number + 1))
    };

    const decrementNumber = () => {
        return(setNumber(number - 1))
    };

    const randomNumber = () => {
        setMin('');
        setMax('');
    };

    const launchNumber = () => {
        if (min == '' && max == '') {
            Alert.alert('Incomplet field', 'Could you field min and max number please');
        } else {
            setNumber(getRandom(min, max));
            if(number == prevNumber){
                setNumber(getRandom(min, max));
            } else {
                setPrevNumber(number);
            }
        }
    };

    if(number < 0) {
        setNumber(0);
    }

    return(

    <TouchableWithoutFeedback onPress={ () => {
        Keyboard.dismiss();
      }}>
        <View style={randomeStyles.body}>
            <View style={globalStyles.container}>
                <Text style={randomeStyles.textNumber}> {number} </Text>
            </View>
            <View style={{...globalStyles.container, ...randomeStyles.containerInput}}>
                <TextInput
                    keyboardType='number-pad' 
                    placeholder='Number minimum'
                    onChangeText={min => setMin(min)}
                    value={min}
                    style={randomeStyles.textInput}
                />
                <TextInput 
                    keyboardType='number-pad'
                    placeholder='Number maximum'
                    onChangeText={max => setMax(max)}
                    value={max}
                    style={randomeStyles.textInput}
                />
            </View>
            <View style={globalStyles.container}>
                <ButtonRandom onPress={incrementNumber}> Increment number </ButtonRandom>
                <ButtonRandom onPress={decrementNumber}> Decrement number </ButtonRandom>
                <ButtonRandom onPress={randomNumber}> Reset Min and Max </ButtonRandom>
                <ButtonRandom onPress={launchNumber}> Start random </ButtonRandom>
            </View>
        </View>
    </TouchableWithoutFeedback>
    );
};

export default RandomNumber