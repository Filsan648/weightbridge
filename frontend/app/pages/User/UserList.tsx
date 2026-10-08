import { columns } from "./columns"
import type { User } from "./columns"
import { DataTable } from "../../Genearale/Table/data-table"
import data from "../../utils/data/userdata"

  // Fetch data from your API here.



export default  function ListUsers() {
  // Fetch your data here

  return (
    <div className="container px-4 ">
      <DataTable columns={columns} data={data}   filterColumn="name" />
    </div>
  )
}