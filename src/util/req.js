/**
 * 优化项
 * 输入地址可不以api前缀开头
 * 添加验证手段
 */
import axios from 'axios'

// baseURL 包含了在vue.config.js中设置的启动路径和publicPath
// 如果必须使用publicPath，那么devServer中的proxy必须加上publicPath作为前缀
const service = axios.create({
    baseURL: process.env.VUE_APP_API,
    timeout: 10000
})

service.interceptors.request.use(
    config => {
        // 添加时间戳验证手段
        config.headers.Timestamp = new Date().getTime()
        return config
    },
    error => {
        console.error('Request Error', error)
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => response,
    error => {
        console.error('Response Error', error)
        return Promise.reject(error)
    }
)

export default service
