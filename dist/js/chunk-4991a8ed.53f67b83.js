(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4991a8ed"],{"063d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",[a("Card",[a("p",{staticStyle:{height:"45px"},attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"android-send"}}),t._v("\n        工单"+t._s(this.$route.query.workid)+"详细信息\n        "),a("br"),"1"===this.$route.query.status?a("Button",{attrs:{type:"text"},nativeOn:{click:function(e){return t.rollback()}}},[t._v("查看回滚语句")]):"0"===this.$route.query.status||"4"===this.$route.query.status?a("Button",{attrs:{type:"text"},nativeOn:{click:function(e){return t.repairOrder()}}},[t._v("重新提交\n        ")]):t._e(),a("Button",{attrs:{type:"text"},nativeOn:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])],1),a("Row",[a("Col",{attrs:{span:"24"}},[a("Table",{staticClass:"tabletop",staticStyle:{background:"#5cadff"},attrs:{border:"",columns:t.columns,data:t.TableDataNew,size:"large"}}),a("br"),a("Page",{ref:"page",attrs:{total:t.page_number,"show-elevator":"","page-size":20},on:{"on-change":t.current_page}})],1)],1)],1)],1),a("BackTop",{attrs:{height:100,bottom:200}},[a("div",{staticClass:"top"},[t._v("返回顶端")])]),a("Modal",{attrs:{"ok-text":"提交工单",width:"800"},on:{"on-ok":t.referOrder},model:{value:t.reload_sql,callback:function(e){t.reload_sql=e},expression:"reload_sql"}},[a("div",{staticClass:"step-header-con"},[a("h3",[t._v("Yearning SQL平台审核工单")])]),a("p",{staticClass:"step-content"}),a("Form",{staticClass:"step-form"},[a("FormItem",{attrs:{label:"用户名:"}},[a("p",[t._v(t._s(t.formItem.Username))])]),a("FormItem",{attrs:{label:"环境:"}},[a("p",[t._v(t._s(t.formItem.IDC))])]),a("FormItem",{attrs:{label:"连接名:"}},[a("p",[t._v(t._s(t.formItem.Source))])]),a("FormItem",{attrs:{label:"数据库库名:"}},[a("p",[t._v(t._s(t.formItem.DataBase))])]),a("FormItem",{attrs:{label:"定时执行:"}},[a("p",[t._v(t._s(t.formItem.Delay))])]),a("FormItem",["0"===this.$route.query.status||"4"===this.$route.query.status?a("Input",{attrs:{type:"textarea"},model:{value:t.formItem.SQL,callback:function(e){t.$set(t.formItem,"SQL",e)},expression:"formItem.SQL"}}):t._e(),"1"===this.$route.query.status?a("Table",{attrs:{columns:t.rollColumn,data:t.rollData,"max-height":"300"}}):t._e()],1),a("FormItem",{attrs:{label:"工单提交说明:"}},[a("Input",{attrs:{placeholder:"最多不超过20个字"},model:{value:t.formItem.text,callback:function(e){t.$set(t.formItem,"text",e)},expression:"formItem.text"}})],1),a("FormItem",{attrs:{label:"是否备份"}},[a("RadioGroup",{model:{value:t.formItem.Backup,callback:function(e){t.$set(t.formItem,"Backup",e)},expression:"formItem.Backup"}},[a("Radio",{attrs:{label:1}},[t._v("是")]),a("Radio",{attrs:{label:0}},[t._v("否")])],1)],1)],1)],1)],1)},o=[],n=a("d225"),s=a("308d"),c=a("6bb5"),i=a("4e2b"),l=(a("ac6a"),a("b0b4")),u=a("9ab4"),d=a("60a3"),f=a("c622"),m=a("bc3a"),p=a.n(m),b=a("15fd"),h=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.columns=[{title:"sql语句",key:"SQL"},{title:"状态",key:"State"},{title:"错误信息",key:"Error",tooltip:!0},{title:"影响行数",key:"Affectrow",width:100},{title:"执行时间/秒",key:"Time"}],t.TableDataNew=[],t.reload_sql=!1,t.formItem={},t.rollColumn=[{type:"expand",width:50,render:function(t,e){return t(f["a"],{props:{row:e.row}})}},{title:"当前检查的sql",key:"SQL",render:function(t,e){var a=e.row.SQL.substring(0,80)+"...";return t("span",a)}}],t.rollData=[],t}return Object(i["a"])(e,t),Object(l["a"])(e,[{key:"rollback",value:function(){var t=this;p.a.get("".concat(this.$config.url,"/fetch/roll?workid=").concat(this.$route.query.workid)).then(function(e){e.data.sql!==[]?(t.reload_sql=!0,t.formItem=e.data.order,t.rollData=e.data.sql,t.formItem.Delay="none"):t.$config.err_notice(t,"无sql回滚语句")}).catch(function(e){t.$config.err_notice(t,e)})}},{key:"repairOrder",value:function(){var t=this;p.a.get("".concat(this.$config.url,"/fetch/roll?workid=").concat(this.$route.query.workid)).then(function(e){t.formItem=e.data.order,t.formItem.Delay="none"}).catch(function(e){t.$config.err_notice(t,e)}),this.reload_sql=!0}},{key:"referOrder",value:function(){var t=this;if("1"===this.$route.query.status){var e="";this.rollData.forEach(function(t){e+=t.SQL}),this.formItem.SQL=e}p.a.post("".concat(this.$config.url,"/fetch/rollorder"),{data:this.formItem}).then(function(){t.$config.notice("工单已提交成功")}).catch(function(e){t.$config.err_notice(t,e)})}},{key:"current_page",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;p.a.get("".concat(this.$config.url,"/fetch/detail?workid=").concat(this.$route.query.workid,"&status=").concat(this.$route.query.status,"&page=").concat(e)).then(function(e){t.TableDataNew=e.data.record,t.page_number=e.data.count}).catch(function(e){t.$config.err_notice(t,e)})}},{key:"mounted",value:function(){this.current_page()}}]),e}(Object(d["b"])(b["a"]));h=Object(u["a"])([Object(d["a"])({components:{}})],h);var _,v,y=h,k=(_=Object(d["a"])({components:{},mixins:[y]}),_(v=function(t){function e(){return Object(n["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(i["a"])(e,t),e}(d["d"]))||v),g=k,w=(a("8f88"),a("2877")),I=Object(w["a"])(g,r,o,!1,null,null,null);e["default"]=I.exports},"15fd":function(t,e,a){"use strict";var r=a("d225"),o=a("b0b4"),n=a("308d"),s=a("6bb5"),c=a("4e2b"),i=a("9ab4"),l=a("60a3"),u=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(n["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.formItem={source:"",database:"",textarea:"",backup:1,text:"",idc:"",table:"",assigned:"",delay:null,tp:0,row:1,name:"",isquery:2,ip:"",add:"",username:"",password:"",port:"",id:0},t.wordList=[],t.page_number=1,t.current=1,t.find={picker:[],user:"",valve:!1},t.query={user:"",department:"",valve:!1,username:"",computer_room:"",connection_name:""},t.table_data=[],t.testResults=[],t.validate_gen=!0,t.loading=!1,t.is_open=!1,t.group_list=[],t.group_props=[],t.edit_password=!1,t.savePassLoading=!1,t}return Object(c["a"])(e,t),Object(o["a"])(e,[{key:"cancel_password",value:function(){this.edit_password=!1}}]),e}(l["d"]);u=Object(i["a"])([Object(l["a"])({components:{}})],u),e["a"]=u},"7f01":function(t,e,a){},"8f88":function(t,e,a){"use strict";var r=a("7f01"),o=a.n(r);o.a},c622:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Row",[a("Col",[a("code",[t._v(t._s(t.row.SQL))])])],1)},o=[],n={name:"expandTable",props:{row:Object}},s=n,c=a("2877"),i=Object(c["a"])(s,r,o,!1,null,"564f6147",null);e["a"]=i.exports}}]);
//# sourceMappingURL=chunk-4991a8ed.53f67b83.js.map