import type { StateCreator } from 'zustand'

export enum WeeklyWorkDayHours {
  FEW = 10,
  PARTIAL = 20,
  FULL = 40
}

export interface WorkingSlice {
  setWorksHours: (hours: WeeklyWorkDayHours) => void
  workHours?: WeeklyWorkDayHours
}

export const createWorkingSlice: StateCreator<WorkingSlice> = (set, get) => {
  return {
    weeklyWorkDayHours: WeeklyWorkDayHours,
    setWorksHours: (workHours) => set({ workHours })
  }
}
