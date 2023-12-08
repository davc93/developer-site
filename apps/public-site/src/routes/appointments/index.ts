import {
  ButtonSizes,
  ButtonStyles,
  createButton,
} from "../../components/Button";
import { loginButton } from "../../nodes";
import "./style.css";
export function createAppointmentsPage() {
  const button = createButton({
    label: "Login",
    style: ButtonStyles.outlined,
    type: "button",
    size: ButtonSizes.LARGE,
  });
  
  button.addEventListener("click",async function(){
    this.classList.add("button--loading")
    window.open("http://localhost:3000/api/auth/login")
    this.classList.remove("button--loading")
    
  })
  loginButton.append(button);
}
