"use client"

import Head from "next/head"
import { useEffect, useState } from "react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useParams } from "next/navigation"
import { format } from "date-fns"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Route } from "next"
import axiosClient from "@/lib/axiosClient"
import { Blog } from "@/typedata/blog/blog"

export default function PageClient({ }) {
    const { id } = useParams();

    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axiosClient.get(`api/blog/preview/${id}`).then(res => setBlog(res.data.data));
    }, [id])

    return <>
        {/* Header */}
        <Head>Create Blog</Head>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-10">
            {/* Title */}
            <div>
                <CardTitle className="text-5xl font-bold">{blog?.title}</CardTitle>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <div className="">
                        <div className="flex items-center gap-3">
                            <Avatar className="w-8 h-8">
                                <AvatarImage src={`${process.env.NEXT_PUBLIC_API_URL}${blog?.user.image_url}`} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <div>
                                <p className="text-sm font-medium">{blog?.user.name}</p>
                                <p className="text-xs text-muted-foreground">{blog?.user.role}</p>
                            </div>
                        </div>
                    </div>
                    <Badge
                        variant={blog?.status === "publish" ? "default" : "outline"}
                        className="capitalize"
                    >
                        {blog?.status}
                    </Badge>

                    <span>·</span>
                    <span>Kategori: {blog?.category.name}</span>

                    {blog?.created_at && (
                        <>
                            <span>·</span>
                            <span>{format(new Date(blog?.created_at), "dd MMM yyyy")}</span>
                        </>
                    )}
                </div>
            </div>

            {/* Thumbnail */}
            {blog?.thumbnail && (
                <div className="relative w-full h-96 rounded-lg overflow-hidden">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}${blog?.thumbnail}`}
                        alt={blog.title}
                        className="object-cover"
                        priority
                        fill
                    />
                </div>
            )}

            {/* Blog Content */}
            <Card className="prose prose-neutral dark:prose-invert max-w-none border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: blog?.content as string
                        }}
                    />
                </CardContent>
            </Card>

            {/* Tags */}
            {(blog?.tags?.length ?? 0) > 0 && (
                <div className="flex flex-wrap gap-2">
                    {blog?.tags.map((tag) => (
                        <Link
                            key={tag.tag.name}
                            href={`/tags/${tag.tag.name}` as Route}
                            className="no-underline">
                            <Badge key={tag.tag.name} variant="secondary">
                                #{tag.tag.name}
                            </Badge>
                        </Link>
                    ))}
                </div>
            )}

            {/* Back Button */}
            <div className="pt-4">
                <Button variant="ghost" asChild>
                    <Link href="/admin/manage-blog">← Kembali ke daftar blog</Link>
                </Button>
            </div>
        </div>
    </>
}



