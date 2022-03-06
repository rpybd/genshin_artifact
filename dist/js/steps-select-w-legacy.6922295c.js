(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[318],{28030:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"config-item"},[s("h3",{staticClass:"config-title"},[e._v(e._s(e.title))]),s("div",{staticClass:"delegate",on:{click:e.handleClickLevel}},[s("div",{staticClass:"panel"},[e._l(19,(function(t){return s("span",{key:t,staticClass:"select-int",class:{active:t.toString()===e.value}},[e._v(e._s(t))])})),s("span",{staticClass:"select-int",class:{active:"20-"===e.value}},[e._v("20-")])],2),s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"20+"===e.value}},[e._v("20+")]),e._l(19,(function(t){return s("span",{key:t+20,staticClass:"select-int",class:{active:(t+20).toString()===e.value}},[e._v(e._s(t+20))])})),s("span",{staticClass:"select-int",class:{active:"40-"===e.value}},[e._v("40-")])],2),s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"40+"===e.value}},[e._v("40+")]),e._l(9,(function(t){return s("span",{key:t+40,staticClass:"select-int",class:{active:(t+40).toString()===e.value}},[e._v(e._s(t+40))])})),s("span",{staticClass:"select-int",class:{active:"50-"===e.value}},[e._v("50-")])],2),s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"50+"===e.value}},[e._v("50+")]),e._l(9,(function(t){return s("span",{key:t+50,staticClass:"select-int",class:{active:(t+50).toString()===e.value}},[e._v(e._s(t+50))])})),s("span",{staticClass:"select-int",class:{active:"60-"===e.value}},[e._v("60-")])],2),s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"60+"===e.value}},[e._v("60+")]),e._l(9,(function(t){return s("span",{key:t+60,staticClass:"select-int",class:{active:(t+60).toString()===e.value}},[e._v(e._s(t+60))])})),e.star>=3?s("span",{staticClass:"select-int",class:{active:"70-"===e.value}},[e._v("70-")]):s("span",{staticClass:"select-int",class:{active:"70"===e.value}},[e._v("70")])],2),e.star>=3?s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"70+"===e.value}},[e._v("70+")]),e._l(9,(function(t){return s("span",{key:t+70,staticClass:"select-int",class:{active:t+70==e.value}},[e._v(e._s(t+70))])})),s("span",{staticClass:"select-int",class:{active:"80-"===e.value}},[e._v("80-")])],2):e._e(),e.star>=3?s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"80+"===e.value}},[e._v("80+")]),e._l(10,(function(t){return s("span",{key:t+80,staticClass:"select-int",class:{active:t+80==e.value}},[e._v(e._s(t+80))])}))],2):e._e()])])},n=[],i=(s(9653),{name:"SelectLevel",props:{value:{type:String},star:{type:Number,default:5},title:{type:String,default:""}},methods:{handleClickLevel:function(e){if(e.target.classList.contains("select-int")){var t=e.target.textContent;this.$emit("input",t)}}},computed:{}}),l=i,c=s(1001),r=(0,c.Z)(l,a,n,!1,null,"373f0d1c",null),o=r.exports},22239:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"config-item select-weapon"},[s("img",{staticClass:"image",attrs:{src:e.w.url}}),s("h3",{staticClass:"config-title"},[e._v("选择武器")]),s("select-weapon",{attrs:{value:e.weaponName,type:e.weaponType},on:{input:e.handleChangeWeapon}}),e.w.effect?s("div",{staticClass:"weapon-effect"},[e._v(" "+e._s(e.w.effect)+" ")]):e._e()],1),s(e.configComponent,{ref:"extraConfig",tag:"component",attrs:{if:!!e.w.config}}),e.w.star>=3?s("div",{staticClass:"config-item"},[s("h3",{staticClass:"config-title"},[e._v("精炼等级")]),s("el-input-number",{attrs:{min:1,max:5,size:"small"},model:{value:e.refine,callback:function(t){e.refine=t},expression:"refine"}})],1):e._e(),s("select-level",{attrs:{star:e.w.star,value:e.levelText,title:"武器等级"},on:{input:e.handleClickLevel}})],1)},n=[],i=(s(68309),s(41539),s(39714),s(92222),s(47073)),l=s(28030),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-select",{attrs:{value:e.value,placeholder:"武器",size:"small"},on:{input:function(t){return e.$emit("input",t)}}},[s("el-option",{attrs:{value:"custom",label:"自定义"}},[s("div",{staticClass:"option-item"},[s("div",{staticStyle:{width:"40px",display:"inline-block"}}),s("span",{style:{color:e.getColor(1)}},[e._v("自定义")])])]),e._l(e.weaponTypeMap[e.type],(function(t){return s("el-option",{key:t.name,attrs:{value:t.name,label:t.chs}},[s("div",{staticClass:"option-item"},[s("img",{attrs:{src:t.url}}),s("span",{style:{color:e.getColor(t.star)}},[e._v(e._s(t.chs))])])])}))],2)},r=[],o=s(67817),v={name:"SelectWeapon",created:function(){this.weaponTypeMap=i.Q},props:{type:{default:"any"},value:{}},methods:{getColor:function(e){return o.Z[e-1]}}},u=v,p=s(1001),f=(0,p.Z)(u,c,r,!1,null,"6098082b",null),h=f.exports,g={name:"SelectWeaponLevel",components:{SelectLevel:l.Z,SelectWeapon:h},inject:["notifyChange"],data:function(){return{refine:1,level:{level:1,ascend:!1},weaponName:"liegong",weaponType:"bow"}},methods:{handleChangeWeapon:function(e){e!==this.weaponName&&(this.weaponName=e,i.E[e].star<3&&(this.level.level>70||70===this.level.level&&this.level.ascend)&&(this.level.level=70,this.level.ascend=!1),this.notifyChange("weapon",e))},handleClickLevel:function(e){this.level.level=parseInt(e),this.level.ascend=-1!==e.indexOf("+")},setWeaponType:function(e){this.weaponType!==e&&(this.weaponType=e,this.weaponName=i.Q[this.weaponType][0].name)},getWeaponConfig:function(){return{name:this.weaponName,refine:this.refine,level:this.level.level,ascend:this.level.ascend,args:this.getExtraConfig()}},setWeaponConfig:function(e){var t=this;this.refine=e.refine,this.level.level=e.level,this.level.ascend=e.ascend,this.weaponName=e.name,this.$nextTick((function(){t.w.config&&t.$refs.extraConfig.setData(e.args)}))},getExtraConfig:function(){if(!this.w.config)return{};var e=this.$refs.extraConfig;return e.compact?e.compact():Object.assign({},e.$data)}},computed:{w:function(){return i.E[this.weaponName]},levelText:function(){var e=this.level.ascend,t=this.level.level,s=this.w.star>=3?[20,40,50,60,70,80]:[20,40,50,60];return-1===s.indexOf(t)?t.toString():"".concat(t).concat(e?"+":"-")},configComponent:function(){return"function"===typeof this.w.config?this.w.config():this.w.config}}},_=g,C=(0,p.Z)(_,a,n,!1,null,"049d8b36",null),d=C.exports},53111:function(e,t,s){var a=s(1702),n=s(84488),i=s(41340),l=s(81361),c=a("".replace),r="["+l+"]",o=RegExp("^"+r+r+"*"),v=RegExp(r+r+"*$"),u=function(e){return function(t){var s=i(n(t));return 1&e&&(s=c(s,o,"")),2&e&&(s=c(s,v,"")),s}};e.exports={start:u(1),end:u(2),trim:u(3)}},81361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9653:function(e,t,s){"use strict";var a=s(19781),n=s(17854),i=s(1702),l=s(54705),c=s(31320),r=s(92597),o=s(79587),v=s(47976),u=s(52190),p=s(57593),f=s(47293),h=s(8006).f,g=s(31236).f,_=s(3070).f,C=s(50863),d=s(53111).trim,m="Number",w=n[m],y=w.prototype,N=n.TypeError,b=i("".slice),k=i("".charCodeAt),x=function(e){var t=p(e,"number");return"bigint"==typeof t?t:E(t)},E=function(e){var t,s,a,n,i,l,c,r,o=p(e,"number");if(u(o))throw N("Cannot convert a Symbol value to a number");if("string"==typeof o&&o.length>2)if(o=d(o),t=k(o,0),43===t||45===t){if(s=k(o,2),88===s||120===s)return NaN}else if(48===t){switch(k(o,1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+o}for(i=b(o,2),l=i.length,c=0;c<l;c++)if(r=k(i,c),r<48||r>n)return NaN;return parseInt(i,a)}return+o};if(l(m,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var S,I=function(e){var t=arguments.length<1?0:w(x(e)),s=this;return v(y,s)&&f((function(){C(s)}))?o(Object(t),s,I):t},T=a?h(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),L=0;T.length>L;L++)r(w,S=T[L])&&!r(I,S)&&_(I,S,g(w,S));I.prototype=y,y.constructor=I,c(n,m,I)}}}]);