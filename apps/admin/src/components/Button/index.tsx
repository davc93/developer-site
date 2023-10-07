import { HTMLAttributes } from "react";

export enum ButtonSizes {
  LARGE = "large",
  WIDE = "wide",
  SMALL = "small"
}

export enum ButtonStyles {
  filled = "button--filled",
  outlined = "button--outlined",
}

export interface ButtonProps {
  label: string;
  size: ButtonSizes;
  type: "button" | "submit";
  style?: ButtonStyles;
  href?: string;
  loading?: boolean;
  disable?: boolean;
  hidden?: boolean;
}

type NativeProps = HTMLAttributes<HTMLButtonElement>;
export const Button = ({
  label,
  size,
  type,
  style = ButtonStyles.outlined,
  href,
  loading,
  disable,
  ...props
}: ButtonProps & NativeProps) => {
  return (
    <button
      type={type}
      {...props}
      className={["button", style,loading ? "button--loading" : "", `button--${size}`, props.className].join(" ")}
    >
      <span className="button__content">{label}</span>
      <div className="button__loader" />
    </button>
  );
};
