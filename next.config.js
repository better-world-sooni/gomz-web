/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
  },
  publicRuntimeConfig: {
    CONF_SERVER_URL: process.env.CONF_SERVER_URL,
    CONF_COOKIE_DOMAIN: process.env.CONF_COOKIE_DOMAIN,
    CONF_IS_DEVELOPMENT: process.env.CONF_IS_DEVELOPMENT,
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      stream: require.resolve('stream-browserify'),
      crypto: require.resolve('crypto-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
    };
    return config;
  },
  reactStrictMode: false,
}
