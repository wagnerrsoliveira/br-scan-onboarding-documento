import styled from "styled-components/native";

export const TextBlack = styled.Text`
  color: #000;
  font-size: ${({ size }) => (size ? size : 14)}px;
  font-weight: ${({ weight }) => (weight ? weight : "normal")};
  font-family: IBMPlexSans;
  text-align: ${({ align }) => (align ? align : "left")};
`;

export const TextWhite = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: ${({ weight }) => (weight ? weight : "normal")};
  font-family: IBMPlexSans;
  text-align: center;
  text-decoration: underline;
`;
