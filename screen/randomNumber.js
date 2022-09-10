import React, { useState } from "react";
import { Alert, Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { globalStyles, randomStyles } from "../styles/global";
import ButtonRandom from "../shared/buttonRandom";

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function RandomNumber() {

  const [prevNumber, setPrevNumber] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const incrementNumber = () => (setNumber(number + 1));

  const decrementNumber = () => (setNumber(number - 1));

  const randomNumber = () => {
    setMin("");
    setMax("");
  };

  const launchNumber = () => {
    if (min === "" && max === "") {
      Alert.alert("Incomplete field", "Could you field min and max number please");
    } else {
      setNumber(getRandom(min, max));
      if (number === prevNumber) {
        setNumber(getRandom(min, max));
      } else {
        setPrevNumber(number);
      }
    }
  };

  if (number < 0) {
    setNumber(0);
  }

  return (

    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={randomStyles.body}>
        <View style={globalStyles.container}>
          <Text style={randomStyles.textNumber}> {number} </Text>
        </View>
        <View style={{ ...globalStyles.container, ...randomStyles.containerInput }}>
          <TextInput
            keyboardType="number-pad"
            placeholder="Number minimum"
            onChangeText={inputMin => setMin(inputMin)}
            value={min}
            style={randomStyles.textInput}
          />
          <TextInput
            keyboardType="number-pad"
            placeholder="Number maximum"
            onChangeText={inputMax => setMax(inputMax)}
            value={max}
            style={randomStyles.textInput}
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

export default RandomNumber;
