import { PropsWithChildren, ReactNode } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AuthenticatedLayoutClient from '../client/AuthenticatedLayoutClient';

export default async function AuthenticatedLayout({ children }: PropsWithChildren<{ children: ReactNode }>) {
    const refreshToken = (await cookies()).get("refresh_token")?.value;

    if (!refreshToken) redirect("/login");
    
    return <>
        <AuthenticatedLayoutClient>
            {children}
        </AuthenticatedLayoutClient>
    </>
}
