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
  href?: string;
  loading?: boolean;
  disable?: boolean;
  hidden?: boolean;
}

type NativeProps = ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = ({
  children,
  size = ButtonSizes.LARGE,
  variant = ButtonVariant.PRIMARY,
  href,
  loading,
  disable,
  ...props
}: ButtonProps & NativeProps) => {
  return (
    <button
    
      {...props}
      className={["button",disable ? "button--disabled" : "", variant,loading ? "button--loading" : "", `button--${size}`, props.className].join(" ")}
    >
      <span className="button__text">{children}</span>
      <div className="button__loader" />
    </button>
  );
};
