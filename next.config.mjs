/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    domains: ["example.com", "learning-books-server.vercel.app", "i.ibb.co.com"],
  },
};

export default nextConfig;
