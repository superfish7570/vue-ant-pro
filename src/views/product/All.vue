<template>
    <div>
        <!-- 引入封装的面包屑组件 -->
        <bread-crumb></bread-crumb>
        <!-- 头部部分 -->
        <el-card class="mt">
            <el-row :gutter="24">
                <el-col :span="6">
                    <!-- 使用element-ui input输入框(基础用法) -->
                    <el-input v-model.trim="searchValue" placeholder="产品名称"></el-input>
                </el-col>
                <el-col :span="6">
                    <!-- 使用element-ui Select选择器(基础用法) -->
                    <el-select v-model="rate" placeholder="利率" style="width:100%">
                        <el-option label="3.8%" value="3.8">3.8</el-option>
                        <el-option label="3.9%" value="3.9">3.9</el-option>
                        <el-option label="4.1%" value="4.1">4.1</el-option>
                        <el-option label="4.3%" value="4.3">4.3</el-option>
                    </el-select>
                </el-col>
                <el-col :span="6">
                    <!-- 使用element-ui DatePicker日期选择器(选择日期范围) -->
                    <el-date-picker v-model="dateRange" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="width:100%"></el-date-picker>
                </el-col>
                <el-col :span="6">
                    <!-- 使用element-ui Button按钮(基础用法)和 Dropdown下拉菜单(基础用法) -->
                    <el-button type="primary" @click="search">查询</el-button>
                    <el-button type="primary">重置</el-button>
                    <span class="el-dropdown-link" @click="expand" v-if="!advanced">收起
                                    <i class="el-icon-arrow-down"></i>
                                </span>
                    <span class="el-dropdown-link" @click="expand" v-else>收起
                                    <i class="el-icon-arrow-up"></i>
                                </span>
                </el-col>
            </el-row>
            <el-row :gutter="24" class="mt" v-show="advanced">
                <!-- 使用element-ui 创建3个Input输入框(基础用法) -->
                <el-col :span="6">
                    <el-input v-model.trim="type" placeholder="产品类别"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input v-model.trim="staging" placeholder="最高分期数"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input v-model.trim="status" placeholder="状态"></el-input>
                </el-col>
            </el-row>
        </el-card>
        <el-card class="mt">
            <!-- 使用element-ui Table表格(基础表格) 创建表格内容部分 -->
            <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="id" label="序号" width="35"></el-table-column>
                <el-table-column prop="type" label="产品类型"></el-table-column>
                <el-table-column prop="rate" label="利率" width="80"></el-table-column>
                <el-table-column prop="date" label="开放日期"></el-table-column>
                <el-table-column prop="status" label="状态">
                    <template slot-scope="scope">
                        <el-tag type="success" v-if="scope.row.status==1" effect="dark">已启用</el-tag>
                        <el-tag type="danger" v-else effect="dark">已禁用</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="highest" label="最高分期数(月)"></el-table-column>
                <el-table-column prop="number" label="申请客户数量"></el-table-column>
                <el-table-column prop="total" label="累计签约金额"></el-table-column>
                <el-table-column prop="average" label="件均"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="danger" v-if="scope.row.status==2">停用</el-button>
                        <el-button size="mini" type="primary" v-else>启用</el-button>
                        <el-button size="mini" type="primary" @click="detail(scope.row.name)">详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <!-- 使用element-ui Pagination分页(附加功能) 创建尾部分页功能 -->
        <el-pagination :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="40" class="mt" style="text-align:right">
        </el-pagination>
    </div>
</template>

<script>
// 引入公共组件BreadCrumb
import BreadCrumb from '../../components/BreadCrumb'
// 引入moment
import moment from 'moment'
// 引入get请求方式
import { get } from '../../utils/http'
export default {
    components: {
        BreadCrumb
    },
    data() {
        return {
            searchValue: "",
            rate: "",
            dateRange: "",
            type: "",
            staging: "",
            status: "",
            advanced: false,
            tableData: [],
            selected:[],
        }
    },
    methods: {
        expand() {
            this.advanced = !this.advanced
        },
        search() {
            // 使用moment
            const startDate = moment(this.dateRange[0]).format("YYYY-MM-DD")
            const endDate = moment(this.dateRange[1]).format("YYYY-MM-DD")
            console.log(startDate, endDate)
        },
        loadTable() {
            // 使用get请求方式
            get('/product/all', {})
                .then((res) => {
                    this.tableData = res.data.list
                })
        },
        handleSelectionChange(selection) {
            this.selected=selection
        },
        detail() {
            this.$router.push('/product/detail')
        }
    },
    created() {
        this.loadTable()
    },
}
</script>

<style lang="less" scoped>
.el-dropdown-link {
    color: #409eff;
    margin-left: 10px;
    font-size: 18px;
}
</style>