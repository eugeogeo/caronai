import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    padding: 16px 12px;
    border: 1.5px solid;
    border-radius: 5px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Input = styled(TextInput)`
    font-size: ${RFValue(16)}px;
     flex: 1;
`;