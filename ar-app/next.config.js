/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

rewrites: async () => [
  {
    source: "/public/ar_test.html",
    destination: "/pages/api/ar_test.js",
  },
],

module.exports = nextConfig
