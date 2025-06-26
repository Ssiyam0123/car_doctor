/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this webpack config
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'swiper/modules': 'swiper/esm/modules',
        'swiper/react': 'swiper/esm/react',
        'swiper/types': 'swiper/esm/types',
        'swiper': 'swiper/esm',
      },
    };
    return config;
  }
};

export default nextConfig;