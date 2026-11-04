import type { InputHTMLAttributes } from "react";

type TextInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id"
> & {
  id: string;
  label: string;
  error?: string;
};

function TextInput({
  id,
  label,
  error,
  ...props
}: TextInputProps) {
  const errorId = `${id}-error`;

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        className="form-control"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />

      {error && (
        <p id={errorId} className="field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default TextInput;