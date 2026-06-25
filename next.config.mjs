/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Habilitar otimização de imagens para melhor performance (LCP/FCP)
  // images: {
  //   unoptimized: true,
  // },
}

export default nextConfig
