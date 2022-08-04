import axios from "axios"
// 引入element-ui的 Message
import {
    Message
} from "element-ui"

// 创建并封装axios
const service = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use((config) => {
    config.headers.token = "123"
    return config
}, function (error) {
    return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use((response) => {
    const res = response.data
    if (!res.success) {
        // 使用element-ui Message
        Message({
            type: "error",
            message: res.message || "账号或者密码有误"
        })
        // 主动return 一个Promise 错误实例
        return Promise.reject(new Error(res.message || "账号或者密码有误"))
    } else {
        return res
    }
}, function (error) {
    // 使用element-ui Message
    Message({
        type: "error",
        message: error.message || "账号或者密码有误"
    })
    return Promise.reject(error)
})

export default service