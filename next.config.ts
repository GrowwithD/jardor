import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false,

  turbopack: {
    root: __dirname,
  },

  experimental: {
    serverActions: {
      allowedOrigins: ["jardor.com", "www.jardor.com"],
    },
    optimizeCss: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      // Production CMS
      {
        protocol: "https",
        hostname: "cms.jardor.com",
        pathname: "/**",
      },
      // Local dev CMS
      {
        protocol: "http",
        hostname: "jardorcms.test",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;