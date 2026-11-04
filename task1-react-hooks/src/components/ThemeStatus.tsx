
import { useTheme } from "../context/ThemeContext";

function ThemeStatus() {
  const { theme } = useTheme();

  return (
    <div className={`theme-status ${theme}`}>
      <h3>Current Application Theme</h3>

      <p>
        The current theme is: <strong>{theme}</strong>
      </p>
    </div>
  );
}

export default ThemeStatus;
