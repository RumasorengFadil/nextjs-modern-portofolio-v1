"use client"

import { PropsWithChildren, ReactNode } from 'react';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { useSilentRefresh } from '@/hooks/use-silent-refresh';
import { useAuthStore } from '@/store/use-auth-store';


export default function AuthenticatedLayoutClient({ children }: PropsWithChildren<{ children: ReactNode }>) {
    const { auth } = useAuthStore();

    useSilentRefresh();

    return <>
        <SidebarProvider>
            <AppSidebar user={auth?.user ?? null} variant="inset" />
            <SidebarInset>
                <div className="flex flex-1 flex-col px-4 lg:px-6">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            {children}
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    </>
}
