import React from "react";

import { ContainerCenter } from "./styles";

const Container = ({ children, ...rest }) => {
  return <ContainerCenter {...rest}>{children}</ContainerCenter>;
};

export default Container;
