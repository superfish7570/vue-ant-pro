// 封装本地获取token方式
function getToken() {
    return sessionStorage.getItem("token")
}

// 封装本地存token方式
function setToken(token) {
    return sessionStorage.setItem("token", token)
}

// 封装本地删除token方式
function removeToken() {
    return sessionStorage.removeItem("token")
}

export {
    getToken,
    setToken,
    removeToken
}