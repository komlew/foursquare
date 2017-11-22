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
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root',
      appMountHtmlSnippet:
        '<div style="line-height:100vh;text-align:center;font-size:1.5rem;color:#ccc">Loading...</div>',
      headHtmlSnippet:
        '<style>body{margin:0;font:18px/1.2 Helvetica, Arial, sans-serif;background:#f7f8f9}</style>',
      devServer: 'http://localhost:3000',
      lang: 'en-US',
      title: 'Foursquare App',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
