export const LinkIcon = () => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("fill", "none");

  // Create SVG groups
  const bgCarrier = document.createElementNS("http://www.w3.org/2000/svg", "g");
  bgCarrier.setAttribute("id", "SVGRepo_bgCarrier");
  bgCarrier.setAttribute("stroke-width", "0");

  const tracerCarrier = document.createElementNS("http://www.w3.org/2000/svg", "g");
  tracerCarrier.setAttribute("id", "SVGRepo_tracerCarrier");
  tracerCarrier.setAttribute("stroke-linecap", "round");
  tracerCarrier.setAttribute("stroke-linejoin", "round");

  const iconCarrier = document.createElementNS("http://www.w3.org/2000/svg", "g");
  iconCarrier.setAttribute("id", "SVGRepo_iconCarrier");

  // Create path element
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke", "#000000");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("stroke-width", "2");
  path.setAttribute("d", "M12 6H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5m-6 0 7.5-7.5M15 3h6v6");

  // Append elements to the SVG
  iconCarrier.appendChild(path);
  svg.appendChild(bgCarrier);
  svg.appendChild(tracerCarrier);
  svg.appendChild(iconCarrier);
  return svg
}