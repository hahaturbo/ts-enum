const path = require('path');
const fs = require('fs');
const TerserPlugin = require('terser-webpack-plugin');

const exampleList = fs.readdirSync(path.resolve(__dirname, 'src'));

module.exports = (env, argv) => {
  return {
    mode: 'production',
    entry: exampleList.reduce((pre, cur) => {
      return {
        ...pre,
        [cur]: path.resolve(__dirname, `src/${cur}/index.ts`),
      };
    }, {}),
    output: {
      filename: '[name]/index.js',
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
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
  };
};
