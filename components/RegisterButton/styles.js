import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding: 16px 0px;
`;

export const ButtonTitle = styled.Text`
  color: #173ea5;
  font-weight: 600;
  font-size: ${RFValue(16)}px;
`;
