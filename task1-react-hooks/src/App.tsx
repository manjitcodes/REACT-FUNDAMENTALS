
import { useState } from "react";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import ToggleExample from "./components/ToggleExample";
import ThemeExample from "./components/ThemeExample";
import SignupForm from "./components/SignupForm";

import "./App.css";

function App() {
  const [userId, setUserId] = useState(1);

  return (
    // <main className="app">
    //   <h1>React Hooks Kata</h1>

    //   <Counter />

    //   <section className="component-card">
    //     <h2>Choose a User</h2>

    //     <label htmlFor="userId">User ID (1–10): </label>

    //     <select
    //       id="userId"
    //       value={userId}
    //       onChange={(event) => setUserId(Number(event.target.value))}
    //     >
    //       {Array.from({ length: 10 }, (_, index) => (
    //         <option key={index + 1} value={index + 1}>
    //           {index + 1}
    //         </option>
    //       ))}
    //     </select>
    //   </section>

    //   <UserProfile userId={userId} />
    // </main>
     <main className="app">
      <h1>Phase 8: React Fundamentals</h1>

      <h2>Task 1: Components and Core Hooks</h2>
      <Counter />
      <UserProfile userId={1} />

      <hr />

      <h2>Task 2: Custom Hooks</h2>
      <ToggleExample />
      <ThemeExample />

      <hr />

      <h2>Task 2: Controlled Form</h2>
      <SignupForm />
    </main>
  );
}

export default App;
