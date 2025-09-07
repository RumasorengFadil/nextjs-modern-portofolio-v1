import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

export default function HeroSection () {
    return (
        <section className="container grid place-items-center py-24 text-center">
            <div className="max-w-3xl">
                <Image src="/images/app/hero-photo.png" alt="Jay" width={120} height={120}
                    className="mx-auto rounded-full border mb-6" />
                <h1 className="text-4xl font-bold md:text-6xl">Halo, saya Jay </h1>
                <p className="mt-4 text-muted-foreground">Saya seorang Fullstack
                    Developer yang fokus pada membangun aplikasi web modern dengan performa
                    tinggi.</p>
                <div className="mt-8 flex justify-center gap-3">
                    <Button asChild size="lg"><Link href="/blog">Lihat Blog</Link></Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="/contact">Kontak Saya</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
