<template>
    <div>
        <!-- 使用element-ui Dropdown下拉菜单(指令事件) 创建下拉菜单 -->
        <div class="head fr">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    欢迎您,{{info}}<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">个人中心</el-dropdown-item>
                    <el-dropdown-item command="b">修改密码</el-dropdown-item>
                    <el-dropdown-item command="c">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <p class="date fr">今天是你在阿里的第
            <span class="tips">{{days}}</span>天
        </p>
    </div>
</template>

<script>
// 引入本地删除token方式
import { removeToken } from '../utils/auth'
// 引入get请求方式
import { get } from '../utils/http'

export default {
    data() {
        return {
            info: sessionStorage.getItem("nickname"),
            time: ""
        }
    },
    methods: {
        handleCommand(command) {
            if (command === "c") {
                // 使用本地删除token方式
                removeToken()
                // 跳转回login页面
                this.$router.push("/login")
            }
        },
        entryTime() {
            // 使用get请求方式
            get('/in', {})
                .then((res) => {
                    this.time = res.time
                })
        }
    },
    created() {
        this.entryTime()
    },
    computed: {
        days() {
            const target = new Date(this.time)
            const now = new Date()
            const ms = now - target
            return Math.floor(ms / 1000 / 60 / 60 / 24)
        }
    }
}
</script>

<style lang="less" scoped>
.head {
    line-height: 60px;
}

.date {
    line-height: 60px;
    margin-right: 50px;
    .tips {
        font-size: 24px;
        color: #409eff;
    }
}
</style>