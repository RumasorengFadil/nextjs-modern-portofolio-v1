import { posts } from "@/data/mock-posts-data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

export default function BlogPreviewSection() {
    return (
        <section className="container py-20 mx-auto">
            <h2 className="text-4xl font-bold text-center">Latest Posts</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((p) => (
                    <Card key={p.id} >
                        <CardHeader>
                            <CardTitle><Link href={`/blog/${p.slug}`}
                                className="hover:underline">{p.title}</Link></CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="line-clamp-3 text-muted-foreground">{p.excerpt}</
                            p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="mt-6 text-center">
                <Button asChild variant="outline"><Link href="/blog">See All</Link></Button>
            </div>
        </section>
    )
}
