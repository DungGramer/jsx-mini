module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: '11',
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: 'jsx-runtime',
        development: process.env.BABEL_ENV === "development",
      },
    ],
  ],
  // "plugins": [["@babel/plugin-transform-react-jsx", {
  //   // "pragma": "dom",
  //   "runtime": "automatic",
  //   "importSource": "jsx-runtime"
  // }]],
  comments: false,
};
