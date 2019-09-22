const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(ttf|otf|eot|svg|woff(2)?)/, use: 'file-loader'},
      { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'file-loader'},
      { test: /\.css$/, use: 'css-loader'},
      { test: /\.scss$/, use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]}
    ]
  },
    plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};