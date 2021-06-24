import React from "react";
import { View, StatusBar } from "react-native";
import { OrientationLocker, PORTRAIT } from "react-native-orientation-locker";
import Routes from "./routes";
import { Theme } from "./theme";

const App = () => {
  return (
    <Theme>
      <OrientationLocker orientation={PORTRAIT} />
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Theme>
  );
};

export default App;
