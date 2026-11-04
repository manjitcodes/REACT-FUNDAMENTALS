
// import useToggle from "../hooks/useToggle";

// function ThemeExample() {
//   const { value, toggle } = useToggle(true);

//   return (
//     <section className="component-card">
//       <h2>Component B: Theme</h2>

//       <p>Theme: {value ? "Dark" : "Light"}</p>

//       <button onClick={toggle}>
//         Toggle Theme
//       </button>
//     </section>
//   );
// }

// export default ThemeExample;




import Navigation from "./Navigation";
import ThemeStatus from "./ThemeStatus";
import { useTheme } from "../context/ThemeContext";

function ThemeExample() {
  const { theme } = useTheme();

  return (
    <section className={`theme-container ${theme}`}>
      <h2>Context API Example</h2>

      <p>Theme is being shared using React Context.</p>

      {/* ThemeButton is nested inside Navigation. */}
      <Navigation />

      {/* ThemeStatus is another Context consumer. */}
      <ThemeStatus />
    </section>
  );
}

export default ThemeExample;
