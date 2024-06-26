import React from 'react'
import { TaskItem } from './TaskItem'
import { type Status, useTodoStore, type Task } from '@/stores/todo.store'
import { Button, ButtonSizes, Typography, TypographySize } from 'ui-react'
import type { DragEvent } from 'react'
interface TaskListProps {
  tasks: Task[]
  id: Status
  title: string
}
export const TaskList = ({ tasks, title, id: status }: TaskListProps) => {
  const onTaskDrop = useTodoStore((state) => state.onTaskDrop)
  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()

    onTaskDrop(status)
    // alert(`${title} dragover`)
  }
  const handleOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }
  const handleLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }
  const addTask = useTodoStore((state) => state.addTask)
  // const addTask = useTodoStore((state)=> state.)
  const handleAddTask = () => {
    const title = prompt('Ingresa el titulo de la tarea')
    if (title) {
      addTask(title, status)
    }
  }
  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleOver}
      onDragLeave={handleLeave}
      style={{ minWidth: 250, minHeight: 100 }}
      className="shadow-md rounded-md"
    >
      <div className="px-4 flex justify-between items-center border-b-pink-600 border-b-2 pb-2">
        <Typography size={TypographySize.bodyLarge}>{title}</Typography>
        <Button size={ButtonSizes.SMALL} onClick={handleAddTask}>
          +
        </Button>
      </div>
      <div
        className="flex flex-col gap-2"
        // onDragLeave={handleDragLeave}
      >
        {tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </div>
    </div>
  )
}
