import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Match internal nav links (`/about/`) and canonical URLs. */
  trailingSlash: true,
};

export default nextConfig;
