<template>
    <div>
        <!-- 使用element-ui Dialog对话框(基本用法) 创建新建角色表单 -->
        <el-dialog :title="title" :visible="visible" width="30%" @close="close">
            <!-- 使用element-ui Form表单(表单验证) 创建表单内容 -->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                <el-form-item label="角色" prop="character">
                    <el-select v-model="ruleForm.character" placeholder="请选择角色" style="width:100%">
                        <el-option label="业务人员" value="1"></el-option>
                        <el-option label="审核人员" value="2"></el-option>
                        <el-option label="风控经理" value="3"></el-option>
                        <el-option label="管理员" value="4"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注" prop="remark">
                    <el-input v-model="ruleForm.remark"></el-input>
                </el-form-item>
                <el-form-item label="创建原因" prop="reason">
                    <el-input type="textarea" v-model="ruleForm.reason"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                    <el-button @click="ok">取 消</el-button>
                    <el-button type="primary" @click="ok">确 定</el-button>
                  </span>
        </el-dialog>
    </div>
</template>

<script>
// 引入vuex state
import {mapState} from 'vuex'
export default {
    props: ["visible"],
    data() {
        return {
            title:"新建员工",
            ruleForm: {
                character: "",
                remark: "",
                reason: ""
            },
            rules: {
                character: { required: true, message: '请选择角色', trigger: 'change' },
                remark: { required: true, message: '请输入备注', trigger: 'blur' },
                reason: { required: true, message: '请输入创建原因', trigger: 'blur' }
            }
        }
    },
    methods: {
        close() {
            this.$emit("close")
        },
        ok() {
            this.close()
        }
    },
    computed:{
        ...mapState(['rowData'])
    },
    watch:{
        visible() {
            const {character,reason,remark}=this.rowData
            this.ruleForm={character,reason,remark}
            if(character) {
                this.title="编辑员工"
            }else{
                this.title="新建员工"
            }
        }
    },
};
</script>

<style lang="less" scoped>

</style>