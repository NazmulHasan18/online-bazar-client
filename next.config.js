/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "assets.adidas.com",
         },
      ],
   },
};

module.exports = nextConfig;
