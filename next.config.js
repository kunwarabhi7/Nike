/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['static.nike.com',
  'www.nike.com','secure-images.nike.com']
  }
}

module.exports = nextConfig
