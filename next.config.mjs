import { createMDX } from 'fumadocs-mdx/next';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'standalone',
  webpack: (webpackConfig) => {
    webpackConfig.resolve.alias['next/og'] = false;
    return webpackConfig;
  },
  turbopack: {
    resolveAlias: {
      'next/og': './lib/empty-og.js',
    },
  },
};

export default withMDX(config);

initOpenNextCloudflareForDev();
