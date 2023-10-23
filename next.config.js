/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["m.media-amazon.com", "www.amazon.com.br"],
  },
};

module.exports = nextConfig;
