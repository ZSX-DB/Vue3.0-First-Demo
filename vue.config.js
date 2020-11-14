const path = require('path')

// path.resolve添加子路径
const resolve = dir => path.resolve(dir)


module.exports = {
    // 打包出的文件名，默认为dist
    outputDir: 'dist',
    // 支持所有 webpack-dev-server 的选项
    devServer: {
        // open当项目启动完成
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