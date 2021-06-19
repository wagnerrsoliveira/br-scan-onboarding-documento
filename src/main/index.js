import React from "react";
import { View, StatusBar } from "react-native";
import Home from "../presentation/screens/home";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0)" />
      <Home />
    </>
  );
};

export default App;
