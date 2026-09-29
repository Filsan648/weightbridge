import { ChevronDown, LogOut , TruckIcon } from "lucide-react"
import { NavLink, useLocation } from "react-router"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "../../components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible"
import SidebarData from "../../utils/data/sidebardata"

function AppSidebar() {
  const { pathname } = useLocation()

  // Actif si l'URL correspond exactement, ou est une sous-route (sauf pour "/")
  const isActive = (link: string) =>
    link === "/" ? pathname === "/" : pathname.startsWith(link)

  return (
    <Sidebar collapsible="icon">
      {/* ───────── Header ───────── */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<NavLink to="/" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <TruckIcon className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">CIMAS</span>
                <span className="truncate text-xs text-muted-foreground">
                  Weighbridge
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator />

      {/* ───────── Contenu ───────── */}
      <SidebarContent>
        {SidebarData.map((group) => (
          <Collapsible
            key={group.group}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel render={<CollapsibleTrigger />}>
                {group.group}
                <ChevronDown className="ml-auto transition-transform group-data-open/collapsible:rotate-180" />
              </SidebarGroupLabel>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map((item) => (
                      <SidebarMenuItem key={item.link}>
                        <SidebarMenuButton
                          isActive={isActive(item.link)}
                          tooltip={item.name}
                          render={<NavLink to={item.link} />}
                        >
                          <item.icon />
                          <span>{item.name}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>

      {/* ───────── Footer ───────── */}
      <SidebarFooter>
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Se déconnecter"
              onClick={() => {
                // TODO: ta logique de déconnexion
              }}
            >
              <LogOut />
              <span>Se déconnecter</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <p className="px-2 text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
          v1.0.0
        </p>
      </SidebarFooter>

      {/* Zone cliquable au bord pour replier/déplier */}
      <SidebarRail />
    </Sidebar>
  )
}

export default AppSidebar