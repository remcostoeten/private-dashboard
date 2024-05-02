const million = require("million/compiler");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["cdn.builder.io", "media.licdn.com"],
  },
};

const millionConfig = {
  auto: {
    threshold: 0.05, // default: 0.1,
    skip: ["useBadHook", /badVariable/g], // default []
    // if you're using RSC: auto: { rsc: true },
  },
};

module.exports = million.next(nextConfig, millionConfig);