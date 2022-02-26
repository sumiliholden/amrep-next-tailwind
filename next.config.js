module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ["tailwindui.com", "images.unsplash.com"],
  },
  eslint: { ignoreDuringBuilds: true },
};
