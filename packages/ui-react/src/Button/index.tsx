import "ui-styles/src/button.css";
import { ButtonHTMLAttributes, ReactNode } from "react";

export enum ButtonSizes {
  LARGE = "large",
  WIDE = "wide",
  SMALL = "small",
}

export enum ButtonVariant {
  PRIMARY = "button--primary",
  SECONDARY = "button--secondary",
}

export interface ButtonProps {
  children: ReactNode;
  size?: ButtonSizes;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?:boolean;
}

type NativeProps = ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = ({
  children,
  size = ButtonSizes.LARGE,
  variant = ButtonVariant.PRIMARY,
  loading,
  className,
  ...props
}: ButtonProps & NativeProps) => {
  return (
    <button
      className={[
        "button",
        variant,
        loading ? "button--loading" : "",
        `button--${size}`,
        className,
      ].join(" ")}
      {...props}
    >
      <span className="button__text">{children} <div className="button__loader" /></span>
      
    </button>
  );
};
