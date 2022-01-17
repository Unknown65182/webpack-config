const postcssPlace = require("postcss-place");

module.exports = {
  plugins: [
    "postcss-preset-env",
    postcssPlace({
      preserve: false,
    }),
  ],
};
