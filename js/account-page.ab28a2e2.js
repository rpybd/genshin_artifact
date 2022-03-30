"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[195],{22633:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-breadcrumb",[n("el-breadcrumb-item",[t._v("账号")])],1),n("el-divider"),n("div",{staticClass:"toolbar"},[n("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:t.addAccount}},[t._v(" 添加账号 ")])],1),n("div",{staticClass:"body"},t._l(t.allAccounts,(function(e){var c=e.id,i=e.name;return n("div",{key:c,staticClass:"item is-active",class:{active:c===t.currentAccountId},on:{click:function(e){return t.changeAccount(c)}}},[n("click-edit-label",{staticStyle:{display:"inline-block"},attrs:{value:i,fontsize:"16px",editable:!0},on:{input:function(e){return t.handleChangeName(c,i,e)}}}),n("div",{staticClass:"buttons flex-row"},[n("el-popconfirm",{directives:[{name:"show",rawName:"v-show",value:c!==t.currentAccountId,expression:"id !== currentAccountId"}],attrs:{title:"确定删除？"},on:{confirm:function(e){return t.deleteAccount(c)}}},[n("el-button",{staticClass:"button",attrs:{slot:"reference",icon:"el-icon-delete",type:"text",size:"medium",circle:"",title:"删除"},on:{click:function(t){t.stopPropagation()}},slot:"reference"})],1)],1)],1)})),0)],1)},i=[],a=n(26294),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("input",{style:t.inputStyle,attrs:{disabled:!t.editable},domProps:{value:t.value},on:{click:function(e){t.edit=!0},blur:t.onBlur}}),n("span",{staticClass:"border"})])},s=[],l={name:"ClickEditLabel",props:{value:{},fontsize:{},editable:{default:!0}},data(){return{edit:!1}},methods:{onBlur(t){let e=t.target.value;this.edit=!1,this.$emit("input",e)}},computed:{inputStyle(){let t=this.fontsize??"14px",e={fontSize:t};return e}}},r=l,u=n(1001),d=(0,u.Z)(r,o,s,!1,null,"5263f0a4",null),h=d.exports,m={name:"AccountPage",components:{ClickEditLabel:h},created(){this.canCopy=!!navigator.clipboard},computed:{...(0,a.mapState)("accounts",["currentAccountId","allAccounts"])},methods:{addAccount(){this.$store.commit("accounts/addAccount",{name:"新账户"})},deleteAccount(t){const e=this.$loading({lock:!0,text:"删除账号中"});this.$store.dispatch("deleteAccount",{id:t}).then((()=>{e.close()}))},changeAccount(t){if(t===this.currentAccountId)return;const e=this.$loading({lock:!0,text:"切换账号中"});this.$store.dispatch("changeAccount",{id:t}).then((()=>{e.close()}))},handleChangeName(t,e,n){n!==e&&""!==n&&this.$store.commit("accounts/changeAccountName",{id:t,name:n})}}},p=m,f=(0,u.Z)(p,c,i,!1,null,"467847ec",null),v=f.exports}}]);