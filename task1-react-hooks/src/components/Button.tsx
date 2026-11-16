
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

function Button({
  variant = "primary",
  disabled = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const buttonClasses = [
    "btn",
    `btn-${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
