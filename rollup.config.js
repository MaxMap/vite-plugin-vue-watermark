//  rollup.config.js
import vuePlugin from "rollup-plugin-vue"; //rollup-plugin-vue、vue-template-compiler 来解析vue文件
import postcss from "rollup-plugin-postcss";
// 如果依赖模块中存在 es 模块，需要使用 @rollup/plugin-node-resolve 插件进行转换
import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel';
// const isProd = process.env.BUILD === 'production' // 稍后在命令行说明

export default {
  input: "./src/package/index.js",
  output: {
    file: "build/index.es.js",
    format: "es",
  },
  external: ['vue'], // 依赖模块
  plugins: [
    nodeResolve(),
    vuePlugin(),
    babel({  // 排除node_modules
        exclude: 'node_modules/**',
        babelHelpers:"bundled"
      }),
    postcss(),
  ],
};
