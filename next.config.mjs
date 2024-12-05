/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        RESEND_API_KEY: process.env.NEXT_PUBLIC_RESEND_API_KEY
    },
};

export default nextConfig;
