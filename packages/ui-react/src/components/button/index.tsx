import "ui-styles/src/button.css";
import { ButtonHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

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
  tag?:"button" | "label" | "span"
}

type NativeProps = ButtonHTMLAttributes<HTMLElement> ;
export const Button = ({
  children,
  size = ButtonSizes.LARGE,
  variant = ButtonVariant.PRIMARY,
  loading,
  className,
  tag = "button",
  ...props
}: ButtonProps & NativeProps) => {
  const Component = tag as any
  return (
    <Component
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
      
    </Component>
  );
};