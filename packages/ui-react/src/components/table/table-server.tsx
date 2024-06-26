import type { ColumnDef } from '@tanstack/react-table'
import { getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { TableRow } from './table-row'
import type { Action } from './models'
import { TableHeader } from './table-header'
import { TablePagination } from './table-pagination'

export interface TableServerProps {
  data: unknown[]
  rowCount: number | undefined
  page: number
  order: any
  columns: ColumnDef<any, any>[]
  actions?: Action[]
  handleFirstPage: () => void
  handleNextClick: () => void
  handlePreviousClick: () => void
  handleSortClick: (order: {
    orderBy: string
    orderDirection: 'desc' | 'asc'
  }) => Promise<void>
  isLoading: boolean
}

export const TableServer = ({
  data,
  columns,
  actions,
  page,
  order,
  rowCount,
  handleNextClick,
  handlePreviousClick,
  handleSortClick,
  handleFirstPage,
  isLoading
}: TableServerProps) => {
  const table = useReactTable({
    data,
    columns,
    manualPagination: true,
    manualFiltering: true,
    manualSorting: true,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination: {
        pageIndex: page - 1,
        pageSize: 10
      },
      sorting: [
        {
          id: order.orderBy,
          desc: order.orderDirection == 'desc' ? true : false
        }
      ]
    },
    rowCount
  })
  return (
    <>
      <div className="table-filters"></div>
      <div className="table-container">
        <table className="table">
          <TableHeader
            table={table}
            handleFirstPage={handleFirstPage}
            handleSortClick={handleSortClick}
          />

          <tbody>
            {!isLoading &&
              table.getRowModel().rows.map((row, index) => {
                return <TableRow key={index} {...row} actions={actions} />
              })}
            {isLoading && <p style={{ color: 'white' }}>Loading ...</p>}
          </tbody>
        </table>
      </div>
      <TablePagination
        table={table}
        handleNextClick={handleNextClick}
        handlePreviousClick={handlePreviousClick}
        isLoading={isLoading}
      />
    </>
  )
}
