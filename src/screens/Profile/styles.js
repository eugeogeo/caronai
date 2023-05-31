import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #F5F8F9;
`;

export const ContentWrapper = styled.View`
    width: 100%;
    padding: 0px 16px;
`;

export const UserInfo = styled.View`
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 32px;
    align-items: center;
    padding: 32px 16px 16px;
    gap: 14px;
`;

export const PhotoUser = styled.Image`
    width: ${RFValue(180)}px;
    height: ${RFValue(180)}px;
    border-radius: ${RFValue(90)}px;
`;

export const Name = styled.Text`
    font-size: 32px;
    color: #064652;
    text-align: center;
`;

export const DataWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const Logotype = styled.View`
    align-items: center;
    justify-content: center;
    background-color: #F2F2FA;
    padding: 16px;
    margin-right: 2px;
`;

export const TextDataWrapper = styled.View`
    width: 100%;
    background-color: #F2F2FA;
    height: 100%;
    flex-direction: row;
    align-items: center;
    flex: 1;
    padding: 0px 16px;
`;

export const DataText = styled.Text`
    font-size: 24px;
    color: #7A7A80;
`;

export const SignOutButton = styled.TouchableOpacity`
    background-color: #004AAD;
    padding: 8px;
    border-radius: 32px;
    flex-direction: row;
    align-items: center;
`;

export const SignOutButtonTitle = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
`;

export const ButtonWrapper = styled.View`
    width: 100%;
    justify-content: flex-end;
    flex-direction: row;
`;
