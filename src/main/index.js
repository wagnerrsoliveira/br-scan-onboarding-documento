import React from "react";
import { View, StatusBar } from "react-native";
import { OrientationLocker, PORTRAIT } from "react-native-orientation-locker";
import Home from "../presentation/screens/home";
import Indexing from "../presentation/screens/indexing";
import Tutorial from "../presentation/screens/tutorial";

const App = () => {
  return (
    <>
      <OrientationLocker orientation={PORTRAIT} />
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0)" />
      <Home />
      {/* <Indexing /> */}
      {/* <Tutorial /> */}
    </>
  );
};

export default App;
