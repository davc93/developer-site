import { useTodoStore } from '@/stores'
import { Route, Routes } from 'react-router-dom'
import { Typography, TypographySize } from 'ui-react'
import { TaskList } from './components/TaskList'
import { Status } from '@/stores/todo.store'

export const TasksApp = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<HomePage />} path="" />
    </Routes>
  )
}

const HomePage = (): JSX.Element => {
  const open = useTodoStore((state) => state.getTasksByStatus(Status.OPEN))
  const inProgress = useTodoStore((state) =>
    state.getTasksByStatus(Status.IN_PROGRESS)
  )
  const done = useTodoStore((state) => state.getTasksByStatus(Status.DONE))

  return (
    <div className="h-full w-full">
      <Typography size={TypographySize.titleSmall}>Todo App</Typography>
      <div className="flex gap-4">
        <TaskList tasks={open} title="Open" id={Status.OPEN} />
        <TaskList
          tasks={inProgress}
          title="In Progress"
          id={Status.IN_PROGRESS}
        />
        <TaskList tasks={done} title="Done" id={Status.DONE} />
      </div>
    </div>
  )
}
