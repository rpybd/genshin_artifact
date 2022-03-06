(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[26],{58805:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"buff-config-item"},[n("p",{staticClass:"buff-config-title"},[e._v(e._s(e.title))]),n("el-input",{attrs:{value:e.value,size:"mini"},on:{input:function(t){return e.$emit("input",t)}}},[e.percentage?n("span",{attrs:{slot:"append"},slot:"append"},[e._v("%")]):e._e()])],1)},l=[],u={name:"SingleValue",props:["title","value","percentage"]},i=u,r=n(1001),s=(0,r.Z)(i,a,l,!1,null,null,null),o=s.exports},56986:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-checkbox-group",{attrs:{value:e.value,size:"small"},on:{input:function(t){return e.$emit("input",t)}}},[e.eleMap.has("fire")?n("el-checkbox-button",{attrs:{label:"fire"}},[e._v("火")]):e._e(),e.eleMap.has("thunder")?n("el-checkbox-button",{attrs:{label:"thunder"}},[e._v("雷")]):e._e(),e.eleMap.has("water")?n("el-checkbox-button",{attrs:{label:"water"}},[e._v("水")]):e._e(),e.eleMap.has("wind")?n("el-checkbox-button",{attrs:{label:"wind"}},[e._v("风")]):e._e(),e.eleMap.has("rock")?n("el-checkbox-button",{attrs:{label:"rock"}},[e._v("岩")]):e._e(),e.eleMap.has("ice")?n("el-checkbox-button",{attrs:{label:"ice"}},[e._v("冰")]):e._e(),e.eleMap.has("physical")?n("el-checkbox-button",{attrs:{label:"physical"}},[e._v("物理")]):e._e()],1)},l=[],u=n(62032),i=(n(41539),n(70189),n(78783),n(33948),{name:"SelectElementMulti",props:{value:{},elements:{default:function(){return["fire","thunder","water","wind","rock","ice","physical"]}},multi:{default:!1}},computed:{eleMap:function(){var e,t=new Set,n=(0,u.Z)(this.elements);try{for(n.s();!(e=n.n()).done;){var a=e.value;t.add(a)}}catch(l){n.e(l)}finally{n.f()}return t}}}),r=i,s=n(1001),o=(0,s.Z)(r,a,l,!1,null,null,null),c=o.exports},50398:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-dialog",{attrs:{title:"选择buff",visible:e.selectBuffDlgVisible},on:{"update:visible":function(t){e.selectBuffDlgVisible=t}}},[n("div",{staticStyle:{padding:"16px"}},[n("el-tabs",e._l(e.genres,(function(t,a){return n("el-tab-pane",{key:a,attrs:{label:e.genre2chs[a]}},e._l(t,(function(t){return n("div",{key:t.name,staticClass:"select-buff-item flex-row",on:{click:function(n){return e.handleSelectBuff(t.name)}}},[n("img",{attrs:{src:t.badge}}),n("span",[e._v(e._s(t.chs))])])})),0)})),1)],1)]),n("el-button",{staticStyle:{"margin-bottom":"16px"},attrs:{type:"primary",size:"small"},on:{click:e.handleAddBuff}},[n("i",{staticClass:"el-icon-plus"}),e._v(" 新增buff ")]),e._l(e.configuredBuffs,(function(t){return n("div",{key:t.id,staticClass:"config-item buff-item",class:{inactive:t.omit}},[n("div",{staticClass:"top"},[n("h3",{staticClass:"config-title"},[e._v(e._s(t.chs))]),n("div",{staticClass:"buttons"},[n("el-button",{staticStyle:{padding:"0"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.removeBuff(t.id)}}}),n("el-button",{staticStyle:{padding:"0"},attrs:{type:"text",icon:t.omit?"el-icon-unlock":"el-icon-lock"},on:{click:function(n){return e.toggleBuff(t.id)}}})],1)]),t.config?n(t.config,{ref:"buffItem",refInFor:!0,tag:"component",staticStyle:{"margin-top":"14px"}}):e._e()],1)}))],2)},l=[],u=n(62032),i=(n(26833),n(68309),n(41539),n(33948),{});function r(e){var t,n=(0,u.Z)(e.keys());try{for(n.s();!(t=n.n()).done;){var a=t.value,l=e(a).default;i[l.name]=l}}catch(r){n.e(r)}finally{n.f()}}r(n(73856));for(var s=i,o={},c=0,f=Object.values(s);c<f.length;c++){var v=f[c];o[v.genre]||(o[v.genre]=[]),o[v.genre].push(v)}var g={custom:"自定义",character:"角色引发的buff",resonance:"元素共鸣",weapon:"武器引发的buff"},d=0,m={name:"ConfigBuff",created:function(){this.genres=o,this.genre2chs=g},data:function(){return{configuredBuffs:[],selectBuffDlgVisible:!1}},methods:{toggleBuff:function(e){for(var t=0;t<this.configuredBuffs.length;t++){var n=this.configuredBuffs[t];n.id===e&&(n.omit=!n.omit)}},handleAddBuff:function(){this.selectBuffDlgVisible=!0},handleSelectBuff:function(e){var t={config:s[e].config,name:e,id:d++,chs:s[e].chs,omit:!1};this.configuredBuffs.push(t),this.selectBuffDlgVisible=!1},removeBuff:function(e){for(var t=0;t<this.configuredBuffs.length;t++)if(this.configuredBuffs[t].id===e){this.$delete(this.configuredBuffs,t);break}},getStandardBuffs:function(){for(var e=[],t=0,n=0;n<this.configuredBuffs.length;n++){var a=this.configuredBuffs[n];if(a.config){var l=this.$refs.buffItem[t++];a.omit||e.push(l.getStandardConfig())}else a.omit||e.push(s[a.name].getStandardConfig())}return e},getBuffs:function(){for(var e=[],t=0,n=0;n<this.configuredBuffs.length;n++){var a=this.configuredBuffs[n];if(a.config){var l=this.$refs.buffItem[t++],u=l.getBuff();u.omit=a.omit,e.push(u)}else{var i={name:a.name,omit:a.omit};e.push(i)}}return e},setBuffs:function(e){var t=this;this.configuredBuffs=[];var n,a=0,l=(0,u.Z)(e);try{var i=function(){var e=n.value,l=s[e.name],u={name:e.name,id:d++,chs:l.chs,omit:e.omit};l.config&&(u.config=l.config,t.$nextTick((function(){t.$refs.buffItem[a++].setBuff(e.args)}))),t.configuredBuffs.push(u)};for(l.s();!(n=l.n()).done;)i()}catch(r){l.e(r)}finally{l.f()}}}},h=m,p=n(1001),b=(0,p.Z)(h,a,l,!1,null,"a4bf7d28",null),k=b.exports},61215:function(e,t,n){"use strict";n.r(t);var a=n(43303);t["default"]={name:"abeiduo",chs:"阿贝多-瓶中人的天慧",badge:a,genre:"character",getStandardConfig:function(){return{type:"em",value:125}}}},74189:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(72591),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"班尼特的基础攻击力"},model:{value:e.baseAtk,callback:function(t){e.baseAtk=t},expression:"baseAtk"}}),n("div",{staticClass:"buff-config-item"},[n("p",{staticClass:"buff-config-title"},[e._v("是否1命")]),n("el-switch",{attrs:{"active-text":"是","inactive-text":"否"},model:{value:e.isConste1,callback:function(t){e.isConste1=t},expression:"isConste1"}})],1),n("div",{staticClass:"buff-config-item"},[n("p",{staticClass:"buff-config-title"},[e._v("技能等级")]),n("el-input-number",{attrs:{min:1,max:13,size:"mini"},model:{value:e.skillLevel,callback:function(t){e.skillLevel=t},expression:"skillLevel"}})],1)],1)},u=[],i=(n(41539),n(39714),n(36376)),r=n(55566),s=n(58805),o={name:"Bannite.buffcfg",components:{SingleValue:s.Z},data:function(){return{skillLevel:6,baseAtk:"900",isConste1:!0}},methods:{getStandardConfig:function(){var e,t=null!==(e=parseFloat(this.baseAtk))&&void 0!==e?e:900,n=(0,r.Z)(i.x,"bannite.skill.q.ratio")[this.skillLevel-1];return this.isConste1&&(n+=.2),{type:"atk-static",value:t*n}},getBuff:function(){var e;return{name:"bannite",args:{skillLevel:this.skillLevel,baseAtk:null!==(e=parseFloat(this.baseAtk))&&void 0!==e?e:900,isConste1:this.isConste1}}},setBuff:function(e){this.skillLevel=e.skillLevel,this.baseAtk=e.baseAtk.toString(),this.isConste1=e.isConste1}}},c=o,f=n(1001),v=(0,f.Z)(c,l,u,!1,null,null,null),g=v.exports,d={name:"bannite",chs:"班尼特-美妙旅程",description:"班尼特大招",badge:a,config:g,genre:"character"}},29448:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(93422),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"数值",percentage:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},u=[],i=(n(41539),n(39714),n(58805)),r={name:"AtkPercentage.buffcfg",components:{SingleValue:i.Z},data:function(){return{value:"10"}},methods:{getStandardConfig:function(){var e;return{type:"atk-percentage",value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100}},getBuff:function(){var e;return{name:"atkPercentage",args:{value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100}}},setBuff:function(e){this.value=(100*e.value).toString()}}},s=r,o=n(1001),c=(0,o.Z)(s,l,u,!1,null,null,null),f=c.exports,v={name:"atkPercentage",chs:"百分比攻击力",badge:a,config:f,genre:"custom"}},17928:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(93422),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"数值"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},u=[],i=(n(41539),n(39714),n(58805)),r={name:"AtkStatic.buffcfg",components:{SingleValue:i.Z},data:function(){return{value:"100"}},methods:{getStandardConfig:function(){var e;return{type:"atk-static",value:null!==(e=parseFloat(this.value))&&void 0!==e?e:100}},getBuff:function(){var e;return{name:"atkStatic",args:{value:null!==(e=parseFloat(this.value))&&void 0!==e?e:100}}},setBuff:function(e){this.value=e.value.toString()}}},s=r,o=n(1001),c=(0,o.Z)(s,l,u,!1,null,null,null),f=c.exports,v={name:"atkStatic",chs:"固定攻击力",badge:a,config:f,genre:"custom"}},47032:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(93422),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"数值",percentage:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},u=[],i=(n(41539),n(39714),n(58805)),r={name:"Bonus.buffcfg",components:{SingleValue:i.Z},data:function(){return{value:"10"}},methods:{getStandardConfig:function(){var e;return{type:"bonus",value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100}},getBuff:function(){var e;return{name:"bonus",args:{value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100}}},setBuff:function(e){this.value=(100*e.value).toString()}}},s=r,o=n(1001),c=(0,o.Z)(s,l,u,!1,null,null,null),f=c.exports,v={name:"bonus",chs:"伤害加成",badge:a,config:f,genre:"custom"}},58451:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(93422),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"数值",percentage:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},u=[],i=(n(41539),n(39714),n(58805)),r={name:"Critical.buffcfg",components:{SingleValue:i.Z},data:function(){return{value:"10"}},methods:{getValue:function(){var e;return(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100},getStandardConfig:function(){return{type:"critical",value:this.getValue()}},getBuff:function(){return{name:"critical",args:{value:this.getValue()}}},setBuff:function(e){this.value=(100*e.value).toString()}}},s=r,o=n(1001),c=(0,o.Z)(s,l,u,!1,null,null,null),f=c.exports,v={name:"critical",chs:"暴击率",badge:a,config:f,genre:"custom"}},20891:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(93422),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"数值",percentage:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},u=[],i=(n(41539),n(39714),n(58805)),r={name:"CriticalDamage.buffcfg",components:{SingleValue:i.Z},data:function(){return{value:"20"}},methods:{getValue:function(){var e;return(null!==(e=parseFloat(this.value))&&void 0!==e?e:20)/100},getStandardConfig:function(){return{type:"criticalDamage",value:this.getValue()}},getBuff:function(){return{name:"criticalDamage",args:{value:this.getValue()}}},setBuff:function(e){this.value=(100*e.value).toString()}}},s=r,o=n(1001),c=(0,o.Z)(s,l,u,!1,null,null,null),f=c.exports,v={name:"criticalDamage",chs:"暴击伤害",badge:a,config:f,genre:"custom"}},32343:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(93887),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"数值（0-100）",percentage:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},u=[],i=(n(41539),n(39714),n(58805)),r={name:"EnemyDefDown.buffcfg",components:{SingleValue:i.Z},data:function(){return{value:"10"}},methods:{getValue:function(){var e;return(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100},getStandardConfig:function(){return{type:"enemyDefDown",value:this.getValue()}},getBuff:function(){return{name:"enemyDefDown",args:{value:this.getValue()}}},setBuff:function(e){var t;this.value=(100*(null!==(t=e.value)&&void 0!==t?t:0)).toString()}}},s=r,o=n(1001),c=(0,o.Z)(s,l,u,!1,null,null,null),f=c.exports,v={name:"enemyDefDown",chs:"怪物减防",badge:a,config:f,genre:"custom"}},95180:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(93422),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"数值",percentage:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},u=[],i=(n(41539),n(39714),n(58805)),r={name:"DefPercentage.buffcfg",components:{SingleValue:i.Z},data:function(){return{value:"10"}},methods:{getStandardConfig:function(){var e;return{type:"def-percentage",value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100}},getBuff:function(){var e;return{name:"defPercentage",args:{value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100}}},setBuff:function(e){var t;this.value=(100*(null!==(t=e.value)&&void 0!==t?t:.1)).toString()}}},s=r,o=n(1001),c=(0,o.Z)(s,l,u,!1,null,null,null),f=c.exports,v={name:"defPercentage",chs:"百分比防御力",badge:a,config:f,genre:"custom"}},71491:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(93422),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"数值"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},u=[],i=(n(41539),n(39714),n(58805)),r={name:"DefStatic.buffcfg",components:{SingleValue:i.Z},data:function(){return{value:"100"}},methods:{getStandardConfig:function(){var e;return{type:"def-static",value:null!==(e=parseFloat(this.value))&&void 0!==e?e:100}},getBuff:function(){var e;return{name:"defStatic",args:{value:null!==(e=parseFloat(this.value))&&void 0!==e?e:100}}},setBuff:function(e){var t;this.value=(null!==(t=e.value)&&void 0!==t?t:100).toString()}}},s=r,o=n(1001),c=(0,o.Z)(s,l,u,!1,null,null,null),f=c.exports,v={name:"defStatic",chs:"固定防御力",badge:a,config:f,genre:"custom"}},17313:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(93422),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("select-element-type",{staticStyle:{"margin-bottom":"8px"},attrs:{elements:["fire","ice","water","thunder","rock","wind"]},model:{value:e.element,callback:function(t){e.element=t},expression:"element"}}),n("single-value",{staticStyle:{"margin-bottom":"0"},attrs:{title:"数值",percentage:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},u=[],i=(n(41539),n(39714),n(58805)),r=n(74432),s={name:"ElementalBonus.buffcfg",components:{SingleValue:i.Z,SelectElementType:r.Z},data:function(){return{value:"10",element:"fire"}},methods:{getStandardConfig:function(){var e;return{type:"elementalBonus",value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100,element:this.element}},getBuff:function(){var e;return{name:"elementalBonus",args:{value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100,element:this.element}}},setBuff:function(e){this.value=(100*e.value).toString(),this.element=e.element}}},o=s,c=n(1001),f=(0,c.Z)(o,l,u,!1,null,null,null),v=f.exports,g={name:"elementalBonus",chs:"元素伤害加成",badge:a,config:v,genre:"custom"}},3504:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(93422),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"数值"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},u=[],i=(n(41539),n(39714),n(58805)),r={name:"EM.buffcfg",components:{SingleValue:i.Z},data:function(){return{value:"80"}},methods:{getValue:function(){var e;return null!==(e=parseFloat(this.value))&&void 0!==e?e:80},getStandardConfig:function(){return{type:"em",value:this.getValue()}},getBuff:function(){return{name:"em",args:{value:this.getValue()}}},setBuff:function(e){this.value=e.value.toString()}}},s=r,o=n(1001),c=(0,o.Z)(s,l,u,!1,null,null,null),f=c.exports,v={name:"em",chs:"元素精通",badge:a,config:f,genre:"custom"}},55553:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(93887),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"数值（0-100）",percentage:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("div",{staticClass:"buff-config-item"},[n("h3",{staticClass:"buff-config-title"},[e._v("元素类型")]),n("select-element-multi",{model:{value:e.elementTypes,callback:function(t){e.elementTypes=t},expression:"elementTypes"}})],1)],1)},u=[],i=(n(41539),n(39714),n(58805)),r=n(56986),s={name:"EnemyResDown.buffcfg",components:{SingleValue:i.Z,SelectElementMulti:r.Z},data:function(){return{value:"10",elementTypes:[]}},methods:{getStandardConfig:function(){var e;return{type:"enemyResDown",value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100,elementTypes:this.elementTypes}},getBuff:function(){return{name:"enemyResDown",args:{value:this.value,elementTypes:this.elementTypes}}},setBuff:function(e){var t,n;this.value=(null!==(t=e.value)&&void 0!==t?t:"10").toString(),this.elementTypes=null!==(n=e.elementTypes)&&void 0!==n?n:[]}}},o=s,c=n(1001),f=(0,c.Z)(o,l,u,!1,null,null,null),v=f.exports,g={name:"enemyResDown",chs:"怪物减抗",badge:a,config:v,genre:"custom"}},61334:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(11458),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"数值（0-1）"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("div",{staticClass:"buff-config-item"},[n("h3",{staticClass:"buff-config-title"},[e._v("反应类型")]),n("el-checkbox-group",{attrs:{size:"small"},model:{value:e.reactionTypes,callback:function(t){e.reactionTypes=t},expression:"reactionTypes"}},[n("el-checkbox-button",{attrs:{label:"melt"}},[e._v("融化")]),n("el-checkbox-button",{attrs:{label:"vaporize"}},[e._v("蒸发")]),n("el-checkbox-button",{attrs:{label:"overload"}},[e._v("超载")]),n("el-checkbox-button",{attrs:{label:"superconduct"}},[e._v("超导")]),n("el-checkbox-button",{attrs:{label:"electroCharged"}},[e._v("感电")]),n("el-checkbox-button",{attrs:{label:"swirl"}},[e._v("扩散")])],1)],1)],1)},u=[],i=(n(41539),n(39714),n(58805)),r={name:"ReactionEnhance.buffcfg",components:{SingleValue:i.Z},data:function(){return{value:"0.2",reactionTypes:[]}},methods:{getStandardConfig:function(){var e;return{type:"reactionEnhance",value:null!==(e=parseFloat(this.value))&&void 0!==e?e:.2,reactionTypes:this.reactionTypes}},getBuff:function(){return{name:"reactionEnhance",args:{value:this.value,reactonTypes:this.reactionTypes}}},setBuff:function(e){var t,n;this.value=(null!==(t=e.value)&&void 0!==t?t:"0.2").toString(),this.reactionTypes=null!==(n=e.reactonTypes)&&void 0!==n?n:[]}}},s=r,o=n(1001),c=(0,o.Z)(s,l,u,!1,null,null,null),f=c.exports,v={name:"reactionEnhance",chs:"反应加成",badge:a,config:f,genre:"custom"}},34572:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(33704),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"buff-config-item"},[n("h3",{staticClass:"buff-config-title"},[e._v("E技能等级")]),n("el-input-number",{attrs:{min:1,max:13,size:"small"},model:{value:e.skill2Level,callback:function(t){e.skill2Level=t},expression:"skill2Level"}})],1),n("div",{staticClass:"buff-config-item"},[n("h3",{staticClass:"buff-config-title"},[e._v("受buff角色的最大元素能量")]),n("el-input-number",{attrs:{min:40,max:90,size:"small"},model:{value:e.energy,callback:function(t){e.energy=t},expression:"energy"}})],1)])},u=[],i=n(36376),r=i.x.leidianjiangjun.skill,s={name:"Fengyuanwanye.buffcfg",components:{},data:function(){return{skill2Level:6,energy:80}},methods:{getStandardConfig:function(){var e=r.e.bonus[this.skill2Level-1],t=e*this.energy;return{type:"qBonus",value:t}},getBuff:function(){return{name:"leidianjiangjun",args:{skill2Level:this.skill2Level,energy:this.energy}}},setBuff:function(e){var t,n;this.skill2Level=null!==(t=e.skill2Level)&&void 0!==t?t:6,this.energy=null!==(n=e.energy)&&void 0!==n?n:80}}},o=s,c=n(1001),f=(0,c.Z)(o,l,u,!1,null,null,null),v=f.exports,g={name:"leidianjiangjun",chs:"雷电将军-雷罚恶曜之眼",badge:a,config:v,genre:"character"}},91973:function(e,t,n){"use strict";n.r(t);var a=n(37275);t["default"]={name:"fire2",chs:"元素共鸣-热诚之火",badge:a,genre:"resonance",getStandardConfig:function(){return{type:"atk-percentage",value:.25}}}},16036:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(41462),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"等效暴击率",percentage:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},u=[],i=(n(41539),n(39714),n(58805)),r={name:"Ice2.buffcfg",components:{SingleValue:i.Z},data:function(){return{value:"10"}},methods:{getValue:function(){var e;return(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100},getStandardConfig:function(){return{type:"critical",value:this.getValue()}},getBuff:function(){return{name:"ice2",args:{value:this.getValue()}}},setBuff:function(e){this.value=(100*e.value).toString()}}},s=r,o=n(1001),c=(0,o.Z)(s,l,u,!1,null,null,null),f=c.exports,v={name:"ice2",chs:"元素共鸣-粉碎之冰",badge:a,genre:"resonance",config:f}},96909:function(e,t,n){"use strict";n.r(t);var a=n(64627);t["default"]={name:"rock2",chs:"元素共鸣-坚定之岩",badge:a,genre:"resonance",getStandardConfig:function(){return{type:"bonus",value:.15}}}},87621:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(38209),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("select-element-type",{staticStyle:{"margin-bottom":"8px"},attrs:{elements:["fire","ice","water","thunder"]},model:{value:e.element,callback:function(t){e.element=t},expression:"element"}}),n("single-value",{staticStyle:{"margin-bottom":"0"},attrs:{title:"枫原万叶的元素精通"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},u=[],i=(n(41539),n(39714),n(58805)),r=n(74432),s={name:"Fengyuanwanye.buffcfg",components:{SingleValue:i.Z,SelectElementType:r.Z},data:function(){return{value:"600",element:"fire"}},methods:{getStandardConfig:function(){var e,t=null!==(e=parseFloat(this.value))&&void 0!==e?e:600,n=.04*t/100;return{type:"elementalBonus",value:n,element:this.element}},getBuff:function(){var e;return{name:"fengyuanwanye",args:{value:null!==(e=parseFloat(this.value))&&void 0!==e?e:600,element:this.element}}},setBuff:function(e){var t;this.value=(null!==(t=e.value)&&void 0!==t?t:600).toString(),this.element=e.element}}},o=s,c=n(1001),f=(0,c.Z)(o,l,u,!1,null,null,null),v=f.exports,g={name:"fengyuanwanye",chs:"枫原万叶-风物之诗咏",badge:a,config:v,genre:"character"}},10954:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(24888),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"九条裟罗的基础攻击力",percentage:!1},model:{value:e.baseATK,callback:function(t){e.baseATK=t},expression:"baseATK"}}),n("div",{staticClass:"buff-config-item"},[n("h3",{staticClass:"buff-config-title"},[e._v("E技能等级")]),n("el-input-number",{attrs:{size:"small",min:1,max:13},model:{value:e.skillLevel,callback:function(t){e.skillLevel=t},expression:"skillLevel"}})],1)],1)},u=[],i=(n(41539),n(39714),n(58805)),r=n(36376),s=r.x.jiutiaoshaluo.skill,o={name:"Jiutiaoshaluo.buffcfg",components:{SingleValue:i.Z},data:function(){return{skillLevel:6,baseATK:"600"}},methods:{getStandardConfig:function(){var e,t=s.e.bonus[this.skillLevel-1],n=t*(null!==(e=parseFloat(this.baseATK))&&void 0!==e?e:600);return{type:"atk-static",value:n}},getBuff:function(){var e;return{name:"jiutiaoshaluo",args:{baseATK:null!==(e=parseFloat(this.baseATK))&&void 0!==e?e:600,skillLevel:this.skillLevel}}},setBuff:function(e){var t,n;this.skillLevel=null!==(t=e.skillLevel)&&void 0!==t?t:6,this.baseATK=(null!==(n=e.baseATK)&&void 0!==n?n:600).toString()}}},c=o,f=n(1001),v=(0,f.Z)(c,l,u,!1,null,null,null),g=v.exports,d={name:"jiutiaoshaluo",chs:"九条裟罗-天狗咒雷",description:"九条裟罗的E、Q技能提供的攻击力加成",badge:a,config:g,genre:"character"}},13701:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(45168),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"buff-config-item"},[n("p",{staticClass:"buff-config-title"},[e._v("技能等级")]),n("el-input-number",{attrs:{min:1,max:13,size:"mini"},model:{value:e.skillLevel,callback:function(t){e.skillLevel=t},expression:"skillLevel"}})],1)])},u=[],i=n(36376),r=n(55566),s={name:"Mona.buffcfg",data:function(){return{skillLevel:6}},methods:{getValue:function(){return(0,r.Z)(i.x,"mona.skill.q.bonus")[this.skillLevel-1]},getStandardConfig:function(){return{type:"bonus",value:this.getValue()}},getBuff:function(){return{name:"mona",args:{skillLevel:this.skillLevel}}},setBuff:function(e){this.skillLevel=e.skillLevel}}},o=s,c=n(1001),f=(0,c.Z)(o,l,u,!1,null,null,null),v=f.exports,g={name:"mona",chs:"莫娜-星异",description:"莫娜星异状态下的伤害加成",badge:a,config:v,genre:"character"}},38298:function(e,t,n){"use strict";n.r(t);var a=n(18526);t["default"]={name:"shatang1",chs:"砂糖-触媒置换术",badge:a,genre:"character",getStandardConfig:function(){return{type:"em",value:50}}}},78701:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(18526),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{staticStyle:{"margin-bottom":"0"},attrs:{title:"砂糖的元素精通"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},u=[],i=(n(41539),n(39714),n(58805)),r={name:"Shatang2.buffcfg",components:{SingleValue:i.Z},data:function(){return{value:"600"}},methods:{getStandardConfig:function(){var e,t=null!==(e=parseFloat(this.value))&&void 0!==e?e:600,n=.2*t;return{type:"em",value:n}},getBuff:function(){var e;return{name:"shatang2",args:{value:null!==(e=parseFloat(this.value))&&void 0!==e?e:600}}},setBuff:function(e){var t;this.value=(null!==(t=e.value)&&void 0!==t?t:600).toString()}}},s=r,o=n(1001),c=(0,o.Z)(s,l,u,!1,null,null,null),f=c.exports,v={name:"shatang2",chs:"砂糖-小小的慧风",badge:a,config:f,genre:"character"}},76057:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(47073),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"buff-config-item"},[n("p",{staticClass:"buff-config-title"},[e._v("精炼等级")]),n("el-input-number",{attrs:{min:1,max:5,size:"mini"},model:{value:e.refine,callback:function(t){e.refine=t},expression:"refine"}})],1)])},u=[],i={name:"Taolong.buffcfg",data:function(){return{refine:1}},methods:{getValue:function(){return.06*this.refine+.18},getStandardConfig:function(){return{type:"atk-percentage",value:this.getValue()}},getBuff:function(){return{name:"taolong",args:{refine:this.refine}}},setBuff:function(e){this.refine=e.refine}}},r=i,s=n(1001),o=(0,s.Z)(r,l,u,!1,null,null,null),c=o.exports,f={name:"taolong",chs:"讨龙英杰谭",badge:a.E.taolongyingjietan.url,config:c,genre:"weapon"}},55566:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(62032);n(74916),n(23123);function l(e,t){var n,l=t.split("."),u=e,i=(0,a.Z)(l);try{for(i.s();!(n=i.n()).done;){var r=n.value;u=u[r]}}catch(s){i.e(s)}finally{i.f()}return u}},73856:function(e,t,n){var a={"./abeiduo/abeiduo.buff.js":61215,"./bannite/Bannnite.buff.js":74189,"./common/atk_percentage/AtkPercentage.buff.js":29448,"./common/atk_static/AtkStatic.buff.js":17928,"./common/bonus/Bonus.buff.js":47032,"./common/critical/Critical.buff.js":58451,"./common/critical_damage/CriticalDamage.buff.js":20891,"./common/def_down/enemyDefDown.buff.js":32343,"./common/def_percentage/DefPercentage.buff.js":95180,"./common/def_static/DefStatic.buff.js":71491,"./common/elemental_bonus/elementalBonus.buff.js":17313,"./common/em/EM.buff.js":3504,"./common/enemy_res_down/enemyResDown.buff.js":55553,"./common/reaction_enhance/reactionEnhance.buff.js":61334,"./electro/leidianjiangjun/leidianjiangjun.buff.js":34572,"./element/fire2/Fire2.buff.js":91973,"./element/ice2/Ice2.buff.js":16036,"./element/rock2/Rock2.buff.js":96909,"./fengyuanwanye/fengyuanwanye.buff.js":87621,"./jiutiaoshaluo/jiutiaoshaluo.buff.js":10954,"./mona/Mona.buff.js":13701,"./shatang/shatang.buff.js":38298,"./shatang/shatang2.buff.js":78701,"./weapon/taolong/Taolong.buff.js":76057};function l(e){var t=u(e);return n(t)}function u(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=u,e.exports=l,l.id=73856},41462:function(e,t,n){"use strict";e.exports=n.p+"img/cryo.e0054787.png"},64627:function(e,t,n){"use strict";e.exports=n.p+"img/geo.1bf6ccd6.png"},37275:function(e,t,n){"use strict";e.exports=n.p+"img/pyro.a23e4dc7.png"},93887:function(e,t,n){"use strict";e.exports=n.p+"img/shield.dd8c2a94.png"},11458:function(e){"use strict";e.exports="data:image/png;base64,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"}}]);