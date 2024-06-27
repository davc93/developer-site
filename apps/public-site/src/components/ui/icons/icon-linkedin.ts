export const IconLinkedin = ({ width }: any): SVGSVGElement => {
    // Create the SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('version', '1.1')
    svg.setAttribute('id', 'Layer_1')
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink')
    svg.setAttribute('viewBox', '-143 145 512 512')
    svg.setAttribute('xml:space', 'preserve')
    svg.setAttribute('stroke', '')
    svg.setAttribute('class', 'linkedin-icon icon')
    svg.setAttribute('width', width ?? 'auto')
    // Create groups
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
  
    // Create path and rect elements
    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path1.setAttribute(
      'd',
      'M-143,145v512h512V145H-143z M339,627h-452V175h452V627z'
    )
  
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    rect.setAttribute('x', '-8.5')
    rect.setAttribute('y', '348.4')
    rect.setAttribute('width', '49.9')
    rect.setAttribute('height', '159.7')
  
    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path2.setAttribute(
      'd',
      'M127.9,508.1v-86.3c0-4.9-0.2-9.7,1.2-13.1c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8 c0-49.4-27.8-72.4-63.3-72.4c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7H127.9z'
    )
  
    const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path3.setAttribute(
      'd',
      'M14.7,328.4h0.4c18.8,0,30.5-12.3,30.4-27.7C45.1,284.9,33.8,273,15.4,273c-18.4,0-30.5,11.9-30.5,27.7 C-15.1,316.2-3.4,328.4,14.7,328.4z'
    )
  
    // Append elements to the SVG
    svg.appendChild(bgCarrier)
    svg.appendChild(tracerCarrier)
    svg.appendChild(iconCarrier)
    iconCarrier.appendChild(path1)
    iconCarrier.appendChild(rect)
    iconCarrier.appendChild(path2)
    iconCarrier.appendChild(path3)
  
    // Append the SVG to a target element in your HTML
    return svg
  }
  