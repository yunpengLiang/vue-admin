<template>
<!-- 必须有一个父元素 -->
    <div id="login">
        <!-- 内容区 -->
        <div class="login-warp">
            <ul class="menu-tab">
                <li v-for="item in menuTab" :key="item.id" :class="{'current':item.current}" @click="toggleMenu(item)" >{{item.txt}}</li>
            </ul>
            <!-- 表单的start -->
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="login-form" size="medium">

                <el-form-item  prop="username" class="item-form">
                    <label>邮箱</label>
                    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item  prop="password" class="item-form">
                     <label>密码</label>
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off" minlength="6" maxlength="20"></el-input>
                </el-form-item>

                <el-form-item  prop="passwords" class="item-form" v-if="model==='register'">
                     <label>重复密码</label>
                    <el-input type="password" v-model="ruleForm.passwords" autocomplete="off" minlength="6" maxlength="20"></el-input>
                </el-form-item>

                <el-form-item  prop="code" class="item-form">
                     <label>验证码</label>
                     <el-row :gutter="10">
                        <el-col :span="15">
                            <el-input v-model.number="ruleForm.code" minlength="6" maxlength="6"></el-input>
                        </el-col>
                        <el-col :span="9">
                            <el-button type="success" class="block">获取验证码</el-button>
                        </el-col>
                    </el-row>
                    
                </el-form-item>

                <el-form-item>
                    <el-button type="danger" class="login-btn block"   @click="submitForm('ruleForm')">{{menuTab[0].txt}}</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import {stripscript,validateEmail,validatePass,validateCheckCode} from "@/utils/validate";
export default {
    // 当前模块名称
    name:'login',
    data(){
        // 验证验证码
        var checkCode = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入验证码'));
            } else if (validateCheckCode(value)) {
                callback(new Error('验证码格式有误!'));
            } else {
                callback();
            }
        };
        // 验证用户名邮箱
        var validateUsername = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else if(validateEmail(value)){
                callback(new Error('用户名格式有误！'));
            }else{
                callback();//
            }
        };
        // 验证密码
        var validatePassword = (rule, value, callback) => {
            // 当前密码框的值等于过滤后的数据
            this.ruleForm.password = stripscript(value);
            value = this.ruleForm.password;
            if (value === '') {
                callback(new Error('请输入密码'));
            } else if (validatePass(value)) {
                callback(new Error('密码为6-20位的数字加字母!'));
            } else {
                callback();
            }
        };
        // 验证重复密码
        var validatePasswords = (rule, value, callback) => {
            // 当前密码框的值等于过滤后的数据
            this.ruleForm.passwords = stripscript(value);
            value = this.ruleForm.passwords;
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value != this.ruleForm.password) {
                callback(new Error('重复密码不正确!'));
            } else {
                callback();
            }
        };
        return{
            menuTab:[
                {txt:'登录',current:true,type:'login'},
                {txt:'注册',current:false,type:'register'}
            ],
            // 模块的值
            model:'login',
            // isActive:true
            ruleForm: {
                username: '',
                password: '',
                passwords: '',
                code: ''
            },
            rules: {
                username: [
                    { validator: validateUsername, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePassword, trigger: 'blur' }
                ],
                passwords: [
                    { validator: validatePasswords, trigger: 'blur' }
                ],
                code: [
                    { validator: checkCode, trigger: 'blur' }
                ]
            }
        }
    },
    created(){},
    mounted(){
        
    },
    methods:{
        // 数据驱动视图
        toggleMenu(data){
            this.menuTab.forEach((elem,index) => {
                elem.current = false;
            });
            // 高光
            data.current=true;
            // 修改模块的值
            this.model = data.type;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
    props:{},
    watch:{}
};
</script>

<style lang="scss" scoped>
// scoped标识只对当前vue文件管用
#login{
    // 可视区的高度为100%
    height:100vh;
    background-color: #344a5f;
}
.login-warp{
    width: 330px;
    margin: auto;
}
.menu-tab{
    text-align: center;
    li{
        display: inline-block;
        width: 88px;
        height: 36px;
        line-height: 36px;
        font-size: 14px;
        color: #FFF;
        border-radius: 2px;
        cursor: pointer;
    }
    .current{
        background-color: rgba(0,0,0, .1);
    }
}
.login-form{
    margin-top: 29px;
    label{
        display: block;
        margin-bottom: 3px;
        font-size: 14px;
        color: #FFF;
    }
    .item-form{
        margin-bottom: 13px;
    }
    .block{
        display: block;
        width: 100%;
    }
    .login-btn{
        margin-top: 19px;
    }
}
</style>
