const postcssPlace = require("postcss-place");

module.exports = {
  plugins: [
    "postcss-preset-env",
    // "autoprefixer",
    postcssPlace({
      preserve: false,
    }),
  ],
};
