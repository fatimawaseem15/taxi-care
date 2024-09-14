/** @type {import('next').NextConfig} */
// next.config.mjs
export default {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.texicare.com',
                pathname: '/**',
            },
        ],
    },
};

