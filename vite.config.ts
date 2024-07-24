import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { prismjsPlugin } from 'vite-plugin-prismjs';
import dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [
    vue(),
    prismjsPlugin({
      languages: 'all', // 语言
      plugins: ['line-numbers', 'copy-to-clipboard'], //官网有其他功能,这里开启行数和复制按钮功能
      theme: 'okaidia', // 主题
      css: true,
    })
    // dts({
    //   entryRoot: "./lib",
    //   outputDir: ["./dist"],
    //   //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
    //   tsConfigFilePath: "./tsconfig.json",
    // }),
    // DefineOptions(),
  ],
  build: {
    // target: 'modules',
    // outDir:'dist',
    // minify: true,
    // lib: {
    //   entry: resolve(__dirname, 'lib/main.ts'),
    //   name: 'ZzCpt',
    //   formats: ["es", "umd", "cjs"],
    //   // the proper extensions will be added
    //   fileName: 'zzcpt',
    // },
    // rollupOptions: {
    //   // 确保外部化处理那些你不想打包进库的依赖
    //   external: ['vue'],
    //   // output: [
    //   //   {
    //   //     //打包格式
    //   //     format: "es",
    //   //     //打包后文件名
    //   //     entryFileNames: "[name].mjs",
    //   //     //让打包目录和我们目录对应
    //   //     preserveModules: true,
    //   //     exports: "named",
    //   //     //配置打包根目录
    //   //     dir: "./dist/es",
    //   //   },
    //   //   {
    //   //     //打包格式
    //   //     format: "cjs",
    //   //     //打包后文件名
    //   //     entryFileNames: "[name].js",
    //   //     //让打包目录和我们目录对应
    //   //     preserveModules: true,
    //   //     exports: "named",
    //   //     //配置打包根目录
    //   //     dir: "./dist",
    //   //   },
    //   // ]
    // },
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //     drop_debugger: true,
    //   },
    //   format:{
    //     comments:false
    //   }
    // },
  },
})
