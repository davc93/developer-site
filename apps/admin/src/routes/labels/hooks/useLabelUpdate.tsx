import { config } from '@/config'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { UpdateLabelDto, Label } from '@/models/label.model'
import { useContext } from 'react'
import { AuthContext } from '@/providers/auth-provider'
import { NotificationContext } from '@/providers/notification-provider'
import { useNavigate } from 'react-router-dom'
import { NotificationType } from 'ui-react'

const updateLabel = async (
  token: string,
  changes: UpdateLabelDto,
  id: string
): Promise<Label> => {
  const response = await fetch(`${config.apiUri}/labels/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify(changes)
  })

  const jsonData = await response.json()

  if (!response.ok) {
    throw new Error(
      typeof jsonData.message === 'string' ? (jsonData.message as string) : ''
    )
  }
  return jsonData
}
export const useLabelUpdate = () => {
  const { token } = useContext(AuthContext)
  const { addNotification } = useContext(NotificationContext)
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: async ({ id, ...changes }: UpdateLabelDto & { id: number }) =>
      await updateLabel(token ?? '', changes, `${id}`),
    onSuccess: async () => {
      addNotification({
        title: 'Label updated succesfully',
        type: NotificationType.INFO,
        message: ''
      })
      queryClient.invalidateQueries({ queryKey: ['labels', 'infinite'] })
      navigate('../..',{relative:'path'})
    }
  })
  return mutation
}
