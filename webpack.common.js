const path = require('path');

const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.jsx',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: '[name].bundle.js.map',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      // {
      //   test: /\.s?css$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      // },
      // {
      //   test: /\.json$/,
      //   use: 'json-loader',
      // },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: 'file-loader',
      // },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   use: 'file-loader',
      // },
    ],
  },
  devtool: 'source-map',
  plugins: [new ProgressBarPlugin(), new CleanWebpackPlugin(['dist'])],
};
