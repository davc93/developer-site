import { createColumnHelper } from '@tanstack/react-table'
import type {
  ColumnFiltersState,
  PaginationState,
  SortingState
} from '@tanstack/react-table'
import type { MessageResponse } from '@/models/message.model'
import { useState } from 'react'
import { TableServer, Typography, TypographySize } from 'ui-react'
import { useMessages } from '@/hooks/useMessages'

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

export const ContactPage = (): JSX.Element => {
  // const defaultSorting: SortingState = [
  //   {
  //     id: 'createdAt',
  //     desc: true
  //   }
  // ]
  // const defaultPagination: PaginationState = {
  //   pageSize: 10,
  //   pageIndex: 0
  // }
  // const defaultFilters: ColumnFiltersState = []

  const { messagesQuery, nextPage, previousPage, sort } = useMessages()
  return (
    <div>
      <Typography size={TypographySize.titleSmall}>Contact Page</Typography>
      <div className="mt-8">
        {messagesQuery.isError && (
          <p style={{ color: 'white' }}>{messagesQuery.error.message}</p>
        )}
        <TableServer
          data={messagesQuery.data?.results ?? []}
          rowCount={messagesQuery.data?.info.total}
          columns={columns}
          handleNextClick={nextPage}
          handlePreviousClick={previousPage}
          handleSortClick={sort}
          isLoading={messagesQuery.isLoading}
        />
      </div>
    </div>
  )
}
