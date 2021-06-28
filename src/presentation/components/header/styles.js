import styled from "styled-components/native";

export const ImageStyled = styled.Image.attrs(({ theme }) => ({
  tintColor: theme.tintColor,
}))``;
