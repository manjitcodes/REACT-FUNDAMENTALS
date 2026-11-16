
import type { InputHTMLAttributes } from "react";

type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "id" | "aria-invalid"
> & {
  id: string;
  label: string;
  error?: string;
};

function Checkbox({
  id,
  label,
  error,
  "aria-describedby": ariaDescribedBy,
  ...props
}: CheckboxProps) {
  const errorId = `${id}-error`;

  const describedBy = [
    ariaDescribedBy,
    error ? errorId : undefined,
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  return (
    <div className="checkbox-field">
      <input
        {...props}
        id={id}
        type="checkbox"
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
      />

      <label htmlFor={id}>{label}</label>

      {error && (
        <p id={errorId} className="field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default Checkbox;
