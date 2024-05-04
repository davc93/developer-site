import "ui-styles/src/input.css"
import { ErrorIcon } from "@/components/icons/ErrorIcon"

export interface InputProps {
  label: string
  name: string
  error?: string
  placeholder?: string
}

export const createInput = ({
  label,
  name,
  error,
  placeholder
}: InputProps) => {
  // Create input fields with labels
  const inputNames = `${label}`
  const inputValues = ""
  const inputContainer = document.createElement("label")
  inputContainer.classList.add("input-container")

  const input = document.createElement("input")
  input.name = name
  input.classList.add("input")
  input.setAttribute("value", inputValues)
  input.placeholder = placeholder ?? ""
  if (error) {
    input.classList.add("input--error")
  }

  const labelElement = document.createElement("span")
  labelElement.classList.add("input__label")
  labelElement.textContent = inputNames

  inputContainer.append(labelElement, input)
  if (error) {
    const errorMessage = document.createElement("div")
    errorMessage.classList.add("error-message")
    const errorMessageText = document.createElement("span")
    errorMessageText.textContent = error
    errorMessageText.classList.add("error-message__text")
    const icon = ErrorIcon()
    icon.classList.add("error-message__icon")

    errorMessage.append(icon, errorMessageText)
    inputContainer.append(errorMessage)
  }

  return inputContainer
}
