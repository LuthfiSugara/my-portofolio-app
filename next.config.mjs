/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        EMAIL: process.env.NEXT_PUBLIC_EMAIL,
        PASSWORD: process.env.NEXT_PUBLIC_PASSWORD
    },
};

export default nextConfig;
