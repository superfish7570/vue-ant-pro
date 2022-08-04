<template>
    <div>
        <!-- 引入公共组件 BreadCrumb(面包屑部分) -->
        <bread-crumb></bread-crumb>
        <!-- 头部内容部分 -->
        <el-card class="mt">
            <el-row>
              <el-col :span="12" class="info" style="text-align:left">
                <span>申请编号:YGC20170110000001</span>
                <span>推送时间2021 07-05</span>
                <span>推送员:张三</span>
                <span>状态:待上线</span>
              </el-col>
              <el-col :span="12" style="text-align:right">
                <el-button type="primary" @click="back">返回</el-button>
              </el-col>
            </el-row>
        </el-card>
        <!-- 内容详情部分 -->
        <el-card class="product-detail mt">
            <h1 class="title">产品信息</h1>
            <el-row :gutter="24">
                <el-col :span="5">
                    <p>标题:上海甲壳虫车质贷</p>
                    <p>借款总金额:90000元</p>
                    <p>是否定向标:是</p>
                    <p>还款来源:月薪8000</p>
                    <p>合伙人:王成元</p>
                </el-col>
                <el-col :span="5">
                    <p>借款人用户名:王全安</p>
                    <p>年利率:12%+0.5%</p>
                    <p>定向标密码:123456</p>
                    <p>所属大区:浙江</p>
                    <p>是否允许提前还款:否</p>
                </el-col>
                <el-col :span="5">
                    <p>用户等级:95分</p>
                    <p>借款用途:资金周转</p>
                    <p>借最低投标额:10000</p>
                    <p>所属营业部:杭州营业部</p>
                    <p>受托支付标识:非受托支付</p>
                </el-col>
                <el-col :span="5">
                    <p>标的类型:质押贷</p>
                    <p>借款期限:三个月</p>
                    <p>最高投标额:无上限</p>
                    <p>所属营业员:苏澄海</p>
                    <p>收款人手机号:18888888888</p>
                </el-col>
                <el-col :span="4">
                    <p>借款人信息:此人有还款能力</p>
                    <p>有效时间:七天</p>
                    <p>还款方式:先息后本</p>
                    <p>渠道来源:合伙人</p>
                    <p>垫款时间:2021-09-20</p>
                </el-col>
            </el-row>
            <h1 class="title">费用明细</h1>
            <el-row :gutter="24" class="product-detail">
                <el-col :span="5">
                    <p>利息B:2%</p>
                    <p>GPS成本费:500元</p>
                    <p>手续费:500</p>
                    <p>首月利息:1000</p>
                </el-col>
                <el-col :span="5">
                    <p>借分期管理费:2000元</p>
                    <p>停车费:500元</p>
                    <p>押金:10000元</p>
                </el-col>
                <el-col :span="5">
                    <p>借款管理费:2000元</p>
                    <p>续贷提现费:500元</p>
                    <p>预留保费:1000元</p>
                </el-col>
                <el-col :span="5">
                    <p>保证金:500元</p>
                    <p>VIP发标费:500元</p>
                    <p>业务服务费:5000元</p>
                </el-col>
                <el-col :span="4">
                    <p>风险金:500元</p>
                    <p>借贷提现费:500元</p>
                    <p>业务手机号:13012345678</p>
                </el-col>
            </el-row>
            <h1 class="title">资产明细</h1>
            <el-row :gutter="24">
                <el-col :span="5">
                    <p>车辆品牌:大众</p>
                    <p>评估金额:80000元</p>
                </el-col>
                <el-col :span="5">
                    <p>车辆型号:甲壳虫豪华款</p>
                    <p>数量:1</p>
                </el-col>
                <el-col :span="5">
                    <p>车牌号:浙B88888</p>
                </el-col>
                <el-col :span="5">
                    <p>购车年份:2018年</p>
                </el-col>
                <el-col :span="4">
                    <p>购车价格:90000元</p>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    // 引入公共组件 BreadCrumb
    import BreadCrumb from '../../components/BreadCrumb'
    export default {
  components: { BreadCrumb },
        methods: {
            back() {
                this.$router.push("/product/all")
            }
        },
    }
</script>

<style lang="less" scoped>
.info span{
    line-height: 40px; text-align: left; margin: 0 8px;
}
.product-detail p{
    text-align: left; line-height: 40px; 
}
.title{
    text-align: left; margin: 20px 0;
}
</style>