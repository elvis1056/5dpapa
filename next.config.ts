import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/5dpapa',
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // 允許 import .md 檔案為字串（使用 Webpack 5 內建的 asset/source）
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
    });
    return config;
  },
};

export default nextConfig;