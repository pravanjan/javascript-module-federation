const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3001,
  },

  output: {
    publicPath: "http://localhost:3001/", // Added this
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "producer",
      filename: "producer.js",
      exposes: {
        "./Login": "./src/login.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
