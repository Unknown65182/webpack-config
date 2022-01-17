import { merge } from "webpack-merge";

import commonConfig from "./webpack.common";

export default () => {
  const envConfig = require(`./webpack.${process.env.NODE_ENV}.ts`);

  const config = merge(commonConfig, envConfig.default);
  return config;
};
