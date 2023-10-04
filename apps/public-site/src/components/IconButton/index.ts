export interface IconButtonProps {

    icon:SVGSVGElement
}
export const createIconButton = ({icon}:IconButtonProps) => {
    const button = document.createElement("button")
    button.className = "icon-button"
    button.append(icon)
    return button
}