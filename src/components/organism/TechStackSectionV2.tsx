import Image from "next/image"

export default function TechStackSection () {
    return (
        <section id="tech" className="container py-20 mx-auto">
        <h2 className="text-4xl font-bold text-center">Tech Stack</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-16">
          <Image src="/icons/techstack/nextjs.svg" width={40} height={40} alt="techstack-nextjs" />
          <Image src="/icons/techstack/laravel.svg" width={40} height={40} alt="techstack-laravel" />
          <Image src="/icons/techstack/tailwind.svg" width={40} height={40} alt="techstack-tailwind" />
          <Image src="/icons/techstack/typescript.svg" width={40} height={40} alt="techstack-typescript" />
          <Image className="dark:invert dark:brightness-0 dark:contrast-100" src="/icons/techstack/github.svg" width={40} height={40} alt="techstack-github" />
          <Image className="dark:invert dark:brightness-0 dark:contrast-100" src="/icons/techstack/shadcn.svg" width={40} height={40} alt="techstack-github" />
          <Image src="/icons/techstack/zustand.svg" width={40} height={40} alt="techstack-github" />
        </div>
      </section>
    )
}
