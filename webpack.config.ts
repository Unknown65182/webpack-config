import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const isDev = process.env.NODE_ENV !== "production";

const config: Configuration = {
  mode: isDev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    port: 3000,
    static: {
      directory: "./dist",
    },
  },
};

export default config;
