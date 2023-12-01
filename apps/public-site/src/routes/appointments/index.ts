import {
  ButtonSizes,
  ButtonStyles,
  createButton,
} from "../../components/Button";
import { goTo } from "../../navigation";
import { loginButton } from "../../nodes";
import "./style.css";
export function createAppointmentsPage() {
  const button = createButton({
    label: "Login",
    style: ButtonStyles.outlined,
    type: "button",
    size: ButtonSizes.LARGE,
  });
  button.addEventListener("click",function(e){
    this.classList.add("button--loading")
    try {
     
    setTimeout(() => {
        goTo("/profile")
        this.classList.remove("button--loading")


    }, 3000);   
    } catch (error) {
        
    }
  })
  loginButton.append(button);
}
