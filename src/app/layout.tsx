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
        {/* JSON-LD Schema (deteksi logo dan organisasi) */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Fadil Rumasoreng",
              url: "https://www.rumasoreng.com",
              image: "https://www.rumasoreng.com/icon.png",
              sameAs: [
                "https://www.linkedin.com/in/fadil-hijayat-rumasoreng-4944671b9",
                "https://github.com/RumasorengFadil",
                "https://www.instagram.com/fadilrumasoreng/?hl=en",
                "https://orcid.org/0009-0008-9016-4557",

              ],
            }),
          }}
        />

        {/* Schema: WebSite */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://www.rumasoreng.com/",
              name: "Fadil Rumasoreng",
              author: {
                "@type": "Person",
                name: "Fadil Rumasoreng",
              },
            }),
          }}
        />
        
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
