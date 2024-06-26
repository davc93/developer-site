import type { StateCreator } from 'zustand'

export interface StartDateSlice {
  startDateTime: number
  startDateYYYYMMDD: () => string
  startHourHHMM: () => string
  setStartDate: (date: string) => void
  setStarTime: (time: string) => void
}

export const createStartDateSlice: StateCreator<StartDateSlice> = (set, get) => {
  return {
    startDateTime: new Date().getTime(),
    startDateYYYYMMDD: () => {
      const date = new Date(get().startDateTime)
      return date.toISOString().split('T')[0]
    },
    startHourHHMM: () => {
      const date = new Date(get().startDateTime)
      const hours = date.getHours().toString().padStart(2, '0')
      const minutes = date.getMinutes().toString().padStart(2, '0')
      return `${hours}:${minutes}`
    },
    setStartDate: (parcialDate: string) => {
      const date = new Date(parcialDate)
      const year = date.getFullYear()
      const month = date.getMonth()
      const day = date.getDate() + 1
      const newDate = new Date(get().startDateTime)
      newDate.setFullYear(year, month, day)
      set({
        startDateTime: newDate.getTime()
      })
    },
    setStarTime: (time: string) => {
      // 23:45
      const hours = parseInt(time.split(':')[0])
      const minutes = parseInt(time.split(':')[1])
      const date = new Date(get().startDateTime)
      date.setHours(hours, minutes)
      set({
        startDateTime: date.getTime()
      })
    }
  }
}
