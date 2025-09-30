import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HydrateTheme } from "@/components/hydrate/HydrateTheme";
import { HydrateToaster } from "@/components/hydrate/HydrateToaster";
import { Auth } from "@/typedata/auth/auth";
import { getAuthFromSever } from "@/lib/getAuthFromServer";
import HydrateAuth from "@/components/hydrate/HydrateAuth";
import { Suspense } from "react";
import NextTopLoader from "nextjs-toploader";
import { cookies } from "next/headers";
import { themeConfig } from "@/config/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "Fadil Rumasoreng | Web Developer",
  description: "Website resmi Fadil Rumasoreng...",
  // icons: {
  //   icon: [
  //     { url: "/favicon.ico" },
  //     { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  //     { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
  //   ],
  //   apple: "/apple-touch-icon.png",
  // },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth: Auth = await getAuthFromSever();
  const theme = (await cookies()).get(themeConfig.cookieKey)?.value;

  return (
    <html lang="en" className={`${theme || "light"} scroll-smooth`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HydrateToaster />

        {/* <HydrateTheme /> */}

        <Suspense fallback={null}>
          <NextTopLoader color="var(--foreground)" height={2} />
        </Suspense>

        <HydrateAuth auth={auth} />
        {children}
      </body>
    </html>
  );
}
