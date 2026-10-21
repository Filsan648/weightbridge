import { columns } from "./columns"
import type { User } from "./columns"
import { DataTable } from "../../Genearale/Table/data-table"
import { useEffect, useState } from "react";
import { getUsers } from "../../utils/data/userdata"
  // Fetch data from your API here.

export default  function ListUsers() {
  const [users,setusers] = useState<User[]>([]);

  useEffect(()=>{

     const fetchUsers = async()=>{

        const data = await getUsers();

        setusers(data);

    }


    fetchUsers();


},[]);


  // Fetch your data here

  return (
    <div className="container">
      <DataTable columns={columns} data={users}   filterColumn="name" />
    </div>
  )
}
