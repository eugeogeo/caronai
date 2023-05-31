import { ActivityIndicator, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
export const Container = styled(TouchableOpacity)`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #173ea5;
  border-radius: 50px;
  padding: 16px 0px;
  flex-direction: row;
`;

export const ButtonTitle = styled.Text`
  color: #ffffff;
  font-weight: 600;
  font-size: ${RFValue(16)}px;
`;

export const Loader = styled(ActivityIndicator)`
  margin-left: 8px;
`;
