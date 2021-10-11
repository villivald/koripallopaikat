const withMDX = require("@next/mdx")();

module.exports = withMDX({
  productionBrowserSourceMaps: true,
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  images: {
    domains: ["openweathermap.org"],
  },
});
