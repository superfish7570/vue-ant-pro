<template>
    <div>
        <!-- 引入公共组件BreadCrumb(面包屑部分) -->
        <bread-crumb></bread-crumb>
        <el-card class="mt">
            <!-- 使用element-ui Radio单选框(按钮样式) 创建选项部分 -->
            <el-radio-group v-model="radio">
                <el-radio-button :label="1">待审核</el-radio-button>
                <el-radio-button :label="2">审核中</el-radio-button>
                <el-radio-button :label="3">审核通过</el-radio-button>
                <el-radio-button :label="4">审核拒绝</el-radio-button>
                <el-radio-button :label="5">已放款</el-radio-button>
            </el-radio-group>
            <keep-alive>
                <component :is="currentTabComponent" class="tab"></component>
            </keep-alive>
        </el-card>
    </div>
</template>

<script>
// 引入公共组件BreadCrumb
import BreadCrumb from '../../components/BreadCrumb'
// 引入当前文件夹的子组件 Tabs1 和Tabs2
import myTabs1 from './Tabs1'
import myTabs2 from './Tabs2'
export default {
    components: { BreadCrumb,myTabs1,myTabs2 },
    data() {
        return {
            radio: 1,
        }
    },
    computed:{
        currentTabComponent() {
            return "myTabs"+this.radio
        }
    },
    methods: {
        change(val) {
            console.log(val,this.radio)
        }
    },
}
</script>

<style lang="less" scoped>

</style>