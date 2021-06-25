import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("screen");

export const ContainerCenter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;
