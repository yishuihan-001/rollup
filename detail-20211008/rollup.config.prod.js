import babel from 'rollup-plugin-babel'
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

export default {
  input: ["src/main.js"],
  output: {
    file: "dist/bundle.prod.js",
    format: "umd",
    name: "bundleName",
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    terser(),
    postcss()
  ],
  external: ['lodash']
};
