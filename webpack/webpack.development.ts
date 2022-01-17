import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { paths } from "./paths";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  plugins: [new ReactRefreshWebpackPlugin()],
  devServer: {
    port: 3000,
    compress: true,
    static: {
      directory: paths.build.root,
    },
  },
};

export default config;
