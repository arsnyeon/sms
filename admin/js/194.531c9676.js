"use strict";(self["webpackChunkvue_admin"]=self["webpackChunkvue_admin"]||[]).push([[194],{3194:function(t,s,i){i.r(s),i.d(s,{default:function(){return r}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"cnm"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("p",[t._v("我是后台")]),s("p",{on:{click:function(s){return t.loginout()}}},[t._v("注销登录")])]),s("div",{staticClass:"card-content"},[s("h3",[t._v("快捷通道")]),s("div",{staticClass:"btn",on:{click:function(s){return t.goAddcdkey()}}},[t._v("添加卡密")]),s("div"),s("div",[t._v(" ")]),s("div",{staticClass:"btn",on:{click:function(s){return t.goAudit()}}},[t._v("短信审核")])])])])},n=[],c=(i(901),{name:"MobileHome",methods:{goAudit(){this.$router.push({path:"/audit"})},goAddcdkey(){this.$router.push({path:"/addcdkey"})},loginout(){localStorage.length>0?(this.$message.success("注销登录"),localStorage.clear(),this.$router.go(0)):this.$message.error("你就没登录")}}}),a=c,o=i(2349),u=(0,o.Z)(a,e,n,!1,null,"9b365a98",null),r=u.exports}}]);