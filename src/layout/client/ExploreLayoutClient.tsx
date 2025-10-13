"use client"
import ApplicationLogo from "@/components/ApplicationLogo";
import { useThemeCookie } from "@/hooks/use-theme-cookie";
import { useAuthStore } from "@/store/use-auth-store";
import { Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function ExploreLayoutClient({ children }: { children: ReactNode }) {
    const { auth } = useAuthStore();
    const { toggleTheme } = useThemeCookie();

    return (
        <div className="min-h-screen font-sans antialiased">
            <header className="border-b z-50 bg-background">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/explore" className="flex space-x-2 items-center text-xl font-bold tracking-tight">
                        <Image src="/images/app/logo-no-text.png" width={32} height={32} alt="fadilrumasoreng" />
                        <span>Rumasoreng Blog</span>
                    </Link>
                    <nav className="flex items-center space-x-4 text-sm">
                        <Link href="/" className="hover:underline">Home</Link>
                        <Link href="/explore" className="hover:underline">Explore</Link>

                        {auth?.user &&
                            <Link href="/admin/dashboard" className="hover:underline">Dashboard</Link>
                        }
                        <Sun onClick={toggleTheme} className="transform -scale-x-100 cursor-pointer animate-pulse text-yellow-500 dark:text-foreground" />
                        {/* <Link href="/about" className="hover:underline">Tentang</Link> */}
                        {/* <Link href="/contact" className="hover:underline">Kontak</Link> */}
                    </nav>
                </div>
            </header>

            <section className="py-16 border-b">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold leading-tight mb-4 tracking-tight">
                        Blog by Fadil Rumasoreng
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Saya menulis tentang pengalaman saya membangun aplikasi, eksperimen teknologi, dan ide-ide seputar web development. Semua ini saya bagikan atau saya tulis murni dari pengalaman yang saya dapatkan ketika mengembangkan perangkat lunak.
                    </p>
                </div>
            </section>

            <main className="container mx-auto px-4 py-12">
                {children}
            </main>
        </div>
    )
}