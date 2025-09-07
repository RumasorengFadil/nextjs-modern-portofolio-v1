import { Button } from "../ui/button"
import Link from "next/link"

export default function CtaSection() {
    return (
        <section className="container py-20 text-center">
            <h2 className="text-4xl font-bold">{"Let's Work Together"}</h2>
            <p className="mt-4 text-muted-foreground">Interested in collaborating or need project assistance? Please contact me.</p>
            <div className="mt-6">
                <Button asChild size="lg"><Link href="/contact">Contact Me</Link></Button>
            </div>
        </section>
    )
}
