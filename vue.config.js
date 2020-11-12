const path = require('path')

module.exports = {
    // 打包出的文件名，默认为dist
    outputDir: 'dist',
    // 可使用webpack配置
    configureWebpack: {
        resolve: {
            alias: {
                '@Component': path.resolve('src/components'),
                '@Directive': path.resolve('src/directive')
            }
        }
    }
}