<template>
    <div>
        <h1 class="title tc">蚂蚁金融后台管理系统</h1>
        <!-- 使用element-ui NavMenu导航菜单(侧栏) 创建页面侧边栏 -->
        <el-menu default-active="2" class="el-menu-vertical-demo"  background-color="#001529" text-color="#fff" active-text-color="#ffd04b" unique-opened  router>
            <menus v-for="(item,index) in menuData" :key="index" :menu="item"></menus>
        </el-menu>
    </div>
</template>

<script>
// 引入公共组件  NavLeft的子组件Menu
import Menus from '../components/Menu' 
// 引入get请求方式
import {get} from '../utils/http'

export default {
    components:{
        Menus
    },
    data() {
        return {
            menuData:[],
        }
    },
    methods: {
        menuList(){
            // 使用get请求方式
            get('/menu',{})
            .then((res)=>{
                this.menuData=res.data
            })
        }
    },
    created() {
        this.menuList()
    },
}
</script>

<style lang="less" scoped>
    .title{
        font-size: 20px; color: #fff; line-height: 30px;margin-top: 30px;
    }
</style>