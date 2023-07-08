/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "assets.adidas.com",
         },
         {
            protocol: "https",
            hostname: "i.ibb.co",
         },
      ],
   },
};

module.exports = nextConfig;
