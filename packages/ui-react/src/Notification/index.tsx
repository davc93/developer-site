import "../../../../styles/notification.css"
type NotificationProps = {
    message:string
}

export function Notification({ message }:NotificationProps) {
  return (
    <div className="notification">
      <p>{message}</p>
    </div>
  );
}