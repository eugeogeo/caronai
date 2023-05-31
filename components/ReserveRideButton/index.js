import React from 'react';
import { ButtonTitle, Container, Loader } from './styles';

export function ReserveRideButton({...props}){
    return(
    <Container activeOpacity={.7} style={ props.isLoading && { opacity:0.6 }} {...props}>
        <ButtonTitle>
            {props.title}
        </ButtonTitle>
        {props.isLoading &&<Loader/>}
    </Container>
    );
}