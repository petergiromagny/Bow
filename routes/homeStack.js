//import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screen/home'

const screens = {
    Home: {
        screen: Home
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)