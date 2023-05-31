import { EnvelopeSimple, IdentificationBadge, SignOut } from 'phosphor-react-native';
import React from 'react';
import { Loader } from '../../components/Loader';
import { useAuth } from '../../hooks/auth';

import {
    ButtonWrapper,
    Container,
    ContentWrapper,
    DataText,
    DataWrapper,
    Logotype,
    Name,
    PhotoUser,
    SignOutButton,
    SignOutButtonTitle,
    TextDataWrapper,
    UserInfo
} from './styles';

export function Profile() {

    const { userAuthState, signOut } = useAuth();

    if (!userAuthState) {
        return (
            <Loader />
        )
    }

    else {
        return (
            <Container>
                <ContentWrapper>
                    <UserInfo>
                        <PhotoUser source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=male' }} />
                        <Name>{userAuthState.user.nome}</Name>
                        <DataWrapper>
                            <Logotype>
                                <IdentificationBadge size={32} color="#7A7A80" />
                            </Logotype>
                            <TextDataWrapper>
                                <DataText ellipsizeMode="tail" numberOfLines={1}>RA {userAuthState.user.ra}</DataText>
                            </TextDataWrapper>
                        </DataWrapper>
                        <DataWrapper>
                            <Logotype>
                                <EnvelopeSimple size={32} color="#7A7A80" />
                            </Logotype>
                            <TextDataWrapper>
                                <DataText ellipsizeMode="tail" numberOfLines={1}>{userAuthState.user.email}</DataText>
                            </TextDataWrapper>
                        </DataWrapper>
                        <ButtonWrapper>
                            <SignOutButton onPress={signOut}>
                                <SignOut size={24} color="#FFFFFF" />
                                <SignOutButtonTitle>Deslogar</SignOutButtonTitle>
                            </SignOutButton>
                        </ButtonWrapper>
                    </UserInfo>
                </ContentWrapper>
            </Container>

        );

    }

}
