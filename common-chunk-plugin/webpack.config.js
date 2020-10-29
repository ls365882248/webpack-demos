const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    page1: './src/page1',
    page2: './src/page2'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['common', 'run-time'],
      filename: '[name].js',
      minChunks: Infinity,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'base',
      filename: '[name].js',
      chunks: ['page1', 'page2']
    })
  ]
}

module.exports = config;