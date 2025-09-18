/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL, // Domain utama website
  generateRobotsTxt: true,
  outDir: "./public",
  changefreq: "weekly",
  priority: 0.8,
  sitemapSize: 7000,
  exclude: [
    "/auth/*", // contoh: tidak diindex login/register
    "/admin/*", // contoh: tidak diindex admin
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_API_URL}/sitemap.xml`, // Sitemap dinamis dari Laravel
    ],
  },
  // Halaman statis yang dimasukkan manual
  additionalPaths: async (config) => {
    const result = [];

    result.push({
      loc: "/",
      changefreq: "weekly",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    });

    result.push({
      loc: "/explore",
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    });
    return result;
  },
};
