import 'ui-styles/src/table.css'
import { IconArrow } from '../../icons/icon-arrow'
import {
  useReactTable,
  getFilteredRowModel,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  ColumnDef
} from '@tanstack/react-table'
import { useState, useRef } from 'react'
import { TableRow } from './table-row'
import { Button, ButtonSizes } from '../button'
import { Input } from '../input'
import { Typography, TypographySize } from '../typography'
import type { Action } from './models'
interface TableClientProps {
  data: unknown[]
  columns: ColumnDef<any, any>[]
  actions?: Action[]
}

export const TableClient = ({ data, columns, actions }: TableClientProps) => {
  const [globalFilter, setGlobalFilter] = useState('')
  const table = useReactTable({
    data,
    columns,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      globalFilter
    },
    onGlobalFilterChange: setGlobalFilter
  })
  return (
    <>
      <Input
        value={globalFilter ?? ''}
        onChange={(event) => {
          setGlobalFilter(String(event?.target.value))
        }}
        label="Search"
        placeholder="Enter a keyword "
      />
      <div className="table-container">
        <table className="table">
          <thead>
            {table.getHeaderGroups().map((group, i) => {
              return (
                <tr className="table__header-row" key={i}>
                  {group.headers.map((header, i) => {
                    const ref = useRef<HTMLDivElement>(null)
                    const handleOrderClick = () => {
                      header.column.toggleSorting()
                      const sort = header.column.getNextSortingOrder()
                      if (sort == 'asc') {
                        ref.current?.classList.add('table__order-icon--asc')
                        ref.current?.classList.remove('table__order-icon--desc')
                      } else if (sort == 'desc') {
                        ref.current?.classList.add('table__order-icon--desc')
                        ref.current?.classList.remove('table__order-icon--asc')
                      } else {
                        ref.current?.classList.remove('table__order-icon--desc')
                        ref.current?.classList.remove('table__order-icon--asc')
                      }
                    }
                    return (
                      <th
                        key={i}
                        style={{
                          cursor: header.column.getCanSort()
                            ? 'pointer'
                            : 'default'
                        }}
                      >
                        <div onClick={handleOrderClick} className="table__header-cell-container">
                          
                            <span 
                            className="table__header-cell"
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </span>

                            <div ref={ref} className="table__order-icon">
                              {header.column.getCanSort() && (
                                <IconArrow fill="var(--primary--500)" />
                              )}
                            </div>
                        </div>
                      </th>
                    )
                  })}
                  <th></th>
                </tr>
              )
            })}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, index) => {
              return <TableRow key={index} {...row} actions={actions} />
            })}
          </tbody>
        </table>
      </div>

      <div className="table-pagination">
        <Button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
          size={ButtonSizes.SMALL}
        >
          Prev
        </Button>
        <Typography
          style={{ minWidth: 20, textAlign: 'center' }}
          size={TypographySize.bodyLarge}
        >
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </Typography>
        <Button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          size={ButtonSizes.SMALL}
        >
          Next
        </Button>
      </div>
    </>
  )
}
