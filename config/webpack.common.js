const { paths } = require('./utils');

module.exports = {
  entry: paths.indexJS,
  target: ['es5', 'web'],
  module: {
    rules: [
      {
        test: /\.js?x$/,
        exclude: paths.nodeModule,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: paths.babel,
          },
        },
      },
      {
        test: /\.(jpg|png|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ],
  },
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '~': paths.root,
    },
  },
};
