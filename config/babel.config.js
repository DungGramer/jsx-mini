module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: 'jsx-mini'
      },
    ],
  ],
  comments: false,
};
