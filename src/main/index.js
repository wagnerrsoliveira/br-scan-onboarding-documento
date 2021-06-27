import React, { useMemo } from "react";
import { StatusBar } from "react-native";
import { OrientationLocker, PORTRAIT } from "react-native-orientation-locker";
import { Theme, useTheme } from "./theme";
import AppProvider from "./contexts/appContext";
import Routes from "./routes";

const SetupApp = () => {
  const { theme } = useTheme();

  const barStyle = useMemo(() => {
    return theme.title === "light" ? "dark-content" : "light-content";
  }, [theme]);

  return (
    <>
      <OrientationLocker orientation={PORTRAIT} />
      <StatusBar
        barStyle={barStyle}
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
};

const App = () => {
  return (
    <Theme>
      <AppProvider>
        <SetupApp />
      </AppProvider>
    </Theme>
  );
};

export default App;
