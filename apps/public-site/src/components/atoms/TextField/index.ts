import { ErrorIcon } from "../../icons/ErrorIcon";

export enum TextFieldInputType {
  TEXT = "text",
  PASSWORD = "password",

}

export interface TextFieldProps {
  label: string;
  name:string;
  error?:string;
  placeholder?:string;
  hidden?: boolean;
  inputType?: TextFieldInputType;
}

export const createTextField = ({
  label,
  inputType = TextFieldInputType.TEXT,
  name,
  error,
  placeholder,
  
}: TextFieldProps) => {

  // Create input fields with labels
  const inputNames = `${label}`;
  const inputTypes = inputType;
  const inputValues = "";
  const inputContainer = document.createElement("label");
  inputContainer.classList.add("input-container");

  const input = document.createElement("input");
  input.name = name
  input.setAttribute("type", inputTypes);
  input.classList.add("input");
  input.setAttribute("value", inputValues);
  input.placeholder = placeholder ?? ""
  if (error) {
    input.classList.add("input--error")
  }

  const labelElement = document.createElement("span");
  labelElement.classList.add("input__label");
  labelElement.textContent = inputNames;
  if (error) {
    
    const errorMessage = document.createElement("div")
    errorMessage.classList.add("error-message")
    const errorMessageText = document.createElement("span")
    errorMessageText.textContent = error
    errorMessageText.classList.add("error-message__text")
    const icon = ErrorIcon()
    icon.classList.add("error-message__icon")
    
    errorMessage.append(icon,errorMessageText)
    inputContainer.append(errorMessage)
  }
  inputContainer.append(input,labelElement);
  
  return inputContainer;
};
