const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? "/awesome-ai-guide" : "";

module.exports = withNextra({
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Set basePath for GitHub Pages (repository name)
  basePath: basePath,
  assetPrefix: basePath,
});
