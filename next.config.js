/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(config);
