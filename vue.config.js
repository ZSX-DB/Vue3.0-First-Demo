const path = require('path')

// path.resolve添加子路径
const resolve = dir => path.resolve(dir)

// 端口号
const port = 9550

module.exports = {
    // 打包出的文件名，默认为dist
    outputDir: 'dist',
    // 支持所有 webpack-dev-server 的选项
    devServer: {
        port: port,
        // open当项目启动完成
        open: true,
        // proxy: 'http://localhost:8082/'
    },
    // 可使用webpack配置
    configureWebpack: {
        resolve: {
            // 路径映射
            alias: {
                '@Component': resolve('src/components'),
                '@Directive': resolve('src/directive'),
                '@Util': resolve('src/util')
            }
        }
    }
}