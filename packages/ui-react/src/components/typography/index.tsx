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

export enum TypographyContrast {
    VERY_HIGH = "typography--very-high-contrast",
    HIGH = "typography--high-contrast",
    MEDIUM = "typography--medium-contrast",
    LOW = "typography--low-contrast",
    VERY_LOW = "typography--very-low-contrast",
}



export interface TypographyProps {
  size: TypographySize;
  tag?: TypographyTag;
  color?: TypographyContrast;
}
type NativeProps = HTMLAttributes<HTMLSpanElement>
export const Typography = ({className,size,tag = TypographyTag.span,color = TypographyContrast.VERY_HIGH,children,...props}:TypographyProps & NativeProps) => {
  const Tag = tag as keyof JSX.IntrinsicElements
  return (
    <Tag className={["typography",color,size,className].join(" ")} {...props as any}>{children}</Tag>
  )
}
