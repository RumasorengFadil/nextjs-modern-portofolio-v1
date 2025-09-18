import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Blog } from "@/typedata/blog/blog"
import Image from "next/image"
import Link from "next/link"

export default function RelatedBlogPosts({ blogs }: { blogs: Blog[] }) {
    if (blogs.length === 0) return null
    return (
        <div className="mt-12 space-y-4">
            <h3 className="text-lg font-semibold">🧠 Artikel Terkait</h3>
            <div className="grid md:grid-cols-2">
                {blogs.map((blog: Blog) => (
                    <Link href={`/explore/${blog.slug}`}>
                        <Card key={blog.id} className="flex overflow-hidden hover:shadow-md hover:shadow-card-foreground/20 py-0 gap-0">
                            {blog.image_url && (
                                <div className="relative w-full aspect-[16/9] rounded-l-md">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_API_URL}${blog.image_url}`}
                                        alt={blog.title}
                                        className="object-cover rounded-l-md"
                                        priority
                                        fill
                                    />
                                </div>
                            )}
                            <CardContent className="p-4">
                                <CardTitle>
                                    {blog.title}
                                </CardTitle>
                                {blog.published_at && (
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {new Date(blog.published_at).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </p>
                                )}
                            </CardContent>
                        </Card>

                    </Link>
                ))}
            </div>
        </div>
    )
}
