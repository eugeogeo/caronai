import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Car, PlusCircle, User } from 'phosphor-react-native';
import React from 'react';

// Screens
import { OfferRide } from '../screens/OfferRide';
import { Profile } from '../screens/Profile';
//HomeStackRoutes
import { HomeRoutes } from './app.stack.routes';


export function AppTabRoutes() {

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            screenOptions={{ 
                headerShown: false,
                tabBarLabelStyle: { fontSize: 16, color: '#FFFFFF'}, 
                tabBarStyle: {backgroundColor: "#004AAD", padding: 8},
                tabBarActiveTintColor: "#FFFFFF"
            }}>
            <Tab.Screen name="Caronas" component={HomeRoutes} options={{tabBarIcon: ({color}) => (<Car color={color} size={32}/>) }} />
            <Tab.Screen name="Oferecer" component={OfferRide} options={{tabBarIcon: ({color}) => (<PlusCircle color={color} size={32}/>) }} />
            <Tab.Screen name="Perfil" component={Profile} options={{tabBarIcon: ({color}) => (<User color={color} size={32}/>) }} />
            
        </Tab.Navigator>
    );
}