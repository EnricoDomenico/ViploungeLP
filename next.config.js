/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Essencial para o Firebase Hosting
  reactStrictMode: true,
  images: {
    unoptimized: true,   // Recomendado para exportação estática
  },
}

module.exports = nextConfig