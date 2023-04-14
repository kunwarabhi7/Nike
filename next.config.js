/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['static.nike.com',
  'www.nike.com','secure-images.nike.com',"res.cloudinary.com"]
  }
}

module.exports = nextConfig
