
export enum ButtonSizes {
  LARGE = "large",
  WIDE = "wide"
}

export enum ButtonStyles {
  filled = "button--filled",
  outlined = "button--outlined",
}

export interface ButtonProps {
  size: ButtonSizes;
  style: ButtonStyles;
  label: string;
  loading?: boolean;
  disable?: boolean;
  type?: "button" | "submit";
  tag?: "button" | "span";
}

/**
 * Primary UI component for user interaction
 */
export const createButton = ({
  style = ButtonStyles.filled,
  size = ButtonSizes.LARGE,
  loading = false,
  disable = false,
  label = "Button",
  type = "button",
  tag = "button"
}: ButtonProps) :HTMLButtonElement => {
  const btn = document.createElement(tag) as any ;
  if(tag == "button"){
    btn.type = type
  }
  const content = document.createElement("span")
  content.className = "button__content"
  content.textContent = label
  const loader = document.createElement("div");
  loader.className = "button__loader";
  btn.append(content,loader);
  
  btn.className = [
    "button",
    `button--${size}`,
    style,
    loading ? "button--loading" : "",
    disable ? "button--disabled" : ""
  ].join(" ");


  return btn;
};
