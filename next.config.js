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
        source: '/foo',
        destination: '/bar'
      }
    ]
  }
};


module.exports = moduleExports;

module.exports = nextConfig
