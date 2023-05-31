import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import BrandImg from '../../assets/images/General/caronai-brand.png';
import BackgroundImg from '../../assets/images/Onboarding/car-students.png';
import { DefaultButton } from '../../components/DefaultButton';
import { RegisterButton } from '../../components/RegisterButton';
import { Brand, BrandWrapper, ButtonsWrapper, Image, Title } from './styles';

export function Onboarding() {
    
    const navigation = useNavigation();

    function handleNavigateTo(screen){
        navigation.navigate(screen)
    }

    return (
        <LinearGradient
            colors={['#004AAD', '#004AAD', '#FFFFFF']}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}
            >
            <BrandWrapper>
                <Image source={BackgroundImg} />
                <Brand source={BrandImg} />
                <Title>Compartilhe caronas em sua universidade!</Title>
            </BrandWrapper>
            <ButtonsWrapper>
                <DefaultButton title="Encontre uma carona" onPress={() => handleNavigateTo('Login')}/>
                <RegisterButton onPress={() => handleNavigateTo('Register')} />
            </ButtonsWrapper>
        </LinearGradient>
    );
}
