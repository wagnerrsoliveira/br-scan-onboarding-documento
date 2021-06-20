import React from "react";
import { View, StatusBar } from "react-native";
import Home from "../presentation/screens/home";
import Indexing from "../presentation/screens/indexing";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0)" />
      {/* <Home /> */}
      <Indexing />
    </>
  );
};

export default App;
