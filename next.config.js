// @ts-check
const withNextIntl = require('next-intl/plugin')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io'],
  },
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
  },
}

module.exports = withNextIntl(nextConfig)
