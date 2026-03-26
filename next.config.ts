import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/PringGOC",
  images: { unoptimized: true },
  turbopack: {
    root: ".",
  },
};

export default nextConfig;
