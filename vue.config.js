'use strict';
const { defineConfig } = require('@vue/cli-service')
const path = require("path");
const vueSrc = "./src";
 
// const titles = require('./utils/title')
// const glob = require('glob')
// const pages = {}
// const WebpackHTMLPlugin = require('html-webpack-plugin');

// glob.sync('./src/pages/**/main.js').forEach((path,index) => {
//   console.log(`Path-${index} : `,path);
//   const chunk = path.split('./src/pages/')[1].split('/main.js')[0];
//   console.log(`Path-${index} : `,chunk);
//   console.log(`Title: `,titles[chunk]);

//   pages[chunk] = {
//     entry: path,
//     template: `public/${chunk}.html`,
//     title: titles[chunk],
//     chunks: ['chunk-vendors', 'chunk-common', chunk]
//   }
// })
module.exports = {
  transpileDependencies: true,
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, vueSrc),
        "@components": path.resolve(__dirname, vueSrc, "components"),
        "@assets": path.resolve(__dirname, vueSrc, "assets"),
        "@views": path.resolve(__dirname, vueSrc, "views"),
        "@utils": path.resolve(__dirname, vueSrc, "utils"),
        "~": path.resolve(__dirname, "node_modules")        
      },
      extensions: ['.js', '.vue', '.json', '.css', '.scss', '.sass', '.html', '.ts', '.tsx']
    }
  }
  // pages,
  // chainWebpack: config => {
  //   config.plugins.delete('named-chunks')

  // },
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://127.0.0.1:8080',
  //       changeOrigin: true,
  //       pathRewrite: { '^/api': '' }
  //     }
  //   }
  // }
}