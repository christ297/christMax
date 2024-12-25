module.exports = {
    // autres configurations...
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['source-map-loader'],
          enforce: 'pre',
          exclude: /node_modules/,
        },
      ],
    },
    stats: {
      warnings: false, // Ignore all warnings, including source map warnings
    },
  };
  