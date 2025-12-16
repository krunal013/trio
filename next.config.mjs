/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
            // ✅ CloudFront images
      {
        protocol: "https",
        hostname: "d33wubrfki0l68.cloudfront.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.rareblocks.xyz",
        pathname: "/**",
      }
    ],
  },
  reactStrictMode: true,
  trailingSlash: false, 
};

export default nextConfig;
