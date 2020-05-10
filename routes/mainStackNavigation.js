import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Home from '../screen/home';
import RandomNumber from '../screen/randomNumber';
import Calculator from '../screen/calculator';
import Card from '../screen/card';
import Converter from '../screen/converter';

const Stack = createStackNavigator()

const colorRed = '#F22613',
      colorOrangeDark = '#F26716',
      colorOrangeWhite = '#F2B705',
      colorYellow = '#F2E205';

function MainStackNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='HomeScreen'
                screenOptions={{
                    headerTitleStyle: {
                        fontFamily: 'Montserrat-Bold'
                    },
                    headerTintColor: '#FAFAFA',
                }}
            >
                <Stack.Screen 
                    name='HomeScreen' 
                    component={Home}
                    options={{ 
                        headerStyle: {
                            backgroundColor: colorRed,
                            elevation: 0,
                            shadowOpacity: 0
                        },
                        title: '' 
                    }}
                />
                <Stack.Screen 
                    name='RandomScreen' 
                    component={RandomNumber} 
                    options={{ 
                        headerStyle: {
                            backgroundColor: colorRed,
                            elevation: 0,
                            shadowOpacity: 0
                        },
                        title: 'Random Number' 
                    }}
                />
                <Stack.Screen 
                    name='CalculatorScreen' 
                    component={Calculator}
                    options={{ 
                        headerStyle: {
                            backgroundColor: colorOrangeWhite,
                            elevation: 0,
                            shadowOpacity: 0
                        },
                        title: 'Calculator' 
                    }}
                />
                <Stack.Screen 
                    name='CardScreen' 
                    component={Card}
                    options={{
                        headerStyle: {
                            backgroundColor: colorYellow,
                            elevation: 0,
                            shadowOpacity: 0
                        }, 
                        title: 'Credit Card' 
                    }}
                />
                <Stack.Screen 
                    name='ConverterScreen' 
                    component={Converter}
                    options={{ 
                        headerStyle: {
                            backgroundColor: colorOrangeDark,
                            elevation: 0,
                            shadowOpacity: 0
                        },
                        title: 'Convertor' 
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigation