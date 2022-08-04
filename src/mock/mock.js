import Mock from "mockjs";
//左侧菜单接口
Mock.mock('http://localhost:8080/menu', 'get', () => {
    return {
        code: 200,
        success: true,
        message: "成功",
        data: menuList
    }
})
const menuList = [{
        name: "首页",
        icon: "el-icon-s-home",
        url: "/index",
    },
    {
        name: "账户管理",
        icon: "el-icon-coin",
        url: "/account",
        children: [{
                name: "所有人员",
                icon: "el-icon-user",
                url: "/account/all",
            },
            {
                name: "业务人员",
                icon: "el-icon-phone-outline",
                url: "/account/business",
            },
            {
                name: "审核人员",
                icon: "el-icon-s-check",
                url: "/account/audit",
            },
            {
                name: "风控经理",
                icon: "el-icon-s-finance",
                url: "/account/risk",
            },
            {
                name: "管理员",
                icon: "el-icon-s-custom",
                url: "/account/admin",
            }
        ]
    },
    {
        name: "产品管理",
        icon: "el-icon-menu",
        url: "/product",
        children: [{
                name: "全部产品",
                icon: "el-icon-notebook-2",
                url: "/product/all",
            },
            {
                name: "汽车消费",
                icon: "el-icon-truck",
                url: "/product/carConsumption",
            },
            {
                name: "房产消费",
                icon: "el-icon-office-building",
                url: "/product/estate",
            },
            {
                name: "抵押贷款",
                icon: "el-icon-money",
                url: "/product/mortgage",
            },
        ]
    },
    {
        name: "订单管理",
        icon: "el-icon-s-order",
        url: "/order",
        children: [{
                name: "所有订单",
                icon: "el-icon-tickets",
                url: "/orders/all",
            },
            {
                name: "新建订单",
                icon: "el-icon-document",
                url: "/orders/create",
            },
        ]
    },
    {
        name: "客户管理",
        icon: "el-icon-user",
        url: "/customer",
        children: [{
                name: "基本信息",
                icon: "el-icon-chat-square",
                url: "/customer/info",
            },
            {
                name: "资金记录",
                icon: "el-icon-bank-card",
                url: "/record",
            },
        ]
    },
    {
        name: "待办事项",
        icon: "el-icon-chat-dot-square",
        url: "/todo",
    },
    {
        name: "个人中心",
        icon: "el-icon-user",
        url: "/my",
    }
]
//登录接口
Mock.mock('http://localhost:8080/login', 'post', (req) => {
    const {
        password,
        username
    } = JSON.parse(req.body)
    if (username === 'admin' && password === '123456') {
        return {
            code: 200,
            success: true,
            message: "登录成功",
            token: "3arc9h0vhcr0f8iprpnscmfo8s",
            nickname: "法外狂徒张三"
        }
    } else {
        return {
            code: 100,
            success: false,
            message: "账号或者密码有误",

        }
    }
})
//记录入职时间
Mock.mock('http://localhost:8080/in', 'get', () => {
    return {
        code: 200,
        success: true,
        message: "操作成功",
        time: "2021-07-01 00:00:00"
    }
})
//所有人员
Mock.mock('http://localhost:8080/account/all', 'get', () => {
    // const { password, username } = JSON.parse(req.body)
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            "list|20-40": [{
                'account|100000-999999': 1,
                'id|+1': 1,
                'name': "@cname",
                'character|1': ["业务人员", "审核人员", "风控经理", "管理员"],
                'remark|5-20': '@cword',
                'reason|1': ["需要进系统录入进件补充资料", "对进件进行风险审核", "对放款进行风险审核"],
                'status|1': [1, 2],
            }],
            "total|1": [10, 20, 30, 40, 50]
        })
    }
})
//产品管理--全部产品   
Mock.mock('http://localhost:8080/product/all', 'get', () => {
    // const { password, username } = JSON.parse(req.body)
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            "list|18-30": [{
                'id|+1': 1,
                'type|1': ["汽车消费", "房产消费", "抵押贷款"],
                'name|1': ["巴贝拉贷款", "麦穗金融", "日借款", "爱猫借贷", "樱花分期", "小熊金融", "借乐花", "星星钱袋"],
                'limit|1': [100, 200, 300],
                'rate|1': [4.1, 4.3, 3.8, 3.9, 5, 3],
                'number': Mock.Random.integer(30, 200),
                'total': Mock.Random.integer(10000000, 500000000),
                'average': Mock.Random.integer(10000000, 250000000),
                'status|1': [1, 2],
                'highest|1': [36, 60, 24, 360],
                'date': Mock.Random.date()
            }],
            "total|1": [10, 20, 30, 40, 50]
        })
    }
})

// 订单管理--所有订单
Mock.mock('http://localhost:8080/orders/all', 'get',() => {
    // const { password, username } = JSON.prase(req.body)
    return {
        code: 200,
        success: true,
        message: '成功',
        data: Mock.mock({
            "list|15-30": [{
                'id|+1': 1,
                'date': Mock.Random.date(),
                'name': '@cname',
                'province|1': ["北京"],
                'city|1': ["朝阳区"],
                'address|1': ["北京市朝阳区朝阳路 1515弄","北京市朝阳区朝阳路 1516弄","北京市朝阳区朝阳路 1517弄","北京市朝阳区朝阳路 1518弄"],
                'post|1': ['100020'],
                'status|1': ["1","2"]
            }]
        })
    }
})

// 客户管理--基本信息
Mock.mock('http://localhost:8080/customer/info', 'get',() => {
    // const { password, username } = JSON.prase(req.body)
    return {
        code: 200,
        success: true,
        message: '成功',
        data: Mock.mock({
            "list|5-10": [{
                'id|+1': 1,
                'number|1':["1001",'1002','1003','1004','1005','1006','1007','1008','1009','1010'],
                'name': '@cname',
                'phone|1':["13900123456","15000066666","17000088888","13800012345"],
                'identity': Mock.Random.integer(100000000000000,300000000000000),
                'education|1': ['初中','高中','本科','研究生'],
                'profession|1': ['司机','球员','厨师','老板','明星'],
                'address|1': ["北京市朝阳区朝阳路 1515弄","北京市朝阳区朝阳路 1516弄","北京市朝阳区朝阳路 1517弄","北京市朝阳区朝阳路 1518弄"],
                'marital|1': ["1","2"],
                'status|1': ['1','2']
            }]
        })
    }
})