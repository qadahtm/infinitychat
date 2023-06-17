/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true,  asyncWebAssembly: true};

    return config;
  },
};

export default nextConfig;
