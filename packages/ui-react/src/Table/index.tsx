import 'ui-styles/src/table.css'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table'
import type { ColumnDef, Row } from '@tanstack/react-table'
import {
  ButtonHTMLAttributes,
  MouseEventHandler,
  useEffect,
  useRef,
  useState
} from 'react'
import { Button, ButtonSizes } from '../Button'
import { Typography, TypographySize } from '../Typography'
import { Input } from '../input'
interface TableProps {
  data: unknown[]
  columns: ColumnDef<any, any>[]
  actions?: Action[]
  isLoading?: boolean
  handleNextClick?: () => void
  handlePreviousClick?: () => void
  page?: number
  manualPagination?: boolean
}
type Action = {
  name: string
  fn: (params: any) => void
}
export const Table = ({
  isLoading,
  data,
  page,
  columns,
  actions,
  handleNextClick,
  handlePreviousClick,
  manualPagination = false
}: TableProps) => {
  const [globalFilter, setGlobalFilter] = useState('')

  const table = useReactTable({
    data,
    columns,
    manualPagination,
    getFilteredRowModel:getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10
      }
    },
    state:{
      globalFilter
    },
    onGlobalFilterChange:setGlobalFilter

  })
  useEffect(() => {
    console.log(globalFilter);
    console.log("lala");
    
  }, [globalFilter])
  


  if (isLoading) {
    return <></>
  } else {
    return (
      <>
        <Input value={globalFilter ?? ""} onChange={event => {setGlobalFilter(String(event?.target.value)) } } label="Search" placeholder="Enter a keyword " />
        <div className="table-container">
          <table className="table">
            <thead>
              {table.getHeaderGroups().map((group, i) => {
                return (
                  <tr className="table__header-row" key={i}>
                    {group.headers.map((header, i) => {
                      return (
                        <th className="table__header-cell" key={i}>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
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

        {manualPagination ? (
          <div className="table-pagination">
            <Button onClick={handlePreviousClick} size={ButtonSizes.SMALL}>
              Prev
            </Button>
            <Typography
              style={{ width: 20, textAlign: 'center' }}
              size={TypographySize.bodyLarge}
            >
              {page}
            </Typography>
            <Button onClick={handleNextClick} size={ButtonSizes.SMALL}>
              Next
            </Button>
          </div>
        ) : (
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
              {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount()}
            </Typography>
            <Button
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
              size={ButtonSizes.SMALL}
            >
              Next
            </Button>
          </div>
        )}
      </>
    )
  }
}

export const OptionButton = ({
  actions,
  style,
  className,
  rowData,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  actions?: Action[]
  rowData: unknown
}) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (menuRef.current?.classList.contains('option-menu--closed')) {
      menuRef.current?.classList.remove('option-menu--closed')
    } else {
      menuRef.current?.classList.add('option-menu--closed')
    }
  }
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      const target = event.target
      if (!menuRef.current?.contains(target)) {
        menuRef.current?.classList.add('option-menu--closed')
      }
    }
    window.addEventListener('mousedown', handleOutsideClick)
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <td className="option-menu-icon">
      <div ref={menuRef} className="option-menu option-menu--closed">
        <button
          className={['icon-option-menu', className].join(' ')}
          onClick={handleClick}
          style={{ width: '24px', ...style }}
          {...props}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z"
                fill="#e51549"
              />{' '}
              <path
                d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                fill="#e51549"
              />{' '}
              <path
                d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
                fill="#e51549"
              />{' '}
            </g>
          </svg>
        </button>
        <div className="option-menu__content">
          {actions?.map((action, index) => {
            const handleClick = () => {
              action.fn(rowData)
            }

            return (
              <div
                key={index}
                onClick={handleClick}
                className="option-menu__title"
              >
                <span>{action.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </td>
  )
}

export const TableRow = (row: Row<unknown> & { actions?: Action[] }) => {
  return (
    <tr className="table__row">
      {row.getVisibleCells().map((cell) => {
        return (
          <td
            title={`${cell.getContext().getValue()}`}
            key={cell.id}
            className="table__body-cell"
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        )
      })}

      {row.actions && (
        <OptionButton actions={row.actions} rowData={row.original} />
      )}
    </tr>
  )
}

type Order = {
  nOrder: number
  concept: string
  dateTime: string
  link: string
}

const columnHelper = createColumnHelper<Order>()

const columns = [
  columnHelper.accessor('nOrder', {
    header: 'N° Order'
  }),

  columnHelper.accessor('concept', {
    header: 'Concept'
  }),

  columnHelper.accessor('dateTime', {
    header: 'Date'
  }),

  columnHelper.accessor('link', {
    header: 'Link'
  })
]

const data: Order[] = [
  {
    nOrder: 94847292,
    concept:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.',
    dateTime: '23-04-04',
    link: 'https://lorem2.com/'
  },
  {
    nOrder: 94847292,
    concept:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.',
    dateTime: '23-04-04',
    link: 'https://lorem2.com/'
  },
  {
    nOrder: 94847292,
    concept:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.',
    dateTime: '23-04-04',
    link: 'https://lorem2.com/'
  },
  {
    nOrder: 94847292,
    concept:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.',
    dateTime: '23-04-04',
    link: 'https://lorem2.com/'
  },
  {
    nOrder: 94847292,
    concept:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.',
    dateTime: '23-04-04',
    link: 'https://lorem2.com/'
  },
  {
    nOrder: 94847292,
    concept:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.',
    dateTime: '23-04-04',
    link: 'https://lorem2.com/'
  },
  {
    nOrder: 94847292,
    concept:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.',
    dateTime: '23-04-04',
    link: 'https://lorem2.com/'
  },
  {
    nOrder: 94847292,
    concept:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.',
    dateTime: '23-04-04',
    link: 'https://lorem2.com/'
  },
  {
    nOrder: 94847292,
    concept:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.',
    dateTime: '23-04-04',
    link: 'https://lorem2.com/'
  },
  {
    nOrder: 94847292,
    concept:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.',
    dateTime: '23-04-04',
    link: 'https://lorem2.com/'
  }
]

export const Example = () => {
  return <Table columns={columns} data={data} />
}
