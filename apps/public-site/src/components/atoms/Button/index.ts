
export enum ButtonSizes {
  LARGE = "large",
  WIDE = "wide"
}

export enum ButtonStyles {
  PRIMARY = "button--primary",
  SECONDARY = "button--secondary",
}

export interface ButtonProps {
  size: ButtonSizes;
  style: ButtonStyles;
  label: string;
  loading?: boolean;
  disable?: boolean;
  type?: "button" | "submit";
  tag?: "button" | "span";
  icon?:SVGSVGElement
}

/**
 * Primary UI component for user interaction
 */
export const createButton = ({
  style = ButtonStyles.PRIMARY,
  size = ButtonSizes.LARGE,
  loading = false,
  disable = false,
  label = "Button",
  type = "button",
  tag = "button",
  icon
}: ButtonProps) :HTMLButtonElement => {
  const btn = document.createElement(tag) as any ;
  if(tag == "button"){
    btn.type = type
  }
  if (icon) {
    icon.classList.add("button__icon")
    btn.append(icon)
    
  }
  

  const text = document.createElement("span")
  text.className = "button__text"
  text.textContent = label
  const loader = document.createElement("div");
  loader.className = "button__loader";
  btn.append(text,loader);

  btn.className = [
    "button",
    `button--${size}`,
    style,
    loading ? "button--loading" : "",
    disable ? "button--disabled" : "",
    !loading && !disable ? "button--normal" :""
  ].join(" ");


  return btn;
};
