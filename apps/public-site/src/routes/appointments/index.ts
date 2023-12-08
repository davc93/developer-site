import {
  ButtonSizes,
  ButtonStyles,
  createButton,
} from "../../components/Button";
import { NotificationType } from "../../components/Notification";
import { goTo } from "../../navigation";
import { loginButton } from "../../nodes";
import { authService } from "../../services/auth.service";
import { showNotification } from "../../utils/notifications";
import "./style.css";
export function createAppointmentsPage() {
  const button = createButton({
    label: "Login",
    style: ButtonStyles.outlined,
    type: "button",
    size: ButtonSizes.LARGE,
  });
  
  button.addEventListener("click",async function(e){
    this.classList.add("button--loading")
    window.open("http://localhost:3000/api/auth/login")
    this.classList.remove("button--loading")
    
  })
  loginButton.append(button);
}
