import type { User } from '@/models/user.model'
import { authService } from '@/services/auth.service'
import { create, type StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export enum AuthStatus {
  AUTHORIZED = 'authorized',
  PENDING = 'pending',
  UNAUTHORIZED = 'unauthorized'
}

export interface AuthState {
  token?: string
  user?: User
  status: AuthStatus
  logIn: (email: string, password: string) => Promise<void>
  logout: () => void,
  setToken:(token:string) => void
}

const storeApi: StateCreator<AuthState> = (set, get) => {
  return {
    user: undefined,
    token: undefined,
    status: AuthStatus.PENDING,
    setToken:(token:string)=>{
      set({
        token
      })
    },
    logIn: async (email: string, password: string) => {
      try {
        const { token } = await authService.login(email, password)
        set({
          user: {
            id: '',
            email: '',
            role: ''
          },
          token,
          status: AuthStatus.AUTHORIZED
        })
      } catch (error) {
        set({
          user: undefined,
          token: undefined,
          status: AuthStatus.UNAUTHORIZED
        })
        throw new Error('Unauthorized')
      }
    },
    logout: () => {
      set({
        user: undefined,
        token: undefined,
        status: AuthStatus.UNAUTHORIZED
      })
    }
  }
}

export const useAuthStore = create<AuthState>()(
  devtools(persist(storeApi, { name: 'auth-store' }))
)
