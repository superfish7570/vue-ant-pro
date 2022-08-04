<template>
    <div>
        <!-- 使用element-ui Container布局容器(常见页面布局) 页面布局 -->
        <el-container>
            <el-aside width="240px">
                <!-- 引入侧边栏组件 -->
                <nav-left></nav-left>
            </el-aside>
            <el-container>
                <el-header>
                    <!-- 引入头部组件 -->
                    <headers></headers>
                </el-header>
                <el-main>
                    <keep-alive>
                        <router-view v-if="$route.meta.keepAlive"></router-view>
                    </keep-alive>
                    <router-view v-if="!$route.meta.keepAlive"></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
// 引入公共组件 Header NavLeft
import Headers from '../components/Header'
import NavLeft from '../components/NavLeft'

export default {
    components:{Headers,NavLeft}
}
</script>

<style lang="less" scoped>
.el-aside {
    background-color: #001529;
    color: #333;
    height: 100vh;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    height: 80vh;
}
</style>