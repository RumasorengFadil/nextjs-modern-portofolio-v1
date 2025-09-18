import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: process.env.NEXT_PUBLIC_ENV === "local" ? "http" : "https",
        hostname:
          process.env.NEXT_PUBLIC_ENV === "local"
            ? process.env.NEXT_PUBLIC_IMAGE_HOST ?? "localhost"
            : process.env.NEXT_PUBLIC_IMAGE_HOST ?? "",
      },
    ],
  },
  experimental: {
    typedRoutes: false, // opsional, bantu cek error pada route dinamis
  },
  eslint: {
    ignoreDuringBuilds: false, // agar build tidak gagal hanya karena warning eslint
  },
  typescript: {
    ignoreBuildErrors: false, // rekomendasi: biarkan error TS menghentikan build
  },
};

export default nextConfig;
