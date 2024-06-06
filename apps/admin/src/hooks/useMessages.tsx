import { keepPreviousData, useQuery } from '@tanstack/react-query'

import type { MessageResponse } from '@/models/message.model'
import { config } from '@/config'
import { AuthContext } from '@/providers/auth-provider'
import { useContext, useEffect, useState } from 'react'

type Filter = {
  field: string
  operator: string
  value: string
}

const fetchMessages = async (
  page: string = '1',
  token: string,
  orderBy: string = 'id',
  orderDirection: 'desc' | 'asc' = 'desc',
  filters?: Filter[]
): Promise<MessageResponse> => {
  const params = new URLSearchParams()
  params.append('page', page)
  params.append('pageSize', '10')
  params.append('orderBy', orderBy)
  params.append('orderDirection', orderDirection)
  filters?.forEach((filter) => {
    params.append(`filters[${filter.field}][${filter.operator}]`, filter.value)
  })
  const response = await fetch(
    `${config.apiUri}/messages?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  const data: MessageResponse = await response.json()
  if (!response.ok) {
    throw new Error('Something went wrong')
  }

  return data
}
export const useMessages = () => {
  const { token } = useContext(AuthContext)
  const [page, setPage] = useState(1)
  const [order, setOrder] = useState<{
    orderBy: string
    orderDirection: 'asc' | 'desc'
  }>({ orderBy: 'createdAt', orderDirection: 'desc' })
  useEffect(() => {
    setPage(1)
  }, [order])

  const messagesQuery = useQuery({
    queryKey: ['messages', { page, order }],
    queryFn: async () =>
      await fetchMessages(
        `${page}`,
        token ?? '',
        order.orderBy,
        order.orderDirection
      ),
    staleTime: 1000 * 60
  })
  const firstPage = (): void => {
    setPage(1)
  }
  const nextPage = (): void => {
    setPage(page + 1)
  }
  const previousPage = (): void => {
    setPage(page - 1)
  }
  const sort = async (order: {
    orderBy: string
    orderDirection: 'desc' | 'asc'
  }): Promise<void> => {
    setOrder(order)
  }

  return {
    messagesQuery,
    page,
    nextPage,
    previousPage,
    sort,
    order,
    firstPage
  }
}
