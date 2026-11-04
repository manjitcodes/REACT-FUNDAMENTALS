
import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

// Define the possible theme values.
type Theme = "light" | "dark";

// Define what our context provides.
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create the context.
const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Provider component.
function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  function toggleTheme() {
    setTheme((previousTheme) =>
      previousTheme === "light" ? "dark" : "light"
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to access the context.
function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}

export { ThemeProvider, useTheme };
