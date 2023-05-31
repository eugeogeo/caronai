import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// Screens
import { Login } from '../screens/Login';
import { Onboarding } from '../screens/Onboarding';
import { Register } from '../screens/Register';


export function AuthRoutes() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={Onboarding} options={{gestureEnabled: false}}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    );
}