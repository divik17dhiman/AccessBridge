/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (isServer) {
        config.externals = [...config.externals, "pa11y"];
      }
      return config;
    },
  };
  
  module.exports = nextConfig;
  