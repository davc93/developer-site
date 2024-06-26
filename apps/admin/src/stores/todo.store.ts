import { create, type StateCreator } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { customSessionStorage } from './storages/session-storage'
export enum Status {
  OPEN = 'open',
  IN_PROGRESS = 'in-progress',
  DONE = 'done'
}

export interface Task {
  id: string
  title: string
  status: Status
}

interface TaskState {
  tasks: Record<string, Task>
  draggingTaskId?: string
  setDraggingTaskId: (taskId: string) => void
  getTasksByStatus: (status: Status) => Task[]
  removeDraggingTaskId: () => void
  addTask: (title: string, status: Status) => void
  onTaskDrop: (status: Status) => void
  changeTaskStatus: (id: string, status: Status) => void
}

const todoStoreAPI: StateCreator<TaskState, [['zustand/immer', never]]> = (
  set,
  get
) => ({
  tasks: {},
  draggingTaskId: undefined,
  getTasksByStatus: (status: Status) =>
    Object.values(get().tasks).filter((task) => task.status === status),
  setDraggingTaskId: (taskId: string) => {
    set({ draggingTaskId: taskId })
  },
  removeDraggingTaskId: () => {
    set({ draggingTaskId: undefined })
  },
  addTask: (title: string, status: Status) => {
    const newTask = { id: crypto.randomUUID(), title, status }
    set((state) => {
      state.tasks[newTask.id] = newTask
    })
  },
  changeTaskStatus: (id: string, status: Status) => {
    const task = { ...get().tasks[id] }
    task.status = status

    set((state) => {
      state.tasks[id] = {
        ...task
      }
    })
  },
  onTaskDrop: (status: Status) => {
    const taskId = get().draggingTaskId

    if (!taskId) {
      return
    }

    get().changeTaskStatus(taskId, status)

    get().removeDraggingTaskId()
  }
})

export const useTodoStore = create<TaskState>()(
  devtools(
    persist(immer(todoStoreAPI), {
      name: 'todo-storage',
      storage: createJSONStorage(() => customSessionStorage)
    })
  )
)
