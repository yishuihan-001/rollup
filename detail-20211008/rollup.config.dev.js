import babel from 'rollup-plugin-babel'
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from '@rollup/plugin-typescript'
// import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'
// import dev from 'rollup-plugin-dev'
import livereload from 'rollup-plugin-livereload'
import alias from '@rollup/plugin-alias'

const path = require('path')
const resolveDir = dir => path.join(__dirname, dir)

export default {
  input: ["src/main.js"],
  output: {
    file: "dist/bundle.dev.js",
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
    // terser(),
    postcss(),
    alias({
      entries: [
        { find: '@', replacement: resolveDir('src') }
      ]
    }),
    serve({
      open: true,
      port: 8888,
      contentBase: ''
    }),
    livereload(),
    // dev({
    //   port: 8888
    // }),
  ],
  external: ['lodash']
};
