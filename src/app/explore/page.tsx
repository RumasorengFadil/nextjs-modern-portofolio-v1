import axiosServer from "@/lib/axiosServer";
import PageClient from "./PageClient";
import { Metadata } from "next";
import ExploreLayout from "@/layout/server/ExploreLayout";
import AppLayout from "@/layout/server/AppLayout";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Explore Blog | Rumasoreng",
  description:
    "Temukan artikel, cerita, dan wawasan terbaru seputar teknologi, coding, serta pengalaman pribadi dari Rumasoreng.",
  keywords: [
    "blog teknologi",
    "artikel coding",
    "belajar programming",
    "web development",
    "Rumasoreng",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Explore Blog | Rumasoreng",
    description:
      "Jelajahi berbagai artikel dan tulisan dari Rumasoreng seputar teknologi, coding, dan pengembangan web modern.",
    url: "https://rumasoreng.com/explore",
    siteName: "Rumasoreng",
    images: [
      {
        url: "https://rumasoreng.com/images/app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Explore Blog - Rumasoreng",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};


export default async function Explore({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const queryString = new URLSearchParams((await searchParams) as Record<string, string>).toString();
    const res = await axiosServer.get(`/api/explore${queryString ? `?${queryString}` : ""}`);

    return (
        <AppLayout>
            <ExploreLayout>
                <PageClient data={res.data.data} />
            </ExploreLayout>
        </AppLayout>
    )
}
