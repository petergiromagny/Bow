import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import RandomNumber from '../screen/randomNumber'

const screens = {
    Random: {
        screen: RandomNumber
    }
}

const RandomStack = createStackNavigator(screens)

export default RandomStack