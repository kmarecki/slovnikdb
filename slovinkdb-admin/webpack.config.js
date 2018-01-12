const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'eval',

  entry: ['index.tsx'],

  output: {
    filename: 'app.js',
    path: path.resolve('dist'),
    publicPath: 'dist'
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['src', 'node_modules'],
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'ts-loader'],
        include: path.resolve('src'),
      },
    ],
  },
};