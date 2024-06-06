import { create } from 'zustand'
import type { UserSlice } from './user.slice'
import { createUserSlice } from './user.slice'
import { devtools } from 'zustand/middleware'
import { createWorkingSlice, type WorkingSlice } from './working.slice'
import { createStartDateSlice, type StartDateSlice } from './start-date.slice'
type ShareState = UserSlice & WorkingSlice & StartDateSlice

export const useRegisterStore = create<ShareState>()(
  devtools((...a) => {
    return {
      ...createUserSlice(...a),
      ...createWorkingSlice(...a),
      ...createStartDateSlice(...a)
    }
  })
)
