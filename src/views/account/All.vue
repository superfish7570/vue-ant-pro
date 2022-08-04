<template>
    <div>
        <!-- 面包屑 -->
        <bread-crumb></bread-crumb>
        <!-- 创建内容头部部分 -->
        <el-card class="mt">
            <el-row :gutter="24">
                <el-col :span="8">
                    <!-- 使用element-ui Input输入框(复合型输入框) -->
                    <el-input placeholder="请输入内容" v-model="input">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="8" :offset="8" style="text-align:right">
                    <!-- 使用element-ui Button按钮(基础用法与禁用状态) -->
                    <el-button type="primary" @click="add">新建角色</el-button>
                    <el-button :disabled="!selected.length" @click="operate('启动')">启动</el-button>
                    <el-button :disabled="!selected.length" @click="operate('冻结')">冻结</el-button>
                    <el-button :disabled="!selected.length" @click="operate('删除')">删除</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card class="mt">
            <!-- 使用element-ui Table表格(基础表格) 创建表格内容 -->
            <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="id" label="序号" width="55"></el-table-column>
                <el-table-column prop="account" label="账户"></el-table-column>
                <el-table-column prop="name" label="用户名"></el-table-column>
                <el-table-column prop="character" label="角色"></el-table-column>
                <el-table-column prop="remark" label="备注"></el-table-column>
                <el-table-column prop="reason" label="创建原因"></el-table-column>
                <el-table-column prop="status" label="状态" width="80">
                    <template slot-scope="scope">
                                {{scope.row.status===1?"启用":"禁用"}}
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger">删除</el-button>
                        <el-button size="mini">{{scope.row.status===2?"启用":"禁用"}}</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <char-modal :visible="dialogVisible" @close="close"></char-modal>
        <!-- 使用element-ui Pagination分页(附加功能) 创建尾部分页 -->
        <el-pagination :page-size="20" layout="prev, pager, next, jumper" :total="1000" class="mt"></el-pagination>
    </div>
</template>

<script>
// 引入公共组件 BreadCrumb(面包屑)
import BreadCrumb from '../../components/BreadCrumb.vue'
// 引入get请求方式
import { get } from '../../utils/http'
// 引入子组件 CharModal
import CharModal from './CharModal.vue'
// 引入vuex mutations state
import {mapMutations,mapState} from 'vuex'
export default {
    components: { BreadCrumb, CharModal },
    data() {
        return {
            input: "",
            dialogVisible: false,
            tableData: [],
            selected: [],
            accountList: [],
        }
    },
    methods: {
        loadTable() {
            // 使用get请求方式
            get('/account/all', {})
                .then((res) => {
                    this.tableData = res.data.list
                })
        },
        handleSelectionChange(selection) {
            this.selected = selection
            const arr = selection.map(item => item.account)
            this.accountList = arr
        },
        operate(type) {
            // 使用element-ui Notification通知 中的$notify
            this.$notify({
                type: "success",
                title: "操作提示",
                message: JSON.stringify(this.accountList) + type + "成功"
            })
        },
        add() {
            this.dialogVisible = true
            this.saveData({})
        },
        close() {
            this.dialogVisible = false
        },
        ...mapMutations(['saveData']),
        edit(row) {
            this.dialogVisible = true
            this.saveData(row)
        }
    },
    created() {
        this.loadTable()
    },
    computed:{
        ...mapState(['rowData'])
    }
}
</script>

<style lang="less" scoped>

</style>