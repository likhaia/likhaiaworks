/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Keeps URLs clean and consistent across static hosts
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
