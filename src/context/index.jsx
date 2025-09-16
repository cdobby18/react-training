import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  // Example: theme state
  const [theme, setTheme] = useState("light");

  // Function to toggle theme
  function handleChangeThemeOnButtonClick() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <GlobalContext.Provider value={{ theme, handleChangeThemeOnButtonClick }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
