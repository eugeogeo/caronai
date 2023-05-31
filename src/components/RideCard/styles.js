import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 16px;
    padding: 16px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 16px;
`;

export const LocationTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    color: #064652;
`;

export const LocationWrapper = styled.View`
    justify-content: space-between;
    flex: 1;
`;

export const LocationNameWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const RideInfosWrapper = styled.View`
    align-items: flex-end;
`;

export const DriverWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
`;