/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Disable image optimization since we're using static export
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 