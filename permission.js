import router from "@/router"
// 引入本地获取token方式
import {
    getToken
} from '@/utils/auth'

// 创建全局前置守卫
router.beforeEach((to, from, next) => {
    const hasToken = getToken()
    if (hasToken) {
        if (to.path === "/login") {
            next("/")
        } else {
            next()
        }
    } else {
        if (to.path === "/login") {
            next()
        } else {
            next("/login")
        }
    }
})