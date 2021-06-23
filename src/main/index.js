import React from "react";
import { View, StatusBar } from "react-native";
import { OrientationLocker, PORTRAIT } from "react-native-orientation-locker";
import Routes from "./routes";

const App = () => {
  return (
    <>
      <OrientationLocker orientation={PORTRAIT} />
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0)" />
      <Routes />
    </>
  );
};

export default App;
