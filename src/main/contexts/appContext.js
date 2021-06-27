import React, { createContext, useCallback, useContext, useState } from "react";
import { useTheme } from "../theme/index";
import { getNextScreen, getPreviousScreen } from "../../domain";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { changeTheme } = useTheme();
  const [document, setDocument] = useState(null);

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
      navigation.goBack();
      changeTheme(previousScreen.theme);
    }
  }, []);

  const handleSelectDocument = useCallback((documentSelected) => {
    setDocument(documentSelected);
  }, []);

  return (
    <AppContext.Provider
      value={{
        handleNextScreen,
        handleBackScreen,
        handleSelectDocument,
        document,
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
