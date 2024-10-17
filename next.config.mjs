import path from 'path';
import withLess from 'next-with-less';

/** @type {import('next').NextConfig} */
const nextConfig = withLess({
  lessLoaderOptions: {
    modifyVars: {
      '@primary-color': '#1DA57A',
    },
    javascriptEnabled: true,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve('./src');
    return config;
  },
  experimental: {
    esmExternals: true,
  },
});

export default nextConfig;
