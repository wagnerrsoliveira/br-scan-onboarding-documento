import React, { createContext, useCallback, useContext } from "react";
import { useTheme } from "../theme/index";
import { getNextScreen, getPreviousScreen } from "../../domain";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { changeTheme } = useTheme();

  const handleNextScreen = useCallback((currentScreen, navigation) => {
    const nextScreen = getNextScreen(currentScreen);
    if (nextScreen) {
      navigation.navigate(nextScreen.screen);
      changeTheme(nextScreen.theme);
    }
  }, []);

  const handleBackScreen = useCallback((currentScreen, navigation) => {
    const previousScreen = getPreviousScreen(currentScreen);
    if (previousScreen) {
      navigation.navigate(previousScreen.screen);
      changeTheme(previousScreen.theme);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        handleNextScreen,
        handleBackScreen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  const context = useContext(AppContext);

  return context;
}

export default AppProvider;
