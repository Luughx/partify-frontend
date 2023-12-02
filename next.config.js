/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND_URI: "http://127.0.0.1:8080/api"
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "storage.googleapis.com",
                pathname: "**"
            }
        ]
    }
}

module.exports = nextConfig
