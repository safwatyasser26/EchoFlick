/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                pathname: '**'
            }
        ],
        minimumCacheTTL: 31536000,
    }
};

export default nextConfig;
