import { resolve } from "path";

const root = (pathToFile: string, filename?: string) => {
  return resolve(
    __dirname,
    "..",
    filename ? `${pathToFile}/${filename}` : pathToFile
  );
};

export const paths = {
  source: {
    entry: root("src", "index.tsx"),
    root: root("src"),
  },
  public: {
    root: root("public"),
  },
  build: {
    root: root("dist"),
  },
  config: {
    tsconfig: root("tsconfig.json"),
  },
};
