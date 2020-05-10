import * as React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

function Converter() {
    return(
        <View style={globalStyles.body}>
            <View style={globalStyles.container}>
                <Text style={globalStyles.text}>
                    Futur Converter
                </Text>
            </View>
        </View>
    );
};

export default Converter