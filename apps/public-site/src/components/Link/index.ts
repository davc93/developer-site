import { TypographyColor, TypographySize, createTypography } from "../Typography"

export interface LinkProps {
    href:string,
    label:string,
    size?:TypographySize

}

export const createLink = ({href,label,size = TypographySize.bodyLarge}:LinkProps) => {
    const anchor = document.createElement("a")
    anchor.href = href
    const text = createTypography({label,size,color:TypographyColor.Primary})
    anchor.append(text)
    return anchor
}