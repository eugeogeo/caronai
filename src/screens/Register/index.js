import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import FlashMessage, { showMessage } from "react-native-flash-message";
import * as Yup from 'yup';
import BrandImg from '../../assets/images/General/caronai-brand-blue.png';
import { DefaultButton } from '../../components/DefaultButton';
import { InputForm } from '../../components/InputForm';
import { api } from '../../services/api';

import {
    BrandImage,
    Container,
    Form,
    Header,
    Title,
    TitleBold
} from './styles';

const schema = Yup.object().shape({
    nome: Yup.string().required(),
    email: Yup.string().email().required(),
    ra: Yup.string().required(),
    password: Yup.string().required()
});

export function Register() {

    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation();

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    async function handleConfirmRegister(userData) {

        setIsLoading(true)

        await api.post('/users/', userData)
            .then(response => {
                reset();
                setIsLoading(false)
                showMessage({
                    message: "Cadastro realizado com sucesso!",
                    description: "Clique aqui para ir para tela de login.",
                    type: "success",
                    duration: 5000,
                    onPress: () => { navigation.navigate('Login'); }
                });
            })
            .catch(error => {
                setIsLoading(false)
                console.log(error)
                showMessage({
                    message: "Erro ao cadastrar!",
                    description: "Verifique os dados inseridos.",
                    type: "danger",
                    duration: 5000
                });
            })
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container>
                <FlashMessage position="top" autoHide={false} />
                <Header>
                    <BrandImage source={BrandImg} />
                    <Title>Registre-se!</Title>
                    <TitleBold>Preencha os dados </TitleBold>
                    <Form>
                        <InputForm name="nome" control={control} placeholder="Nome Completo" error={errors.nome} />
                        <InputForm name="email" control={control} keyboardType="email-address" placeholder="E-mail" error={errors.email} />
                        <InputForm name="ra" control={control} keyboardType="numeric" placeholder="Seu RA (números)" error={errors.ra} maxLength={7} />
                        <InputForm name="password" control={control} placeholder="Senha" isPassword={true} error={errors.password} />
                        <DefaultButton title="Cadastrar" isLoading={isLoading} onPress={handleSubmit(handleConfirmRegister)} />
                    </Form>
                </Header>
            </Container>
        </TouchableWithoutFeedback>
    );
}
