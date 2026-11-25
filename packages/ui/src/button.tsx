
"use client";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700",

  secondary:
    "bg-gray-200 text-gray-900 hover:bg-gray-300",

  outline:
    "border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100",
};

export const Button = ({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`
        inline-flex items-center justify-center
        rounded-lg px-[18px] py-[10px]
        text-sm font-semibold
        transition-all duration-200
        cursor-pointer
        disabled:cursor-not-allowed disabled:opacity-50
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
