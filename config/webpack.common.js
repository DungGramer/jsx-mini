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
        test: /\.jpg$/,
        type: 'asset/resource',
      },
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
