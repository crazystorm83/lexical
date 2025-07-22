import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production' || env === 'stage';

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/index.cjs.js', format: 'cjs', sourcemap: !isProd },
    { file: 'dist/index.esm.js', format: 'esm', sourcemap: !isProd },
    { file: 'dist/index.umd.js', format: 'umd', name: 'Sinuous', sourcemap: !isProd },
    { file: 'dist/index.iife.js', format: 'iife', name: 'Sinuous', sourcemap: !isProd }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    babel({ 
      babelHelpers: 'bundled',
      presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        '@babel/preset-react'
      ],
      extensions: ['.js', '.jsx', '.ts', '.tsx'], 
      exclude: 'node_modules/**'
    }),
    typescript(),
    ...(isProd ? [terser()] : [])
  ]
}; 