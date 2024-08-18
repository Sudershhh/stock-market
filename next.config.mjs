/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apicms.thestar.com.my",
        port: "",
      },
    ],
  },
};
export default nextConfig;
