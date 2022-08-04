<template>
    <div>
        <el-steps :space="200" :active="1" finish-status="success" class="mt">
            <el-step title="订单审核"></el-step>
            <el-step title="进行中"></el-step>
            <el-step title="审核成功"></el-step>
        </el-steps>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("tabs重复渲染了")
    },
}
</script>

<style lang="less" scoped>

</style>