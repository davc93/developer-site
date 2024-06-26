import { IconInfo } from "../../icons/icon-info";
import { IconCross } from "../../icons/icon-cross";
import "ui-styles/src/notification.css";
import { useEffect } from "react";

export enum NotificationType {
  ERROR = "error",
  INFO = "info",
}

type NotificationProps = {
  id?: string;
  title: string;
  message: string;
  type: NotificationType;
  onClose: (id: string | undefined) => () => void;
};

export function Notification({
  id,
  message,
  title,
  type,
  onClose,
}: NotificationProps) {
  const notificationTypeIcon = {
    error: <IconCross stroke="var(--error--300)" fill="var(--error--300)" />,
    info: <IconInfo stroke="var(--info--300)" fill="var(--info--300)" />,
  };
  useEffect(() => {
    setTimeout(() => {
      onClose(id)()
    }, 1000 * 10);
  
  }, [])
  
  return (
    <div className="notification">
      <div className="notification__title">
        <span className="notification__type-icon">
          {notificationTypeIcon[type]}
        </span>
        <span>

        {title}
        </span>
      </div>
      <p className="notification__text-content scrollbar--native">{message}</p>
      <div className="notification__icon" onClick={onClose(id)}>
        <IconCross stroke="var(--primary--400)" fill="var(--primary--400)" />
      </div>
    </div>
  );
}
