import type { StateStorage } from 'zustand/middleware'

export const customSessionStorage: StateStorage = {
  getItem: function (name: string): string | Promise<string | null> | null {
    // throw new Error('Function not implemented.')
    const data = sessionStorage.getItem(name)
    return data
  },
  setItem: function (name: string, value: string): void {
    // throw new Error('Function not implemented.')
    sessionStorage.setItem(name, value)
  },
  removeItem: function (name: string): void {
    // throw new Error('Function not implemented.')
    sessionStorage.removeItem(name)
  }
}
