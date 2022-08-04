<template>
    <div>
        <!-- 使用element-ui Tabs标签页(基础用法) 创建标签按钮与内容 -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="汽车消费" name="first">
                <!-- 使用element-ui Table表格(基础表格) 创建表格内容 -->
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column  type="selection"  width="50"></el-table-column>
                    <el-table-column  type="index" label="序号"  width="50"></el-table-column>
                    <el-table-column prop="date" label="日期"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="province" label="省份"></el-table-column>
                    <el-table-column prop="city" label="市区"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                    <el-table-column prop="post" label="邮编"></el-table-column>
                    <el-table-column prop="status" label="操作">
                        <template slot-scope="scope"> 
                                <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
                                <el-button type="text" size="small">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="房产消费" name="second">
                <!-- 使用element-ui Transfer穿梭框(基础用法) -->
                <el-transfer v-model="value" :data="valueData"></el-transfer>
            </el-tab-pane>
            <el-tab-pane label="抵押贷款" name="third">
                <!-- 使用element-ui Tree树形控件 -->
                <el-tree :data="treeData" show-checkbox  node-key="id"  :default-expanded-keys="[2, 3]"  :default-checked-keys="[5]"  :props="defaultProps"></el-tree>
            </el-tab-pane>
            <el-tab-pane label="其他" name="fourth">
                <el-empty description=""></el-empty>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
// 引入get请求方式
import { get } from '../../utils/http'
export default {
    data() {
        const generateData = () => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
                data.push({
                    key: i,
                    label: `备选项 ${i}`,
                    disabled: i % 4 === 0
                })
            }
            return data
        };
        return {
            activeName: 'first',
            tableData: [],
            value: [1, 4],
            valueData: generateData(),
            treeData: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    methods: {
        loadTable() {
            // 使用get请求方式
            get('/orders/all', {})
                .then((res) => {
                    this.tableData = res.data.list
                })
        },
        handleClick(tab) {
            console.log(tab)
        }
    },
    created() {
        this.loadTable()
    },
}
</script>

<style lang="less" scoped>

</style>