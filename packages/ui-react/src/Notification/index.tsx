import { IconCross } from "../icons/icon-cross";
import "ui-styles/src/notification.css"
type NotificationProps = {
    message:string
}

export function Notification({ message }:NotificationProps) {
  return (
    <div className="notification">
      
      <p className="notification__text-content">{message}</p>
      <div className="notification__icon">
        <IconCross />
      </div>
    </div>
  );
}