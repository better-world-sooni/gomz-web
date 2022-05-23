/** @type {import('next').NextConfig} */
module.exports = {
  publicRuntimeConfig: {
    CONF_SERVER_URL: process.env.CONF_SERVER_URL,
    CONF_COOKIE_DOMAIN: process.env.CONF_COOKIE_DOMAIN,
    CONF_IS_DEVELOPMENT: process.env.CONF_IS_DEVELOPMENT,
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  reactStrictMode: false,
}
