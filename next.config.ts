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
  },

  images: {
    unoptimized: true, // ← WAJIB untuk HTTP, menghindari error 400

    remotePatterns: [
      {
        protocol: "http",
        hostname: "jardorcms.test",
        pathname: "/sections/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/sections/**",
      },
    ],
  },
};

export default nextConfig;