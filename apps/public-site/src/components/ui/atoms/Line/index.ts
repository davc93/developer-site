import "./style.css"

enum LineOrientation {
  VERTICAL = "vertical",
  HORIZONTAL = "horizontal"
}

interface LineProps {
  orientation: LineOrientation
  density?: string
  size?: string
  color?: string
  boxShadow?: string
}

export const createLine = ({
  size = "100%",
  density = "5px",
  orientation = LineOrientation.HORIZONTAL,
  color = "var(--foreground-50)",
  boxShadow = "none"
}: LineProps) => {
  const line = document.createElement("div")
  line.className = "line"
  line.style.background = color
  line.style.boxShadow = boxShadow
  if (orientation == LineOrientation.HORIZONTAL) {
    line.style.height = density
    line.style.width = size
  } else {
    line.style.width = density
    line.style.height = size
  }
  return line
}
