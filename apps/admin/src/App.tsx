import { useState } from 'react'
import { AuthContext } from '@/context/AuthContext'
import {
  NotificationContext,
  type NotificationProps
} from '@/context/NotificationContext'
import { Router } from '@/routes'
import { useCookies } from './hooks/useCookies'
import NotificationPortal from '@/components/NotificationPortal'

function App(): JSX.Element {
  const { cvalue, setCookie, removeCookie } = useCookies('auth')

  const [notifications, setNotifications] = useState<NotificationProps[]>([])

  const addNotification = (notification: NotificationProps): void => {
    setNotifications([
      ...notifications,
      { ...notification, id: crypto.randomUUID() }
    ])
  }
  return (
    <AuthContext.Provider
      value={{ token: cvalue, setToken: setCookie, deleteToken: removeCookie }}
    >
      <NotificationContext.Provider
        value={{ notifications, addNotification, setNotifications }}
      >
        <Router />
        <NotificationPortal />
      </NotificationContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
