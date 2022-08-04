<template>
    <div>
        <!-- 使用公共组件BreadCrumb(面包屑部分) -->
        <bread-crumb></bread-crumb>
        <!-- 内容头部查询部分 -->
        <el-card class="mt">
            <el-row :gutter="24">
                <!-- 使用element-ui Input输入框(基础用法) 与Button按钮(基础用法) 创建搜索与按钮部分 -->
                <el-col :span="6">
                    <el-input placeholder="请输入姓名"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input placeholder="请输入学历"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input placeholder="请输入手机号"></el-input>
                </el-col>
                <el-col :span="6" style="text-align:right">
                    <el-button type="primary">查询</el-button>
                    <el-button type="primary">重置</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card class="mt">
            <!-- 使用element-ui Button按钮(基础用法) -->
            <el-button type="primary">+新建客户</el-button>
            <!-- 使用element-ui Table表格(基础表格) -->
            <el-table :data="tableData" style="width: 100%">
                <el-table-column  type="index" label="序号"  width="40"></el-table-column>
                <el-table-column  prop="number" label="客户编号"></el-table-column>
                <el-table-column  prop="name" label="姓名"></el-table-column>
                <el-table-column  prop="phone" label="手机号码"></el-table-column>
                <el-table-column  prop="identity"  label="身份证号码"></el-table-column>
                <el-table-column  prop="education"  label="学历" width="80"></el-table-column>
                <el-table-column  prop="profession"  label="职业" width="80"></el-table-column>
                <el-table-column  prop="address"  label="住址"></el-table-column>
                <el-table-column  prop="marital"  label="婚姻状况" width="80">
                    <template slot-scope="scope">
                        {{scope.row.marital==1?"已婚":"未婚"}}
                    </template>
                </el-table-column>
                <el-table-column  prop="status"  label="操作">
                    <el-button size="mini" type="primary">编辑</el-button>
                    <el-button size="mini" type="danger">删除</el-button>
                    <el-button size="mini">详情</el-button>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
// 引入公共组件 BreadCrumb
import BreadCrumb from '../../components/BreadCrumb.vue'
// 引入get请求方式
import {get} from '../../utils/http'
export default {
    components: { BreadCrumb },
    data() {
        return {
            tableData:[],
        }
    },
    methods: {
        loadTable() {
            // 使用get请求方式
            get('/customer/info',{})
            .then((res)=>{
                this.tableData=res.data.list
            })
        }
    },
    created() {
        this.loadTable()
    },
}
</script>

<style lang="less" scoped>

</style>