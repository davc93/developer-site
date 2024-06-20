import "ui-styles/src/typography.css"

export enum TypographySize {
  titleLarge = "typography--title-large",
  titleMedium = "typography--title-medium",
  titleSmall = "typography--title-small",
  bodyMedium = "typography--body-medium",
  bodySmall = "typography--body-small"
}
export enum TypographyTag {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  P = "p",
  li = "li",
  a = "a",
  span = "span"
}

export enum TypographyContrast {
  VERY_HIGH = "typography--very-high-contrast",
  HIGH = "typography--high-contrast",
  MEDIUM = "typography--medium-contrast",
  LOW = "typography--low-contrast",
  VERY_LOW = "typography--very-low-contrast"
}

export interface TypographyProps {
  label: string
  size: TypographySize
  tag?: TypographyTag
  style?: string
  color?: TypographyContrast
  className?: string
}

export const createTypography = ({
  label,
  size,
  style,
  className,
  color = TypographyContrast.HIGH,
  tag = TypographyTag.span
}: TypographyProps): HTMLElement => {
  const element: any = document.createElement(tag)

  element.style = style
  element.className = [
    "typography",
    size,
    color,
    className ? className : ""
  ].join(" ")
  element.textContent = label
  return element
}
