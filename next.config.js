/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    
    loader: 'akamai',
    path: '',
  },
}

module.exports = {
  async redirects() {
    return [
      {
        source: 'https://www.tom-crude.vercel.app/',
        destination: 'https://tom-crude.vercel.app/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
