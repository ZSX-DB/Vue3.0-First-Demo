/**
 * 优化项
 * 输入地址可以不以/api开头
 */
import axios from 'axios'

// baseURL 包含了在vue.config.js中设置的启动路径和publicPath
// 如果必须使用publicPath，那么devServer中的proxy必须加上publicPath作为前缀
const service = axios.create({
    baseURL: process.env.VUE_APP_API,
    timeout: 10000
})

service.interceptors.request.use(
    config => config,
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
