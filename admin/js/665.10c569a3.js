"use strict";(self["webpackChunkvue_admin"]=self["webpackChunkvue_admin"]||[]).push([[665],{2665:function(e,s,t){t.r(s),t.d(s,{default:function(){return g}});var r=function(){var e=this,s=e._self._c;return s("div",{staticClass:"mainbox"},[s("div",{staticClass:"right_box"},[s("div",{staticClass:"loginFormBox"},[s("h3",[e._v("默认账号admin密码123456，请前往数据库修改")]),s("el-form",{ref:"loginForm",staticClass:"loginForm",attrs:{model:e.loginForm,rules:e.rules}},[s("el-form-item",{attrs:{prop:"adminname"}},[s("el-input",{attrs:{placeholder:"请输入管理员账号"},model:{value:e.loginForm.adminname,callback:function(s){e.$set(e.loginForm,"adminname",s)},expression:"loginForm.adminname"}},[s("template",{slot:"prepend"},[e._v("账号")])],2)],1),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.loginForm.password,callback:function(s){e.$set(e.loginForm,"password",s)},expression:"loginForm.password"}},[s("template",{slot:"prepend"},[e._v("密码")])],2)],1),s("el-form-item",{staticClass:"btn-ground"},[s("el-button",{staticClass:"btn-one",on:{click:function(s){return e.submitForm("loginForm")}}},[e._v("立即登录")])],1)],1)],1)])])},o=[],a=(t(901),t(585)),i={name:"PCLogin",methods:{gotolink(){this.$message.success("欢迎登录"),this.$router.replace("/user")},forget(){this.$message.success("忘了就算了，衫裤跑路吧")}},data(){return{loginForm:{adminname:"",password:""},checked:!0,rules:{adminname:[{required:!0,message:"请输入账号",trigger:"blur"},{min:1,max:12,message:"长度在 6 到 12 个字符的账户",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:1,max:16,message:"长度在 6 到 16 个字符的密码",trigger:"blur"}]}}},methods:{submitForm(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;(0,a.yq)(this.loginForm).then((e=>{let s=e.message;if(200==e.code){window.localStorage.setItem("admintoken",e.token),window.localStorage.setItem("adminInfo",JSON.stringify(e.data));e.data.id;"/login"==this.$route.path?(this.$router.push({path:"/"}),console.log("跳转到首页"),this.$message.success(e.message)):(this.$router.go(0),this.$message.success(e.message),console.log("刷新当前页面"))}else this.$message.error(s)}))}))}},created(){this.$message.warning("请先登录")}},n=i,l=t(2349),m=(0,l.Z)(n,r,o,!1,null,"1e39c868",null),g=m.exports}}]);