import {
  ButtonSizes,
  ButtonStyles,
  createButton,
} from "../../components/atoms/Button";
import { NotificationType } from "../../components/molecules/Notification";
import { profileButton, profileInfo } from "../../nodes";
import { authService } from "../../services/auth.service";
import { showNotification } from "../../utils";
import "./style.css";
export const createProfilePage = () => {
  const getInfo = createButton({
    label: "Get info",
    size: ButtonSizes.LARGE,
    style: ButtonStyles.PRIMARY,
  });
  getInfo.addEventListener("click", async () => {
      getInfo.classList.add("button--loading")
    try {
      const userInfo = await authService.getUserInfo();
      
      profileInfo.innerHTML = JSON.stringify(userInfo)
      profileInfo.classList.add("typography","typography--white")
    } catch (error) {
      showNotification({
        type: NotificationType.ERROR,
        description: `${error}`,
        title: "Error",
      });
    }
    getInfo.classList.remove("button--loading")

  });
  profileButton.append(getInfo);
};
