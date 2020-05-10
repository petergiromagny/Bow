import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

 const ButtonRandom = props => {
    return(
        <TouchableNativeFeedback onPress={props.onPress}>
            <View style={styles.btnContainer}>
                <Text style={styles.btnText}>
                    {props.children}
                </Text> 
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        marginVertical: 10,
        backgroundColor: '#F22613',
        borderRadius: 10,
        paddingVertical: 10,
      },
      btnText: {
          textAlign: 'center',
          marginLeft: 20,
          color: '#FAFAFA',
          fontFamily: 'Montserrat-Bold',
          fontSize: 20
      },
})

export default ButtonRandom;