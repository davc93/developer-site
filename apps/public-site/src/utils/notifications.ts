import { animate } from "motion"
import { createNotification ,NotificationProps} from "../components/Notification"
type ShowNotificationProps = {
    duration?:number
}
export const showNotification = ( {duration = 4500,title,description,type}:ShowNotificationProps & NotificationProps ) => {

    const notification = createNotification({title,description,type})
    notification.style.position = "fixed"
    notification.style.top = "5px"
    notification.style.right = "5px"
    notification.style.zIndex = "20"

    document.body.append(notification)
    animate(notification,{x:[600,0]},{
      duration:0.5
    })

    setTimeout(() => {
      animate(notification,{x:600},{
        duration:1.5
      })
      setTimeout(() => {
        notification.remove()
        
      }, 1000);
  
    }, duration);
  
}

export function shuffleArray(array:any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements at i and j
  }
}
