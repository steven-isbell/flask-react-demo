const webpack = require('webpack');
const path = require('path');

const config = {
  entry: path.join(__dirname, '/static/js/index.js'),
  output: {
    path: path.join(__dirname, '/static/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/static/dist'),
    compress: true,
    port: 3000
  },
  devtool: 'inline-source-map',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};

module.exports = config;
