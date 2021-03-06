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
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: 'url-loader?limit=100000' 
      },
    ],
  },
};