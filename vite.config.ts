import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { prismjsPlugin } from 'vite-plugin-prismjs';
import dts from "vite-plugin-dts";
import viteCompression from 'vite-plugin-compression'
import DefineOptions from "unplugin-vue-define-options/vite";
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: "0.0.0.0",
    port: 8080,
  },
  base: './',
  plugins: [
    vue(),
    // dts({
    //   // include: ["lib/**/*"],
    //   entryRoot: "lib",
    //   outputDir: ['./dist'],

    //   //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
    //   // tsConfigFilePath: "./tsconfig.json",
    // }),
    DefineOptions(),
    prismjsPlugin({
      languages: ['html'], // 语言
      plugins: ['line-numbers', 'copy-to-clipboard'], //官网有其他功能,这里开启行数和复制按钮功能
      theme: 'okaidia', // 主题
      css: true,
    }),

  ],
  build: {
    // 组件库文档打包配置
    rollupOptions: {
      output: {
        sourcemap: true,
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id){
            // id为文件的绝对路径 
            if(id.includes('node_modules')){
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
      }
    }
  // 组件库打包配置
    // target: 'modules',
    // outDir:'dist',
    // minify: true,
    // lib: {
    //   entry: resolve(__dirname, 'lib/main.ts'),
    //   name: 'Zzcpt',
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
