import {
  ButtonSizes,
  ButtonStyles,
  createButton,
} from "../../components/Button";
import { NotificationType } from "../../components/Notification";
import { TypographyColor } from "../../components/Typography";
import { profileButton, profileInfo } from "../../nodes";
import { authService } from "../../services/auth.service";
import { showNotification } from "../../utils/notifications";
import "./style.css";
export const createProfilePage = () => {
  const getInfo = createButton({
    label: "Get info",
    size: ButtonSizes.LARGE,
    style: ButtonStyles.outlined,
  });
  getInfo.addEventListener("click", async (event) => {
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
