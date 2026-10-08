import { 
  type RouteConfig,
  route,
  layout,
  index
} 

from "@react-router/dev/routes";


export default [

layout("routes/layout.tsx",[


index(
"routes/home.tsx"
),
route("/admin/utilisateurs","routes/user.tsx"
),
route("/admin/utilisateurs/:name","routes/viewList.tsx")
]),

] satisfies RouteConfig;
