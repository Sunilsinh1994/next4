/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['image.tmdb.org', 'other-image-host.com']
  }
}

module.exports = nextConfig
