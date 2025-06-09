import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (isServer) {
      config.cache = false; // Disable webpack cache on server build to avoid file rename errors
    }
    return config;
  },
};

export default nextConfig;
