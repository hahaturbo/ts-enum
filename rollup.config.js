import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import fs from 'fs';
import path from 'path';

const exampleList = fs.readdirSync(path.resolve(__dirname, 'src'));

export default exampleList.map((cur) => ({
  input: path.resolve(__dirname, `src/${cur}/index.ts`),
  output: {
    file: path.resolve(__dirname, `dist/rollup/${cur}/index.js`),
    format: 'cjs',
  },
  plugin: [
    resolve(),
    commonjs(),
    // babel(),
    typescript(),
  ],
}));
