"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[648],{77921:function(e,t,a){a.d(t,{Z:function(){return B}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"config-root",style:e.styleRoot},e._l(e.configs,(function(t){return a("ConfigItem",{key:t.name,staticClass:"config",attrs:{params:t,type:t.type,value:e.value2[t.name]},on:{input:function(a){return e.handleInput(t.name,a)}}})})),1)},i=[],l=a(23796),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{staticClass:"config-title"},[e._v(e._s(e.params.title))]),"float"===e.type?[a("el-slider",{attrs:{value:e.value,min:e.params.min,max:e.params.max,step:.1,"show-input":!0,"show-input-controls":!1,"input-size":"mini"},on:{input:e.handleChangeValue}})]:e._e(),"int"===e.type?[a("el-slider",{attrs:{value:e.value,min:e.params.min,max:e.params.max,step:1},on:{input:e.handleChangeValue}})]:e._e(),"intInput"===e.type?[a("el-input-number",{attrs:{size:"mini",value:e.value,min:e.params.min,max:e.params.max},on:{input:e.handleChangeValue}})]:e._e(),"bool"===e.type?[a("el-switch",{attrs:{value:e.value,"active-text":"是"},on:{input:e.handleChangeValue}})]:e._e(),"floatPercentageInput"===e.type?[a("el-input",{attrs:{value:e.value,size:"mini"},on:{input:e.handleInputValue}},[a("template",{slot:"append"},[e._v("%")])],2)]:e._e(),"floatInput"===e.type?[a("el-input",{attrs:{value:e.value,size:"mini"},on:{input:e.handleInputValue}})]:e._e(),"element4"===e.type?[a("select-element-type",{attrs:{value:e.value,elements:["Pyro","Cryo","Electro","Hydro"]},on:{input:e.handleChangeValue}})]:e._e(),"element8"===e.type?[a("select-element-type",{attrs:{value:e.value,elements:["Pyro","Cryo","Electro","Hydro","Anemo","Geo","Dendro","Physical"]},on:{input:e.handleChangeValue}})]:e._e(),"skill4"===e.type?[a("select-skill-type",{attrs:{value:e.value},on:{input:e.handleChangeValue}})]:e._e(),"option"===e.type?[a("el-radio-group",{attrs:{value:e.value,size:"small"},on:{input:e.handleChangeValue}},e._l(e.params.options,(function(t,n){return a("el-radio-button",{key:n,attrs:{label:n}},[e._v(e._s(t))])})),1)]:e._e()],2)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-radio-group",{attrs:{value:e.value,size:"small"},on:{input:function(t){return e.$emit("input",t)}}},[e.eleMap.has("Pyro")?a("el-radio-button",{attrs:{label:"Pyro"}},[e._v("火")]):e._e(),e.eleMap.has("Electro")?a("el-radio-button",{attrs:{label:"Electro"}},[e._v("雷")]):e._e(),e.eleMap.has("Hydro")?a("el-radio-button",{attrs:{label:"Hydro"}},[e._v("水")]):e._e(),e.eleMap.has("Anemo")?a("el-radio-button",{attrs:{label:"Anemo"}},[e._v("风")]):e._e(),e.eleMap.has("Geo")?a("el-radio-button",{attrs:{label:"Geo"}},[e._v("岩")]):e._e(),e.eleMap.has("Cryo")?a("el-radio-button",{attrs:{label:"Cryo"}},[e._v("冰")]):e._e(),e.eleMap.has("Dendro")?a("el-radio-button",{attrs:{label:"Dendro"}},[e._v("草")]):e._e(),e.eleMap.has("Physical")?a("el-radio-button",{attrs:{label:"Physical"}},[e._v("物理")]):e._e()],1)},u=[],c=a(62032),m=(a(41539),a(70189),a(78783),a(33948),{name:"SelectElementType",props:{value:{type:String,required:!0},elements:{default:function(){return["Pyro","Electro","Hydro","Anemo","Geo","Cryo","Dendro","Physical"]}}},computed:{eleMap:function(){var e,t=new Set,a=(0,c.Z)(this.elements);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.add(n)}}catch(i){a.e(i)}finally{a.f()}return t}}}),p=m,d=a(1001),f=(0,d.Z)(p,o,u,!1,null,null,null),v=f.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-radio-group",{attrs:{value:e.value,size:"small"},on:{input:function(t){return e.$emit("input",t)}}},[a("el-radio-button",{attrs:{label:"NormalAttack"}},[e._v("普通攻击")]),a("el-radio-button",{attrs:{label:"ChargedAttack"}},[e._v("重击")]),a("el-radio-button",{attrs:{label:"ElementalSkill"}},[e._v("元素战技")]),a("el-radio-button",{attrs:{label:"ElementalBurst"}},[e._v("元素爆发")])],1)},g=[],y={name:"SelectSkillType",props:{value:{type:String,required:!0}}},b=y,_=(0,d.Z)(b,h,g,!1,null,null,null),k=_.exports,C={name:"ConfigItem",components:{SelectSkillType:k,SelectElementType:v},props:{value:{},type:{},params:{}},methods:{handleInputValue:function(e){var t=0;""===e?t=0:(t=parseFloat(e),isNaN(t)&&(t=0)),this.handleChangeValue(t)},handleChangeValue:function(e){this.$emit("input",e)}}},x=C,P=(0,d.Z)(x,r,s,!1,null,"078c787e",null),S=P.exports,w={name:"ItemConfig",components:{ConfigItem:S},props:{value:{},itemName:{},configs:{type:Array},bg:{default:"rgb(239, 246, 253)"},needItemName:{default:!0}},computed:{styleRoot:function(){return{backgroundColor:this.bg}},value2:function(){return this.needItemName?this.value[this.itemName]:this.value}},methods:{handleInput:function(e,t){if(this.needItemName){var a=Object.assign({},this.value[this.itemName]);a[e]=t,this.$emit("input",(0,l.Z)({},this.itemName,a))}else{var n=Object.assign({},this.value);n[e]=t,this.$emit("input",n)}}}},N=w,I=(0,d.Z)(N,n,i,!1,null,"c7a16bb0",null),B=I.exports},24044:function(e,t,a){a.d(t,{Z:function(){return d}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"artifact",class:{selectable:e.selectable,omit:e.item.omit},style:e.artifactStyle,on:{click:e.handleClick}},[a("div",{staticClass:"up"},[e.showBack?a("div",{staticClass:"back",style:{width:100*e.backValue+"%"}}):e._e(),a("span",{staticClass:"name"},[e._v(" "+e._s(e.displayedTitle)+" ")]),e.buttons?a("div",{staticClass:"buttons"},[e.lockButton?a("el-button",{staticClass:"mybutton",attrs:{icon:e.item.omit?"el-icon-unlock":"el-icon-lock",circle:"",size:"mini",type:"text",title:e.item.omit?"启用":"禁用"},on:{click:function(t){return t.stopPropagation(),e.$emit("toggle")}}}):e._e(),e.deleteButton?a("el-button",{staticClass:"mybutton",attrs:{icon:"el-icon-delete",circle:"",size:"mini",type:"text",title:"删除"},on:{click:function(t){return t.stopPropagation(),e.$emit("delete")}}}):e._e(),e.editButton?a("el-button",{staticClass:"mybutton",attrs:{icon:"el-icon-edit",circle:"",size:"mini",type:"text",title:"编辑"},on:{click:function(t){return t.stopPropagation(),e.$emit("edit")}}}):e._e()],1):e._e(),e.extra?a("span",{staticClass:"extra fs-12"},[e._v(e._s(e.extra))]):e._e()]),a("div",{staticClass:"down"},[a("div",[a("img",{staticClass:"myimage",style:{background:e.imageBackground},attrs:{src:e.imageSrc}})]),a("div",{staticClass:"detail-div"},[a("p",{staticClass:"main-tag"},[e._v(e._s(e.mainDisplayTag))]),e._l(e.secTags,(function(t,n){return a("p",{key:n,staticClass:"sec-tag"},[e._v(" "+e._s(t)+" ")])}))],2)])])},i=[],l=a(62032),r=(a(68309),a(4222)),s=a(36110),o=a(67817),u={name:"ArtifactDisplay",props:{item:{type:Object,default:function(){return{setName:"luckyDog",position:"cup",mainTag:{name:"attackPercentage",value:.1},normalTags:[{name:"defendStatic",value:20},{name:"attackPercentage",value:.3},{name:"attackPercentage",value:.3},{name:"attackPercentage",value:.3}],omit:!1}}},selectable:{type:Boolean,default:!1},extra:{type:String,default:""},buttons:{default:!1},deleteButton:{default:!1},lockButton:{default:!0},editButton:{default:!1},showBack:{default:!1},backValue:{default:1}},methods:{handleClick:function(){this.selectable&&this.$emit("click")}},computed:{displayedTitle:function(){var e=s.oN[this.item.setName];if(!e)throw"no artifact";var t="not exist";return e[this.item.position]&&(t=e[this.item.position].chs,Object.prototype.hasOwnProperty.call(this.item,"level")?t+="+"+this.item.level:t+="+??"),t},displayedStar:function(){return this.item.star||"??"},imageSrc:function(){var e=s.oN[this.item.setName];if(!e)throw"no artifact";if(e[this.item.position])return e[this.item.position].url;throw"error no position"},mainDisplayTag:function(){return(0,r.jH)(this.item.mainTag.name,this.item.mainTag.value)},secTags:function(){var e,t=[],a=(0,l.Z)(this.item.normalTags);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.push((0,r.jH)(n.name,n.value))}}catch(i){a.e(i)}finally{a.f()}return t},imageBackground:function(){var e,t=null!==(e=this.item.star)&&void 0!==e?e:5;return o.Z[t-1]},artifactStyle:function(){return{}}}},c=u,m=a(1001),p=(0,m.Z)(c,n,i,!1,null,"489aa8da",null),d=p.exports},67817:function(e,t){t["Z"]=["rgb(125,127,131)","rgb(108,168,139)","rgb(86,155,175)","rgb(177,135,195)","rgb(211,159,81)"]},4222:function(e,t,a){a.d(t,{F_:function(){return u},Lk:function(){return s},MI:function(){return o},jH:function(){return l},ut:function(){return r}});a(56977),a(47042);var n=a(98017),i=a(36110);function l(e,t){var a=n.vB[e];if(!a)throw"tag name not exist";var i="";switch(e){case"attackPercentage":case"attackStatic":i="攻击力";break;case"lifePercentage":case"lifeStatic":i="生命值";break;case"defendPercentage":case"defendStatic":i="防御力";break;default:i=a.chs;break}if(a.percentage){var l=(100*t).toFixed(1);return i+"+"+l+"%"}return i+"+"+t}function r(e,t){var a=n.vB[e];if(!a)throw"tag name not exist";return a.percentage?(100*t).toFixed(1):t}function s(e){var t=i.oN[e];return t["flower"]?t["flower"].url:t["head"].url}function o(e,t){var a=parseFloat(t);return n.vB[e].percentage?a/100:a}function u(e,t){return i.oN[e][t].chs}}}]);