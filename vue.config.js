'use strict'
const path = require('path')
// const autoprefixer = require('autoprefixer')
// const pxtorem = require('postcss-pxtorem')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
// 多页面入口配置pages
    pages: {
        home: {
          // page 的入口
          entry: 'src/views/home/main.js',
          // 模板来源
          template: 'public/index.html',
          // 在 dist/index.html 的输出
          filename: 'home.html',
          // 当使用 title 选项时，
          // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
          title: 'home',
          // 在这个页面中包含的块，默认情况下会包含
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ['chunk-vendors', 'chunk-common', 'home']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        backend: {
          // page 的入口
          entry: 'src/views/backend/main.js',
          // 模板来源
          template: 'public/backend.html',
          // 在 dist/index.html 的输出
          filename: 'backend.html',
          // 当使用 title 选项时，
          // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
          title: 'backend',
          // 在这个页面中包含的块，默认情况下会包含
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ['chunk-vendors', 'chunk-common', 'backend']
        }
    },
    productionSourceMap: false,
    // css: {
    //     loaderOptions: {
    //         postcss: {
    //             plugins: [
    //                 autoprefixer(),
    //                 pxtorem({
    //                     rootValue: 37.5,
    //                     propList: ['*']
    //                 })
    //             ]
    //         }
    //     }
    // },
    devServer: {
        // 设置代理
        proxy: {
            '/api': {
                target: 'http://XXX.com', // 域名
                changOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                secure: false,
                ws: false, // 是否启用websockets
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}