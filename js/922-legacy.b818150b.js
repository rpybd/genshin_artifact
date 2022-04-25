"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[922],{89415:function(t,e,a){a.d(e,{Z:function(){return u}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"button-root",on:{click:function(e){return t.$emit("click")}}},[a("i",{class:[t.icon]})])},i=[],r={name:"MyButton1",props:{icon:{default:"el-icon-delete"}}},l=r,s=a(1001),o=(0,s.Z)(l,n,i,!1,null,"a232d95c",null),u=o.exports},77921:function(t,e,a){a.d(e,{Z:function(){return P}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"config-root",style:t.styleRoot},t._l(t.configs,(function(e){return a("ConfigItem",{key:e.name,staticClass:"config",attrs:{params:e,type:e.type,value:t.value2[e.name]},on:{input:function(a){return t.handleInput(e.name,a)}}})})),1)},i=[],r=a(23796),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"config-title"},[t._v(t._s(t.params.title))]),"float"===t.type?[a("el-slider",{attrs:{value:t.value,min:t.params.min,max:t.params.max,step:.1,"show-input":!0,"show-input-controls":!1,"input-size":"mini"},on:{input:t.handleChangeValue}})]:t._e(),"int"===t.type?[a("el-slider",{attrs:{value:t.value,min:t.params.min,max:t.params.max,step:1},on:{input:t.handleChangeValue}})]:t._e(),"intInput"===t.type?[a("el-input-number",{attrs:{size:"mini",value:t.value,min:t.params.min,max:t.params.max},on:{input:t.handleChangeValue}})]:t._e(),"bool"===t.type?[a("el-switch",{attrs:{value:t.value,"active-text":"是"},on:{input:t.handleChangeValue}})]:t._e(),"floatPercentageInput"===t.type?[a("el-input",{attrs:{value:t.value,size:"mini"},on:{input:t.handleInputValue}},[a("template",{slot:"append"},[t._v("%")])],2)]:t._e(),"floatInput"===t.type?[a("el-input",{attrs:{value:t.value,size:"mini"},on:{input:t.handleInputValue}})]:t._e(),"element4"===t.type?[a("select-element-type",{attrs:{value:t.value,elements:["Pyro","Cryo","Electro","Hydro"]},on:{input:t.handleChangeValue}})]:t._e(),"element8"===t.type?[a("select-element-type",{attrs:{value:t.value,elements:["Pyro","Cryo","Electro","Hydro","Anemo","Geo","Dendro","Physical"]},on:{input:t.handleChangeValue}})]:t._e(),"skill4"===t.type?[a("select-skill-type",{attrs:{value:t.value},on:{input:t.handleChangeValue}})]:t._e(),"option"===t.type?[a("el-radio-group",{attrs:{value:t.value,size:"small"},on:{input:t.handleChangeValue}},t._l(t.params.options,(function(e,n){return a("el-radio-button",{key:n,attrs:{label:n}},[t._v(t._s(e))])})),1)]:t._e()],2)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-radio-group",{attrs:{value:t.value,size:"small"},on:{input:function(e){return t.$emit("input",e)}}},[t.eleMap.has("Pyro")?a("el-radio-button",{attrs:{label:"Pyro"}},[t._v("火")]):t._e(),t.eleMap.has("Electro")?a("el-radio-button",{attrs:{label:"Electro"}},[t._v("雷")]):t._e(),t.eleMap.has("Hydro")?a("el-radio-button",{attrs:{label:"Hydro"}},[t._v("水")]):t._e(),t.eleMap.has("Anemo")?a("el-radio-button",{attrs:{label:"Anemo"}},[t._v("风")]):t._e(),t.eleMap.has("Geo")?a("el-radio-button",{attrs:{label:"Geo"}},[t._v("岩")]):t._e(),t.eleMap.has("Cryo")?a("el-radio-button",{attrs:{label:"Cryo"}},[t._v("冰")]):t._e(),t.eleMap.has("Dendro")?a("el-radio-button",{attrs:{label:"Dendro"}},[t._v("草")]):t._e(),t.eleMap.has("Physical")?a("el-radio-button",{attrs:{label:"Physical"}},[t._v("物理")]):t._e()],1)},u=[],c=a(62032),p=(a(41539),a(70189),a(78783),a(33948),{name:"SelectElementType",props:{value:{type:String,required:!0},elements:{default:function(){return["Pyro","Electro","Hydro","Anemo","Geo","Cryo","Dendro","Physical"]}}},computed:{eleMap:function(){var t,e=new Set,a=(0,c.Z)(this.elements);try{for(a.s();!(t=a.n()).done;){var n=t.value;e.add(n)}}catch(i){a.e(i)}finally{a.f()}return e}}}),m=p,d=a(1001),v=(0,d.Z)(m,o,u,!1,null,null,null),h=v.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-radio-group",{attrs:{value:t.value,size:"small"},on:{input:function(e){return t.$emit("input",e)}}},[a("el-radio-button",{attrs:{label:"NormalAttack"}},[t._v("普通攻击")]),a("el-radio-button",{attrs:{label:"ChargedAttack"}},[t._v("重击")]),a("el-radio-button",{attrs:{label:"ElementalSkill"}},[t._v("元素战技")]),a("el-radio-button",{attrs:{label:"ElementalBurst"}},[t._v("元素爆发")])],1)},b=[],_={name:"SelectSkillType",props:{value:{type:String,required:!0}}},y=_,g=(0,d.Z)(y,f,b,!1,null,null,null),C=g.exports,k={name:"ConfigItem",components:{SelectSkillType:C,SelectElementType:h},props:{value:{},type:{},params:{}},methods:{handleInputValue:function(t){var e=0;""===t?e=0:(e=parseFloat(t),isNaN(e)&&(e=0)),this.handleChangeValue(e)},handleChangeValue:function(t){this.$emit("input",t)}}},x=k,w=(0,d.Z)(x,l,s,!1,null,"078c787e",null),$=w.exports,E={name:"ItemConfig",components:{ConfigItem:$},props:{value:{},itemName:{},configs:{type:Array},bg:{default:"rgb(239, 246, 253)"},needItemName:{default:!0}},computed:{styleRoot:function(){return{backgroundColor:this.bg}},value2:function(){return this.needItemName?this.value[this.itemName]:this.value}},methods:{handleInput:function(t,e){if(this.needItemName){var a=Object.assign({},this.value[this.itemName]);a[t]=e,this.$emit("input",(0,r.Z)({},this.itemName,a))}else{var n=Object.assign({},this.value);n[t]=e,this.$emit("input",n)}}}},Z=E,S=(0,d.Z)(Z,n,i,!1,null,"c7a16bb0",null),P=S.exports},37632:function(t,e,a){a.d(e,{Z:function(){return m}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item br-3",on:{click:function(e){return t.$emit("click")}}},[a("div",{staticClass:"header"},[a("span",{staticClass:"fs-12"},[t._v(t._s(t.name))]),t.toolbar?a("div",{staticClass:"buttons flex-row"},[a("el-button",{staticClass:"button",attrs:{icon:"el-icon-delete",type:"text",size:"mini",circle:"",title:"删除"},on:{click:function(e){return e.stopPropagation(),t.$emit("delete")}}}),a("el-button",{staticClass:"button",attrs:{icon:"el-icon-download",type:"text",size:"mini",circle:"",title:"导出"},on:{click:function(e){return e.stopPropagation(),t.$emit("download")}}})],1):t._e()]),a("div",{staticClass:"body"},[a("div",{staticClass:"detail-div fs-12"},[a("img",{staticClass:"c-avatar br-50p",attrs:{src:t.characterAvatar}}),a("span",[t._v(t._s(t.characterChs))])]),a("div",{staticClass:"detail-div fs-12"},[a("img",{staticClass:"w-avatar br-50p",attrs:{src:t.weaponData.url}}),a("span",[t._v(t._s(t.weaponData.chs))])]),a("div",{staticClass:"detail-div fs-12"},[a("img",{staticClass:"tf-avatar br-50p",attrs:{src:t.tfData.badge}}),a("span",[t._v(t._s(t.tfData.chs))])])])])},i=[],r=(a(68309),a(12637)),l=a(51775),s=a(43073),o={name:"PresetItem",props:{item:{type:Object,required:!0},name:{},toolbar:{type:Boolean,default:!0}},computed:{characterName:function(){return this.item.character.name},characterAvatar:function(){var t=r.O[this.characterName];return t.avatar},characterChs:function(){var t=r.O[this.characterName];return t.chs},weaponData:function(){return l.G[this.item.weapon.name]},tfData:function(){return s.F[this.item.targetFunction.name]}}},u=o,c=a(1001),p=(0,c.Z)(u,n,i,!1,null,"49ba95be",null),m=p.exports},79699:function(t,e,a){a.d(e,{Z:function(){return m}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-cascader",{staticStyle:{width:"100%"},attrs:{value:t.value,options:t.options,props:{expandTrigger:"hover",emitPath:!1},placeholder:"角色","show-all-levels":!1,size:"small"},on:{change:function(e){return t.$emit("input",e)}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.node,i=e.data;return[n.isLeaf?a("div",{staticClass:"option-item flex-row"},[a("img",{attrs:{src:i.avatar}}),a("span",{style:{color:i.color}},[t._v(t._s(i.label))])]):a("div",[a("span",[t._v(t._s(i.label))])])]}}])})},i=[],r=(a(43371),a(21249),a(68309),a(12637)),l=a(67817),s=Object.freeze({Pyro:"火",Cryo:"冰",Dendro:"草",Electro:"雷",Anemo:"风",Geo:"岩",Hydro:"水"}),o={name:"SelectCharacter",props:["value"],computed:{options:function(){var t=[];for(var e in r.S)t.push({label:s[e],value:e,children:r.S[e].map((function(t){return{label:t.chs,value:t.name,avatar:t.avatar,color:l.Z[t.star-1]}}))});return t}}},u=o,c=a(1001),p=(0,c.Z)(u,n,i,!1,null,"3d409985",null),m=p.exports},16746:function(t,e,a){a.d(e,{Z:function(){return p}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-select",{attrs:{value:t.value,placeholder:"武器",size:"small"},on:{input:function(e){return t.$emit("input",e)}}},t._l(t.weaponList,(function(e){return a("el-option",{key:e.name,attrs:{value:e.name,label:e.chs}},[a("div",{staticClass:"option-item"},[a("img",{attrs:{src:e.url}}),a("span",{style:{color:t.getColor(e.star)}},[t._v(t._s(e.chs))])])])})),1)},i=[],r=(a(68309),a(51775)),l=a(67817),s={name:"SelectWeapon",props:{type:{default:"Bow"},value:{}},computed:{weaponList:function(){var t;return null!==(t=r.k[this.type])&&void 0!==t?t:[]}},methods:{getColor:function(t){return l.Z[t-1]}},watch:{type:function(t,e){var a=r.k[t][0],n=a.name;this.$emit("input",n)}}},o=s,u=a(1001),c=(0,u.Z)(o,n,i,!1,null,"246286f5",null),p=c.exports},96581:function(t,e,a){a.d(e,{Z:function(){return C}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:11}},[a("h3",{staticClass:"class"},[t._v("基础属性")]),a("attribute-item",{attrs:{title:"生命值",composition:t.attribute.hp}}),a("attribute-item",{attrs:{title:"攻击力",composition:t.attribute.atk}}),a("attribute-item",{attrs:{title:"防御力",composition:t.attribute.def}}),a("attribute-item",{attrs:{title:"元素精通",composition:t.attribute.elemental_mastery}}),a("h3",{staticClass:"class"},[t._v("进阶属性")]),a("attribute-item",{attrs:{title:"暴击率",composition:t.attribute.critical,percentage:!0}}),a("attribute-item",{attrs:{title:"暴击伤害",composition:t.attribute.critical_damage,percentage:!0}}),a("attribute-item",{attrs:{title:"治疗加成",composition:t.attribute.healing_bonus,percentage:!0}}),a("attribute-item",{attrs:{title:"元素充能效率",composition:t.attribute.recharge,percentage:!0}}),a("attribute-item",{attrs:{title:"护盾强效",composition:t.attribute.shield_strength,percentage:!0}})],1),a("el-col",{attrs:{span:11}},[a("h3",{staticClass:"class"},[t._v("元素属性")]),a("attribute-item",{attrs:{title:"火元素伤害加成",composition:t.attribute.bonus_pyro,percentage:!0}}),a("attribute-item",{attrs:{title:"水元素伤害加成",composition:t.attribute.bonus_hydro,percentage:!0}}),a("attribute-item",{attrs:{title:"草元素伤害加成",composition:t.attribute.bonus_dendro,percentage:!0}}),a("attribute-item",{attrs:{title:"雷元素伤害加成",composition:t.attribute.bonus_electro,percentage:!0}}),a("attribute-item",{attrs:{title:"风元素伤害加成",composition:t.attribute.bonus_anemo,percentage:!0}}),a("attribute-item",{attrs:{title:"冰元素伤害加成",composition:t.attribute.bonus_cryo,percentage:!0}}),a("attribute-item",{attrs:{title:"岩元素伤害加成",composition:t.attribute.bonus_geo,percentage:!0}}),a("attribute-item",{attrs:{title:"物理伤害加成",composition:t.attribute.bonus_physical,percentage:!0}})],1)],1)],1)},i=[],r=(a(56977),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"attribute-item"},[a("el-tooltip",[a("span",{staticClass:"title"},[t._v(t._s(t.title))]),a("div",{attrs:{slot:"content"},slot:"content"},[a("attribute-composition",{attrs:{composition:t.composition}})],1)]),a("span",{staticClass:"value"},[t._v(t._s(t.displayValue))])],1)}),l=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.list.length>0?t._l(t.list,(function(e){return a("div",{key:e.name,staticClass:"item"},[a("span",[t._v(t._s(e.name))]),a("span",[t._v(t._s(e.value.toFixed(3)))])])})):a("div",{staticClass:"no-item",staticStyle:{padding:"8px"}},[t._v(" 无加成 ")])],2)},o=[],u=(a(2707),a(68309),{name:"AttributeComposition",props:["composition"],computed:{list:function(){var t=[];for(var e in this.composition)t.push({name:e,value:this.composition[e]});return t.sort((function(t,e){return t.name.localeCompare(e.name)})),t}}}),c=u,p=a(1001),m=(0,p.Z)(c,s,o,!1,null,"a1776db8",null),d=m.exports,v={name:"AttributeItem",components:{AttributeComposition:d},props:{composition:{},title:{},percentage:{default:!1}},computed:{sum:function(){var t=0;for(var e in this.composition)t+=this.composition[e];return t},displayValue:function(){return this.percentage?"".concat((100*this.sum).toFixed(1),"%"):Math.round(this.sum)}}},h=v,f=(0,p.Z)(h,r,l,!1,null,"4722bde2",null),b=f.exports,_={name:"AttributePanel",components:{AttributeItem:b},props:{attribute:{type:Object}},methods:{mul100:function(t){return(100*this.attribute[t]).toFixed(1)+"%"}},computed:{attack:function(){var t=this.attribute;return t.attackStatic+t.attackBasic+t.attackPercentage},defend:function(){var t=this.attribute;return t.defendStatic+t.defendBasic+t.defendPercentage},life:function(){var t=this.attribute;return t.lifeStatic+t.lifeBasic+t.lifePercentage}}},y=_,g=(0,p.Z)(y,n,i,!1,null,"6a339b15",null),C=g.exports}}]);