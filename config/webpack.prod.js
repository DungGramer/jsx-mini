const HtmlWebpackPlugin = require('html-webpack-plugin');

const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { paths } = require('./utils');

module.exports = merge(common, {
  mode: 'production',
  target: ['es5', 'web'],

  output: {
    filename: 'assets/js/[name].[contenthash:8].js',
    clean: true,
    pathinfo: false,
    path: paths.dist,
  },

  devtool: false,

  // Stop compilation early in production
  bail: false,

  plugins: [
    new HtmlWebpackPlugin({
      template: paths.indexHTML,
      filename: 'index.html',

      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDocTypeTags: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendor',
        },
      },
    },
  },
});
