import "./style.css"
import { messageService } from "@/services/message.service"
import { showNotification } from "@/utils"
import {
  ButtonSizes,
  ButtonStyles,
  createButton
} from "@/components/atoms/Button"
import { NotificationType } from "@/components/molecules/Notification"
import { createTextArea } from "@/components/atoms/TextArea"
import { createInput } from "@/components/atoms/Input"

export function createContactForm() {
  const form = document.createElement("form")
  form.className = "contact-form"
  const emailInput = createInput({
    label: "Email",
    name: "email"
  })
  const organizationInput = createInput({
    label: "Organization",
    name: "organization"
  })
  const messageInput = createTextArea({
    label: "Message",
    required: false,
    name: "message"
  })
  const submitButton = createButton({
    label: "Send",
    style: ButtonStyles.PRIMARY,
    type: "submit",
    size: ButtonSizes.WIDE
  })

  form.append(emailInput, organizationInput, messageInput, submitButton)
  form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const target = event.target as any
    submitButton.classList.add("button--loading")
    try {
      const body = {
        email: target?.email.value,
        organization: target?.organization.value,
        message: target?.message.value
      }

      await messageService.sendMessage(body)

      showNotification({
        type: NotificationType.SUCCESS,
        title: "Send successful",
        description: "Your message was send successfully"
      })
      const modalDiv = document.querySelector(".modal")
      modalDiv?.classList.remove("active")
      modalDiv?.classList.add("inactive")
    } catch (error: any) {
      showNotification({
        type: NotificationType.ERROR,
        title: "Error",
        description: `${error.message}`
      })
    }
    submitButton.classList.remove("button--loading")
  })
  return form
}
