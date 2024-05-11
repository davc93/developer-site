import { config } from '@/config'
import { AuthContext } from '@/context/AuthContext'
import { useQuery } from '@tanstack/react-query'
import { createColumnHelper } from '@tanstack/react-table'
import type { ColumnFiltersState, SortingState } from '@tanstack/react-table'

import { useContext, useState } from 'react'
import { TableServer, Typography, TypographySize } from 'ui-react'
import type { MessageResponse } from '@/models/message.model'

const columnHelper = createColumnHelper<MessageResponse['results']>()

const columns = [
  columnHelper.accessor('email', {
    header: 'Email'
  }),
  columnHelper.accessor('organization', {
    header: 'Organization'
  }),
  columnHelper.accessor('message', {
    header: 'Message'
  }),
  columnHelper.accessor('createdAt', {
    header: 'Fecha',
    cell: (props) =>
      new Date(props.getValue() as string).toLocaleString('es-CL')
  })
]

const fetchMessages = async (
  page: number,
  token: string,
  sort: { orderBy: string, orderDirection: string } = {
    orderBy: 'id',
    orderDirection: 'desc'
  }
): Promise<MessageResponse> => {
  const response = await fetch(
    `${config.apiUri}/messages?page=${page}&pageSize=10&orderBy=${sort.orderBy}&orderDirection=${sort.orderDirection}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  const data: MessageResponse = await response.json()
  if (!response.ok) {
    throw new Error('Somethin went wrong')
  }

  return data
}
export const ContactPage = (): JSX.Element => {
  const { token } = useContext(AuthContext)
  const [pagination, setPagination] = useState({
    pageSize: 10,
    pageIndex: 0
  })
  const defaultSorting = [{
    id: 'createdAt',
    desc: true
  }]
  const [sorting, setSorting] = useState<SortingState>(defaultSorting)
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const handleNextClick = (): void => {
    setPagination({ ...pagination, pageIndex: pagination.pageIndex + 1 })
  }
  const handlePreviousClick = (): void => {
    setPagination({ ...pagination, pageIndex: pagination.pageIndex - 1 })
  }
  const query = useQuery({
    queryKey: ['messages', pagination, sorting],
    queryFn: async () =>
      await fetchMessages(pagination.pageIndex + 1, token as string, {
        orderBy: sorting[0].id,
        orderDirection: sorting[0].desc ? 'desc' : 'asc'
      })
  })

  const handleSortClick = async (
    toSort: SortingState[0] | null
  ): Promise<void> => {
    if (!toSort) {
      setSorting(defaultSorting)
    } else {
      setSorting([toSort])
    }
  }

  return (
    <div>
      <Typography size={TypographySize.titleSmall}>Contact Page</Typography>
      <div className="mt-8">
        {query.isError && (
          <p style={{ color: 'white' }}>{query.error.message}</p>
        )}
        <TableServer
          data={(query.data?.results as MessageResponse['results']) ?? []}
          rowCount={query.data?.info.total}
          columns={columns}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
          handleSortClick={handleSortClick}
          pagination={pagination}
          setPagination={setPagination}
          sorting={sorting}
          setSorting={setSorting}
          isLoading={query.isFetching || query.isLoading }
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
        />
      </div>
    </div>
  )
}
