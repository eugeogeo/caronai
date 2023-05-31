import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const BrandImage = styled.Image`
    width: ${RFValue(240)}px;
    height: ${RFValue(50)}px;
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
    margin-top: ${RFValue(175)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
    color: #004AAD;
    margin-top: ${RFValue(16)}px;
    text-align: center;
`;

export const TitleBold = styled.Text`
    font-size: ${RFValue(24)}px;
    color: #004AAD;
    margin-top: ${RFValue(16)}px;
    text-align: center;
    font-weight: bold;
`;

export const Form = styled.View`
    width: 100%;
    align-items: center;
    padding: 0 ${RFValue(16)}px;;
    gap: 16px;
    margin-top: 16px;
`;


export const ForgottenWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const ForgottenTitle = styled.Text`
    margin-right: 2px;
    font-size: ${RFValue(12.5)}px;
    color: #004AAD;
`;
export const ForgottenPasswordButton = styled.TouchableOpacity``;
export const ForgottenButtonTitle = styled.Text`
    text-decoration: underline;
    font-size: ${RFValue(12.5)}px;
    color: #004AAD;
    font-weight: 600;
`;