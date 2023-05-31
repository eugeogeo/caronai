import moment from 'moment';
import { DotsThreeOutlineVertical, MapPin, MapPinLine, UserCircle } from 'phosphor-react-native';
import React from 'react';
import { ReserveRideButton } from '../ReserveRideButton';

import {
    Container,
    DriverWrapper,
    LocationNameWrapper,
    LocationTitle,
    LocationWrapper,
    RideInfosWrapper
} from './styles';

export function RideCard({ item }) {

    return (
        <Container>
            <LocationWrapper>
                <LocationNameWrapper>
                    <MapPin size={32} color="#064652" />
                    <LocationTitle>{item.origin}</LocationTitle>
                </LocationNameWrapper>

                <LocationNameWrapper>
                    <DotsThreeOutlineVertical color="#064652" size={32} />
                </LocationNameWrapper>

                <LocationNameWrapper>
                    <MapPinLine size={32} color="#064652" />
                    <LocationTitle>{item.destination}</LocationTitle>
                </LocationNameWrapper>

                <DriverWrapper>
                    <UserCircle size={32} color="#064652" />
                    <LocationTitle>{item.driver_name}</LocationTitle>
                </DriverWrapper>
            </LocationWrapper>
            <RideInfosWrapper>
                <LocationTitle>{moment(item.start_date).format('DD/MM/YYYY')}</LocationTitle>
                <LocationTitle>{item.start_time.substring(0,5)}</LocationTitle>
                <LocationTitle>Gratuito</LocationTitle>
                <LocationTitle>{item.available_seats} Vagas</LocationTitle>
                <ReserveRideButton title="Reservar" />
            </RideInfosWrapper>
        </Container>
    );
}