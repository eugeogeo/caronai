import styled from 'styled-components/native';

import { TextInput } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: #F5F8F9;
    align-items: center;
    justify-content: center;
`;

export const InputWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const Input = styled(TextInput)`
    font-size: 24px;
    color: #064652;
    flex: 1;
    margin-left: 4px;  
`;

export const LineDivider = styled.View`
    height: 1px;
    border: 0.9px solid;
    margin: 8px;
`;

export const DateTimePickerWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 16px 0px;
`;

export const TimePickerWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
`;

export const AddRide = styled.View`
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 16px;
    padding: 16px;
`;

export const AddRideWrapper = styled.View`
    width: 100%;
    padding: 0px 16px;
`;

export const Title = styled.Text`
    font-size: 32px;
    color: #064652;
    text-align: center;
`;

export const TitleWrapper = styled.View`
    align-items: center;
    width: 100%;
    padding: 0 16px;
    margin-bottom: 16px;

`;
