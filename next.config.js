/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/dbgcnizuq/**',
            },
        ],
    },
}

module.exports = nextConfig
// http://res.cloudinary.com/dbgcnizuq/image/upload/v1696674838/myposts/niio5o2hjq6qktquu0it.jpg