import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect:'/index',
    component: () => import('../views/Layout'),
    children:[
      {
        path:'/index',
        name:'Index',
        component: () => import('../views/Index')
      },
      {
        path:'/account/all',
        name:'AccountAll',
        component: () => import('../views/account/All'),
        meta:{bread:["账户管理","所有人员"]}
      },
      {
        path:'/product/all',
        name:'ProductAll',
        component: () => import('../views/product/All'),
        meta:{bread:["产品管理","全部产品"],keepAlive:true}
      },
      {
        path:'/product/detail',
        name:'ProductDetail',
        component: () => import('../views/product/Detail'),
        meta:{bread:["产品管理","全部产品","产品详情"]}
      },
      {
        path:'/orders/all',
        name:'OrdersAll',
        component: () => import('../views/order/All'),
        meta:{bread:["订单管理","所有订单"]}
      },
      {
        path:'/customer/info',
        name:'CustomerInfo',
        component: () => import('../views/customer/Info'),
        meta:{bread:["客户管理","基本信息"]}
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
