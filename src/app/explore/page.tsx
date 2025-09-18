import axiosServer from "@/lib/axiosServer";
import PageClient from "./PageClient";
import { Metadata } from "next";
import ExploreLayout from "@/layout/server/ExploreLayout";
import AppLayout from "@/layout/server/AppLayout";

export const revalidate = 60;

export const metadata: Metadata = {
    title: "Explore Blogs | bbyts",
    description: "Jelajahi artikel dan blog terbaru dari bbyts.",
    keywords: ["Next.js", "SEO", "React", "bbyts", "Tutorial"],
    openGraph: {
        title: "Explore Blogs",
        description: "Jelajahi artikel dan blog terbaru dari bbyts.",
        url: "https://bbyts.com/explore",
        siteName: "bbyts",
        images: [
            {
                url: "https://bbyts.com/images/app/og-image.png",
                width: 1200,
                height: 630,
                alt: "Explore Blogs",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
}

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
