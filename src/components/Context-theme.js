import React from "react";

export const themes = {
    light: {
      color: 'black',
      backgroundColor: 'white',
    },
    dark: {
      color: 'white',
      backgroundColor: 'black',
    },
  };
  
  const ThemeContext = React.createContext(
    themes.dark
  );

  export default ThemeContext;