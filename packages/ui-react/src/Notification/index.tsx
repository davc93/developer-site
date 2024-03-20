import { CrossIcon } from "@/Icons/CrossIcon";
import "ui-styles/src/notification.css"
type NotificationProps = {
    message:string
}

export function Notification({ message }:NotificationProps) {
  return (
    <div className="notification">
      
      <p className="notification__text-content">{message}</p>
      <div className="notification__icon">
        <CrossIcon />
      </div>
    </div>
  );
}