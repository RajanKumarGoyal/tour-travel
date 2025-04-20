/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/tour-travel' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/tour-travel/' : '',
}

module.exports = nextConfig 