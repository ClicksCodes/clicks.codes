require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
        test: /\.svg$/,
        use: [
            {
                loader: "@svgr/webpack",
                options: {
                    svgo: false, // Optimization caused bugs with some of my SVGs
                },
            },
        ],
    });
    return config;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          }
        ]
      },
    ];
  },
  images: {
    domains: ["picsum.photos", "cdn.discordapp.com"]
  },
  env: {
    NUCLEUS_CALLBACK: process.env.NUCLEUS_CALLBACK,
  }
};
