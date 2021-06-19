import styled from "styled-components/native";

export const ContainerText = styled.Text`
  color: black;
  font-size: ${({ size }) => (size ? size : 14)}px;
  font-weight: ${({ weight }) => (weight ? weight : "normal")};
`;
