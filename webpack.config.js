const prod = process.env.NODE_ENV === "production";
var webpack = require("webpack");

module.exports = {
  devtool: "cheap-module-source-map",
  mode: prod ? "production" : "development",
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  output: {
    filename: "bundle.js",
    path: __dirname + "/public/",
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: "ts-loader",
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/,
        use: "css-loader",
      },
    ],
  },
  devServer: {
    static: {
      directory: __dirname + "/public/",
    },
    compress: true,
    port: 9000,
    historyApiFallback: true,
    https: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"],
  },
  optimization: {
    minimize: true,
  },
};
