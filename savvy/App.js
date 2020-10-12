/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    View,
    StatusBar
} from 'react-native';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Test from './app/Test';

//nav
const Stack = createStackNavigator();

function StackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>
            <Stack.Screen name="Test" component={Test}/>
        </Stack.Navigator>
    );
}
const App: () => React$Node = () => {
    return (
        <View>
            <StatusBar
                backgroundColor={'transparent'}
                translucent={true}
                barStyle={'dark-content'}/>

                <NavigationContainer>
                    <StackScreen />
                </NavigationContainer>
        </View>
    );
};

export default App;

