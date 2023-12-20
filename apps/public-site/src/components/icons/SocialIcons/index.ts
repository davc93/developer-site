export type SVGProps = {
  width:string,
}

export const GithubIcon = ({width}:SVGProps) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 20 20");
  svg.setAttribute("version", "1.1");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
  svg.setAttribute("class", "github-icon icon");
  svg.setAttribute("width",width)
  
  // Create groups
  const bgCarrier = document.createElementNS("http://www.w3.org/2000/svg", "g");
  bgCarrier.setAttribute("id", "SVGRepo_bgCarrier");
  bgCarrier.setAttribute("stroke-width", "0");
  
  const tracerCarrier = document.createElementNS("http://www.w3.org/2000/svg", "g");
  tracerCarrier.setAttribute("id", "SVGRepo_tracerCarrier");
  tracerCarrier.setAttribute("stroke-linecap", "round");
  tracerCarrier.setAttribute("stroke-linejoin", "round");
  
  const iconCarrier = document.createElementNS("http://www.w3.org/2000/svg", "g");
  iconCarrier.setAttribute("id", "SVGRepo_iconCarrier");
  
  // Create title and desc elements
  const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
  title.textContent = "github [#ffffff142]";
  
  const desc = document.createElementNS("http://www.w3.org/2000/svg", "desc");
  desc.textContent = "Created with Sketch.";
  
  // Create groups inside SVGRepo_iconCarrier
  const pageGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  pageGroup.setAttribute("id", "Page-1");
  pageGroup.setAttribute("stroke", "none");
  pageGroup.setAttribute("stroke-width", "1");
  pageGroup.setAttribute("fill", "");
  pageGroup.setAttribute("fill-rule", "evenodd");
  
  const dribbbleGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  dribbbleGroup.setAttribute("id", "Dribbble-Light-Preview");
  dribbbleGroup.setAttribute("transform", "translate(-140.000000, -7559.000000)");
  dribbbleGroup.setAttribute("fill", "");
  
  const iconsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  iconsGroup.setAttribute("id", "icons");
  iconsGroup.setAttribute("transform", "translate(56.000000, 160.000000)");
  
  // Create path element
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"); // Add the actual path data here
  path.setAttribute("id", "github-[#ffffff142]");
  
  // Append elements to the SVG
  svg.appendChild(bgCarrier);
  svg.appendChild(tracerCarrier);
  svg.appendChild(iconCarrier);
  iconCarrier.appendChild(title);
  iconCarrier.appendChild(desc);
  iconCarrier.appendChild(pageGroup);
  pageGroup.appendChild(dribbbleGroup);
  dribbbleGroup.appendChild(iconsGroup);
  iconsGroup.appendChild(path);

  // Append the SVG to a target element in your HTML
  return svg;
};
export const LinkedinIcon = ({width}:SVGProps) => {
  // Create the SVG element
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("version", "1.1");
  svg.setAttribute("id", "Layer_1");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
  svg.setAttribute("viewBox", "-143 145 512 512");
  svg.setAttribute("xml:space", "preserve");
  svg.setAttribute("stroke", "");
  svg.setAttribute("class", "linkedin-icon icon");
  svg.setAttribute("width",width)
  // Create groups
  const bgCarrier = document.createElementNS("http://www.w3.org/2000/svg", "g");
  bgCarrier.setAttribute("id", "SVGRepo_bgCarrier");
  bgCarrier.setAttribute("stroke-width", "0");
  
  const tracerCarrier = document.createElementNS("http://www.w3.org/2000/svg", "g");
  tracerCarrier.setAttribute("id", "SVGRepo_tracerCarrier");
  tracerCarrier.setAttribute("stroke-linecap", "round");
  tracerCarrier.setAttribute("stroke-linejoin", "round");
  
  const iconCarrier = document.createElementNS("http://www.w3.org/2000/svg", "g");
  iconCarrier.setAttribute("id", "SVGRepo_iconCarrier");
  
  // Create path and rect elements
  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("d", "M-143,145v512h512V145H-143z M339,627h-452V175h452V627z");
  
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", "-8.5");
  rect.setAttribute("y", "348.4");
  rect.setAttribute("width", "49.9");
  rect.setAttribute("height", "159.7");
  
  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("d", "M127.9,508.1v-86.3c0-4.9-0.2-9.7,1.2-13.1c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8 c0-49.4-27.8-72.4-63.3-72.4c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7H127.9z");
  
  const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.setAttribute("d", "M14.7,328.4h0.4c18.8,0,30.5-12.3,30.4-27.7C45.1,284.9,33.8,273,15.4,273c-18.4,0-30.5,11.9-30.5,27.7 C-15.1,316.2-3.4,328.4,14.7,328.4z");
  
  // Append elements to the SVG
  svg.appendChild(bgCarrier);
  svg.appendChild(tracerCarrier);
  svg.appendChild(iconCarrier);
  iconCarrier.appendChild(path1);
  iconCarrier.appendChild(rect);
  iconCarrier.appendChild(path2);
  iconCarrier.appendChild(path3);

  // Append the SVG to a target element in your HTML
  return svg;
};
export const InstagramIcon = () => {
  // Create the SVG element
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "64px");
  svg.setAttribute("height", "64px");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  // Create the path elements
  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("fill-rule", "evenodd");
  path1.setAttribute("clip-rule", "evenodd");
  path1.setAttribute(
    "d",
    "M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
  );
  path1.setAttribute("fill", "#ffffff");

  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute(
    "d",
    "M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
  );
  path2.setAttribute("fill", "#ffffff");

  const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.setAttribute("fill-rule", "evenodd");
  path3.setAttribute("clip-rule", "evenodd");
  path3.setAttribute("d", "M1.65396 4.27606 ..."); // Replace with the actual path data
  path3.setAttribute("fill", "#ffffff");

  // Append the path elements to the SVG
  const iconCarrier = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );
  iconCarrier.appendChild(path1);
  iconCarrier.appendChild(path2);
  iconCarrier.appendChild(path3);

  svg.appendChild(iconCarrier);

  // Append the SVG to a target element in your HTML
  return svg;
};
