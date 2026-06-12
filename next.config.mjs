/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The page is built standalone; lint is run separately so it never blocks a build.
  eslint: { ignoreDuringBuilds: true },
  images: {
    // Logo + footer assets are bundled locally in /public/images, but allow the
    // live Hayyu GCS bucket too so final photography can be swapped in remotely.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/hayyu-storage/**",
      },
    ],
  },
};

export default nextConfig;
