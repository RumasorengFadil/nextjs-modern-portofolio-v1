import { Metadata } from "next";
import PageClient from "./pageClient";
import { cache } from "react";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website & Solusi Digital Terbaik | Bbyts",
  description: "Bbyts adalah penyedia jasa pembuatan website profesional dan solusi digital untuk bisnis. Kami menawarkan layanan desain UI/UX, pengembangan website, serta portofolio online yang menarik dan fungsional. Kembangkan bisnis Anda dengan solusi digital terbaik dari Bbyts!",
  keywords: "jasa pembuatan website, jasa website profesional, jasa desain UI/UX, solusi digital bisnis, pengembangan website, portofolio online, website murah berkualitas, pembuatan website startup",
  robots: "index, follow",
  openGraph: {
    title: "Jasa Pembuatan Website & Solusi Digital Terbaik | Bbyts",
    description: "Bbyts adalah penyedia jasa pembuatan website profesional dan solusi digital untuk bisnis. Kami menawarkan layanan desain UI/UX, pengembangan website, serta portofolio online yang menarik dan fungsional. Kembangkan bisnis Anda dengan solusi digital terbaik dari Bbyts!",
    url: "https://bbyts.com/",
    type: "website",
    images: [{
      url: "https://bbyts.com/images/hero-banner.jpg",
      width: 1200,
      height: 630,
      alt: "Jasa Pembuatan Website & Solusi Digital - Bbyts"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website & Solusi Digital Terbaik | Bbyts",
    description: "Dapatkan layanan pembuatan website profesional, desain UI/UX, dan solusi digital terbaik untuk bisnis Anda hanya di Bbyts!",
    images: "https://bbyts.com/images/hero-banner.jpg",
    site: "@bbyts",
  }
};

const getBlog = cache(async function () {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/?sort=latest&limit=3`, {
    next: {revalidate:3600}
  });
  return res.json();
});

export default async function Home() {
  const blogs =( await getBlog()).data;

  return (
    <PageClient blogs={blogs} />
  );
}

