/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'st2.depositphotos.com',
                port: '',
                pathname: '/1560768/5550/i/950/depositphotos_55500797-stock-photo-woman-writing-url-on-blackboard.jpg',
            },
        ],
    },
}

module.exports = nextConfig
