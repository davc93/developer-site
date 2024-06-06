import { useCookies } from '@/hooks/useCookies'
import { createContext, type ReactNode } from 'react'

export const AuthContext = createContext<{
  token: string | null
  setToken: any
  deleteToken: any
}>({ token: null, setToken: null, deleteToken: null })

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { cvalue, setCookie, removeCookie } = useCookies('auth')

  return (
    <AuthContext.Provider
      value={{ token: cvalue, setToken: setCookie, deleteToken: removeCookie }}
    >
      {children}
    </AuthContext.Provider>
  )
}
