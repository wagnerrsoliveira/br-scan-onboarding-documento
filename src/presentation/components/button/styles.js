import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("screen");

export const SButton = styled.Button.attrs({
  color: "#C72825",
})`
  background-color: blue;
  width: ${width}px;
  height: ${height / 9}px;
  padding: 0 16px;
`;

export const SContainerButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: #c72825;
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
  color: white;
  margin: 0 8px;
  font-size: 16px;
  text-align: center;
  font-family: IBMPlexSans;
`;
