import type { NextConfig } from "next";
import path from "path";

const nextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
