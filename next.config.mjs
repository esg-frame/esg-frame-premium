/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desabilitar carregamento automático de metadata de imagens
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  
  // Configuração webpack para ignorar favicon
  webpack: (config, { dev, isServer }) => {
    // Ignorar favicon.ico durante o build
    config.module.rules.push({
      test: /favicon\.ico$/,
      use: 'ignore-loader'
    });
    
    return config;
  },
  
  // Configuração de imagens
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }
};

export default nextConfig;/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
