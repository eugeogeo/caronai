import React, { useState } from 'react';
import { Controller } from "react-hook-form";
import { PasswordEyeButton } from '../PasswordEyeButton';
import { Container, Input } from './styles';

export function InputForm({ control, name, error, placeholder, keyboardType, isPassword, ...rest }) {

    const [hidePassword, setHidePassword] = useState(isPassword);

    function handleHidePassword() {
        setHidePassword(!hidePassword)
    }

    return (
        <Container style={{ borderColor: error ? '#DC1538' : '#173EA5' }}>
            <Controller
                control={control}
                defaultValue={''}
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        autoCorrect={false}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        autoCapitalize="none"
                        placeholderTextColor="#999999"
                        secureTextEntry={hidePassword}
                        {...rest}
                    />
                )} name={name} />
            {isPassword &&
                <PasswordEyeButton
                    isActive={hidePassword}
                    requestHidePassword={handleHidePassword}
                />}
        </Container>
    );
};