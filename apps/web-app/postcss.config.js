module.exports = {
  plugins: [
    'postcss-import',
    'postcss-url',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
          'nesting-rules': true, // Enable nesting
        },
      },
    ],
    'postcss-nested',
    'postcss-custom-media',
    'autoprefixer',
    'postcss-advanced-variables',
  ],
};
