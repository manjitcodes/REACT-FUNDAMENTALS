
import Button from "./Button";

function ButtonDemo() {
  return (
    <section className="component-card">
      <h2>Reusable Button Library</h2>

      <div className="button-group">
        <Button
          variant="primary"
          onClick={() => alert("Primary button clicked")}
        >
          Primary Button
        </Button>

        <Button
          variant="secondary"
          onClick={() => alert("Secondary button clicked")}
        >
          Secondary Button
        </Button>

        <Button variant="primary" disabled>
          Disabled Button
        </Button>
      </div>
    </section>
  );
}

export default ButtonDemo;
