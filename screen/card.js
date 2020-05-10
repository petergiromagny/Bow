import * as React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

function Card() {
    return(
        <View style={globalStyles.body}>
            <View style={globalStyles.container}>
                <Text style={globalStyles.text}>
                    Futur Card Detector
                </Text>
            </View>
        </View>
    );
};

export default Card