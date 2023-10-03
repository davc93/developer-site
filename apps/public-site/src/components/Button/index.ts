import { goTo } from "../../navigation";

export enum ButtonSizes {
  LARGE = "large",
  WIDE = "wide"
}

export enum ButtonStyles {
  filled = "button--filled",
  outlined = "button--outlined",
}

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  style?: ButtonStyles;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: ButtonSizes;
  /**
   * Button contents
   */
  label: string;
  href?:string
  /**
   * Optional click handler
   */
  onClick?: (ev: MouseEvent) => void;

  loading?: boolean;

  disable?: boolean;
  hidden?: boolean;
  type?: "button" | "submit";
}

/**
 * Primary UI component for user interaction
 */
export const createButton = ({
  style = ButtonStyles.filled,
  size = ButtonSizes.LARGE,
  loading = false,
  disable = false,
  hidden = false,
  backgroundColor,
  label = "Button",
  type = "button",
  href
}: ButtonProps) => {
  const btn = document.createElement(href ? "a": "button") as HTMLAnchorElement;
  if(href){
    btn.href = href
    btn.addEventListener('click',(event)=>{
      event.preventDefault()
      goTo(href)
    })
  }
  btn.type = type;
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
    disable ? "button--disabled" : "",
    hidden ? "hidden" : "",
  ].join(" ");

  if (backgroundColor) {
    btn.style.backgroundColor = backgroundColor;
  }

  return btn;
};
