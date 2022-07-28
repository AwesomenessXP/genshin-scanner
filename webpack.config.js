const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    artifact_scan: "./src/artifact_scan.js",
    api_key: "./src/api_key.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
