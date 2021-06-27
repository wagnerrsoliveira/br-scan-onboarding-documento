import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("screen");

export const ContainerCenter = styled.SafeAreaView`
  width: 100%;
  height: ${({ porcet }) => (height / 10) * (porcet ? porcet : 9)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;
