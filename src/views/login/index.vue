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
                    <el-button type="danger" class="login-btn block" @click="submitForm('ruleForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    // 当前模块名称
    name:'login',
    data(){
        // 验证验证码
        var checkCode = (rule, value, callback) => {
            let reg = /^[a-z0-9]{6}$/;
            if (value === '') {
                callback(new Error('请输入验证码'));
            } else if (!reg.test(value)) {
                callback(new Error('验证码格式有误!'));
            } else {
                callback();
            }
        };
        // 验证用户名
        var validateUsername = (rule, value, callback) => {
            let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else if(!reg.test(value)){
                callback(new Error('用户名格式有误！'));
            }else{
                callback();//
            }
        };
        // 验证密码
        var validatePassword = (rule, value, callback) => {
            let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
            if (value === '') {
                callback(new Error('请输入密码'));
            } else if (!reg.test(value)) {
                callback(new Error('密码为6-20位的数字加字母!'));
            } else {
                callback();
            }
        };
        return{
            menuTab:[
                {txt:'登录',current:true},
                {txt:'注册',current:false}
            ],
            // isActive:true
            ruleForm: {
                username: '',
                password: '',
                code: ''
            },
            rules: {
                username: [
                    { validator: validateUsername, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePassword, trigger: 'blur' }
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
                console.log(elem.current,'aaaa');
            });
            console.log(this.menuTab,'1111');
            // 高光
            data.current=true;
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
