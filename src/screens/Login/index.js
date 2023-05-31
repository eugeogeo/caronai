import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FlashMessage, { showMessage } from "react-native-flash-message";
import * as Yup from 'yup';
import BrandImg from '../../assets/images/General/caronai-brand-blue.png';
import { DefaultButton } from '../../components/DefaultButton';
import { InputForm } from '../../components/InputForm';
import { useAuth } from '../../hooks/auth';

import {
    BrandImage,
    Container,
    ForgottenButtonTitle,
    ForgottenPasswordButton,
    ForgottenTitle,
    ForgottenWrapper,
    Form,
    Header,
    Title,
    TitleBold,
} from './styles';

const schema = Yup.object().shape({
    ra: Yup.string().min(7).required(),
    password: Yup.string().required()
});

export function Login() {

    const { signIn } = useAuth();

    const [isLoading, setIsLoading] = useState();

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    async function handleSignIn(credentials){

        setIsLoading(true)
        try {
            await signIn(credentials)
            setIsLoading(false)
        } catch(error){
            setIsLoading(false)
            showMessage({
                message: "Erro ao autenticar!",
                description: "Usuário ou senha inválidos.",
                type: "danger",
                duration: 2500
            });
        }
       

    }

    return (
        <Container>
            <FlashMessage position="top"/>
            <Header>
                <BrandImage source={BrandImg} />
                <Title>Bem-vindo</Title>
                <Title>Faça seu
                    <TitleBold> login, </TitleBold>
                    Caroneiro!
                </Title>
                <Form>
                    <InputForm name="ra" control={control} keyboardType="numeric" placeholder="Registro Academico" error={errors.ra} maxLength={7}  />
                    <InputForm name="password" control={control} placeholder="Senha" isPassword={true} error={errors.password}/>
                    <DefaultButton title="Logar" isLoading={isLoading} onPress={handleSubmit(handleSignIn)} disabled={isLoading}/>
                    <ForgottenWrapper>
                        <ForgottenTitle>Esqueceu seu RA ou senha?</ForgottenTitle>
                        <ForgottenPasswordButton>
                            <ForgottenButtonTitle>Clique aqui</ForgottenButtonTitle>
                        </ForgottenPasswordButton>
                    </ForgottenWrapper>
                </Form>
            </Header>
        </Container>
    );
}
