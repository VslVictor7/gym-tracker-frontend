import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['user-images.githubusercontent.com'], // Adicione o domínio aqui
  },
};

export default nextConfig;
