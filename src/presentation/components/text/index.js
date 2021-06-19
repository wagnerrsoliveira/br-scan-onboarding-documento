import React from "react";
import { ContainerText } from "./styles";

const Text = (props) => {
  const { children } = props;
  return <ContainerText {...props}>{children}</ContainerText>;
};

export default Text;
