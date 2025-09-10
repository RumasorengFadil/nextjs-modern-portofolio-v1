import * as React from "react"
import {
  LayoutDashboardIcon,
  Newspaper,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

import ApplicationLogo from "@/components/ApplicationLogo";
import UserRoleBanner from "@/components/UserRoleBanner"
import { usePathname } from "next/navigation"
import { User } from "@/typedata/auth/user"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user: User | null;
}


export function AppSidebar({ user, ...props }: AppSidebarProps) {
  const pathname = usePathname();

  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: LayoutDashboardIcon,
        isActive: pathname.startsWith("/admin/dashboard"),
        show: user?.role === "admin" || user?.role === "author",
      },
      {
        title: "Manage Blog",
        url: "/admin/manage-blog",
        icon: Newspaper,
        isActive: pathname.startsWith("/admin/manage-blog"),
        show: user?.role === "admin" || user?.role === "author",
      },
      // {
      //   title: "Manage Users",
      //   url: "/users",
      //   icon: Users,
      //   isActive: pathname.startsWith("/admin/users"),
      //   show: user?.role === "admin",
      // },
    ],
  }
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <UserRoleBanner logo={ApplicationLogo} desc={`Bbyts Teknologi`} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
