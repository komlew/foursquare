const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'eval',
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000,
    hot: true,
  },
  plugins: [new HtmlWebpackPlugin(), new webpack.HotModuleReplacementPlugin()],
});
