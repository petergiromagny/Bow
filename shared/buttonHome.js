import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import { globalStyles } from '../styles/global';

 const ButtonHome = props => {
    return(
        <TouchableNativeFeedback onPress={props.onPress}>
            <View style={styles.btnContainer}>
                {props.children}
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        width: '45%',
        height: 120,
        marginVertical: 10,
        marginHorizontal : 5,
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 6,
        flex: 1
      }
})

export default ButtonHome;