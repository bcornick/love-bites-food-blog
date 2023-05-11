/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com`,
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    MONGODB_USERNAME: process.env.MONGODB_USERNAME,
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
    MONGODB_CLUSTERNAME: process.env.MONGODB_CLUSTERNAME,
    MONGODB_DATABASE: process.env.MONGODB_DATABASE,
  },
};

module.exports = nextConfig;
