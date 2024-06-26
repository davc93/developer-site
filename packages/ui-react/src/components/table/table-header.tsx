import { IconArrow } from '../../icons'
import { flexRender, type Table } from '@tanstack/react-table'
import { useEffect, useRef } from 'react'
import type { TableServerProps } from './table-server'
type Props = {
  table: Table<unknown>
  handleSortClick: TableServerProps['handleSortClick']
  handleFirstPage: TableServerProps['handleFirstPage']
}

export const TableHeader = ({
  table,
  handleFirstPage,
  handleSortClick
}: Props) => {
  return (
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
                  key={i}
                  style={{
                    cursor: header.column.getCanSort() ? 'pointer' : 'default'
                  }}
                >
                  <div
                    className="table__header-cell-container"
                    onClick={handleOrderClick}
                  >
                    <span className="table__header-cell">
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
          </tr>
        )
      })}
    </thead>
  )
}
