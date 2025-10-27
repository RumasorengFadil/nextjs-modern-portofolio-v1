import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { projects } from "@/data/mock-posts-data"
import { ArrowUpRight, Lock } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

export default function LatestProject() {
    return (
        <section id="projects" className="container py-20 mx-auto">
            <h2 className="text-4xl font-bold text-center">Latest Project</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
                {projects.map((p) => (
                    <Card key={p.id} className="overflow-hidden">
                        <Carousel opts={{ slidesToScroll: "auto" }} className="w-full max-w-full mx-auto">
                            <CarouselContent>
                                {p.images.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <Image src={image} alt={p.title} width={600} height={400}

                                            className="w-full h-60 object-cover object-top" />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            {p.images.length > 1 && <>
                                <CarouselNext />
                                <CarouselPrevious />
                            </>}
                        </Carousel>

                        <CardHeader>
                            <CardTitle>{p.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4 h-full justify-between">
                            <p className="text-muted-foreground">{p.description}</p>

                            <div className="flex items-center gap-4">
                                <Button asChild size="sm"><Link href={p.link} target="__blank"
                                >Preview</Link></Button>
                                {!p.source ? <>
                                    <span className="flex items-center text-gray-300 cursor-auto gap-1 font-semibold">
                                        <Lock size={16} />
                                        Privacy
                                    </span>
                                </> : <>
                                    <Link href={p.source} className="flex items-center cursor-pointer gap-1 font-semibold">
                                        <ArrowUpRight />
                                        Source
                                    </Link>
                                </>}

                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
