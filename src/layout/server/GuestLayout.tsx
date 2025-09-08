import { PropsWithChildren, ReactNode } from 'react';
import GuestLayoutClient from '../client/GuestLayoutClient';

export default async function GuestLayout({ children }: PropsWithChildren<{ children: ReactNode }>) {
    // const refreshToken = (await cookies()).get("refresh_token")?.value;
    //   const verifiedAt = (await cookies()).get("verified_at")?.value;


    // if (refreshToken && verifiedAt) redirect("/dashboard");
    
    return <>
        <GuestLayoutClient>
            {children}
        </GuestLayoutClient>
    </>
}
