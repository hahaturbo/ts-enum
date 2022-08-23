const path = require('path');

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: [
    // [
    //   'babel-plugin-typescript-const-enum',
    //   {
    //     enumFile: path.resolve(__dirname, './typings/enums.json'),
    //   },
    // ],
  ],
};
