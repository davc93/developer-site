import { useQuery } from '@tanstack/react-query'
import type { Label } from '@/models/label.model'
import { config } from '@/config'

export async function getLabel(id: string): Promise<Label> {
  const response = await fetch(`${config.apiUri}/labels/${id}`)
  const data = await response.json()

  if (data.error) {
    throw new Error(data.message as string)
  }
  return data
}
export const useLabelQuery = (id: number) => {
  const query = useQuery({
    queryKey: ['label', id],
    queryFn: async () => await getLabel(`${id}`),
    staleTime: 1000 * 60 * 30
  })
  return query
}
