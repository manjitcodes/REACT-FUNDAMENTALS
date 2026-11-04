
import useToggle from "../hooks/useToggle";

function ThemeExample() {
  const { value, toggle } = useToggle(true);

  return (
    <section className="component-card">
      <h2>Component B: Theme</h2>

      <p>Theme: {value ? "Dark" : "Light"}</p>

      <button onClick={toggle}>
        Toggle Theme
      </button>
    </section>
  );
}

export default ThemeExample;
