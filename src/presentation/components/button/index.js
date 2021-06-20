import React from "react";
import {
  SContainerButton,
  SContainerButtonTitle,
  STitleButton,
} from "./styles";

const Button = ({ title, handleClick }) => {
  function onPress() {
    handleClick();
  }

  function renderChildren() {
    return (
      <SContainerButtonTitle>
        <STitleButton>{title}</STitleButton>
      </SContainerButtonTitle>
    );
  }
  return (
    <SContainerButton onPress={onPress}>{renderChildren()}</SContainerButton>
  );
};

export default Button;
