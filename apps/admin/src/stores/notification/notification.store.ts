import { create, type StateCreator } from 'zustand'

enum Variant {
  ERROR,
  WARNING,
  INFO
}
export interface Notification {
  content: string
  title?: string
  duration?: number | null
  variant?: Variant
  actions?: JSX.Element[]
}

interface NotificationState {
  notifications: Notification[]
  showError: (notification: Omit<Notification, 'variant'>) => void
  showWarning: (notification: Omit<Notification, 'variant'>) => void
  showInfo: (notification: Omit<Notification, 'variant'>) => void
}

const NotificationStore: StateCreator<NotificationState> = (set, get) => ({
  notifications: [],
  showError: ({duration = 30,...notification}) => {
    const newNotification = {
        ...notification,
        duration,
        variant:Variant.ERROR
    }
    set({
        notifications:[...get().notifications,newNotification]
    })

  },
  showWarning: ({duration = 30,...notification}) => {
    const newNotification = {
        ...notification,
        duration,
        variant:Variant.WARNING
    }
    set({
        notifications:[...get().notifications,newNotification]
    })

  },

  showInfo: ({duration = 30,...notification}) => {
    const newNotification = {
        ...notification,
        duration,
        variant:Variant.WARNING
    }
    set({
        notifications:[...get().notifications,newNotification]
    })

  }
})

export const useNotifications = create<NotificationState>()(NotificationStore)
