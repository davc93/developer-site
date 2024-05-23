import { Button, ButtonSizes, Typography, TypographySize } from 'ui-react'
import { Link } from 'react-router-dom'
import { useTableActions, useLabelsQuery } from '../hooks'
import { useQueryClient } from '@tanstack/react-query'

export const HomePage = (): JSX.Element => {
  const { actions } = useTableActions()
  const { query } = useLabelsQuery()
  const queryClient = useQueryClient()
  const handleNextPage = () => {
    query.fetchNextPage()
  }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <Typography size={TypographySize.titleSmall} className="">
          Labels
        </Typography>
        <Link to={'create'} className="self-end">
          <Button size={ButtonSizes.LARGE}>Create Label</Button>
        </Link>
      </div>
      <div
        style={{ overflowX: 'auto', border: '1px solid var(--primary--500)' }}
      >
        <table className="table">
          <thead>
            <tr>
              <th className="table__header-cell-container">Id</th>
              <td className="table__header-cell-container">Title</td>
              <td className="table__header-cell-container">Type</td>
              <td className="table__header-cell-container">Image</td>
              <td className="table__header-cell-container">Created at</td>
            </tr>
          </thead>
          <tbody>
            {query.data?.pages
              .map((page) => page.data)
              .flat()
              .map((row) => {
                const handleRowClick = () => {
                  actions[0].fn(row.id)
                }

                // const handleRowOver = () => {
                //   queryClient.prefetchQuery({
                //     queryKey: ['label', row.id],
                //     queryFn: async () => await getLabel(`${row.id}`),
                //     staleTime: 1000 * 60 * 60
                //   })
                // }
                const handleRowOver = () => {
                  queryClient.setQueryData(
                    ['label', row.id], row
                  )
                }
                return (
                  <tr
                    key={row.id}
                    className="table__row cursor-pointer"
                    onClick={handleRowClick}
                    onMouseEnter={handleRowOver}
                  >
                    {Object.values(row).map((value) => (
                      <td
                        className="table__body-cell"
                        key={`row-${row.id}-${value}`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                )
              })}
          </tbody>
          <tfoot>
            <Button
              loading={query.isFetching}
              onClick={handleNextPage}
              size={ButtonSizes.SMALL}
            >
              Cargar mas
            </Button>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
