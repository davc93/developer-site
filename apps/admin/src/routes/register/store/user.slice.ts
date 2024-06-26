import type { StateCreator } from 'zustand'

export interface UserSlice {
  name: string
  email: string
  setName: (name: string) => void
  setEmail: (email: string) => void
}

export const createUserSlice: StateCreator<UserSlice> = (set) => {
  return {
    name: '',
    email: '',
    setEmail: (email) => set({ email }),
    setName: (name) => set({ name })
  }
}
