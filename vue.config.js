const path = require('path')

// path.resolve添加子路径
const resolve = dir => path.resolve(dir)


module.exports = {
    // 打包出的文件名，默认为dist
    outputDir: 'dist',
    publicPath: '/app',
    // 支持所有 webpack-dev-server 的选项
    devServer: {
        // open当项目启动完成时打开浏览器
        open: true,
        proxy: {
            ///////////////////////////////////////
            // 以'/api'为例
            // ------------------------------------
            // 不设置pathRewrite
            // * 后端的api必须以/api开头
            //   e.g. backend: app.get('/api/user') frontend: axios.get('/api/user')
            // ------------------------------------
            // 设置pathRewrite
            // * 后端的api无需以/api开头，但前端仍然需要以/api开头
            //   e.g. backend: app.get('/hot') frontend: axios.get('/api/hot')
            ///////////////////////////////////////
            '/api': {
                target: 'http://localhost:8282',
                ws: true,
                // changeOrigin设置后才能跨域
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    // 可使用webpack配置
    configureWebpack: {
        // 基础目录，绝对路径，用于从配置中解析入口起点
        context: path.resolve(__dirname),
        resolve: {
            // 路径映射
            alias: {
                '@Component': resolve('src/components'),
                '@Directive': resolve('src/directive'),
                '@Util': resolve('src/util')
            }
        },
        // 配置如何展示性能提示，例如，如果一个资源超过250kb，webpack 会对此输出一个警告来通知你
        performance: {
            // warning展示一条警告，通知是过大的资源，但实际情况中无法体现
            // hints: 'error',

            // 资源(asset)是从 webpack 生成的任何文件
            // 此选项根据单个资源体积，控制webpack何时生成性能提示，默认值是250000 (bytes)
            // maxAssetSize: 1200000
        }
    }
}