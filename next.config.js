/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.egycdn.com", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
