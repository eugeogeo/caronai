import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 32px 16px;
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
  border: 0.9px solid #e9e7e6;
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

export const CloseModalButton = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 16px;
`;
