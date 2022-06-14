const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  target: ['es5', 'web'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, '.babelrc'),
          },
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['*', '.js', '.jsx', '.scss'],
    alias: {
      '~': path.resolve(__dirname, ''),
    },
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
  },
};
