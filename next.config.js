const path = require("path");

const nextConfig = {
  webpack: (config) => {
    // src ディレクトリをエイリアスのルートに設定
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};

module.exports = nextConfig;
