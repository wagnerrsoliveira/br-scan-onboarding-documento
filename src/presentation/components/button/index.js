import React from "react";
import { SButton } from "./styles";

const Button = ({ title, handleClick }) => {
  return <SButton title={title} onPress={handleClick} />;
};

export default Button;
