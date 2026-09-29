import {
  LayoutDashboard,
  Scale,
  History,
  Truck,
  Users,
  Package,
  FileBarChart,
  Settings,
  UserCog,
  type LucideIcon,
} from "lucide-react"

export type SidebarItem = {
  name: string
  link: string
  icon: LucideIcon
}

export type SidebarGroupData = {
  group: string
  items: SidebarItem[]
}

const SidebarData: SidebarGroupData[] = [
  {
    group: "Général",
    items: [
      { name: "Tableau de bord", link: "/", icon: LayoutDashboard },
    ],
  },
  {
    group: "Pesées",
    items: [
      { name: "Nouvelle pesée", link: "/pesees/nouvelle", icon: Scale },
      { name: "Historique", link: "/pesees/historique", icon: History },
    ],
  },
  {
    group: "Gestion",
    items: [
      { name: "Camions", link: "/camions", icon: Truck },
      { name: "Clients", link: "/clients", icon: Users },
      { name: "Produits", link: "/produits", icon: Package },
    ],
  },
  {
    group: "Rapports",
    items: [
      { name: "Rapports & exports", link: "/rapports", icon: FileBarChart },
    ],
  },
  {
    group: "Administration",
    items: [
      { name: "Utilisateurs", link: "/admin/utilisateurs", icon: UserCog },
      { name: "Paramètres", link: "/admin/parametres", icon: Settings },
    ],
  },
]

export default SidebarData