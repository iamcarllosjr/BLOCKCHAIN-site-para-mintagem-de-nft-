/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = {
  ...nextConfig,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals.push({
        bufferutil: "bufferutil",
        "utf-8-validate": "utf-8-validate",
      });
    }

    return config;
  },
};
