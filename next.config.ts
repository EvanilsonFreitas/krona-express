import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/krona-express' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/krona-express/' : '',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
