import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isStaticExport ? "/PringGOC" : "");

const nextConfig: NextConfig = {
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  turbopack: {
    root: __dirname,
  },
};

if (isStaticExport) {
  nextConfig.output = "export";
  nextConfig.trailingSlash = true;
}

export default nextConfig;
