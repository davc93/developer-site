export const IconError = () => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  svg.setAttribute("fill", "none")
  svg.setAttribute("shape-rendering", "geometricPrecision")
  svg.setAttribute("stroke", "currentColor")
  svg.setAttribute("stroke-linecap", "round")
  svg.setAttribute("stroke-linejoin", "round")
  svg.setAttribute("stroke-width", "2")
  svg.setAttribute("viewBox", "0 0 24 24")

  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path")
  path1.setAttribute(
    "d",
    "M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z"
  )

  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path")
  path2.setAttribute("d", "M12 8v4")

  const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path")
  path3.setAttribute("d", "M12 16h.01")

  svg.appendChild(path1)
  svg.appendChild(path2)
  svg.appendChild(path3)

  return svg
}
