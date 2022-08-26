const path = require('path');

module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-typescript',
      {
        optimizeConstEnums: true,
      },
    ],
  ],
  plugins: [
    // ['const-enum', { transform: 'constObject' }],
    [
      'babel-plugin-typescript-const-enum',
      {
        enumFile: path.resolve(__dirname, './typings/example6/enums.json'),
      },
    ],
  ],
};
