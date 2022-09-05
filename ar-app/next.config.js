/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

rewrites: async () => [
  {
    source: "/public/medicine_bow.html",
    destination: "/pages/api/ar_test.js",

    source: "/public/ar_test.html",
    destination: "/pages/api/ar_test.js",

    source: "/public/yale.html",
    destination: "/pages/api/ar_test.js",
  },
],

module.exports = nextConfig
