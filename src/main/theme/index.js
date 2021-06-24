import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import light from "./light";
import red from "./red";

export const ThemeContext = createContext({});

export const Theme = ({ children }) => {
  const [theme, setTheme] = useState(light);

  changeTheme = (themeName) => {
    switch (themeName) {
      case "light":
        setTheme(light);
        break;
      case "red":
        setTheme(red);
        break;
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}
