export const skills = [
  { name: "Next.js", icon: "nextjs" },
  { name: "Laravel", icon: "laravel" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "TypeScript", icon: "ts" },
  { name: "Framer Motion", icon: "framer" },
];
export const projects = [
  {
    id: "1",
    title: "Wadon Firly POS & Accounting Website",
    description:
      "Web-based cashier and accounting application with Laravel + React.",
    images: ["/images/project/project-2.webp"],
    link: "https://wadonfirly.my.id/",
    source: "https://github.com/RumasorengFadil/Point-of-Sale-Application",
  },
  {
    id: "2",
    title: "Bbyts Company Profile Website with Integrated Blog System",
    description:
      "Company Profile Webiste with Next.js, Laravel, Tailwind, shadcn/ui.",
    images: ["/images/project/project-3.webp"],
    link: "https://www.bbyts.com/",
    source: "",
  },
  {
    id: "3",
    title: "Rotanademi Company Profile",
    description: "Company Profile Website with NextJs",
    images: ["/images/project/rotanademy-hero-section.png"],
    link: "https://www.rotanademi.co.id/",
    source: "",
  },
  {
    id: "4",
    title: "Cazh Library Management System",
    description:
      "A modern and simple Library Management System that can manage memberships, circulation, and bibliographies.",
    images: [
      "/images/project/library-management-system-1.webp",
      "/images/project/library-management-system-2.webp",
      "/images/project/library-management-system-3.webp",
      "/images/project/library-management-system-4.webp",
    ],
    link: "https://github.com/RumasorengFadil/calms",
    source: "https://github.com/RumasorengFadil/calms",
  },
];
export const experience = [
  {
    year: "2023 - Sekarang",
    role: "Fullstack Developer",
    company: "Freelance",
    description:
      "Mengembangkan aplikasi web untuk klien lokal & internasional.",
  },
  {
    year: "2022",
    role: "Intern Web Developer",
    company: "Startup X",
    description: "Mengerjakan modul frontend & backend kecil-kecilan.",
  },
];
export const experienceV1 = [
  {
    company: "Abhiparaya Mahardika",
    position: "Founder & Web Developer",
    startDate: "January 2025",
    endDate: "Now",
    summary: [
      "Led end-to-end development of the company’s digital products, ensuring clean architecture, performance, and long-term scalability.",
      "Established UI/UX standards and reusable component systems to improve development efficiency and deliver consistent user experiences.",
      "Strengthened the company’s online presence and content strategy through modern web technologies and data-driven improvements.",
      "Implemented development workflows, best practices, and structured documentation to improve maintainability and team onboarding readiness.",
      "Collaborated with stakeholders to translate business needs into practical, user-focused features that support product and brand growth.",
    ],
  },
  {
    company: "PT. Cazh Technology",
    position: "Web Developer",
    startDate: "Jul",
    endDate: "Oct 2024",
    summary: [
      "Led the Development and maintenance of responsive Library Management System web applications using Laravel and React.js",
      "Engineered a responsive and user-friendly application using Laravel, Inertia React.js, Tailwind CSS, and MySQL, which improved overall user engagement and experience.",
      "Developed and deployed APIs for front-end integration, ensuring seamless communication between client and server.",
      "Implemented best coding practices, resulting in maintainable and scalable code, and contributed to enhancing the overall quality of the system",
    ],
  },
  {
    company: "Telkom University",
    position: "Team Leader & Web Developer - PKM-KC (Karsa Cipta)",
    startDate: "Feb 2024",
    endDate: "Aug 2024",
    summary: [
      "Led a team of 4 people in developing the Catur Jawa digital game as a more interactive medium for cultural preservation and education.",
      "Managed the project roadmap, task distribution, and development timeline using an Agile approach to ensure effective progress.",
      "Coordinating the cultural research process, game design, user testing, and prototype validation.",
      "Collaborating in the preparation of proposals, presentations, and reports to successfully obtain funding from Belmawa Kemendikbud under the PKM-KC scheme.",
    ],
  },
  {
    company: "Bangkit Academy by Google, Tokopedia, Gojek, & Traveloka",
    position: "Android Developer",
    startDate: "Aug 2023",
    endDate: "Jan 2024",
    summary: [
      " Developed the front-end interface using Kotlin and XML, ensuring a seamless and responsive user experience.",
      " Applied the MVVM architecture model, which enhanced code maintainability, scalability, and clarity.",
      "Collaborated closely with the backend team through well-defined APIs to ensure smooth integration between the front end and back end.",
      "Mentored by professional engineers from top Indonesian tech companies",
    ],
  },
];

export const testimonials = [
  { name: "Andi", text: "Profesional & cepat tanggap. Hasil memuaskan!" },
  { name: "Budi", text: "Koding rapi, mudah dikembangkan lagi." },
];

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  publishedAt: string;
};
export const posts: Post[] = [
  {
    id: "1",
    title: "Membangun Portfolio Modern dengan Next.js",
    slug: "portfolio-modern-nextjs",
    excerpt:
      "Langkah-langkah praktis membangun portfolio yang cepat danelegan.",
    content: `# Judul H1\n\nIni contoh konten **Markdown style**. Gunakan
Tailwind typography untuk tampilan rapi.`,
    tags: ["nextjs", "frontend"],
    publishedAt: "2025-08-01",
  },
  {
    id: "2",
    title: "Workflow Dev → Staging → Prod di Vercel",
    slug: "workflow-vercel-3-stage",
    excerpt: "Strategi branch & environment untuk rilis mulus.",
    content: `## Section\n\nPreview deployments memudahkan QA sebelum ke
production.`,
    tags: ["vercel", "devops"],
    publishedAt: "2025-08-10",
  },
  {
    id: "3",
    title: "Workflow Dev → Staging → Prod di Vercel",
    slug: "workflow-vercel-3-stage",
    excerpt: "Strategi branch & environment untuk rilis mulus.",
    content: `## Section\n\nPreview deployments memudahkan QA sebelum ke
production.`,
    tags: ["vercel", "devops"],
    publishedAt: "2025-08-10",
  },
  // Tambah lagi sesuai kebutuhan
];

export const socialLinks = [
  { text: "Instagram", href: "https://www.instagram.com/fadilrumasoreng/" },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/fadil-hijayat-rumasoreng-4944671b9/",
  },
  { text: "Github", href: "https://github.com/RumasorengFadil" },
  { text: "Youtube", href: "https://github.com/RumasorengFadil" },
  { text: "Dribbble", href: "https://github.com/RumasorengFadil" },
];

export const author = "Fadil Hijayat Rumasoreng";
export const year = "2025";
