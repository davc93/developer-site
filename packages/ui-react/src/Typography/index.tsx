import "ui-styles/src/typography.css"
import { HTMLAttributes } from "react";

export enum TypographySize {
  titleLarge = "typography--title-large",
  titleMedium = "typography--title-medium",
  titleSmall = "typography--title-small",
  bodyLarge = "typography--body-large",
  bodySmall = "typography--body-small",
}
export enum TypographyTag {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  P = "p",
  li = "li",
  a = "a",
  span = "span",
}

export enum TypographyColor {
    White = "typography--white",
    Dark = "typography--dark",
    Primary = "typography--primary",
}



export interface TypographyProps {
  size: TypographySize;
  tag?: TypographyTag;
  color?: TypographyColor;
}
type NativeProps = HTMLAttributes<HTMLSpanElement>
export const Typography = ({className,size,tag,color = TypographyColor.White,children,...props}:TypographyProps & NativeProps) => {
  return (
    <span className={["typography",color,size,className].join(" ")} {...props}>{children}</span>
  )
}
