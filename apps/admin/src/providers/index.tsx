import { type ReactNode } from 'react'
import { NotificationProvider } from './notification-provider'
import { AuthProvider } from './auth-provider'
import { QueryClientProvider } from './query-client'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <NotificationProvider>
      <QueryClientProvider>
        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
    </NotificationProvider>
  )
}
