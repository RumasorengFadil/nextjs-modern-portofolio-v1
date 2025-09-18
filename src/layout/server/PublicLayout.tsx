import { PropsWithChildren, ReactNode } from 'react';
import PublicLayoutClient from '../client/PublicLayoutClient';

export default async function PublicLayout({ children }: PropsWithChildren<{ children: ReactNode }>) {
    return <>
        <PublicLayoutClient>
            {children}
        </PublicLayoutClient>
    </>
}
