/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // More specific webpack cache configuration
    if (dev) {
      // Disable caching in development mode
      config.cache = false;
    } else {
      // Configure caching for production
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
        cacheDirectory: '.next/cache/webpack',
        name: isServer ? 'server' : 'client',
        version: '1.0.0',
      };
    }
    return config;
  },
};

export default nextConfig;
