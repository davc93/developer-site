import { Row, flexRender } from "@tanstack/react-table"
import { ButtonHTMLAttributes, useRef, MouseEventHandler, useEffect } from "react"
import type { Action } from "./models"
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
  
  export const TableRow = (
    row: Row<unknown> & { actions?: Action[]; isLoading?: boolean }
  ) => {
    return (
      <tr className="table__row">
        {row.getVisibleCells().map((cell) => {
          if (row.isLoading) {
            return (
              <td>
                <span style={{ color: 'white' }}>Loading...</span>
              </td>
            )
          } else {
            return (
              <td
                title={`${cell.getContext().getValue()}`}
                key={cell.id}
                className="table__body-cell"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            )
          }
        })}
  
        {row.actions && (
          <OptionButton actions={row.actions} rowData={row.original} />
        )}
      </tr>
    )
  }
  