import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // eslint-config-next@16 + FlatCompat hits a circular JSON error during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
