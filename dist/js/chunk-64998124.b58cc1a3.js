(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64998124"],{"15fd":function(e,t,a){"use strict";var n=a("d225"),r=a("b0b4"),o=a("308d"),i=a("6bb5"),s=a("4e2b"),c=a("9ab4"),l=a("60a3"),u=function(e){function t(){var e;return Object(n["a"])(this,t),e=Object(o["a"])(this,Object(i["a"])(t).apply(this,arguments)),e.formItem={source:"",database:"",textarea:"",backup:1,text:"",idc:"",table:"",assigned:"",delay:null,tp:0,row:1,name:"",isquery:2,ip:"",add:"",username:"",password:"",port:"",id:0},e.wordList=[],e.page_number=1,e.current=1,e.find={picker:[],user:"",valve:!1},e.query={user:"",department:"",valve:!1,username:"",computer_room:"",connection_name:""},e.table_data=[],e.testResults=[],e.validate_gen=!0,e.loading=!1,e.is_open=!1,e.group_list=[],e.group_props=[],e.edit_password=!1,e.savePassLoading=!1,e}return Object(s["a"])(t,e),Object(r["a"])(t,[{key:"cancel_password",value:function(){this.edit_password=!1}}]),t}(l["d"]);u=Object(c["a"])([Object(l["a"])({components:{}})],u),t["a"]=u},"346d":function(e,t,a){"use strict";var n=a("5079"),r=a.n(n);r.a},"3b2b":function(e,t,a){var n=a("7726"),r=a("5dbc"),o=a("86cc").f,i=a("9093").f,s=a("aae3"),c=a("0bfb"),l=n.RegExp,u=l,m=l.prototype,f=/a/g,d=/a/g,p=new l(f)!==f;if(a("9e1e")&&(!p||a("79e5")(function(){return d[a("2b4c")("match")]=!1,l(f)!=f||l(d)==d||"/a/i"!=l(f,"i")}))){l=function(e,t){var a=this instanceof l,n=s(e),o=void 0===t;return!a&&n&&e.constructor===l&&o?e:r(p?new u(n&&!o?e.source:e,t):u((n=e instanceof l)?e.source:e,n&&o?c.call(e):t),a?this:m,l)};for(var b=function(e){e in l||o(l,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},_=i(u),g=0;_.length>g;)b(_[g++]);m.constructor=l,l.prototype=m,a("2aba")(n,"RegExp",l)}a("7a56")("RegExp")},5079:function(e,t,a){},7155:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Col",{attrs:{span:"5"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"md-refresh"}}),e._v("\n        添加数据库\n      ")],1),a("div",{staticClass:"edittable-testauto-con"},[a("Form",{ref:"formValidate",attrs:{model:e.formItem,"label-width":100,rules:e.ruleInline}},[a("Form-item",{attrs:{label:"环境:",prop:"add"}},[a("Select",{model:{value:e.formItem.add,callback:function(t){e.$set(e.formItem,"add",t)},expression:"formItem.add"}},e._l(e.comList,function(t){return a("Option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}),1)],1),a("Form-item",{attrs:{label:"连接名称:",prop:"name"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:e.formItem.name,callback:function(t){e.$set(e.formItem,"name",t)},expression:"formItem.name"}})],1),a("Form-item",{attrs:{label:"数据库地址:",prop:"ip"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:e.formItem.ip,callback:function(t){e.$set(e.formItem,"ip",t)},expression:"formItem.ip"}})],1),a("Form-item",{attrs:{label:"端口:",prop:"port"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:e.formItem.port,callback:function(t){e.$set(e.formItem,"port",t)},expression:"formItem.port"}})],1),a("Form-item",{attrs:{label:"用户名:",prop:"username"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:e.formItem.username,callback:function(t){e.$set(e.formItem,"username",t)},expression:"formItem.username"}})],1),a("Form-item",{attrs:{label:"密码:",prop:"password"}},[a("Input",{attrs:{placeholder:"请输入",type:"password"},model:{value:e.formItem.password,callback:function(t){e.$set(e.formItem,"password",t)},expression:"formItem.password"}})],1),a("Form-item",{attrs:{label:"数据源类型:"}},[a("RadioGroup",{model:{value:e.formItem.isquery,callback:function(t){e.$set(e.formItem,"isquery",t)},expression:"formItem.isquery"}},[a("Radio",{attrs:{label:2}},[e._v("读写")]),a("Radio",{attrs:{label:1}},[e._v("读")]),a("Radio",{attrs:{label:0}},[e._v("写")])],1)],1),a("Button",{attrs:{type:"info"},on:{click:function(t){return e.testConnection()}}},[e._v("测试连接")]),a("Button",{staticStyle:{"margin-left":"5%"},attrs:{type:"success"},on:{click:function(t){return e.addConnection()}}},[e._v("确定")]),a("Button",{staticStyle:{"margin-left":"5%"},attrs:{type:"warning"},on:{click:function(t){return e.resetForm()}}},[e._v("重置")])],1)],1)])],1),a("Col",{staticClass:"padding-left-10",attrs:{span:"19"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"md-apps"}}),e._v("\n        数据库详情表\n      ")],1),a("Input",{staticStyle:{width:"15%"},attrs:{placeholder:"请填写连接名",clearable:""},model:{value:e.query.connection_name,callback:function(t){e.$set(e.query,"connection_name",t)},expression:"query.connection_name"}}),a("Select",{staticClass:"margin-left-10",staticStyle:{width:"15%"},attrs:{placeholder:"请填写环境"},model:{value:e.query.computer_room,callback:function(t){e.$set(e.query,"computer_room",t)},expression:"query.computer_room"}},e._l(e.comList,function(t){return a("Option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}),1),a("Button",{staticClass:"margin-left-10",attrs:{type:"primary"},on:{click:e.queryData}},[e._v("查询")]),a("Button",{staticClass:"margin-left-10",attrs:{type:"warning"},on:{click:e.queryCancel}},[e._v("重置")]),a("div",{staticClass:"edittable-con-1"},[a("Table",{attrs:{columns:e.columns,data:e.table_data},scopedSlots:e._u([{key:"is_query",fn:function(t){var n=t.row;return[0===n.IsQuery?a("Tag",{attrs:{checkable:"",color:"primary"}},[e._v("写")]):e._e(),1===n.IsQuery?a("Tag",{attrs:{checkable:"",color:"success"}},[e._v("读")]):e._e(),2===n.IsQuery?a("Tag",{attrs:{checkable:"",color:"warning"}},[e._v("读写")]):e._e()]}},{key:"action",fn:function(t){var n=t.row;return[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"info",size:"small"},on:{click:function(t){return e.viewConnectionModal(n)}}},[e._v("详细信息")]),a("Poptip",{attrs:{confirm:"",title:"删除数据源将会删除对应的所有工单信息,确定要删除吗？",transfer:""},on:{"on-ok":function(t){return e.delConnection(n)}}},[a("Button",{attrs:{type:"warning",size:"small"}},[e._v("删除")])],1)]}}])})],1),a("br"),a("Page",{attrs:{total:e.page_number,"show-elevator":"","page-size":10,current:e.current},on:{"on-change":e.getPageInfo,"update:current":function(t){e.current=t}}})],1)],1),a("Modal",{attrs:{width:500,okText:"保存"},on:{"on-ok":e.modifyBase},model:{value:e.is_open,callback:function(t){e.is_open=t},expression:"is_open"}},[a("h3",{staticStyle:{color:"#2D8CF0"},attrs:{slot:"header"},slot:"header"},[e._v("数据库连接信息")]),a("Form",{attrs:{"label-width":100,"label-position":"right"}},[a("FormItem",{attrs:{label:"环境"}},[a("Input",{attrs:{readonly:""},model:{value:e.edit_base_info.IDC,callback:function(t){e.$set(e.edit_base_info,"IDC",t)},expression:"edit_base_info.IDC"}})],1),a("FormItem",{attrs:{label:"连接名称:"}},[a("Input",{attrs:{readonly:""},model:{value:e.edit_base_info.Source,callback:function(t){e.$set(e.edit_base_info,"Source",t)},expression:"edit_base_info.Source"}})],1),a("FormItem",{attrs:{label:"数据库地址:"}},[a("Input",{model:{value:e.edit_base_info.IP,callback:function(t){e.$set(e.edit_base_info,"IP",t)},expression:"edit_base_info.IP"}})],1),a("FormItem",{attrs:{label:"端口:"}},[a("Input",{model:{value:e.edit_base_info.Port,callback:function(t){e.$set(e.edit_base_info,"Port",t)},expression:"edit_base_info.Port"}})],1),a("FormItem",{attrs:{label:"用户名:"}},[a("Input",{model:{value:e.edit_base_info.Username,callback:function(t){e.$set(e.edit_base_info,"Username",t)},expression:"edit_base_info.Username"}})],1),a("FormItem",{attrs:{label:"密码:"}},[a("Input",{attrs:{type:"password"},model:{value:e.edit_base_info.Password,callback:function(t){e.$set(e.edit_base_info,"Password",t)},expression:"edit_base_info.Password"}})],1)],1)],1)],1)},r=[],o=(a("7f7f"),a("d225")),i=a("b0b4"),s=a("308d"),c=a("6bb5"),l=a("4e2b"),u=(a("3b2b"),a("9ab4")),m=a("bc3a"),f=a.n(m),d=a("60a3"),p=a("15fd"),b=function(e,t,a){var n=new RegExp("[`~!@#$^&*()={}':;',\\[\\]<>/?~！@#￥……&*（）——{}【】‘；：”“'。，、？]");n.test(t)?a(new Error("特殊字符仅可使用|与-")):a()},_=function(e,t,a){var n=new RegExp("[`?？^$]");n.test(t)?a(new Error("密码中不得含有? @ ^ $")):a()},g=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(s["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.columns=[{title:"连接名称",key:"Source"},{title:"查询数据源",key:"IsQuery",slot:"is_query"},{title:"数据库地址",key:"IP"},{title:"环境",key:"IDC"},{title:"操作",key:"action",width:300,slot:"action"}],e.ruleInline={add:[{required:!0,message:"请选择对应环境",trigger:"change"}],name:[{required:!0,message:"请填写连接名称",trigger:"blur"},{validator:b,trigger:"blur"}],ip:[{required:!0,message:"请填写连接地址",trigger:"blur"}],username:[{required:!0,message:"请填写用户名",trigger:"blur"}],port:[{required:!0,message:"请填写端口",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{validator:_,trigger:"blur"}]},e.comList=[],e.edit_base_info={},e}return Object(l["a"])(t,e),Object(i["a"])(t,[{key:"resetForm",value:function(){this.formItem=this.$config.clearObj(this.formItem)}},{key:"testConnection",value:function(){var e=this;f.a.put("".concat(this.$config.url,"/management_db/test"),{ip:this.formItem.ip,user:this.formItem.username,password:this.formItem.password,port:parseInt(this.formItem.port)}).then(function(t){e.$config.notice(t.data)}).catch(function(t){e.$config.err_notice(e,t)})}},{key:"addConnection",value:function(){var e=this,t=this.$refs["formValidate"];t.validate(function(a){a&&f.a.post("".concat(e.$config.url,"/management_db/add"),{source:e.formItem.name,idc:e.formItem.add,ip:e.formItem.ip,user:e.formItem.username,password:e.formItem.password,port:parseInt(e.formItem.port),isQuery:e.formItem.isquery}).then(function(a){e.$config.notice(a.data),e.getPageInfo(e.current),t.resetFields()}).catch(function(t){e.$config.err_notice(e,t)})})}},{key:"viewConnectionModal",value:function(e){this.is_open=!0,this.edit_base_info=e}},{key:"delConnection",value:function(e){var t=this,a=this.current;1===this.table_data.length&&(a-=1),f.a.delete("".concat(this.$config.url,"/management_db/del/").concat(e.Source)).then(function(e){t.$config.notice(e.data),t.getPageInfo(a)}).catch(function(e){t.$config.err_notice(t,e)})}},{key:"getPageInfo",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;f.a.get("".concat(this.$config.url,"/management_db/fetch/?page=").concat(t,"&con=").concat(JSON.stringify(this.query))).then(function(t){e.table_data=t.data.data,e.page_number=parseInt(t.data.page),e.comList=t.data.custom}).catch(function(t){e.$config.err_notice(e,t)})}},{key:"modifyBase",value:function(){var e=this,t=JSON.parse(JSON.stringify(this.edit_base_info));t.Port=parseInt(t.Port),t.IsQuery=0,f.a.put("".concat(this.$config.url,"/management_db/edit"),{data:t}).then(function(t){return e.$config.notice(t.data)}).catch(function(t){return e.$config.err_notice(e,t)})}},{key:"queryData",value:function(){this.query.valve=!0,this.getPageInfo()}},{key:"queryCancel",value:function(){this.$config.clearObj(this.formItem),this.getPageInfo()}},{key:"mounted",value:function(){this.getPageInfo()}}]),t}(Object(d["b"])(p["a"]));g=Object(u["a"])([d["a"]],g);var v=g,I=v,h=(a("a48a"),a("346d"),a("2877")),y=Object(h["a"])(I,n,r,!1,null,null,null);t["default"]=y.exports},a48a:function(e,t,a){"use strict";var n=a("e43e"),r=a.n(n);r.a},aae3:function(e,t,a){var n=a("d3f4"),r=a("2d95"),o=a("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==r(e))}},e43e:function(e,t,a){}}]);
//# sourceMappingURL=chunk-64998124.b58cc1a3.js.map