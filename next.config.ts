import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/illustration",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
