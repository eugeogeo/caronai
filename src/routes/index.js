import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Loader } from '../components/Loader';

//routes
import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';

import { useAuth } from '../hooks/auth';

export function Routes(){

    const { userAuthState, userStorageLoading } = useAuth();

    if(userStorageLoading){
        return (
            <Loader/>
        )
    }

    return(
        <NavigationContainer>
            {userAuthState ? <AppTabRoutes/> : <AuthRoutes/>}
        </NavigationContainer>
    );
}