import "ui-styles/src/table.css";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { ColumnDef, Row } from "@tanstack/react-table";

interface TableProps {
  data: unknown[];
  columns: ColumnDef<any, any>[];
}
export const Table = ({ data, columns }: TableProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          {table.getHeaderGroups().map((group, i) => {
            return (
              <tr className="table__header-row">
                {group.headers.map((header) => {
                  return (
                    <th className="table__header-cell">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row,index)=>{
            return (
              <TableRow key={index} {...row} />
            )
          })}
        </tbody>
      </table>
    </div>
  );
};


export const TableRow = (row:Row<unknown>) => {
  return (
    <tr className="table__row">
      {row.getVisibleCells().map((cell)=>{
        return (
          <td key={cell.id} className="table__body-cell">
            {flexRender(cell.column.columnDef.cell,cell.getContext())}
          </td>
        )
      })}
    </tr>
  )
}

type Order = {
  nOrder:number,
  concept:string,
  dateTime:string
}


const columnHelper = createColumnHelper<Order>()


const columns = [

  columnHelper.accessor("nOrder",{
    header:"N° Order"
  }),

  columnHelper.accessor("concept",{
    header:"Concept"
  }),

  columnHelper.accessor("dateTime",{
    header:"Date"
  }),

]

const data:Order[] = [
  {
    nOrder:94847292,
    concept:"Compra",
    dateTime:"23-04-04"
  }
]

export const Example = () => {
  return (
    <Table columns={columns} data={data} />
  )
}
