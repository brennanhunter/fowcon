import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/remodeling',
        destination: '/construction/remodeling',
        permanent: true,
      },
      {
        source: '/remodeling/:slug',
        destination: '/construction/remodeling/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
