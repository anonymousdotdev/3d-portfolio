/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["em-content.zobj.net","assets.aceternity.com"],
    
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
