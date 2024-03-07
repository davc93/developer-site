export const CloseIcon = () => {
    // Create the SVG element
    const svgElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("class", "icon icon-tabler icon-tabler-x");
    svgElement.setAttribute("viewBox", "0 0 24 24");
    svgElement.setAttribute("stroke-width", "1");
    svgElement.setAttribute("stroke", "currentColor");
    svgElement.setAttribute("fill", "none");
    svgElement.setAttribute("stroke-linecap", "round");
    svgElement.setAttribute("stroke-linejoin", "round");
  
    // Create the first path element
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("stroke", "none");
    path1.setAttribute("d", "M0 0h24v24H0z");
    path1.setAttribute("fill", "none");
    svgElement.appendChild(path1);
  
    // Create the second path element
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M18 6l-12 12");
    svgElement.appendChild(path2);
  
    // Create the third path element
    const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path3.setAttribute("d", "M6 6l12 12");
    svgElement.appendChild(path3);
  
    // Append the SVG element to the body of the HTML document
    return svgElement;
  };
  