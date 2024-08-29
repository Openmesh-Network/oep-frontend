/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    {
      source: "/indexer/:call*",
      destination: "https://oep.plopmenz.com/indexer2/:call*",
    },
  ],
  reactStrictMode: true,
  webpack: (webpackConfig) => {
    // For web3modal
    webpackConfig.externals.push("pino-pretty", "lokijs", "encoding")
    return webpackConfig
  },
}

export default nextConfig
