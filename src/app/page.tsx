import { Metadata } from "next";
import PageClient from "./pageClient";
import { cache } from "react";
import PublicLayout from "@/layout/server/PublicLayout";
import AppLayout from "@/layout/server/AppLayout";

export const metadata: Metadata = {
  title: "Fadil Rumasoreng — Fullstack Web Developer Next.js & Laravel | Modern, Scalable & SEO-Optimized Web Apps",
  description:
    "Saya adalah seorang Fullstack Web Developer yang berfokus pada pengembangan aplikasi web modern dengan Next.js & Laravel. Saya membantu bisnis membangun solusi digital yang cepat, aman, skalabel, dan SEO-friendly. Jelajahi portofolio saya dan temukan bagaimana saya dapat membantu proyek Anda.",
  keywords: [
    "Fullstack Web Developer Indonesia",
    "Jasa Pembuatan Website Next.js Laravel",
    "Portofolio Fadil Rumasoreng",
    "Belajar Web Development Modern",
    "Frontend Backend Developer Remote",
    "Next.js Developer Indonesia",
    "Laravel Developer Freelancer",
    "Jasa Pembuatan Website SEO Friendly"
  ],
  openGraph: {
    title: "Fadil Rumasoreng — Fullstack Web Developer Next.js & Laravel | Modern, Scalable & SEO-Optimized Web Apps",
    description:
      "Saya adalah seorang Fullstack Web Developer yang berfokus pada pengembangan aplikasi web modern dengan Next.js & Laravel. Saya membantu bisnis membangun solusi digital yang cepat, aman, skalabel, dan SEO-friendly. Jelajahi portofolio saya dan temukan bagaimana saya dapat membantu proyek Anda.",
    url: "https://rumasoreng.com",
    siteName: "Fadil Rumasoreng",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "https://rumasoreng.com/images/app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fadil Rumasoreng - Web Developer, Blogger & Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fadil Rumasoreng — Fullstack Web Developer Next.js & Laravel | Modern, Scalable & SEO-Optimized Web Apps",
    description:
      "Saya adalah seorang Fullstack Web Developer yang berfokus pada pengembangan aplikasi web modern dengan Next.js & Laravel. Saya membantu bisnis membangun solusi digital yang cepat, aman, skalabel, dan SEO-friendly. Jelajahi portofolio saya dan temukan bagaimana saya dapat membantu proyek Anda.",
    images: ["https://rumasoreng.com/images/app/og-image.png"],
    site: "@fadilrumasoreng", // ganti kalau kamu ada Twitter
  },
  alternates: {
    canonical: "https://rumasoreng.com",
  },
};


const getBlog = cache(async function () {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/?sort=latest&paginate=3`, {
    next: { revalidate: 3600 },
    headers: {
      Accept: "application/json"
    }
  });
  if (!res.ok) {
    console.error("Fetch failed:", res.status, await res.text());
    throw new Error(`Failed to fetch blogs: ${res.status}`);
  }

  return res.json();
});

export default async function Home() {
  const blogs = (await getBlog()).data;
  return (
    <AppLayout>
      <PublicLayout>
        <PageClient pagination={blogs} />
      </PublicLayout>
    </AppLayout>
  );
}

