"use client"

import ApplicationLogo from '@/components/ApplicationLogo';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { PropsWithChildren, ReactNode } from 'react';

export default function GuestLayoutClient({ children }: PropsWithChildren<{ children: ReactNode }>) {
    return <>
        <div className="min-h-screen flex flex-col items-center justify-center py-10 bg-muted px-4 space-y-4">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>


            <Card className="max-w-md w-full text-center border p-6 shadow-lg">
                {children}
            </Card>
        </div>
    </>
}
