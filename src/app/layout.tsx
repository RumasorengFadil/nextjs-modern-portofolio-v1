import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NSR4F5QV');
            `,
          }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NWMRWT9Q4L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NWMRWT9Q4L');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NSR4F5QV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          >
          </iframe>
        </noscript>

        {/* Hydrate Toaster */}
        <HydrateToaster />

        <Suspense fallback={null}>
          <NextTopLoader color="var(--foreground)" height={2} />
        </Suspense>

        <HydrateAuth auth={auth} />
        {children}
      </body>
    </html>
  );
}
