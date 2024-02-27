import { HTMLAttributes, ReactNode } from "react";

export enum ButtonSizes {
  LARGE = "large",
  WIDE = "wide",
  SMALL = "small"
}

export enum ButtonType {
  PRIMARY = "button--primary",
  SECONDARY = "button--secondary",
}

export interface ButtonProps {
  children: ReactNode;
  actionType?: "button" | "submit";
  size?: ButtonSizes;
  type?: ButtonType;
  href?: string;
  loading?: boolean;
  disable?: boolean;
  hidden?: boolean;
}

type NativeProps = HTMLAttributes<HTMLButtonElement>;
export const Button = ({
  children,
  size = ButtonSizes.LARGE,
  actionType = "button",
  type = ButtonType.PRIMARY,
  href,
  loading,
  disable,
  ...props
}: ButtonProps & NativeProps) => {
  return (
    <button
      type={actionType}
      {...props}
      className={["button",disable ? "button--disabled" : "", type,loading ? "button--loading" : "", `button--${size}`, props.className].join(" ")}
    >
      <span className="button__text">{children}</span>
      <div className="button__loader" />
    </button>
  );
};
