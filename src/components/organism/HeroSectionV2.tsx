import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function HeroSection() {
    return (
        <section className="container grid min-h-screen overflow-hidden mx-auto place-items-center py-24 text-center">
            <div className="max-w-3xl">
                <Image src="/images/app/hero-photo.png" alt="Jay" width={120} height={120}
                    className="mx-auto rounded-full border mb-6 animate-fade-in" />

                <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
                <h1 className="py-3.5 px-0.5 z-10 text-4xl font-bold md:text-8xl text-transparent animate-title bg-black dark:bg-white sm:text-5xl duration-1000 whitespace-nowrap bg-clip-text">RUMASORENG</h1>
                <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

                <p className="mt-4 text-muted-foreground animate-fade-in">I’m a Fullstack Web Developer passionate about building scalable, SEO friendly, safety, elegant web solutions that solve real business problems.</p>

                <div className="mt-8 flex justify-center gap-3 animate-fade-in">
                    <Button asChild size="lg"><Link href="/explore">See Blog</Link></Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href={`mailto:${siteConfig.email}`}>Get in Touch</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
