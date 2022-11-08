/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    
    loader: 'akamai',
    path: '',
  },
}
const moduleExports = {
  async rewrites() {
    return [
      {
        source: 'https://www.tom-crude.vercel.app/',
        destination: 'https://tom-crude.vercel.app/'
      }
    ]
  }
};


module.exports = moduleExports;

module.exports = nextConfig
