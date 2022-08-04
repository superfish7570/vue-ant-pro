<template>
    <div>
        <!-- 使用element-ui Card卡片(基础用法) 创建登录页面结构 -->
        <el-card class="wrap">
            <div slot="header">
                <h1 class="tc">蚂蚁金融后台管理系统</h1>
            </div>
            <!-- 使用element-ui Form表单(表单验证) 创建用户名与密码部分 -->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <!-- 使用element-ui Button按钮(基础用法) 创建登录按钮 -->
                    <el-button type="primary" style="width:100%" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
// 引入post请求方式
import { post } from '../utils/http'
// 引入本地存token方式
import { setToken } from '../utils/auth'
export default {
    data() {
        return {
            ruleForm: {
                username: "",
                password: ""
            },
            rules: {
                username: { required: true, message: '请输入用户名', trigger: 'blur' },
                password: { required: true, message: '请输入密码', trigger: 'blur' }
            }
        }
    },
    methods: {
        login() {
            this.$refs["ruleForm"].validate((valid) => {
                if (valid) {
                    // 使用post请求方式
                    post('/login', this.ruleForm)
                        .then((res) => {
                            // 使用本地存token方式
                            setToken(res.token)
                            // 用本地存储存一下昵称
                            sessionStorage.setItem("nickname", res.nickname)
                            // 跳转到layout页面
                            this.$router.push("/")
                        })
                }
            })
        }
    },
};
</script>

<style lang="less" scoped>
.wrap {
    width: 500px;
    margin: auto;
    margin-top: 200px;
}
</style>