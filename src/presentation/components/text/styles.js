import styled from "styled-components/native";

export const ContainerText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ size }) => (size ? size : 14)}px;
  font-weight: ${({ weight }) => (weight ? weight : "normal")};
  font-family: IBMPlexSans;
  text-align: center;
  padding: 16px;
`;
