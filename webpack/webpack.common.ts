import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { cpus } from 'os';
import { resolve } from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import { Configuration } from 'webpack';

import { paths } from './paths';

const config: Configuration = {
  entry: paths.source.entry,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: cpus.length - 1,
              poolTimeout: Infinity,
              poolRespawn: false,
              workerParallelJobs: 50,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: paths.config.tsconfig,
              transpileOnly: true,
              experimentalWatchApi: true,
              happyPackMode: true,
            },
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp|avif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]',
        },
      },
      {
        test: /\.(woff2|woff|eof|ttf|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext][query]',
        },
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
    new HtmlPlugin({
      filename: resolve(paths.build.root, 'index.html'),
      template: resolve(paths.public.root, 'index.html'),
      inject: 'body',
      hash: true,
      minify: 'auto',
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    path: paths.build.root,
    filename: 'main.js',
    clean: true,
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': paths.source.root,
      public: paths.public.root,
    },
  },
};

export default config;
