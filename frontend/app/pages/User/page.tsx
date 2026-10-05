import { columns } from "./columns"
import type { User } from "./columns"
import { DataTable } from "../../Genearale/Table/data-table"


  // Fetch data from your API here.
  const data= [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      telephone: "+1 234 567 890",
      derniere_connexion: "2023-10-01 09:00:00"
    },
    {
      name: "fohn Doe",
      email: "fohn.doe@example.com",
      telephone: "-1 234 567 890",
      derniere_connexion: "2043-10-01 09:00:00"
    },
    // ...
  ]


export default  function DemoPage() {
  // Fetch your data here

  return (
    <div className="container px-4 ">
      <DataTable columns={columns} data={data}   filterColumn="name" />
    </div>
  )
}