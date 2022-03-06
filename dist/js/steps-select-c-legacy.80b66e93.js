(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[34],{28030:function(t,e,s){"use strict";s.d(e,{Z:function(){return o}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"config-item"},[s("h3",{staticClass:"config-title"},[t._v(t._s(t.title))]),s("div",{staticClass:"delegate",on:{click:t.handleClickLevel}},[s("div",{staticClass:"panel"},[t._l(19,(function(e){return s("span",{key:e,staticClass:"select-int",class:{active:e.toString()===t.value}},[t._v(t._s(e))])})),s("span",{staticClass:"select-int",class:{active:"20-"===t.value}},[t._v("20-")])],2),s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"20+"===t.value}},[t._v("20+")]),t._l(19,(function(e){return s("span",{key:e+20,staticClass:"select-int",class:{active:(e+20).toString()===t.value}},[t._v(t._s(e+20))])})),s("span",{staticClass:"select-int",class:{active:"40-"===t.value}},[t._v("40-")])],2),s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"40+"===t.value}},[t._v("40+")]),t._l(9,(function(e){return s("span",{key:e+40,staticClass:"select-int",class:{active:(e+40).toString()===t.value}},[t._v(t._s(e+40))])})),s("span",{staticClass:"select-int",class:{active:"50-"===t.value}},[t._v("50-")])],2),s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"50+"===t.value}},[t._v("50+")]),t._l(9,(function(e){return s("span",{key:e+50,staticClass:"select-int",class:{active:(e+50).toString()===t.value}},[t._v(t._s(e+50))])})),s("span",{staticClass:"select-int",class:{active:"60-"===t.value}},[t._v("60-")])],2),s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"60+"===t.value}},[t._v("60+")]),t._l(9,(function(e){return s("span",{key:e+60,staticClass:"select-int",class:{active:(e+60).toString()===t.value}},[t._v(t._s(e+60))])})),t.star>=3?s("span",{staticClass:"select-int",class:{active:"70-"===t.value}},[t._v("70-")]):s("span",{staticClass:"select-int",class:{active:"70"===t.value}},[t._v("70")])],2),t.star>=3?s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"70+"===t.value}},[t._v("70+")]),t._l(9,(function(e){return s("span",{key:e+70,staticClass:"select-int",class:{active:e+70==t.value}},[t._v(t._s(e+70))])})),s("span",{staticClass:"select-int",class:{active:"80-"===t.value}},[t._v("80-")])],2):t._e(),t.star>=3?s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"80+"===t.value}},[t._v("80+")]),t._l(10,(function(e){return s("span",{key:e+80,staticClass:"select-int",class:{active:e+80==t.value}},[t._v(t._s(e+80))])}))],2):t._e()])])},l=[],n=(s(9653),{name:"SelectLevel",props:{value:{type:String},star:{type:Number,default:5},title:{type:String,default:""}},methods:{handleClickLevel:function(t){if(t.target.classList.contains("select-int")){var e=t.target.textContent;this.$emit("input",e)}}},computed:{}}),i=n,c=s(1001),r=(0,c.Z)(i,a,l,!1,null,"373f0d1c",null),o=r.exports},5057:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return _}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"config-item select-character"},[s("img",{staticClass:"image",attrs:{src:t.c.cardURL}}),s("h3",{staticClass:"config-title"},[t._v("选择角色")]),s("select-character",{attrs:{value:t.characterName},on:{input:t.handleChangeCharacter}})],1),t.needExtraConfig?s(t.c.config,{ref:"extraConfig",tag:"component"}):t._e(),s("div",{staticClass:"config-item"},[s("h3",{staticClass:"config-title"},[t._v("技能等级（包含命之座加成）")]),s("el-input-number",{staticClass:"skill",attrs:{min:1,max:11,size:"small"},model:{value:t.skill1,callback:function(e){t.skill1=e},expression:"skill1"}}),s("el-input-number",{staticClass:"skill",attrs:{min:1,max:13,size:"small"},model:{value:t.skill2,callback:function(e){t.skill2=e},expression:"skill2"}}),s("el-input-number",{staticClass:"skill",attrs:{min:1,max:13,size:"small"},model:{value:t.skill3,callback:function(e){t.skill3=e},expression:"skill3"}})],1),s("div",{staticClass:"config-item"},[s("h3",{staticClass:"config-title"},[t._v("命之座")]),s("el-input-number",{attrs:{min:0,max:6,size:"small"},model:{value:t.constellation,callback:function(e){t.constellation=e},expression:"constellation"}})],1),s("select-level",{attrs:{value:t.levelText,title:"角色等级"},on:{input:t.handleChangeLevel}})],1)},l=[],n=(s(68309),s(41539),s(39714),s(92222),s(36376)),i=s(28030),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-select",{attrs:{value:t.value,placeholder:"角色",size:"small"},on:{input:function(e){return t.$emit("input",e)}}},t._l(t.charactersByElement,(function(e,a){return s("el-option-group",{key:a,attrs:{label:t.element2Chs(a)}},t._l(e,(function(e){return s("el-option",{key:e.name,attrs:{label:e.chs,value:e.name}},[s("div",{staticClass:"option-item flex-row"},[s("img",{attrs:{src:e.avatar}}),s("span",{style:{color:t.getColor(e.star)}},[t._v(t._s(e.chs))])])])})),1)})),1)},r=[],o=s(67817),u={name:"SelectCharacter",props:["value"],created:function(){this.charactersByElement=n.$},methods:{element2Chs:function(t){switch(t){case"fire":return"火";case"ice":return"冰";case"grass":return"草";case"thunder":return"雷";case"wind":return"风";case"rock":return"岩";case"water":return"水"}},getColor:function(t){return o.Z[t-1]}}},v=u,f=s(1001),h=(0,f.Z)(v,c,r,!1,null,"f3c70350",null),p=h.exports,C={name:"ConfigCharacter",components:{SelectLevel:i.Z,SelectCharacter:p},inject:["notifyChange"],data:function(){return{skill1:6,skill2:6,skill3:6,constellation:0,level:{ascend:!1,level:1},characterName:"anbo"}},methods:{handleChangeCharacter:function(t){t!==this.characterName&&(this.characterName=t,this.notifyChange("character",t))},handleChangeLevel:function(t){this.level.level=parseInt(t),this.level.ascend=-1!==t.indexOf("+")},getExtraConfig:function(){if(!this.needExtraConfig)return{};var t=this.$refs.extraConfig;return t.compact?t.compact():Object.assign({},t.$data)},getCharacterConfig:function(){return{name:this.characterName,skill1:this.skill1,skill2:this.skill2,skill3:this.skill3,constellation:this.constellation,ascend:this.level.ascend,level:this.level.level,args:this.getExtraConfig()}},setCharacterConfig:function(t){var e=this;this.characterName=t.name,this.skill1=t.skill1,this.skill2=t.skill2,this.skill3=t.skill3,this.constellation=t.constellation,this.level.ascend=t.ascend,this.level.level=t.level,this.$nextTick((function(){e.needExtraConfig&&e.$refs.extraConfig.setData(t.args)}))}},computed:{levelText:function(){var t=this.level.ascend,e=this.level.level,s=[20,40,50,60,70,80];return-1===s.indexOf(e)?e.toString():"".concat(e).concat(t?"+":"-")},c:function(){return n.x[this.characterName]},needExtraConfig:function(){return!!this.c.config}}},m=C,g=(0,f.Z)(m,a,l,!1,null,"03d85744",null),_=g.exports},53111:function(t,e,s){var a=s(1702),l=s(84488),n=s(41340),i=s(81361),c=a("".replace),r="["+i+"]",o=RegExp("^"+r+r+"*"),u=RegExp(r+r+"*$"),v=function(t){return function(e){var s=n(l(e));return 1&t&&(s=c(s,o,"")),2&t&&(s=c(s,u,"")),s}};t.exports={start:v(1),end:v(2),trim:v(3)}},81361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9653:function(t,e,s){"use strict";var a=s(19781),l=s(17854),n=s(1702),i=s(54705),c=s(31320),r=s(92597),o=s(79587),u=s(47976),v=s(52190),f=s(57593),h=s(47293),p=s(8006).f,C=s(31236).f,m=s(3070).f,g=s(50863),_=s(53111).trim,d="Number",k=l[d],x=k.prototype,N=l.TypeError,E=n("".slice),b=n("".charCodeAt),y=function(t){var e=f(t,"number");return"bigint"==typeof e?e:I(e)},I=function(t){var e,s,a,l,n,i,c,r,o=f(t,"number");if(v(o))throw N("Cannot convert a Symbol value to a number");if("string"==typeof o&&o.length>2)if(o=_(o),e=b(o,0),43===e||45===e){if(s=b(o,2),88===s||120===s)return NaN}else if(48===e){switch(b(o,1)){case 66:case 98:a=2,l=49;break;case 79:case 111:a=8,l=55;break;default:return+o}for(n=E(o,2),i=n.length,c=0;c<i;c++)if(r=b(n,c),r<48||r>l)return NaN;return parseInt(n,a)}return+o};if(i(d,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var S,L=function(t){var e=arguments.length<1?0:k(y(t)),s=this;return u(x,s)&&h((function(){g(s)}))?o(Object(e),s,L):e},$=a?p(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;$.length>T;T++)r(k,S=$[T])&&!r(L,S)&&m(L,S,C(k,S));L.prototype=x,x.constructor=L,c(l,d,L)}}}]);