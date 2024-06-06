import { useTodoStore } from '@/stores'
import React from 'react'
import { Typography, TypographySize } from 'ui-react'

interface TaskItemProps {
  id: string
  title: string
}
export const TaskItem = ({ id, title }: TaskItemProps) => {
  const setDraggingTaskId = useTodoStore((state) => state.setDraggingTaskId)
  const removeDraggingTaskId = useTodoStore((state) => state.removeDraggingTaskId)
  const handleDrag = () => {
    setDraggingTaskId(id)
  }
  const handleDrop = () => {
    removeDraggingTaskId()
  }
  return (
    <div className="shadow-xl py-2 w-fit" draggable onDragStart={handleDrag} onDragEnd={handleDrop}>
      <Typography size={TypographySize.bodyLarge}>{title}</Typography>
    </div>
  )
}
