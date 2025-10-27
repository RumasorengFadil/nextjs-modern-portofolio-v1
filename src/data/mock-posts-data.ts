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
    images: ["/images/project/project-2.png"],
    link: "https://wadonfirly.my.id/",
    source: "https://github.com/RumasorengFadil/Point-of-Sale-Application",
  },
  {
    id: "2",
    title: "Bbyts Company Profile Website with Integrated Blog System",
    description:
      "Company Profile Webiste with Next.js, Laravel, Tailwind, shadcn/ui.",
    images: ["/images/project/project-3.png"],
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
      "/images/project/library-management-system-1.png",
      "/images/project/library-management-system-2.png",
      "/images/project/library-management-system-3.png",
      "/images/project/library-management-system-4.png",
    ],
    link: "https://www.rotanademi.co.id/",
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
    position: "Web Developer",
    startDate: "May 2018",
    endDate: "Sept 2020",
    summary: [
      "Spearheaded the development of a modern blog platform using Laravel (backend) and Next.js (frontend) to strengthen the company’s digital presence and content strategy.",
      "Built reusable, responsive, and accessible UI components using Tailwind CSS and shadcn/ui, enhancing maintainability and user experience.",
      "Integrated Google Analytics to track blog performance, including article views, visitor demographics, and engagement metrics.",
      "Engineered dynamic CMS features such as WYSIWYG-based blog creation, category & tag management, dashboard analytics, and comment moderation.",
      "Designed and optimized RESTful API endpoints, model relationships, and Eloquent queries to support scalable content workflows.",
      "Collaborated closely with stakeholders to translate business requirements into intuitive and practical CMS features.",
    ],
  },
  {
    company: "PT. Cazh Technology",
    position: "Web Developer",
    startDate: "Jul",
    endDate: "Oct 2024",
    summary: [
      "Led the Development and maintenance of responsive Library Management System web applications using Laravel and React.js",
      "Implemented Single Page Applications (SPA) with Inertia.js",
      "Utilized Tailwind CSS for frontend styling",
      "Collaborated on testing, deployment, and API integration",
    ],
  },
  {
    company: "Bangkit Academy by Google, Tokopedia, Gojek, & Traveloka",
    position: "Android Developer",
    startDate: "Aug 2023",
    endDate: "Jan 2024",
    summary: [
      "Learned modern Android app development using Kotlin",
      "Applied MVVM architecture, Room Database, and Retrofit in real apps",
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
