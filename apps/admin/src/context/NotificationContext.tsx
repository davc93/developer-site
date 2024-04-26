import { createContext } from 'react'

export const NotificationContext = createContext<{ notifications: string[], addNotification: any }>({
  notifications: [],
  addNotification: () => {}
})
