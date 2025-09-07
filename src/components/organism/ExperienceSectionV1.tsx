import { experience } from "@/data/mock-posts-data"

export default function ExperienceSection() {
    return (
        <section className="container py-20 max-w-3xl">
            <h2 className="text-2xl font-bold text-center">Pengalaman</h2>
            <div className="mt-8 space-y-6">
                {experience.map((exp, i) => (
                    <div key={i} className="border-l-2 pl-4">
                        <p className="text-sm text-muted-foreground">{exp.year}</p>
                        <h3 className="font-semibold">{exp.role} — {exp.company}</h3>
                        <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
