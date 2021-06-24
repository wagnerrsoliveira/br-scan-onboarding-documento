import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { height } = Dimensions.get("screen");

export const SContainerButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${height / 10}px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SContainerButtonTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const STitleButton = styled.Text.attrs({ size: 24 })`
  color: ${({ theme }) => theme.text.primary};
  margin: 0 8px;
  font-size: 16px;
  text-align: center;
  font-family: ${({ theme }) => theme.text.fontFamily};
`;
