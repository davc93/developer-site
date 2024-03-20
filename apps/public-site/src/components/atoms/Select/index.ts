import "ui-styles/src/select.css"
interface Option {
    label:string;
    value:string;
}

export interface SelectProps {
    options:Option[]
}

export const createSelect = ({options}:SelectProps) => {
  // Create a div element with class "box"
  const divElement = document.createElement("div");
  divElement.className = "box";

  // Create a select element
  const selectElement = document.createElement("select");

  options.forEach((option)=>{

    const optionElement = document.createElement("option");
    optionElement.text = option.label;
    optionElement.value = option.value
    selectElement.appendChild(optionElement);
  })
  // Create and add option elements to the select element
//   for (var i = 1; i <= 5; i++) {
//     var optionElement = document.createElement("option");
//     optionElement.text = "Option " + i;
//     selectElement.appendChild(optionElement);
//   }

  // Append the select element to the div element
  divElement.appendChild(selectElement);

  // Append the div element to the document body (or another element of your choice)
  return divElement;
};
