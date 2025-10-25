import { Blog } from "@/typedata/blog/blog";
import PageClient from "./PageClient";
import { cache } from "react";
import ExploreLayout from "@/layout/server/ExploreLayout";

export const revalidate = 60;

const getBlog = cache(async function (slug: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/explore/${slug}`, {
    });
    return res.json();
});

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug;

    const blog: Blog = (await getBlog(slug)).data.blog;

    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        title: blog.title,
        description: blog.excerpt,
        keywords: blog.tags.map(tag => tag.tag.name),
        robots: "index, follow",
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            url: `/explore/${slug}`,
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_API_URL}${blog.image_url}`,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
            type: "article",
            locale: "id_ID",
        },
    };
}
export default async function Detail({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const data = (await getBlog((await params).slug)).data;

    return (
        <ExploreLayout>
            <PageClient
                blog={data.blog}
                prevBlog={data.prevBlog}
                nextBlog={data.nextBlog}
                relatedBlogs={data.relatedBlogs}
            />
        </ExploreLayout>
    )
}
