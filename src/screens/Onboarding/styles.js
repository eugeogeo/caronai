import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Image = styled.Image`
    width: ${RFValue(300)}px;
    height: ${RFValue(200)}px;
    margin: ${RFValue(50)}px 0;
`;

export const Brand = styled.Image`
    width: ${RFValue(240)}px;
    height: ${RFValue(50)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
    color: #FFFFFF;
    margin-top: ${RFValue(16)}px;
    text-align: center;
`;

export const ButtonsWrapper = styled.View`
    width: 100%;
    padding: 0 ${RFValue(16)}px;;
    margin-bottom: ${RFValue(50)}px;
`;

export const BrandWrapper = styled.View`
    width: 100%;
    align-items: center;
`;
