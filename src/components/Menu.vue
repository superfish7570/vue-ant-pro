<template>
    <div>
        <!-- 使用element-ui NavMenu导航菜单(侧栏) 创建页面侧边栏 -->
        <el-submenu v-if="menu.children" :index="menu.url">
            <template slot="title">
                <i :class="menu.icon"></i>
                <span>{{menu.name}}</span>
            </template>
            <menu-left v-for="(item,index) in menu.children" :key="index" :menu="item"></menu-left>
        </el-submenu>
        <el-menu-item v-else :index="menu.url">
            <i :class="menu.icon"></i>
            <span slot="title">{{menu.name}}</span>
        </el-menu-item>
    </div>
</template>

<script>
    export default {
        name:"MenuLeft",
        props:{
            menu:{
                type:Object,
                required:true
            }
        }
    }
</script>

<style lang="less" scoped>

</style>