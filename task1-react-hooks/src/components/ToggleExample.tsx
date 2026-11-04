
import useToggle from "../hooks/useToggle";

function ToggleExample() {
  const { value, toggle } = useToggle(false);

  return (
    <section className="component-card">
      <h2>Component A: Toggle</h2>

      <p>Status: {value ? "ON" : "OFF"}</p>

      <button onClick={toggle}>
        Toggle A
      </button>
    </section>
  );
}

export default ToggleExample;
