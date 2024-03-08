import "../../../../styles/button.css"
import { ButtonHTMLAttributes, ReactNode } from "react";

export enum ButtonSizes {
  LARGE = "large",
  WIDE = "wide",
  SMALL = "small"
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
}

type NativeProps = ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = ({
  children,
  size = ButtonSizes.LARGE,
  variant = ButtonVariant.PRIMARY,
  loading,
  disabled,
  ...props
}: ButtonProps & NativeProps) => {
  return (
    <button
    
    className={["button",disabled ? "button--disabled" : "", variant,loading ? "button--loading" : "", `button--${size}`, props.className].join(" ")}
      {...props}
    >
      <span className="button__text">{children}</span>
      <div className="button__loader" />
    </button>
  );
};
