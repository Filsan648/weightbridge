import type { Route } from "./+types/home";
import { useLocation, useParams } from "react-router"
import data from "../utils/data/userdata"
import { ViewUser } from "../pages/User/viewuser";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Users" },
    { name: "description", content: "List of all users" },
  ];
}

export default function ViewUserPage() {
   const { name } = useParams()
  const location = useLocation()

  const userId = location.state?.userId

  const user = data.find(
    (user) => user.id === userId
  )

  return <section className=" "> <ViewUser user={user} />

   </section>;
}
