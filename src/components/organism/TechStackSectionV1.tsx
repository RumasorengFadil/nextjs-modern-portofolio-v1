import { Badge } from "../ui/badge"
import { skills } from "@/data/mock-posts-data"

export default function TechStackSection () {
    return (
        <section className="container py-20">
        <h2 className="text-4xl font-bold text-center">Tech Stack</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {skills.map((s) => (
            <Badge key={s.name} className="px-4 py-2 text-base">{s.name}</Badge>
          ))}
        </div>
      </section>
    )
}
