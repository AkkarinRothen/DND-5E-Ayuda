import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  basePath: "/dnd-helper-app",
  assetPrefix: "/dnd-helper-app/",
  output: "export",
};

export default nextConfig;
