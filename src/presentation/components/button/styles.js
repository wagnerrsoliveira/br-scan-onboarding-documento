import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("screen");

export const SButton = styled.Button.attrs({
  color: "red",
})`
  background-color: blue;
  width: ${width}px;
  height: ${height / 9}px;
  padding: 0 16px;
`;
