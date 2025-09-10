// components/app-sidebar-wrapper.tsx
"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { User } from "@/typdata/user";
import { PropsWithChildren, ReactNode } from "react";

export function AppSidebarWrapper({ user, header, content, footer }: PropsWithChildren<{ user: User, header?: ReactNode, content?: ReactNode, footer?: ReactNode }>) {

    return (
        <SidebarProvider>
            <AppSidebar user={user} variant="inset" />
            <SidebarInset>
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            {header && header}
                            {content && content}
                            {footer && footer}
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
