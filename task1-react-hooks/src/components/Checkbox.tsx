import type { InputHTMLAttributes } from "react";

type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "id"
> & {
  id: string;
  label: string;
};

function Checkbox({ id, label, ...props }: CheckboxProps) {
  return (
    <div className="checkbox-field">
      <input
        id={id}
        type="checkbox"
        {...props}
      />

      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox;