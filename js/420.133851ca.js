"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[420],{89415:function(t,e,i){i.d(e,{Z:function(){return u}});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"button-root",on:{click:function(e){return t.$emit("click")}}},[i("i",{class:[t.icon]})])},n=[],a={name:"MyButton1",props:{icon:{default:"el-icon-delete"}}},s=a,o=i(1001),c=(0,o.Z)(s,r,n,!1,null,"a232d95c",null),u=c.exports},98806:function(t,e,i){i.d(e,{Z:function(){return p}});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item br-3",on:{click:function(e){return t.$emit("click")}}},[i("div",{staticClass:"header"},[i("span",{staticClass:"fs-12"},[t._v(t._s(t.name))]),t.toolbar?i("div",{staticClass:"buttons flex-row"},[i("el-button",{staticClass:"button",attrs:{icon:"el-icon-delete",type:"text",size:"mini",circle:"",title:"删除"},on:{click:function(e){return e.stopPropagation(),t.$emit("delete")}}}),i("el-button",{staticClass:"button",attrs:{icon:"el-icon-download",type:"text",size:"mini",circle:"",title:"导出"},on:{click:function(e){return e.stopPropagation(),t.$emit("download")}}})],1):t._e()]),i("div",{staticClass:"body"},[i("div",{staticClass:"detail-div fs-12"},[i("img",{staticClass:"c-avatar br-50p",attrs:{src:t.characterAvatar}}),i("span",[t._v(t._s(t.characterChs))])]),i("div",{staticClass:"detail-div fs-12"},[i("img",{staticClass:"w-avatar br-50p",attrs:{src:t.weaponData.url}}),i("span",[t._v(t._s(t.weaponData.chs))])]),i("div",{staticClass:"detail-div fs-12"},[i("img",{staticClass:"tf-avatar br-50p",attrs:{src:t.tfData.badge}}),i("span",[t._v(t._s(t.tfData.chs))])])])])},n=[],a=i(12637),s=i(51775),o=i(43073),c={name:"PresetItem",props:{item:{type:Object,required:!0},name:{},toolbar:{type:Boolean,default:!0}},computed:{characterName(){return this.item.character.name},characterAvatar(){const t=a.O[this.characterName];return t.avatar},characterChs(){const t=a.O[this.characterName];return t.chs},weaponData(){return s.G[this.item.weapon.name]},tfData(){return o.F[this.item.targetFunction.name]}}},u=c,l=i(1001),m=(0,l.Z)(u,r,n,!1,null,"45729ab7",null),p=m.exports},63655:function(t,e,i){i.d(e,{Z:function(){return m}});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-select",{attrs:{value:t.value,placeholder:"角色",size:"small"},on:{input:function(e){return t.$emit("input",e)}}},t._l(t.characterByElement,(function(e,r){return i("el-option-group",{key:r,attrs:{label:t.element2Chs(r)}},t._l(e,(function(e){return i("el-option",{key:e.name,attrs:{label:e.chs,value:e.name}},[i("div",{staticClass:"option-item flex-row"},[i("img",{attrs:{src:e.avatar}}),i("span",{style:{color:t.getColor(e.star)}},[t._v(t._s(e.chs))])])])})),1)})),1)},n=[],a=i(12637),s=i(67817),o={name:"SelectCharacter",props:["value"],created(){this.characterByElement=a.S},methods:{element2Chs(t){switch(t){case"Pyro":return"火";case"Cryo":return"冰";case"Dendro":return"草";case"Electro":return"雷";case"Anemo":return"风";case"Geo":return"岩";case"Hydro":return"水"}},getColor(t){return s.Z[t-1]}}},c=o,u=i(1001),l=(0,u.Z)(c,r,n,!1,null,"4cbd13e6",null),m=l.exports},16746:function(t,e,i){i.d(e,{Z:function(){return m}});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-select",{attrs:{value:t.value,placeholder:"武器",size:"small"},on:{input:function(e){return t.$emit("input",e)}}},t._l(t.weaponList,(function(e){return i("el-option",{key:e.name,attrs:{value:e.name,label:e.chs}},[i("div",{staticClass:"option-item"},[i("img",{attrs:{src:e.url}}),i("span",{style:{color:t.getColor(e.star)}},[t._v(t._s(e.chs))])])])})),1)},n=[],a=i(51775),s=i(67817),o={name:"SelectWeapon",props:{type:{default:"Bow"},value:{}},computed:{weaponList(){return a.k[this.type]??[]}},methods:{getColor(t){return s.Z[t-1]}},watch:{type:function(t,e){const i=a.k[t][0],r=i.name;this.$emit("input",r)}}},c=o,u=i(1001),l=(0,u.Z)(c,r,n,!1,null,"246286f5",null),m=l.exports},96581:function(t,e,i){i.d(e,{Z:function(){return C}});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-row",{attrs:{type:"flex",justify:"space-between"}},[i("el-col",{attrs:{span:11}},[i("h3",{staticClass:"class"},[t._v("基础属性")]),i("attribute-item",{attrs:{title:"生命值",composition:t.attribute.hp}}),i("attribute-item",{attrs:{title:"攻击力",composition:t.attribute.atk}}),i("attribute-item",{attrs:{title:"防御力",composition:t.attribute.def}}),i("attribute-item",{attrs:{title:"元素精通",composition:t.attribute.elemental_mastery}}),i("h3",{staticClass:"class"},[t._v("进阶属性")]),i("attribute-item",{attrs:{title:"暴击率",composition:t.attribute.critical,percentage:!0}}),i("attribute-item",{attrs:{title:"暴击伤害",composition:t.attribute.critical_damage,percentage:!0}}),i("attribute-item",{attrs:{title:"治疗加成",composition:t.attribute.healing_bonus,percentage:!0}}),i("attribute-item",{attrs:{title:"元素充能效率",composition:t.attribute.recharge,percentage:!0}}),i("attribute-item",{attrs:{title:"护盾强效",composition:t.attribute.shield_strength,percentage:!0}})],1),i("el-col",{attrs:{span:11}},[i("h3",{staticClass:"class"},[t._v("元素属性")]),i("attribute-item",{attrs:{title:"火元素伤害加成",composition:t.attribute.bonus_pyro,percentage:!0}}),i("attribute-item",{attrs:{title:"水元素伤害加成",composition:t.attribute.bonus_hydro,percentage:!0}}),i("attribute-item",{attrs:{title:"草元素伤害加成",composition:t.attribute.bonus_dendro,percentage:!0}}),i("attribute-item",{attrs:{title:"雷元素伤害加成",composition:t.attribute.bonus_electro,percentage:!0}}),i("attribute-item",{attrs:{title:"风元素伤害加成",composition:t.attribute.bonus_anemo,percentage:!0}}),i("attribute-item",{attrs:{title:"冰元素伤害加成",composition:t.attribute.bonus_cryo,percentage:!0}}),i("attribute-item",{attrs:{title:"岩元素伤害加成",composition:t.attribute.bonus_geo,percentage:!0}}),i("attribute-item",{attrs:{title:"物理伤害加成",composition:t.attribute.bonus_physical,percentage:!0}})],1)],1)],1)},n=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"attribute-item"},[i("el-tooltip",[i("span",{staticClass:"title"},[t._v(t._s(t.title))]),i("div",{attrs:{slot:"content"},slot:"content"},[i("attribute-composition",{attrs:{composition:t.composition}})],1)]),i("span",{staticClass:"value"},[t._v(t._s(t.displayValue))])],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.list.length>0?t._l(t.list,(function(e){return i("div",{key:e.name,staticClass:"item"},[i("span",[t._v(t._s(e.name))]),i("span",[t._v(t._s(e.value.toFixed(3)))])])})):i("div",{staticClass:"no-item",staticStyle:{padding:"8px"}},[t._v(" 无加成 ")])],2)},c=[],u={name:"AttributeComposition",props:["composition"],computed:{list(){let t=[];for(const e in this.composition)t.push({name:e,value:this.composition[e]});return t.sort(((t,e)=>t.name.localeCompare(e.name))),t}}},l=u,m=i(1001),p=(0,m.Z)(l,o,c,!1,null,"a1776db8",null),f=p.exports,d={name:"AttributeItem",components:{AttributeComposition:f},props:{composition:{},title:{},percentage:{default:!1}},computed:{sum(){let t=0;for(const e in this.composition)t+=this.composition[e];return t},displayValue(){return this.percentage?`${(100*this.sum).toFixed(1)}%`:Math.round(this.sum)}}},h=d,b=(0,m.Z)(h,a,s,!1,null,"4722bde2",null),v=b.exports,_={name:"AttributePanel",components:{AttributeItem:v},props:{attribute:{type:Object}},methods:{mul100(t){return(100*this.attribute[t]).toFixed(1)+"%"}},computed:{attack(){let t=this.attribute;return t.attackStatic+t.attackBasic+t.attackPercentage},defend(){let t=this.attribute;return t.defendStatic+t.defendBasic+t.defendPercentage},life(){let t=this.attribute;return t.lifeStatic+t.lifeBasic+t.lifePercentage}}},g=_,k=(0,m.Z)(g,r,n,!1,null,"6a339b15",null),C=k.exports},42246:function(t,e,i){i.d(e,{At:function(){return f},Ee:function(){return m},GV:function(){return p},JN:function(){return v},O5:function(){return l},P$:function(){return h},UE:function(){return d},fF:function(){return _},j8:function(){return u},jq:function(){return o},wJ:function(){return g},ym:function(){return c}});var r=i(55138);function n(){let t=r.Z.getters["kumi/dirNames"];for(let e=0;e<100;e++){const i=`收藏夹${e}`;if(!t.has(i))return i}return`收藏夹${Math.floor(1e5*Math.random())}`}function a(t){const e=u(t);let i=new Set;for(let r of e)i.add(r.title);return i}function s(t){let e=a(t);for(let i=0;i<100;i++){const t=`圣遗物组${i}`;if(!e.has(t))return t}return`圣遗物组${Math.floor(1e5*Math.random())}`}function o(t){const e=t??n();r.Z.commit("kumi/newDir",{name:e})}function c(t){if(""===t||!t)return{error:!0,reason:"名称为空"};const e=r.Z.getters["kumi/dirNames"];return e.has(t)?{error:!0,reason:"名称已存在"}:{error:!1}}function u(t){const e=r.Z.getters["kumi/kumiByDir"][t];if(!e)return[];const i=r.Z.state.kumi.kumi;let n=[];for(let r of e)n.push(i[r]);return n}function l(t,e){if(""===e||!e)return{error:!0,reason:"名称为空"};let i=a(t);return i.has(e)?{error:!0,reason:"名称已存在"}:{error:!1}}function m(t,e){const i=e??s(t);r.Z.commit("kumi/newKumi",{artifactIds:[],title:i,dirId:t})}function p(t,e,i){r.Z.commit("kumi/newKumi",{artifactIds:i,title:e,dirId:t})}function f(t){r.Z.commit("kumi/deleteKumi",{id:t})}function d(t,e){r.Z.commit("kumi/renameItem",{id:t,name:e})}function h(t){r.Z.commit("kumi/deleteDir",{id:t})}function b(t){return r.Z.state.kumi.kumi[t]}function v(t,e){const i=r.Z.getters["artifacts/artifactsById"],n=i[e];if(!n)return;const a=n.position;let s=[e];const o=b(t);if(!o)return;const c=o.artifactIds??[];for(let r of c){const t=i[r];t&&t.position===a||s.push(r)}r.Z.commit("kumi/updateKumiArtifact",{artifactIds:s,kumiId:t})}function _(t,e){const i=b(t);if(!i)return;let n=i.artifactIds??[],a=n.indexOf(e);-1!==a&&n.splice(a,1),r.Z.commit("kumi/updateKumiArtifact",{artifactIds:n,kumiId:t})}function g(t){const e=b(t);if(!e)return[];let i=e.artifactIds??[],r=new Set;for(let n of i)r.add(n);return r}}}]);