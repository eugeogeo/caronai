import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Home Screens
import { Home } from '../screens/Home';


export function HomeRoutes(){

    const Stack = createNativeStackNavigator()
    
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home}/>
            
        </Stack.Navigator>
    );
}


