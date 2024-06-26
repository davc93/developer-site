import { config } from '@/config'
import { AuthContext } from '@/providers/auth-provider'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useContext, useState } from 'react'
import type { LabelsResponse } from '../models/Label'

type Filter = {
  field: string
  operator: string
  value: string
}

type Sort = Array<{
  index: number
  field: string
  desc: 'true' | 'false'
}>

interface QueryProps {
  sorting: Sort
  filters: Filter[]
}

const getLabels = async (
  token: string,
  pageParams: number,
  queryKey: Array<string | QueryProps>
): Promise<LabelsResponse> => {
  const [, , args] = queryKey
  const { sorting, filters } = args as QueryProps
  const params = new URLSearchParams()
  params.append('token', token)
  params.append('pagination[page]', `${pageParams}`)
  params.append('pagination[size]', '10')
  sorting?.forEach((sort) => {
    params.append(
      `sort[${sort.index}]`,
      `${sort.field}:${sort.desc ? 'desc' : 'asc'}`
    )
  })
  filters?.forEach((filter) => {
    params.append(`filters[${filter.field}][${filter.operator}]`, filter.value)
  })

  const response = await fetch(`${config.apiUri}/labels?${params.toString()}`)
  const data: LabelsResponse = await response.json()
  if (!response.ok) {
    throw new Error(typeof data === 'string' ? data : '')
  }
  return data
}

type SortState = Array<{
  index: number
  field: string
  desc: 'true' | 'false'
}>

export const useLabelsQuery = () => {
  const { token } = useContext(AuthContext)
  const [sorting, setSorting] = useState<SortState>([
    {
      index: 0,
      field: 'id',
      desc: 'true'
    }
  ])
  const [filters] = useState<Filter[]>([])
  const query = useInfiniteQuery({
    queryKey: ['labels', 'infinite', { sorting, filters }],
    queryFn: async ({ pageParam, queryKey }) =>
      await getLabels(token ?? '', pageParam, queryKey),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1
    }
  })

  const sort = async (sortState: SortState): Promise<void> => {
    setSorting(sortState)
  }
  return {
    query,
    setSorting: sort
  }
}
