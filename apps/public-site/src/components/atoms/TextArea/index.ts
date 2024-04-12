import "ui-styles/src/text-area.css";

export interface TextAreaProps {
  hidden?: boolean;
  label: string;
  required?: boolean;
  name?: string;
}

export const createTextArea = ({
  label,
  required = false,
  name = "",
}: TextAreaProps) => {
  // Create input fields with labels
  const inputNames = `${label}${required ? " *" : ""}`;
  const inputValues = "";
  const inputContainer = document.createElement("div");
  inputContainer.classList.add("text-area-container");

  const input = document.createElement("textarea");
  input.name = name;
  input.classList.add("text-area");
  input.setAttribute("value", inputValues);
  if (required) {
    input.setAttribute("required", "true");
  }

  const labelElement = document.createElement("label");
  labelElement.classList.add("text-area__label");
  labelElement.textContent = inputNames;

  inputContainer.append(labelElement, input);

  return inputContainer;
};
