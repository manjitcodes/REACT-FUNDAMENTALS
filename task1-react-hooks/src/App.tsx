
import { useState } from "react";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {
  const [userId, setUserId] = useState(1);

  return (
    <main className="app">
      <h1>React Hooks Kata</h1>

      <Counter />

      <section className="component-card">
        <h2>Choose a User</h2>

        <label htmlFor="userId">User ID (1–10): </label>

        <select
          id="userId"
          value={userId}
          onChange={(event) => setUserId(Number(event.target.value))}
        >
          {Array.from({ length: 10 }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </section>

      <UserProfile userId={userId} />
    </main>
  );
}

export default App;
