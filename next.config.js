/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dsm01pap007files.storage.live.com',
        port: '',
        pathname: '/**/**/**',
      },
    ],
  },
}

module.exports = nextConfig
