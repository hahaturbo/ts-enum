const path = require('path');

module.exports = (env, argv) => {
  return {
    mode: 'production',
    entry: {
      index: path.resolve(__dirname, 'src/index.ts'),
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist/webpack'),
    },
    resolve: { extensions: ['.ts', '.js'] },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: ['babel-loader'],
        },
      ],
    },
  };
};
