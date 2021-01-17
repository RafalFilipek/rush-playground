const path = require("path");

const config = {
  webpack: function (config, { defaultLoaders }) {
    return config;

    const resolvedBaseUrl = path.resolve(config.context, "../../");
    defaultLoaders.babel.options.cwd = resolvedBaseUrl;
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(tsx|ts|js|mjs|jsx)$/,
        include: [resolvedBaseUrl],
        use: defaultLoaders.babel,
        exclude: (excludePath) => {
          return /node_modules/.test(excludePath);
        },
      },
    ];
    return config;
  },
};

module.exports = config;
