import { createContext } from 'react'

enum NotificationType {
  ERROR = "error",
  INFO = "info"
}

export type NotificationProps ={
  id?:string,
  title:string,
  message:string
  type: NotificationType
}

export const NotificationContext = createContext<{ notifications: NotificationProps[],setNotifications:any, addNotification: (notification:NotificationProps)=>void }>({
  notifications: [],
  addNotification: () => {},
  setNotifications:undefined
})
