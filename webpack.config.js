import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import path from "path";
import webpack from "webpack";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {
  const prod = argv.mode === "production";

  return {
    mode: prod ? "production" : "development",
    devtool: prod ? "hidden-source-map" : "eval",
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "[name].js",
    },
    devServer: {
      port: 3000,
      hot: true,
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [{ test: /\.tsx?$/, use: ["babel-loader", "ts-loader"] }],
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: "react",
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        minify:
          process.env.NODE_ENV === "production"
            ? {
                collapseWhitespace: true, //빈칸제거
                removeComments: true, //주석제거
              }
            : false,
      }),
      new CleanWebpackPlugin(),
    ],
  };
};
