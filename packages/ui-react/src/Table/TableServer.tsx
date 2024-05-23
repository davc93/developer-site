import type { ColumnDef } from '@tanstack/react-table'
import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import { Button, ButtonSizes } from '../Button'
import { Typography, TypographySize } from '../Typography'
import { IconArrow } from '../icons/icon-arrow'
import { useEffect, useRef } from 'react'
import { TableRow } from '.'
import { LoaderShape } from '../LoaderShape'
type Action = {
  name: string
  fn: (params: any) => void
}

interface TableServerProps {
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
      <div className="table-filters">
        {/* {columns.map((column)=>{
            return (
              <Input label={column.header?.toString() as string} />
            )
          })} */}
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            {table.getHeaderGroups().map((group, i) => {
              return (
                <tr className="table__header-row" key={i}>
                  {group.headers.map((header, i) => {
                    const ref = useRef<HTMLDivElement>(null)
                    const sort = table.getState().sorting[0]
                    const sortState = !sort
                      ? false
                      : sort.desc == true
                      ? 'desc'
                      : 'asc'
                    const isHeader = sort?.id == header.id

                    const setCursor = {
                      orderAsc: () => {
                        ref.current?.classList.add('table__order-icon--asc')
                        ref.current?.classList.remove('table__order-icon--desc')
                      },
                      orderDesc: () => {
                        ref.current?.classList.add('table__order-icon--desc')
                        ref.current?.classList.remove('table__order-icon--asc')
                      },
                      noOrder: () => {
                        ref.current?.classList.remove('table__order-icon--desc')
                        ref.current?.classList.remove('table__order-icon--asc')
                      }
                    }
                    useEffect(() => {
                      if (isHeader) {
                        if (!sortState) {
                          setCursor.noOrder()
                        } else if (sortState == 'asc') {
                          setCursor.orderAsc()
                        } else {
                          setCursor.orderDesc()
                        }
                      } else {
                        setCursor.noOrder()
                      }
                    }, [sort])

                    const handleOrderClick = () => {
                      const id = header.id
                      if (!sortState) {
                        handleSortClick({ orderBy: id, orderDirection: 'desc' })
                      } else if (sortState == 'desc') {
                        handleSortClick({ orderBy: id, orderDirection: 'asc' })
                      } else {
                        handleSortClick({ orderBy: id, orderDirection: 'desc' })
                      }
                      handleFirstPage()
                    }

                    return (
                      <th
                        className="table__header-cell-container"
                        key={i}
                        style={{
                          cursor: header.column.getCanSort()
                            ? 'pointer'
                            : 'default'
                        }}
                      >
                        <div
                          className="table__header-cell"
                          onClick={handleOrderClick}
                        >
                          <span>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </span>

                          <div ref={ref} className="table__order-icon">
                            <IconArrow fill="var(--primary--500)" />
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
            {!isLoading &&
              table.getRowModel().rows.map((row, index) => {
                return <TableRow key={index} {...row} actions={actions} />
              })}
            {isLoading && <p style={{ color: 'white' }}>Loading ...</p>}
          </tbody>
        </table>
      </div>

      <div className="table-pagination">
        <Button
          disabled={!table.getCanPreviousPage()}
          onClick={handlePreviousClick}
          size={ButtonSizes.SMALL}
        >
          Prev
        </Button>
        <Typography
          style={{ minWidth: 60, textAlign: 'center' }}
          size={TypographySize.bodyLarge}
        >
          {isLoading ? (
            <LoaderShape width={30} />
          ) : (
            `${
              table.getState().pagination.pageIndex + 1
            } of ${table.getPageCount()}`
          )}
        </Typography>
        <Button
          disabled={!table.getCanNextPage()}
          onClick={handleNextClick}
          size={ButtonSizes.SMALL}
        >
          Next
        </Button>
      </div>
    </>
  )
}
