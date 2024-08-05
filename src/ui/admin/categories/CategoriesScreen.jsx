import Button from "../../../components/buttons/Button.jsx";
import {useNavigate} from "@tanstack/react-router";
import {useQuery} from "@tanstack/react-query";
import {createColumnHelper, getCoreRowModel, useReactTable} from '@tanstack/react-table'
import {useMemo} from "react";
import Table from "../../../components/tables/Table.jsx";

const CategoriesScreen = () => {
  const navigate = useNavigate()

  const {data: categories} = useQuery({queryKey: ['categories']})

  const columnHelper = createColumnHelper()
  const columns = useMemo(() => [
    columnHelper.accessor('id', {
      cell: info => info.getValue(),
      header: "ID",
    }),
    columnHelper.accessor('name', {
      cell: info => info.getValue(),
      header: "Naziv",
    }),
    columnHelper.accessor('id', {
      cell: info => (
        <div className={"flex gap-2"}>
          <Button onClick={() => navigate({to: `/admin/categories/${info.getValue()}`})}>Edit</Button>
          <Button onClick={() => navigate({to: `/admin/categories/${info.getValue()}`})}>Briši</Button>
        </div>
      ),
      header: "",
    }),
  ], [columnHelper, navigate])

  const table = useReactTable({
    data: categories,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className={"flex-grow h-full flex flex-col p-4"}>
      <div className={"w-full flex justify-between mb-4"}>
        <h1 className={"text-2xl font-bold"}>Kategorije</h1>
        <Button onClick={() => navigate({to: "/admin/categories/new"})}>Nova</Button>
      </div>
      <Table table={table}/>
    </div>
  )
}

export default CategoriesScreen