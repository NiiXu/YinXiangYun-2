webpackJsonp([1],{"1uuo":function(t,e){},"27I9":function(t,e){},Jdfc:function(t,e){t.exports={baseURL:"http://note-server.hunger-valley.com"}},LUbI:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),r=n("//Fk"),i=n.n(r),o=n("mtWM"),a=n.n(o),u=n("Jdfc"),l=n.n(u);function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new i.a(function(s,r){var i={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLowerCase()?i.params=n:i.data=n,a()(i).then(function(t){200===t.status?s(t.data):(console.error(t.data),r(t.data))}).catch(function(t){console.error({msg:"网络异常"}),r({msg:"网络异常"})})})}console.log(l.a),a.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",a.a.defaults.baseURL=l.a.baseURL,a.a.defaults.withCredentials=!0;var h="/auth/register",v="/auth/login",d="/auth/logout",p="/auth",g=function(t){var e=t.username,n=t.password;return c(h,"POST",{username:e,password:n})},m=function(t){var e=t.username,n=t.password;return c(v,"POST",{username:e,password:n})},f=function(){return c(d)},_=function(){return c(p)},w=new s.a,k={data:function(){return{username:"未登录"}},created:function(){var t=this;w.$on("userInfo",function(e){t.username=e.username}),_().then(function(e){e.isLogin&&(t.username=e.data.username)})},computed:{slug:function(){return this.username.charAt(0)}}},b={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{attrs:{title:this.username}},[this._v(this._s(this.slug))])},staticRenderFns:[]};var $={components:{avatar:n("VU/8")(k,b,!1,function(t){n("LUbI")},"data-v-cb528128",null).exports},methods:{logout:function(){var t=this;f().then(function(e){t.$router.push({path:"login"})})}}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"sidebar"}},[e("avatar"),this._v(" "),e("div",{staticClass:"icons"},[e("router-link",{attrs:{to:"/note/1",title:"笔记"}},[e("i",{staticClass:"iconfont icon-note"})]),this._v(" "),e("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[e("i",{staticClass:"iconfont icon-notebook"})]),this._v(" "),e("router-link",{attrs:{to:"/trash/2",title:"回收站"}},[e("i",{staticClass:"iconfont icon-trash"})])],1),this._v(" "),e("div",{staticClass:"logout"},[e("i",{staticClass:"iconfont icon-logout",on:{click:this.logout}})])],1)},staticRenderFns:[]};var y={name:"app",components:{sidebar:n("VU/8")($,E,!1,function(t){n("rrfP")},"data-v-810898a2",null).exports}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("sidebar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var x=n("VU/8")(y,C,!1,function(t){n("yMGW")},null,null).exports,L=n("/ocq"),R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var U=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},R,!1,function(t){n("1uuo")},"data-v-d8ec41bc",null).exports,j={data:function(){return{isShowLogin:!0,isShowRegister:!1,login:{username:"",password:"",notice:"输入用户名和密码",isError:!1},register:{username:"",password:"",notice:"创建账号后，请记住用户名和密码",isError:!1}}},methods:{showLogin:function(){this.isShowLogin=!0,this.isShowRegister=!1},showRegister:function(){this.isShowLogin=!1,this.isShowRegister=!0},onRegister:function(){var t=this;return/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.register.username)?/^.{6,16}$/.test(this.register.password)?void g({username:this.register.username,password:this.register.password}).then(function(e){t.register.isError=!1,t.register.notice="",w.$emit("userInfo",{username:t.login.username}),t.$router.push({path:"notebooks"})}).catch(function(e){t.register.isError=!0,t.register.notice=e.msg}):(this.register.isError=!0,void(this.register.notice="密码长度为6~16个字符")):(this.register.isError=!0,void(this.register.notice="用户名3~15个字符，仅限于字母数字下划线中文"))},onLogin:function(){var t=this;return/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.login.username)?/^.{6,16}$/.test(this.login.password)?void m({username:this.login.username,password:this.login.password}).then(function(e){t.login.isError=!1,t.login.notice="",w.$emit("userInfo",{username:t.login.username}),t.$router.push({path:"notebooks"})}).catch(function(e){t.login.isError=!0,t.login.notice=e.msg}):(this.login.isError=!0,void(this.login.notice="密码长度为6~16个字符")):(this.login.isError=!0,void(this.login.notice="用户名3~15个字符，仅限于字母数字下划线中文"))}}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"login"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"main"}),t._v(" "),n("div",{staticClass:"form"},[n("h3",{on:{click:t.showRegister}},[t._v("创建账户")]),t._v(" "),n("transition",{attrs:{name:"slide"}},[n("div",{staticClass:"register",class:{show:t.isShowRegister}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.register.username,expression:"register.username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.register.username},on:{input:function(e){e.target.composing||t.$set(t.register,"username",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.register.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onRegister.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.register,"password",e.target.value)}}}),t._v(" "),n("p",{class:{error:t.register.isError}},[t._v(" "+t._s(t.register.notice))]),t._v(" "),n("div",{staticClass:"button",on:{click:t.onRegister}},[t._v("创建账号")])])]),t._v(" "),n("h3",{on:{click:t.showLogin}},[t._v("登录")]),t._v(" "),n("transition",{attrs:{name:"slide"}},[n("div",{staticClass:"login",class:{show:t.isShowLogin}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.login.username,expression:"login.username"}],attrs:{type:"text",placeholder:"输入用户名"},domProps:{value:t.login.username},on:{input:function(e){e.target.composing||t.$set(t.login,"username",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.login.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onLogin.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),t._v(" "),n("p",{class:{error:t.login.isError}},[t._v(" "+t._s(t.login.notice))]),t._v(" "),n("div",{staticClass:"button",on:{click:t.onLogin}},[t._v(" 登录")])])])],1)])])])])])},staticRenderFns:[]};var S=n("VU/8")(j,I,!1,function(t){n("27I9")},null,null).exports,F={data:function(){return{msg:"笔记本列表"}},created:function(){var t=this;_().then(function(e){e.isLogin||t.$router.push({path:"/login"})})}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"notebook-list"}},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/note/1"}},[this._v("笔记本1")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/note/2"}},[this._v("笔记本2")])],1)])])},staticRenderFns:[]};var V=n("VU/8")(F,P,!1,function(t){n("t0G4")},"data-v-18c05430",null).exports,W={data:function(){return{msg:"笔记详情列表"}},created:function(){var t=this;_().then(function(e){e.isLogin||t.$router.push({path:"/login"})})}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"note-detail"}},[e("h1",[this._v(this._s(this.msg)+" : "+this._s(this.$route.params.noteId))])])},staticRenderFns:[]};var O=n("VU/8")(W,T,!1,function(t){n("zO2m")},"data-v-e7772ad2",null).exports,N={data:function(){return{msg:"回收站"}},created:function(){var t=this;_().then(function(e){e.isLogin||t.$router.push({path:"/login"})})}},G={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"trash-detail"}},[e("h1",[this._v(this._s(this.msg)+" : "+this._s(this.$route.params.noteId))])])},staticRenderFns:[]};var A=n("VU/8")(N,G,!1,function(t){n("QhWy")},"data-v-db9d4928",null).exports;s.a.use(L.a);var H=new L.a({routes:[{path:"/",name:"HelloWorld",component:U},{path:"/login",component:S},{path:"/notebooks",component:V},{path:"/note/:noteId",component:O},{path:"/trash/:noteId",component:A}]});s.a.config.productionTip=!1,window.vm=new s.a({el:"#app",router:H,components:{App:x},template:"<App/>"})},QhWy:function(t,e){},rrfP:function(t,e){},t0G4:function(t,e){},yMGW:function(t,e){},zO2m:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b606da15188fe32c548f.js.map