/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Disable image optimization since we're using static export
  images: {
    unoptimized: true,
  },
  // Add basePath and assetPrefix for GitHub Pages
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig 