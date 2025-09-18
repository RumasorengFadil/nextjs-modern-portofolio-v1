import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { projects } from "@/data/mock-posts-data"

export default function LatestProject() {
    return (
        <section id="projects" className="container py-20 mx-auto">
            <h2 className="text-4xl font-bold text-center">Latest Project</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
                {projects.map((p) => (
                    <Card key={p.id} className="overflow-hidden">
                        <Image src={p.image} alt={p.title} width={600} height={400}

                            className="w-full h-48 object-cover object-top" />
                        <CardHeader>
                            <CardTitle>{p.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{p.description}</p>
                            <Button asChild size="sm" className="mt-4"><Link href={p.link} target="__blank"
                            >Detail</Link></Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
