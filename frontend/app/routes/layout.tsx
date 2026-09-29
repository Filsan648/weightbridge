import { Outlet } from "react-router";
import { useState } from "react";
import AppSidebar from "../Genearale/Sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";

export default function Layout() {
  const [open, setOpen] = useState(true);

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <AppSidebar />

      <main className="flex-1">
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
        </header>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}