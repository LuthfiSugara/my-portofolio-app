/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        APP_URL: process.env.NEXT_APP_URL,
        EMAIL: process.env.NEXT_PUBLIC_EMAIL,
        PASSWORD: process.env.NEXT_PUBLIC_PASSWORD
    },
};

export default nextConfig;
