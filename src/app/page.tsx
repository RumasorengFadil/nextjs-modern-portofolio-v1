import { Metadata } from "next";
import PageClient from "./pageClient";
import { cache } from "react";
import PublicLayout from "@/layout/server/PublicLayout";
import AppLayout from "@/layout/server/AppLayout";

export const metadata: Metadata = {
  title: "Fadil Rumasoreng | Web Developer, Blogger, Creator & Lecturer",
  description:
    "Website resmi Fadil Rumasoreng, berisi portofolio web development, artikel teknologi, dan insight seputar pemrograman. Temukan karya, pengalaman, serta catatan perjalanan dalam dunia coding dan digital kreatif.",
  keywords: [
    "Fadil Rumasoreng",
    "Web Developer",
    "Portfolio Web Developer",
    "Blog Teknologi",
    "Artikel Pemrograman",
    "Belajar Coding",
    "Frontend Developer",
    "Backend Developer",
    "Next.js",
    "Laravel"
  ],
  openGraph: {
    title: "Fadil Rumasoreng | Web Developer, Blogger, Creator & Lecturer",
    description:
      "Jelajahi portofolio, artikel, dan catatan perjalanan Fadil Rumasoreng dalam dunia pemrograman dan teknologi web modern.",
    url: "https://rumasoreng.com",
    siteName: "Fadil Rumasoreng",
    type: "website",
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
    title: "Fadil Rumasoreng | Web Developer, Blogger, Creator & Lecturer",
    description:
      "Website pribadi Fadil Rumasoreng berisi portofolio, artikel teknologi, dan catatan coding.",
    images: ["https://rumasoreng.com/images/app/og-image.png"],
    site: "@fadilrumasoreng", // ganti kalau kamu ada Twitter
  },
};


const getBlog = cache(async function () {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/?sort=latest&limit=3`, {
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
        <PageClient blogs={blogs} />
      </PublicLayout>
    </AppLayout>
  );
}

