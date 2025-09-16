"use client"
import ApplicationLogo from "@/components/ApplicationLogo";
import { useAuthStore } from "@/store/use-auth-store";
import Link from "next/link";
import { ReactNode } from "react";

export default function ExploreLayoutClient({ children }: { children: ReactNode }) {
    const { auth } = useAuthStore();
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
            <header className="border-b">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/explore" className="flex space-x-2 items-center text-xl font-bold tracking-tight">
                        <ApplicationLogo className="w-12 h-12" />
                        <span>Bbyts Blog</span>
                    </Link>
                    <nav className="space-x-4 text-sm">
                        <Link href="/" className="hover:underline">Home</Link>
                        <Link href="/explore" className="hover:underline">Explore</Link>

                        {auth?.user ?
                            <Link href="/dashboard" className="hover:underline">Dashboard</Link> :
                            <Link href="/auth/login" className="hover:underline">Login</Link>
                        }
                        {/* <Link href="/about" className="hover:underline">Tentang</Link> */}
                        {/* <Link href="/contact" className="hover:underline">Kontak</Link> */}
                    </nav>
                </div>
            </header>

            <section className="bg-gray-50 py-16 border-b">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold leading-tight mb-4 tracking-tight">
                        Wawasan & Cerita dari BBYTS
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Temukan artikel, ide, dan teknologi terbaru yang kami bagikan untuk menginspirasi dan mengedukasi.
                    </p>
                </div>
            </section>

            <main className="container mx-auto px-4 py-12">
                {children}
            </main>
        </div>
    )
}