

// export const metadata: Metadata = {
//     title: "Bbyts Blog | Tips, Tutorial, & Tren Digital untuk Bisnis Anda",
//     description: "Baca artikel terbaru di Bbyts Blog tentang pembuatan website, UI/UX design, dan solusi digital terkini. Pelajari tren industri teknologi serta tips terbaik untuk bisnis dan proyek digital Anda!",
//     keywords: "blog teknologi, pengembangan web, UI/UX design, tutorial website, digital marketing, tren teknologi 2024, desain aplikasi, bisnis online, solusi digital, tips startup",
//     authors: [{ name: "Bbyts Team" }],
//     robots: "index, follow",
//     openGraph: {
//         title: "Bbyts Blog - Wawasan Terbaru dalam Dunia Digital",
//         description: "Temukan tips, tutorial, dan tren terbaru seputar pengembangan web, UI/UX, dan bisnis digital hanya di Bbyts Blog.",
//         url: "https://bbyts.com/blog",
//         type: "website",
//         images: [{
//             url: "https://bbyts.com/images/blog-banner.jpg",
//             width: 1200,
//             height: 630,
//             alt: "Bbyts Blog - Wawasan Digital"
//         }],
//     },
//     twitter: {
//         card: "summary_large_image",
//         title: "Bbyts Blog - Wawasan Digital & Tips Teknologi",
//         description: "Dapatkan insight terbaru tentang pengembangan website, desain UI/UX, dan solusi digital terbaik untuk bisnis Anda di Bbyts Blog!",
//         images: "https://bbyts.com/images/blog-banner.jpg",
//         site: "@bbyts",
//     },
// };

import PageClient from "./pageClient";

export default async function Preview() {
    return (
        <PageClient />
    )
}
