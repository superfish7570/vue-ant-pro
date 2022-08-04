<template>
    <div>
        <!-- 使用element-ui Card卡片(卡片阴影) 创建内容头部 -->
        <el-row :gutter="24">
            <el-col :span="6">
                <el-card shadow="always" class="in">
                    <div class="fl">
                        <p>本月进件</p>
                        <p>6588</p>
                        <p>+20.12%
                            <span>与上月同比</span>
                        </p>
                    </div>
                    <i class="el-icon-tickets ico"></i>
                    <div class="clear"></div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="always" class="out">
                    <div class="fl">
                        <p>本月放款(元)</p>
                        <p>121000000</p>
                        <p>+1.25%
                            <span>与上月同比</span>
                        </p>
                    </div>
                    <i class="el-icon-money ico"></i>
                    <div class="clear"></div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="always" class="allin">
                    <div class="fl">
                        <p>累计进件</p>
                        <p>128700</p>
                        <p>+11.48%
                            <span>与去年同比</span>
                        </p>
                    </div>
                    <i class="el-icon-date ico"></i>
                    <div class="clear"></div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="always" class="allout">
                    <div class="fl">
                        <p>累计放款</p>
                        <p>923380079</p>
                        <p>-2.06%
                            <span>与去年同比</span>
                        </p>
                    </div>
                    <i class="el-icon-coin ico"></i>
                    <div class="clear"></div>
                </el-card>
            </el-col>
        </el-row>
        <!-- echarts 视图部分 -->
        <el-row :gutter="24" class="mt">
            <el-col :span="18">
                <el-card>
                    <p>进件统计分析</p>
                    <div ref="line" style="height:250px"></div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card>
                    <p>进件产品占比</p>
                    <div ref="pie" style="height:250px"></div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="24" class="mt">
            <el-col :span="12">
                <el-card style="height:550px">
                    <!-- 使用element-ui Timeline时间线(自定义事件戳) 创建底部左部分 -->
                    <el-timeline>
                        <el-timeline-item timestamp="2021/7/5" placement="top">
                            <el-card>
                                <h4>审核订单</h4>
                                <p>王小虎 提交于 08:46</p>
                            </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2021/7/5" placement="top">
                            <el-card>
                                <h4>新增贷款</h4>
                                <p>王小虎 提交于 11:26</p>
                            </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2021/7/5" placement="top">
                            <el-card>
                                <h4>新增渠道</h4>
                                <p>王小虎 提交于 15:40</p>
                            </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2021/7/5" placement="top">
                            <el-card>
                                <h4>订单结算</h4>
                                <p>王小虎 提交于 21:30</p>
                            </el-card>
                        </el-timeline-item>
                    </el-timeline>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card style="height:550px">
                    <!-- 使用element-ui Calendar日历(自定义范围) -->
                    <el-calendar :range="['2021-07-05', '2021-07-25']"></el-calendar>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
// 引入echarts
import * as echarts from 'echarts'
export default {
    methods: {
        loadLine() {
            const myChart = echarts.init(this.$refs["line"])
            myChart.setOption({
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['21-07', '21-08', '21-09', '21-10', '21-11', '21-12', '22-01']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [23, 35, 64, 58, 45, 67, 98],
                    type: 'line',
                    smooth: true,
                    areaStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                    offset: 0,
                                    color: "#4f88ff",
                                },
                                {
                                    offset: 1,
                                    color: "white",
                                },
                            ],
                            global: false,
                        }
                    }
                }]
            })
        },
        loadPie() {
            const myChart = echarts.init(this.$refs["pie"])
            myChart.setOption({
                tooltip: {
                    trigger: "item",
                    formatter: "{a}<br/>{b}:{d}%",
                },
                series: [{
                    name: "访问来源",
                    type: "pie",
                    radius: ["50%", "70%"],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: "center",
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: "30",
                            fontWeight: "bold",
                        },
                    },
                    labelLine: {
                        show: false,
                    },
                    data: [
                        { value: 335, name: "房闪贷" },
                        { value: 310, name: "新车贷" },
                        { value: 234, name: "资金贷" },
                        { value: 135, name: "合力贷" },
                        { value: 1548, name: "其他" },
                    ],
                }, ]
            })
        }
    },
    mounted() {
        this.loadLine()
        this.loadPie()
    },
}
</script>

<style lang="less" scoped>
.ico {
    float: right;
    font-size: 90px;
    color: rgba(255, 255, 255, 0.3);
}

.in {
    background: #4f88ff;
    p {
        line-height: 30px;
        color: #fff;
        font-size: 16px;
        span {
            font-size: 12px;
        }
    }
}

.allin {
    background: #5050ff;
    p {
        line-height: 30px;
        color: #fff;
        font-size: 16px;
        span {
            font-size: 12px;
        }
    }
}

.allout {
    background: #f49b3b;
    p {
        line-height: 30px;
        color: #fff;
        font-size: 16px;
        span {
            font-size: 12px;
        }
    }
}

.out {
    background: #f26075;
    p {
        line-height: 30px;
        color: #fff;
        font-size: 16px;
        span {
            font-size: 12px;
        }
    }
}
</style>