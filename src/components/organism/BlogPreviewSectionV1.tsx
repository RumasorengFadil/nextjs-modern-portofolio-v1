import { posts } from "@/data/mock-posts-data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { Blog } from "@/typedata/blog/blog";

export default function BlogPreviewSection({blogs}:{blogs:Blog[]}) {
    return (
        <section className="container py-20 mx-auto">
            <h2 className="text-4xl font-bold text-center">Latest Posts</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((b) => (
                    <Card key={b.id} >
                        <CardHeader>
                            <CardTitle><Link target="__blank" href={`/explore/${b.slug}`}
                                className="hover:underline">{b.title}</Link></CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="line-clamp-3 text-muted-foreground">{b.excerpt}</
                            p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="mt-6 text-center">
                <Button asChild variant="outline"><Link target="__blank" href="/explore">See All</Link></Button>
            </div>
        </section>
    )
}
