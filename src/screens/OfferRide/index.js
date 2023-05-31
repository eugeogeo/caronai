import { yupResolver } from '@hookform/resolvers/yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Calendar, Clock, MapPin, SmileyWink } from 'phosphor-react-native';
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import FlashMessage, { showMessage } from "react-native-flash-message";
import * as Yup from 'yup';
import { DefaultButton } from '../../components/DefaultButton';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import {
    AddRide,
    AddRideWrapper,
    Container,
    DateTimePickerWrapper,
    Input,
    InputWrapper,
    LineDivider,
    TimePickerWrapper,
    Title,
    TitleWrapper
} from './styles';


const schema = Yup.object().shape({
    origin: Yup.string().required(),
    destination: Yup.string().required()
});

export function OfferRide({ ...props }) {

    const {userAuthState} = useAuth();

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());

    const [isLoading, setIsLoading] = useState();

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onChangeDateTime = (event, selectedDate) => {
        setDate(selectedDate);
    };

    const onChangeTime = (event, selectedTime) => {
        setTime(selectedTime);
    }

    const handleFormatDateAndTimeAndOffer = ({origin, destination}) => {

        //timeFormat
        const dataTimeUtc = new Date(time);
        const timeBrasilia = dataTimeUtc.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
        const horarioBrasilia = timeBrasilia.split(" ")[1];

        // dataFormat
        const dataUtc = new Date(date);
        const year = dataUtc.getFullYear();
        const month = ("0" + (dataUtc.getMonth() + 1)).slice(-2);
        const day = ("0" + dataUtc.getDate()).slice(-2);
        const dateFormatted = `${year}-${month}-${day}`;

        handleSubmitOfferRide({
            driver_name: userAuthState.user.nome,
            driver_ra: userAuthState.user.ra,
            origin: origin,
            destination: destination,
            start_date: dateFormatted,
            start_time: horarioBrasilia,
            price: "00.00",
            available_seats: "4"
        })
    }

    const handleSubmitOfferRide = async (params) => {
        setIsLoading(true)

        await api.post('/rides/create/', params )
            .then(response => {
                showMessage({
                    message: "Obrigado!",
                    description: "Sua carona já está disponível!",
                    type: "success",
                    duration: 3000
                  });
                setIsLoading(false);
            })
            .catch(response => {
                console.log(response)
                showMessage({
                    message: "Erro ao oferecer uma carona.",
                    description: "Verifique o horário de sua corrida ou conexão!",
                    type: "danger",
                    duration: 3000
                  });
                setIsLoading(false)
            })
    }

    return (
        <Container>
            <FlashMessage position='top'/>
            <AddRideWrapper>
                <TitleWrapper>
                    <Title>Compartilhe uma carona {'\n'} com seus colegas <SmileyWink size={38} color='#064652'/></Title>
                </TitleWrapper>
            <AddRide>
                <InputWrapper>
                    <MapPin size={32} color='#064652' />

                    <Controller control={control} defaultValue='' name="origin" render={({ field: {onChange, value}}) => (
                        <Input value={value} onChangeText={onChange} placeholder="Saindo de..." autoCorrect={false} autoCapitalize="none" placeholderTextColor="#064652" />
                    )}/>
                
                </InputWrapper>
                <LineDivider style={ { borderColor: errors.origin ? '#CD5C5C' : '#E9E7E6'}} />
                <InputWrapper>
                    <MapPin size={32} color='#064652' />
                    <Controller control={control} defaultValue='' name="destination" render={({ field: {onChange, value}}) => (
                    <Input value={value} onChangeText={onChange} placeholder="Indo para..." autoCorrect={false} autoCapitalize="none" placeholderTextColor="#064652" />
                    )}/>
                </InputWrapper>
                <LineDivider style={ { borderColor: errors.destination ? '#CD5C5C' : '#E9E7E6'}} />
                <DateTimePickerWrapper>
                    <Calendar size={32} color='#064652' />
                    <DateTimePicker
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        onChange={onChangeDateTime}
                        minimumDate={new Date()}
                    />
                </DateTimePickerWrapper>
                <TimePickerWrapper>
                    <Clock size={32} color='#064652' />
                    <DateTimePicker
                        value={time}
                        mode={'time'}
                        onChange={onChangeTime}
                        is24Hour={true}
                    />
                </TimePickerWrapper>
                <DefaultButton title={"Oferecer carona"} onPress={handleSubmit(handleFormatDateAndTimeAndOffer)} disabled={isLoading} isLoading={isLoading} />
            </AddRide>
            </AddRideWrapper>
        </Container>
    );
}
