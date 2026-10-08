import type { Route } from "./+types/home";

import ListUsers from "../pages/User/UserList";
import { ViewUser } from "../pages/User/viewuser";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Users" },
    { name: "description", content: "List of all users" },
  ];
}

export default function User() {
  return <section className=" "> <ListUsers />
   </section>;
}
