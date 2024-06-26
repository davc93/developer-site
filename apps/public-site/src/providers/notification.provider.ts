import { animate } from 'motion'
import {
  createNotification,
  type NotificationProps
} from '../components/ui/molecules/Notification'
interface ShowNotificationProps {
  duration?: number
}
export const showNotification = ({
  duration = 4500,
  title,
  description,
  type
}: ShowNotificationProps & NotificationProps): void => {
  const notification = createNotification({ title, description, type })
  notification.style.position = 'fixed'
  notification.style.top = '5px'
  notification.style.right = '5px'
  notification.style.zIndex = '20'

  document.body.append(notification)
  animate(
    notification,
    { x: [600, 0] },
    {
      duration: 0.5
    }
  )

  setTimeout(() => {
    animate(
      notification,
      { x: 600 },
      {
        duration: 1.5
      }
    )
    setTimeout(() => {
      notification.remove()
    }, 1000)
  }, duration)
}
