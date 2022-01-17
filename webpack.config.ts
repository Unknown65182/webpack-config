import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

import path from "path";
import HtmlPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

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
        use: ["babel-loader", "astroturf/loader"],
      },
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        minify: TerserPlugin.terserMinify,
      }),
      new CssMinimizerPlugin({
        parallel: true,
        minify: CssMinimizerPlugin.cssnanoMinify,
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlPlugin({
      filename: path.resolve(__dirname, "dist", "index.html"),
      template: path.resolve(__dirname, "public", "index.html"),
      inject: "body",
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
  },
  devtool: isDev ? "source-map" : false,
  devServer: {
    port: 3000,
    static: {
      directory: "./dist",
    },
  },
  target: isDev ? "web" : "browserslist",
};

export default config;
