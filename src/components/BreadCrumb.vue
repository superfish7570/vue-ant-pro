<template>
    <div>
        <!-- 使用element-ui Breadcrumb面包屑(基础用法) -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    data() {
        return {
            breadList: [],
        }
    },
    methods: {
        loadBread() {
            this.breadList = this.$route.meta.bread || []
        }
    },
    created() {
        this.loadBread()
    },
}
</script>

<style lang="less" scoped>

</style>