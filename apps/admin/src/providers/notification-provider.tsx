import { createContext, type ReactNode, useState } from 'react'

enum NotificationType {
  ERROR = 'error',
  INFO = 'info'
}

export type NotificationProps = {
  id?: string
  title: string
  message: string
  type: NotificationType
}

export const NotificationContext = createContext<{
  notifications: NotificationProps[]
  setNotifications: any
  addNotification: (notification: NotificationProps) => void
}>({
  notifications: [],
  addNotification: () => {},
  setNotifications: undefined
})

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([])

  const addNotification = (notification: NotificationProps): void => {
    setNotifications([
      ...notifications,
      { ...notification, id: crypto.randomUUID() }
    ])
  }
  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, setNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  )
}
