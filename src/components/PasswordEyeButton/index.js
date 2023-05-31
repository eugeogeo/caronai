import React from 'react';
import PasswordEyeClosedImg from '../../assets/images/General/PasswordEyeClosed.png';
import PasswordEyeOpenImg from '../../assets/images/General/PasswordEyeOpen.png';

import {
    Container,
    PasswordEyeImg
} from './styles';

export function PasswordEyeButton({isActive,requestHidePassword}){

    return(
        <Container onPress={requestHidePassword}>
            {isActive 
            ? <PasswordEyeImg source={PasswordEyeOpenImg}/> 
            : <PasswordEyeImg source={PasswordEyeClosedImg}/> 
            }    
        </Container>
    );
}