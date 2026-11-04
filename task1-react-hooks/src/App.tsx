
// import { useState } from "react";
// import Counter from "./components/Counter";
// import UserProfile from "./components/UserProfile";

// import ToggleExample from "./components/ToggleExample";
// import ThemeExample from "./components/ThemeExample";
// import SignupForm from "./components/SignupForm";

// import { ThemeProvider } from "./context/ThemeContext";
// import ThemeExample from "./components/ThemeExample";
// import ButtonDemo from "./components/ButtonDemo";

import "./App.css";

// function App() {
//   // const [userId, setUserId] = useState(1);

//   return (
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


    //  <main className="app">
    //   <h1>Phase 8: React Fundamentals</h1>

    //   <h2>Task 1: Components and Core Hooks</h2>
    //   <Counter />
    //   <UserProfile userId={1} />

    //   <hr />

    //   <h2>Task 2: Custom Hooks</h2>
    //   <ToggleExample />
    //   <ThemeExample />

    //   <hr />

    //   <h2>Task 2: Controlled Form</h2>
    //   <SignupForm />
    // </main>


//   <ThemeProvider>
//       <main className="app">
//         <h1>Phase 8: React Fundamentals</h1>

//         <ThemeExample />

//         <hr />

//         <ButtonDemo />
//       </main>
//     </ThemeProvider>
//   );
// }


import { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import TextInput from "./components/TextInput";
import Select from "./components/Select";
import Checkbox from "./components/Checkbox";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <main className="app">
      <header className="page-header">
        <h1>React Component Library</h1>
        <p>
          Reusable, accessible, and responsive React components.
        </p>
      </header>

      {/* BUTTON DOCUMENTATION */}
      <section className="component-section">
        <h2>1. Button</h2>

        <p>
          Use Button for actions such as submitting forms,
          opening dialogs, and navigating through application flows.
        </p>

        <div className="demo-row">
          <Button variant="primary" onClick={() => alert("Primary clicked")}>
            Primary Button
          </Button>

          <Button variant="secondary" onClick={() => alert("Secondary clicked")}>
            Secondary Button
          </Button>

          <Button variant="primary" disabled>
            Disabled Button
          </Button>
        </div>
      </section>

      {/* MODAL DOCUMENTATION */}
      <section className="component-section">
        <h2>2. Modal</h2>

        <p>
          Use Modal when a user needs to complete or confirm an
          important action without leaving the current page.
        </p>

        <Button onClick={() => setIsModalOpen(true)}>
          Open Modal
        </Button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Example Modal"
        >
          <p>
            This is an accessible modal dialog. Try navigating
            through its controls using only your keyboard.
          </p>

          <TextInput
            id="modal-name"
            label="Your name"
            placeholder="Enter your name"
          />

          <Button
            variant="primary"
            onClick={() => setIsModalOpen(false)}
          >
            Confirm
          </Button>
        </Modal>
      </section>

      {/* TEXT INPUT DOCUMENTATION */}
      <section className="component-section">
        <h2>3. Text Input</h2>

        <p>
          Use TextInput to collect text values such as names and email
          addresses. It supports visible labels and accessible errors.
        </p>

        <div className="form-demo">
          <TextInput
            id="demo-email"
            label="Email address"
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <TextInput
            id="demo-invalid-email"
            label="Email with error example"
            type="email"
            defaultValue="wrong-email"
            error="Please enter a valid email address."
          />
        </div>
      </section>

      {/* SELECT DOCUMENTATION */}
      <section className="component-section">
        <h2>4. Select</h2>

        <p>
          Use Select when the user needs to choose one option from a
          predefined list.
        </p>

        <div className="form-demo">
          <Select
            id="demo-role"
            label="Choose your role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            options={[
              { label: "Developer", value: "developer" },
              { label: "Designer", value: "designer" },
              { label: "Manager", value: "manager" },
            ]}
          />
        </div>
      </section>

      {/* CHECKBOX DOCUMENTATION */}
      <section className="component-section">
        <h2>5. Checkbox</h2>

        <p>
          Use Checkbox when a user needs to accept a condition or
          select an independent yes/no option.
        </p>

        <Checkbox
          id="demo-terms"
          label="I accept the terms and conditions"
          checked={acceptedTerms}
          onChange={(event) => setAcceptedTerms(event.target.checked)}
        />

        <p>
          Current value: {acceptedTerms ? "Accepted" : "Not accepted"}
        </p>
      </section>
    </main>
  );
}

export default App;
