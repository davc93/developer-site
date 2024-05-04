export const BrowserIcon = (): SVGSVGElement => {
  // Create the SVG element
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('viewBox', '0 0 20 20')
  svg.setAttribute('version', '1.1')

  // Create the 'g' elements
  const bgCarrier = document.createElementNS('http://www.w3.org/2000/svg', 'g')
  bgCarrier.setAttribute('id', 'SVGRepo_bgCarrier')
  bgCarrier.setAttribute('stroke-width', '0')

  const tracerCarrier = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'g'
  )
  tracerCarrier.setAttribute('id', 'SVGRepo_tracerCarrier')
  tracerCarrier.setAttribute('stroke-linecap', 'round')
  tracerCarrier.setAttribute('stroke-linejoin', 'round')

  const iconCarrier = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'g'
  )
  iconCarrier.setAttribute('id', 'SVGRepo_iconCarrier')

  // Create the 'path' element
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path.setAttribute(
    'd',
    'M 0 3 L 0 17 L 16 17 L 16 16 L 1 16 L 1 7 L 16 7 L 16 3 L 0 3 z M 1 4 L 15 4 L 15 6 L 1 6 L 1 4 z M 15 8 L 18 11 L 7 11 L 7 12 L 18 12 L 15 15 L 16.5 15 L 20 11.5 L 16.5 8 L 15 8 z'
  )
  path.setAttribute(
    'style',
    'fill-opacity:1; stroke:none; stroke-width:0px;'
  )

  // Append elements
  iconCarrier.appendChild(path)
  svg.appendChild(bgCarrier)
  svg.appendChild(tracerCarrier)
  svg.appendChild(iconCarrier)

  // Append the SVG to the document (e.g., into the body or another container)
  return svg
}
