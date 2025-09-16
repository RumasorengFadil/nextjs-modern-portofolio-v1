import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
            ? "localhost"
            : "api.bbyts.com",
      },
    ],
  },
};

export default nextConfig;
