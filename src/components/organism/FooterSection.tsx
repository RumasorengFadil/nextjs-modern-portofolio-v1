import { author, socialLinks, year } from "@/data/mock-posts-data"

export const FooterSection = () => {
    return <section
        className="w-full border-t border-neutral/20 px-5 pt-5 pb-8 text-center text-white"
    >
        <ul className="mb-5 flex flex-wrap justify-center gap-x-5 text-xs">
            {
                socialLinks.map(({ text, href }, i) => (
                    <li key={i}>
                        <a
                            href={href}
                            target="_blank"
                            className="inline-block px-4 py-3 after:relative after:bottom-[-4px] after:content-[url(/external.svg)] hover:text-primary"
                        >
                            {text}
                        </a>
                    </li>
                ))
            }
        </ul>
        <p className="text-xs">
            {author} © {year}. <span className="text-neutral"
            >Reference from</span> Alejandro Múnez Cuntez & Chronark
        </p>
    </section>
}