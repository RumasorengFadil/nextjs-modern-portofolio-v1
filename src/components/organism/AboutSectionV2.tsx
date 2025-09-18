import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="container flex flex-col mx-auto py-20 w-max">
            <h2 className="text-4xl font-bold text-center">About Me</h2>

            <div className="flex items-center gap-10 flex-col sm:flex-row">
                <p className="mt-4 text-muted-foreground max-w-96">I have experience
                    in building web-based applications from frontend to backend. My focus is
                    on clean code, good UX, and efficient solutions.</p>
                <div className="flex-1">
                    <Image src="/images/app/hero-photo.png" width={200} height={200} alt="about-photo" />
                </div>
            </div>
        </section>
    )
}
