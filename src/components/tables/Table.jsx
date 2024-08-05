import {flexRender} from "@tanstack/react-table";

const Table = ({table}) => {
  return (
    <table>
      <thead className={"bg-blue-800 text-white font-bold text-left"}>
      {table.getHeaderGroups().map((headerGroup, index) => (
        <tr key={index}>
          {headerGroup.headers.map((header, index) => (
            <th className={"border border-black px-2"} key={index}>
              {header.isPlaceholder
                ? null
                : flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
            </th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody>
      {table.getRowModel().rows.map((row, index) => (
        <tr key={index}>
          {row.getVisibleCells().map((cell, index) => (
            <td className={"border border-black px-2"} key={index}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default Table