import { experienceV1 } from "@/data/mock-posts-data"
import { CircleCheck } from "lucide-react"

export default function ExperienceSection() {
    return (
        <section id="experiences" className="container min-h-screen py-20 max-w-3xl mx-auto">
            <h2
                className="mb-16 text-4xl font-bold tracking-tighter md:text-5xl"
            >
                Work Experience
            </h2>
            {experienceV1.map(({ company, position, startDate, endDate, summary }, i) => (
                <div className="mb-10" key={i}>
                    <h3 className="mb-1.5 text-2xl font-semibold ">
                        {company}
                    </h3>
                    <div className="flex flex-col items-start pb-5">
                        <h4 className="mb-0.5 text-2xl font-medium text-blue-500">
                            {position}
                        </h4>
                        <span className="pb-[2px] text-sm text-muted-foreground">
                            {startDate} — {endDate}
                        </span>
                    </div>
                    {Array.isArray(summary) ? (
                        <ul className="list-none">
                            {summary.map((log, i) => (
                                <li className="flex relative mb-3 pl-8 text-base text-neutral" key={i}>
                                    <div>
                                        <CircleCheck className="absolute top-1 left-0" size={16} />
                                    </div>

                                    {log}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-base text-neutral">{summary}</p>
                    )}
                </div>
            ))}
        </section>
    )
}
