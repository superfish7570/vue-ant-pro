import service from "./service"

// 封装get请求方式
function get(url, params) {
    const config = {
        method: 'get',
        url,
    }
    if (params) {
        config.params = params
        return service(config)
    }
}

// 封装post请求方式
function post(url, data) {
    const config = {
        method: 'post',
        url,
    }
    if (data) {
        config.data = data
        return service(config)
    }
}

export {
    get,
    post
}