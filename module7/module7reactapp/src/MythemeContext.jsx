import React, { useState, createContext } from "react";

// 1. Create context
export const MyThemeContext = createContext();

// 2. Define theme values
export const themes = {
  light: {
    foreground: "#333333",
    background: "#BAE2FF",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

// 3. Create provider
function MyThemeProvider(props) {
  const [theme, setTheme] = useState(themes.light);

  return (
    <MyThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </MyThemeContext.Provider>
  );
}

export default MyThemeProvider;
