(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[195],{14230:function(t,e,n){var c=n(1702),i=n(84488),o=n(41340),a=/"/g,r=c("".replace);t.exports=function(t,e,n,c){var s=o(i(t)),u="<"+e;return""!==n&&(u+=" "+n+'="'+r(o(c),a,"&quot;")+'"'),u+">"+s+"</"+e+">"}},43429:function(t,e,n){var c=n(47293);t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},78830:function(t,e,n){"use strict";var c=n(82109),i=n(14230),o=n(43429);c({target:"String",proto:!0,forced:o("fontsize")},{fontsize:function(t){return i(this,"font","size",t)}})},22633:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return b}});var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-breadcrumb",[n("el-breadcrumb-item",[t._v("账号")])],1),n("el-divider"),n("div",{staticClass:"toolbar"},[n("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:t.addAccount}},[t._v(" 添加账号 ")])],1),n("div",{staticClass:"body"},t._l(t.allAccounts,(function(e){var c=e.id,i=e.name;return n("div",{key:c,staticClass:"item is-active",class:{active:c===t.currentAccountId},on:{click:function(e){return t.changeAccount(c)}}},[n("click-edit-label",{staticStyle:{display:"inline-block"},attrs:{value:i,fontsize:"16px",editable:!0},on:{input:function(e){return t.handleChangeName(c,i,e)}}}),n("div",{staticClass:"buttons flex-row"},[n("el-popconfirm",{directives:[{name:"show",rawName:"v-show",value:c!==t.currentAccountId,expression:"id !== currentAccountId"}],attrs:{title:"确定删除？"},on:{confirm:function(e){return t.deleteAccount(c)}}},[n("el-button",{staticClass:"button",attrs:{slot:"reference",icon:"el-icon-delete",type:"text",size:"medium",circle:"",title:"删除"},on:{click:function(t){t.stopPropagation()}},slot:"reference"})],1)],1)],1)})),0)],1)},i=[],o=n(4367),a=n(26294),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("input",{style:t.inputStyle,attrs:{disabled:!t.editable},domProps:{value:t.value},on:{click:function(e){t.edit=!0},blur:t.onBlur}}),n("span",{staticClass:"border"})])},s=[],u=(n(78830),{name:"ClickEditLabel",props:{value:{},fontsize:{},editable:{default:!0}},data:function(){return{edit:!1}},methods:{onBlur:function(t){var e=t.target.value;this.edit=!1,this.$emit("input",e)}},computed:{inputStyle:function(){var t,e=null!==(t=this.fontsize)&&void 0!==t?t:"14px",n={fontSize:e};return n}}}),l=u,d=n(1001),f=(0,d.Z)(l,r,s,!1,null,"5263f0a4",null),p=f.exports,h={name:"AccountPage",components:{ClickEditLabel:p},created:function(){this.canCopy=!!navigator.clipboard},computed:(0,o.Z)({},(0,a.mapState)("accounts",["currentAccountId","allAccounts"])),methods:{addAccount:function(){this.$store.commit("accounts/addAccount",{name:"新账户"})},deleteAccount:function(t){var e=this.$loading({lock:!0,text:"删除账号中"});this.$store.dispatch("deleteAccount",{id:t}).then((function(){e.close()}))},changeAccount:function(t){if(t!==this.currentAccountId){var e=this.$loading({lock:!0,text:"切换账号中"});this.$store.dispatch("changeAccount",{id:t}).then((function(){e.close()}))}},handleChangeName:function(t,e,n){n!==e&&""!==n&&this.$store.commit("accounts/changeAccountName",{id:t,name:n})}}},m=h,v=(0,d.Z)(m,c,i,!1,null,"467847ec",null),b=v.exports}}]);