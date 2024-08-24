import { createContext, useContext } from "react";

// Creating a context with default values for themeMode and theme-switching functions.
// This context will hold the current theme state (e.g., "light" or "dark") and functions to switch themes.

export const ThemeContext = createContext({
  themeMode: "light", // Default theme mode is set to "light"
  darkTheme: () => {}, // Placeholder function to switch to dark theme
  lightTheme: () => {}, // Placeholder function to switch to light theme
});

// ThemeProvider is a shorthand for ThemeContext.Provider. It will be used to wrap components
// that need access to the theme state and functions, providing them through context.

export const ThemeProvider = ThemeContext.Provider;

// Custom hook to use the ThemeContext. It allows any component to access the current theme state
// and functions by calling useTheme().

export default function useTheme() {
  return useContext(ThemeContext);
}
