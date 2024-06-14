import { Button, ButtonSizes } from "../button"
import { LoaderShape } from "../loader-shape"
import { Typography, TypographySize } from "../typography"
import type { TableServerProps } from "./table-server"
import type { Table } from "@tanstack/react-table"
type Props = {
    isLoading:boolean,
    table:Table<unknown>
    handlePreviousClick:TableServerProps['handlePreviousClick']
    handleNextClick:TableServerProps['handleNextClick']
}
export const TablePagination = ({table,handleNextClick,handlePreviousClick,isLoading}:Props) => {
  return (
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
  )
}
