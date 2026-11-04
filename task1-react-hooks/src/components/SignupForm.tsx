
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  age: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  age?: string;
};

function SignupForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    age: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [submitted, setSubmitted] = useState(false);

  // Update the corresponding field.
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Clear the previous success message when editing.
    setSubmitted(false);
  }

  // Validate all fields.
  function validateForm(): FormErrors {
    const newErrors: FormErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters.";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    const age = Number(formData.age);

    if (
      formData.age.trim() === "" ||
      !Number.isInteger(age) ||
      age < 18 ||
      age > 100
    ) {
      newErrors.age = "Age must be a whole number between 18 and 100.";
    }

    return newErrors;
  }

  // Handle form submission.
  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);

      console.log("Form submitted:", formData);
    } else {
      setSubmitted(false);
    }
  }

  return (
    <section className="component-card">
      <h2>Signup Form</h2>

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name</label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            aria-invalid={Boolean(errors.name)}
          />

          {errors.name && (
            <p className="error" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            aria-invalid={Boolean(errors.email)}
          />

          {errors.email && (
            <p className="error" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Age */}
        <div className="form-group">
          <label htmlFor="age">Age</label>

          <input
            id="age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            aria-invalid={Boolean(errors.age)}
          />

          {errors.age && (
            <p className="error" role="alert">
              {errors.age}
            </p>
          )}
        </div>

        <button type="submit">
          Sign Up
        </button>

        {submitted && (
          <p className="success" role="status">
            Registration successful!
          </p>
        )}
      </form>
    </section>
  );
}

export default SignupForm;
