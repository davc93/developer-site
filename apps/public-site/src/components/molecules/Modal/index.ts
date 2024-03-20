import "ui-styles/src/modal.css"
import { createButton, ButtonStyles, ButtonSizes, } from "@/components/atoms/Button";
import { CloseIcon } from "@/components/icons/CloseIcon";
import type { ButtonProps } from "@/components/atoms/Button";
export interface ModalProps extends Partial<ButtonProps> {
  element:HTMLElement;
  hidden?: boolean;
  width?:string;
  height?:string;
  
}




export const createModal = ({element,icon,disable,label = "button",style = ButtonStyles.PRIMARY,size = ButtonSizes.LARGE}: ModalProps) => {
  const button = createButton({
    label,
    style,
    size,
    icon,
    disable
  });
  button.addEventListener("click", () => {
    modalDiv.classList.add("modal--active");
  });
  const modalDiv = document.createElement("div");
  modalDiv.className = "modal";

  const closeModal = document.createElement("button")
  closeModal.type = "button"
  closeModal.append(CloseIcon())
  
  closeModal.classList.add("modal__close-icon");
  closeModal.addEventListener("click", () => {
    modalDiv.classList.add("modal--closing");

  });
  modalDiv.addEventListener("animationend",(ev) => {
    if (ev.animationName == "fade-out") {
      modalDiv.classList.remove("modal--active", "modal--closing");
    }
  }
  )
  document.addEventListener("keydown",function(event) {
    if (event.key === 'Escape' && modalDiv.classList.contains("modal--active")) {
      modalDiv.classList.add("modal--closing");

    }
})
  element.classList.add("modal-wrap")
  element.append(closeModal)
  // Append the modal wrapper to the modal container
  modalDiv.append(element);
  document.body.append(modalDiv)
  // Append the main container div to the body of the HTML document
  return button;
};
