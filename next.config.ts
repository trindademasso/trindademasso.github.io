import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ✅ desativa a otimização
  },

};

export default nextConfig;
