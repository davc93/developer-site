import { config } from '@/config'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { CreateLabelDto, Label } from '@/models/label.model'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { NotificationContext } from '@/context/NotificationContext'
import { useNavigate } from 'react-router-dom'
import { NotificationType } from 'ui-react/src/Notification'

const createLabel = async (
  labelData: CreateLabelDto | any,
  token: string
): Promise<Label> => {
  const response = await fetch(`${config.apiUri}/labels`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify(labelData)
  })

  const jsonData = await response.json()

  if (!response.ok) {
    throw new Error(
      typeof jsonData.message === 'string' ? (jsonData.message as string) : ''
    )
  }
  return jsonData
}
export const useLabelCreate = () => {
  const { token } = useContext(AuthContext)
  const { addNotification } = useContext(NotificationContext)
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: async (data: CreateLabelDto) =>
      await createLabel(data, token ?? ''),
    onSuccess: () => {
      addNotification({
        title: 'Label created succesfully',
        type: NotificationType.INFO,
        message: ''
      })
      queryClient.invalidateQueries({ queryKey: ['labels', 'infinite'] })
      navigate('/labels')
    }
  })
  return mutation
}
