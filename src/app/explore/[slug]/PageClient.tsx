"use client"

import { Card, CardContent } from "@/components/ui/card"
import { format } from "date-fns"
import { MessageCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FormEventHandler, useEffect, useState } from "react"
import Image from "next/image"
import { Blog } from "@/typedata/blog/blog"
import { useForm } from "@/hooks/use-form"
import { CommentBlogForm } from "@/typedata/blog/commentBlogForm"
import BlogNavigation from "@/components/organism/BlogNavigation"
import RelatedBlogPosts from "@/components/organism/RelatedBlogPosts"
import CommentsSection from "@/components/organism/CommentsSection"

export default function PageClient({ blog, prevBlog, nextBlog, relatedBlogs }: { blog: Blog, prevBlog: Blog, nextBlog: Blog, relatedBlogs: Blog[] }) {
    const [blogData, setBlog] = useState<Blog>(blog);

    const { data, setData, loading, submit } = useForm<CommentBlogForm>({
        name: "",
        content: "",
        blogId: ""
    })
    
    useEffect(() => {
        setData("blogId", blogData.id);
    }, []);
    
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        submit("post", '/api/comment/store', {
            onSuccess: (res) => {
                setBlog((prev) => ({
                    ...prev,
                    comments: [...prev.comments, res.data.data]
                }))
            }
        })
    }
    return <>
        <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">{blogData.title}</h1>

            <div className="text-sm text-gray-500 mb-4 flex flex-wrap items-center gap-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src={`${process.env.NEXT_PUBLIC_API_URL}${blog?.user.image_url}`} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>{blogData.user?.name}</span>
                <span>· {format(new Date(blogData.published_at), "dd MMM yyyy")}</span>
                <span className="flex items-center gap-1">
                    · <MessageCircle className="w-4 h-4" />
                    {blogData.comments?.length ?? 0}
                </span>
            </div>

            {blogData.image_url && (
                <div className="relative w-full h-60 sm:h-96 object-cover mb-6">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}${blogData.image_url}`}
                        alt={blogData.title}
                        className="object-cover rounded-md"
                        priority
                        fill
                    />
                </div>
            )}
            <div />

            {/* Content */}
            <Card className="prose prose-neutral font-dyslexic dark:prose-invert max-w-none border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: blogData.content,
                        }}
                    />
                </CardContent>
            </Card>

            {/* Tags */}
            {blogData.tags?.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                    {blogData.tags.map((tag) => (
                        <span
                            key={tag.tag.name}
                            className="text-sm text-gray-500 border px-3 py-1 rounded-full"
                        >
                            <div id={tag.tag.name}></div>
                        </span>
                    ))}
                </div>
            )}

            {/* Navigasi Next/Prev */}
            <div className="max-w-3xl mx-auto mt-10">
                <BlogNavigation prevBlog={prevBlog} nextBlog={nextBlog} />
            </div>

            {/* Artikel Terkait */}
            <div className="max-w-3xl mx-auto">
                <RelatedBlogPosts blogs={relatedBlogs || []} />
            </div>

            {/* Komentar */}
            <CommentsSection loading={loading} blog={blogData} form={data} setData={setData} onSubmit={handleSubmit} />
        </div>
    </>
}



