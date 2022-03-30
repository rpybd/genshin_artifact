"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[420],{89415:function(t,e,i){i.d(e,{Z:function(){return u}});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"button-root",on:{click:function(e){return t.$emit("click")}}},[i("i",{class:[t.icon]})])},n=[],a={name:"MyButton1",props:{icon:{default:"el-icon-delete"}}},o=a,s=i(1001),c=(0,s.Z)(o,r,n,!1,null,"a232d95c",null),u=c.exports},98806:function(t,e,i){i.d(e,{Z:function(){return f}});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item br-3",on:{click:function(e){return t.$emit("click")}}},[i("div",{staticClass:"header"},[i("span",{staticClass:"fs-12"},[t._v(t._s(t.name))]),t.toolbar?i("div",{staticClass:"buttons flex-row"},[i("el-button",{staticClass:"button",attrs:{icon:"el-icon-delete",type:"text",size:"mini",circle:"",title:"删除"},on:{click:function(e){return e.stopPropagation(),t.$emit("delete")}}}),i("el-button",{staticClass:"button",attrs:{icon:"el-icon-download",type:"text",size:"mini",circle:"",title:"导出"},on:{click:function(e){return e.stopPropagation(),t.$emit("download")}}})],1):t._e()]),i("div",{staticClass:"body"},[i("div",{staticClass:"detail-div fs-12"},[i("img",{staticClass:"c-avatar br-50p",attrs:{src:t.characterAvatar}}),i("span",[t._v(t._s(t.characterChs))])]),i("div",{staticClass:"detail-div fs-12"},[i("img",{staticClass:"w-avatar br-50p",attrs:{src:t.weaponData.url}}),i("span",[t._v(t._s(t.weaponData.chs))])]),i("div",{staticClass:"detail-div fs-12"},[i("img",{staticClass:"tf-avatar br-50p",attrs:{src:t.tfData.badge}}),i("span",[t._v(t._s(t.tfData.chs))])])])])},n=[],a=(i(68309),i(12637)),o=i(51775),s=i(43073),c={name:"PresetItem",props:{item:{type:Object,required:!0},name:{},toolbar:{type:Boolean,default:!0}},computed:{characterName:function(){return this.item.character.name},characterAvatar:function(){var t=a.O[this.characterName];return t.avatar},characterChs:function(){var t=a.O[this.characterName];return t.chs},weaponData:function(){return o.G[this.item.weapon.name]},tfData:function(){return s.F[this.item.targetFunction.name]}}},u=c,l=i(1001),m=(0,l.Z)(u,r,n,!1,null,"45729ab7",null),f=m.exports},63655:function(t,e,i){i.d(e,{Z:function(){return m}});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-select",{attrs:{value:t.value,placeholder:"角色",size:"small"},on:{input:function(e){return t.$emit("input",e)}}},t._l(t.characterByElement,(function(e,r){return i("el-option-group",{key:r,attrs:{label:t.element2Chs(r)}},t._l(e,(function(e){return i("el-option",{key:e.name,attrs:{label:e.chs,value:e.name}},[i("div",{staticClass:"option-item flex-row"},[i("img",{attrs:{src:e.avatar}}),i("span",{style:{color:t.getColor(e.star)}},[t._v(t._s(e.chs))])])])})),1)})),1)},n=[],a=i(12637),o=i(67817),s={name:"SelectCharacter",props:["value"],created:function(){this.characterByElement=a.S},methods:{element2Chs:function(t){switch(t){case"Pyro":return"火";case"Cryo":return"冰";case"Dendro":return"草";case"Electro":return"雷";case"Anemo":return"风";case"Geo":return"岩";case"Hydro":return"水"}},getColor:function(t){return o.Z[t-1]}}},c=s,u=i(1001),l=(0,u.Z)(c,r,n,!1,null,"4cbd13e6",null),m=l.exports},16746:function(t,e,i){i.d(e,{Z:function(){return m}});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-select",{attrs:{value:t.value,placeholder:"武器",size:"small"},on:{input:function(e){return t.$emit("input",e)}}},t._l(t.weaponList,(function(e){return i("el-option",{key:e.name,attrs:{value:e.name,label:e.chs}},[i("div",{staticClass:"option-item"},[i("img",{attrs:{src:e.url}}),i("span",{style:{color:t.getColor(e.star)}},[t._v(t._s(e.chs))])])])})),1)},n=[],a=(i(68309),i(51775)),o=i(67817),s={name:"SelectWeapon",props:{type:{default:"Bow"},value:{}},computed:{weaponList:function(){var t;return null!==(t=a.k[this.type])&&void 0!==t?t:[]}},methods:{getColor:function(t){return o.Z[t-1]}},watch:{type:function(t,e){var i=a.k[t][0],r=i.name;this.$emit("input",r)}}},c=s,u=i(1001),l=(0,u.Z)(c,r,n,!1,null,"246286f5",null),m=l.exports},96581:function(t,e,i){i.d(e,{Z:function(){return k}});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-row",{attrs:{type:"flex",justify:"space-between"}},[i("el-col",{attrs:{span:11}},[i("h3",{staticClass:"class"},[t._v("基础属性")]),i("attribute-item",{attrs:{title:"生命值",composition:t.attribute.hp}}),i("attribute-item",{attrs:{title:"攻击力",composition:t.attribute.atk}}),i("attribute-item",{attrs:{title:"防御力",composition:t.attribute.def}}),i("attribute-item",{attrs:{title:"元素精通",composition:t.attribute.elemental_mastery}}),i("h3",{staticClass:"class"},[t._v("进阶属性")]),i("attribute-item",{attrs:{title:"暴击率",composition:t.attribute.critical,percentage:!0}}),i("attribute-item",{attrs:{title:"暴击伤害",composition:t.attribute.critical_damage,percentage:!0}}),i("attribute-item",{attrs:{title:"治疗加成",composition:t.attribute.healing_bonus,percentage:!0}}),i("attribute-item",{attrs:{title:"元素充能效率",composition:t.attribute.recharge,percentage:!0}}),i("attribute-item",{attrs:{title:"护盾强效",composition:t.attribute.shield_strength,percentage:!0}})],1),i("el-col",{attrs:{span:11}},[i("h3",{staticClass:"class"},[t._v("元素属性")]),i("attribute-item",{attrs:{title:"火元素伤害加成",composition:t.attribute.bonus_pyro,percentage:!0}}),i("attribute-item",{attrs:{title:"水元素伤害加成",composition:t.attribute.bonus_hydro,percentage:!0}}),i("attribute-item",{attrs:{title:"草元素伤害加成",composition:t.attribute.bonus_dendro,percentage:!0}}),i("attribute-item",{attrs:{title:"雷元素伤害加成",composition:t.attribute.bonus_electro,percentage:!0}}),i("attribute-item",{attrs:{title:"风元素伤害加成",composition:t.attribute.bonus_anemo,percentage:!0}}),i("attribute-item",{attrs:{title:"冰元素伤害加成",composition:t.attribute.bonus_cryo,percentage:!0}}),i("attribute-item",{attrs:{title:"岩元素伤害加成",composition:t.attribute.bonus_geo,percentage:!0}}),i("attribute-item",{attrs:{title:"物理伤害加成",composition:t.attribute.bonus_physical,percentage:!0}})],1)],1)],1)},n=[],a=(i(56977),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"attribute-item"},[i("el-tooltip",[i("span",{staticClass:"title"},[t._v(t._s(t.title))]),i("div",{attrs:{slot:"content"},slot:"content"},[i("attribute-composition",{attrs:{composition:t.composition}})],1)]),i("span",{staticClass:"value"},[t._v(t._s(t.displayValue))])],1)}),o=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.list.length>0?t._l(t.list,(function(e){return i("div",{key:e.name,staticClass:"item"},[i("span",[t._v(t._s(e.name))]),i("span",[t._v(t._s(e.value.toFixed(3)))])])})):i("div",{staticClass:"no-item",staticStyle:{padding:"8px"}},[t._v(" 无加成 ")])],2)},c=[],u=(i(2707),i(68309),{name:"AttributeComposition",props:["composition"],computed:{list:function(){var t=[];for(var e in this.composition)t.push({name:e,value:this.composition[e]});return t.sort((function(t,e){return t.name.localeCompare(e.name)})),t}}}),l=u,m=i(1001),f=(0,m.Z)(l,s,c,!1,null,"a1776db8",null),p=f.exports,d={name:"AttributeItem",components:{AttributeComposition:p},props:{composition:{},title:{},percentage:{default:!1}},computed:{sum:function(){var t=0;for(var e in this.composition)t+=this.composition[e];return t},displayValue:function(){return this.percentage?"".concat((100*this.sum).toFixed(1),"%"):Math.round(this.sum)}}},v=d,h=(0,m.Z)(v,a,o,!1,null,"4722bde2",null),b=h.exports,_={name:"AttributePanel",components:{AttributeItem:b},props:{attribute:{type:Object}},methods:{mul100:function(t){return(100*this.attribute[t]).toFixed(1)+"%"}},computed:{attack:function(){var t=this.attribute;return t.attackStatic+t.attackBasic+t.attackPercentage},defend:function(){var t=this.attribute;return t.defendStatic+t.defendBasic+t.defendPercentage},life:function(){var t=this.attribute;return t.lifeStatic+t.lifeBasic+t.lifePercentage}}},g=_,y=(0,m.Z)(g,r,n,!1,null,"6a339b15",null),k=y.exports},42246:function(t,e,i){i.d(e,{At:function(){return d},Ee:function(){return f},GV:function(){return p},JN:function(){return _},O5:function(){return m},P$:function(){return h},UE:function(){return v},fF:function(){return g},j8:function(){return l},jq:function(){return c},wJ:function(){return y},ym:function(){return u}});var r=i(62032),n=(i(41539),i(70189),i(78783),i(33948),i(40561),i(55138));function a(){for(var t=n.Z.getters["kumi/dirNames"],e=0;e<100;e++){var i="收藏夹".concat(e);if(!t.has(i))return i}return"收藏夹".concat(Math.floor(1e5*Math.random()))}function o(t){var e,i=l(t),n=new Set,a=(0,r.Z)(i);try{for(a.s();!(e=a.n()).done;){var o=e.value;n.add(o.title)}}catch(s){a.e(s)}finally{a.f()}return n}function s(t){for(var e=o(t),i=0;i<100;i++){var r="圣遗物组".concat(i);if(!e.has(r))return r}return"圣遗物组".concat(Math.floor(1e5*Math.random()))}function c(t){var e=null!==t&&void 0!==t?t:a();n.Z.commit("kumi/newDir",{name:e})}function u(t){if(""===t||!t)return{error:!0,reason:"名称为空"};var e=n.Z.getters["kumi/dirNames"];return e.has(t)?{error:!0,reason:"名称已存在"}:{error:!1}}function l(t){var e=n.Z.getters["kumi/kumiByDir"][t];if(!e)return[];var i,a=n.Z.state.kumi.kumi,o=[],s=(0,r.Z)(e);try{for(s.s();!(i=s.n()).done;){var c=i.value;o.push(a[c])}}catch(u){s.e(u)}finally{s.f()}return o}function m(t,e){if(""===e||!e)return{error:!0,reason:"名称为空"};var i=o(t);return i.has(e)?{error:!0,reason:"名称已存在"}:{error:!1}}function f(t,e){var i=null!==e&&void 0!==e?e:s(t);n.Z.commit("kumi/newKumi",{artifactIds:[],title:i,dirId:t})}function p(t,e,i){n.Z.commit("kumi/newKumi",{artifactIds:i,title:e,dirId:t})}function d(t){n.Z.commit("kumi/deleteKumi",{id:t})}function v(t,e){n.Z.commit("kumi/renameItem",{id:t,name:e})}function h(t){n.Z.commit("kumi/deleteDir",{id:t})}function b(t){return n.Z.state.kumi.kumi[t]}function _(t,e){var i,a=n.Z.getters["artifacts/artifactsById"],o=a[e];if(o){var s=o.position,c=[e],u=b(t);if(u){var l,m=null!==(i=u.artifactIds)&&void 0!==i?i:[],f=(0,r.Z)(m);try{for(f.s();!(l=f.n()).done;){var p=l.value,d=a[p];d&&d.position===s||c.push(p)}}catch(v){f.e(v)}finally{f.f()}n.Z.commit("kumi/updateKumiArtifact",{artifactIds:c,kumiId:t})}}}function g(t,e){var i,r=b(t);if(r){var a=null!==(i=r.artifactIds)&&void 0!==i?i:[],o=a.indexOf(e);-1!==o&&a.splice(o,1),n.Z.commit("kumi/updateKumiArtifact",{artifactIds:a,kumiId:t})}}function y(t){var e,i=b(t);if(!i)return[];var n,a=null!==(e=i.artifactIds)&&void 0!==e?e:[],o=new Set,s=(0,r.Z)(a);try{for(s.s();!(n=s.n()).done;){var c=n.value;o.add(c)}}catch(u){s.e(u)}finally{s.f()}return o}}}]);