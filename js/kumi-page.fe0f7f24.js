"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[416],{89415:function(t,e,i){i.d(e,{Z:function(){return o}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"button-root",on:{click:function(e){return t.$emit("click")}}},[i("i",{class:[t.icon]})])},a=[],r={name:"MyButton1",props:{icon:{default:"el-icon-delete"}}},s=r,c=i(1001),l=(0,c.Z)(s,n,a,!1,null,"a232d95c",null),o=l.exports},24044:function(t,e,i){i.d(e,{Z:function(){return m}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"artifact",class:{selectable:t.selectable,omit:t.item.omit},style:t.artifactStyle,on:{click:t.handleClick}},[i("div",{staticClass:"up"},[t.showBack?i("div",{staticClass:"back",style:{width:100*t.backValue+"%"}}):t._e(),i("span",{staticClass:"name"},[t._v(" "+t._s(t.displayedTitle)+" ")]),t.buttons?i("div",{staticClass:"buttons"},[t.lockButton?i("el-button",{staticClass:"mybutton",attrs:{icon:t.item.omit?"el-icon-unlock":"el-icon-lock",circle:"",size:"mini",type:"text",title:t.item.omit?"启用":"禁用"},on:{click:function(e){return e.stopPropagation(),t.$emit("toggle")}}}):t._e(),t.deleteButton?i("el-button",{staticClass:"mybutton",attrs:{icon:"el-icon-delete",circle:"",size:"mini",type:"text",title:"删除"},on:{click:function(e){return e.stopPropagation(),t.$emit("delete")}}}):t._e(),t.editButton?i("el-button",{staticClass:"mybutton",attrs:{icon:"el-icon-edit",circle:"",size:"mini",type:"text",title:"编辑"},on:{click:function(e){return e.stopPropagation(),t.$emit("edit")}}}):t._e()],1):t._e(),t.extra?i("span",{staticClass:"extra fs-12"},[t._v(t._s(t.extra))]):t._e()]),i("div",{staticClass:"down"},[i("div",[i("img",{staticClass:"myimage",style:{background:t.imageBackground},attrs:{src:t.imageSrc}})]),i("div",{staticClass:"detail-div"},[i("p",{staticClass:"main-tag"},[t._v(t._s(t.mainDisplayTag))]),t._l(t.secTags,(function(e,n){return i("p",{key:n,staticClass:"sec-tag"},[t._v(" "+t._s(e)+" ")])}))],2)])])},a=[],r=i(4222),s=i(36110),c=i(67817),l={name:"ArtifactDisplay",props:{item:{type:Object,default:()=>({setName:"luckyDog",position:"cup",mainTag:{name:"attackPercentage",value:.1},normalTags:[{name:"defendStatic",value:20},{name:"attackPercentage",value:.3},{name:"attackPercentage",value:.3},{name:"attackPercentage",value:.3}],omit:!1})},selectable:{type:Boolean,default:!1},extra:{type:String,default:""},buttons:{default:!1},deleteButton:{default:!1},lockButton:{default:!0},editButton:{default:!1},showBack:{default:!1},backValue:{default:1}},methods:{handleClick(){this.selectable&&this.$emit("click")}},computed:{displayedTitle(){let t=s.oN[this.item.setName];if(!t)throw"no artifact";let e="not exist";return t[this.item.position]&&(e=t[this.item.position].chs,Object.prototype.hasOwnProperty.call(this.item,"level")?e+="+"+this.item.level:e+="+??"),e},displayedStar(){return this.item.star||"??"},imageSrc(){let t=s.oN[this.item.setName];if(!t)throw"no artifact";if(t[this.item.position])return t[this.item.position].url;throw"error no position"},mainDisplayTag(){return(0,r.jH)(this.item.mainTag.name,this.item.mainTag.value)},secTags(){let t=[];for(let e of this.item.normalTags)t.push((0,r.jH)(e.name,e.value));return t},imageBackground(){let t=this.item.star??5;return c.Z[t-1]},artifactStyle(){return{}}}},o=l,u=i(1001),f=(0,u.Z)(o,n,a,!1,null,"489aa8da",null),m=f.exports},96186:function(t,e,i){i.d(e,{Z:function(){return o}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"root",on:{click:function(e){return t.$emit("click")}}},[""!==t.back?i("img",{attrs:{src:t.back}}):t._e(),i("span",{staticClass:"s1"}),i("span",{staticClass:"s2"}),i("span",{staticClass:"s3"}),i("span",{staticClass:"s4"}),t._v(" + ")])},a=[],r={name:"AddButton",props:{back:{default:""}}},s=r,c=i(1001),l=(0,c.Z)(s,n,a,!1,null,"f016431a",null),o=l.exports},4016:function(t,e,i){i.d(e,{Z:function(){return d}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"filters"},[i("span",[t._v("主词条：")]),i("select-artifact-main-stat",{model:{value:t.filterMainTag,callback:function(e){t.filterMainTag=e},expression:"filterMainTag"}}),i("span",[t._v("套装：")]),i("select-artifact-set",{attrs:{"any-option":""},model:{value:t.filterArtifactSetName,callback:function(e){t.filterArtifactSetName=e},expression:"filterArtifactSetName"}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.artifactListDisplayed.length>0,expression:"artifactListDisplayed.length > 0"}],staticClass:"artifacts"},t._l(t.artifactListDisplayed,(function(e){return i("artifact-display",{key:e.id,attrs:{item:e,selectable:""},on:{click:function(i){return t.$emit("select",e.id)}}})})),1),i("div",{directives:[{name:"show",rawName:"v-show",value:0===t.artifactListDisplayed.length,expression:"artifactListDisplayed.length === 0"}],staticClass:"no-artifacts"},[i("el-empty")],1),i("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,total:t.artifactList.length},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)},a=[],r=i(60630),s=i(93972),c=i(24044);const l=20;var o={name:"SelectArtifact",components:{SelectArtifactMainStat:r.Z,SelectArtifactSet:s.Z,ArtifactDisplay:c.Z},props:{position:{}},created(){this.pageSize=l},data(){return{filterMainTag:"any",filterArtifactSetName:"any",currentPage:1}},computed:{artifactListUnfiltered(){if("any"===this.position)return this.$store.getters["artifacts/allFlat"];const t=this.$store.state.artifacts[this.position];return t},artifactList(){let t=[];for(let e of this.artifactListUnfiltered)"any"!==this.filterMainTag&&this.filterMainTag!==e.mainTag.name||"any"!==this.filterArtifactSetName&&this.filterArtifactSetName!==e.setName||t.push(e);return t},artifactListDisplayed(){const t=(this.currentPage-1)*l,e=Math.min(t+l,this.artifactList.length);return this.artifactList.slice(t,e)}}},u=o,f=i(1001),m=(0,f.Z)(u,n,a,!1,null,"dce6579e",null),d=m.exports},60630:function(t,e,i){i.d(e,{Z:function(){return u}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-select",{attrs:{value:t.value,size:"small",multiple:t.multiple},on:{input:function(e){return t.$emit("input",e)}}},[t.includeAny?i("el-option",{attrs:{label:"任意",value:"any"}}):t._e(),t._l(t.tagList,(function(t){return i("el-option",{key:t.name,attrs:{label:t.title,value:t.name}})}))],2)},a=[],r=i(98017),s={name:"SelectArtifactMainStat",props:{value:{},includeAny:{default:!0},multiple:{default:!1},position:{default:null}},computed:{tagList(){let t=[];if(this.position)for(let e of r.nl[this.position])t.push({name:e,title:r.vB[e].chs});else for(let e in r.vB)t.push({name:e,title:r.vB[e].chs});return t}}},c=s,l=i(1001),o=(0,l.Z)(c,n,a,!1,null,null,null),u=o.exports},93972:function(t,e,i){i.d(e,{Z:function(){return d}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-select",{attrs:{value:t.value,disabled:t.disabled,size:"small",multiple:t.multiple,"multiple-limit":t.multipleLimit},on:{input:function(e){return t.$emit("input",e)}}},[t.anyOption?i("el-option",{attrs:{label:"任意",value:"any"}}):t._e(),t._l(t.allArtifactsName,(function(e){return i("el-option",{key:e.name,attrs:{label:e.chs,value:e.name}},[i("div",{staticClass:"item"},[i("img",{staticClass:"tn",attrs:{src:e.url}}),i("span",[t._v(t._s(e.chs))])])])}))],2)},a=[],r=i(36110),s=i(4222);let c=Object.values(r.oN);c.sort(((t,e)=>e.maxStar-t.maxStar));let l=c.map((t=>({name:t.eng,chs:t.chs,url:(0,s.Lk)(t.eng)})));var o={name:"SelectArtifactSet",created:function(){this.allArtifactsName=l},props:{value:{type:String,required:!0},disabled:{type:Boolean,default:!1},anyOption:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},multipleLimit:{default:2}}},u=o,f=i(1001),m=(0,f.Z)(u,n,a,!1,null,"470a80ef",null),d=m.exports},67817:function(t,e){e["Z"]=["rgb(125,127,131)","rgb(108,168,139)","rgb(86,155,175)","rgb(177,135,195)","rgb(211,159,81)"]},1082:function(t,e,i){i.r(e),i.d(e,{default:function(){return Z}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-breadcrumb",[i("el-breadcrumb-item",[t._v("圣遗物组")])],1),i("el-divider"),i("el-dialog",{attrs:{visible:t.showSelectArtifactDialog,title:"选择圣遗物",width:"80%"},on:{"update:visible":function(e){t.showSelectArtifactDialog=e}}},[i("select-artifact",{attrs:{position:t.selectArtifactPosition},on:{select:t.handleSelectArtifact}})],1),i("el-row",{attrs:{gutter:16}},[i("el-col",{staticClass:"left",attrs:{span:4}},[i("div",{staticClass:"toolbar"},[i("my-button1",{attrs:{icon:"el-icon-plus",title:"新建收藏夹"},on:{click:t.handleNewDir}})],1),i("div",{staticClass:"mona-scroll",style:{height:t.contentHeight}},[i("my-list",{attrs:{items:t.items},model:{value:t.currentDirId,callback:function(e){t.currentDirId=e},expression:"currentDirId"}})],1)]),i("el-col",{staticClass:"right-col",attrs:{span:20}},[i("div",{staticClass:"toolbar2"},[i("div",{staticClass:"button-left"},[i("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:t.handleNewKumi}},[t._v("新建组")]),i("el-input",{staticStyle:{"margin-left":"16px"},attrs:{size:"mini",placeholder:"搜索"},scopedSlots:t._u([{key:"append",fn:function(){return[i("i",{staticClass:"el-icon-search"})]},proxy:!0}]),model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}})],1),i("div",{staticClass:"button-right"},[0!==t.currentDirId?i("el-button",{attrs:{size:"mini",type:"danger",title:"删除收藏夹"},on:{click:function(e){return t.handleDeleteDir(t.currentDirId)}}},[i("i",{staticClass:"el-icon-delete"})]):t._e(),0!==t.currentDirId?i("el-button",{attrs:{size:"mini",icon:"el-icon-edit"},on:{click:function(e){return t.handleRenameDir(t.currentDirId)}}},[t._v("重命名")]):t._e()],1)]),i("div",{ref:"content",staticClass:"items mona-scroll",style:{height:t.contentHeight}},[t.filteredKumiList.length>0?i("div",t._l(t.filteredKumiList,(function(e){return i("kumi-item",{key:e.id,attrs:{data:e},on:{delete:function(i){return t.handleDeleteKumi(e.id)},edit:function(i){return t.handleEditKumi(e.id)},click:function(i){return t.handleClickPosition(e.id,i)},deleteArtifact:function(i){return t.handleDeleteArtifact(e.id,i)}}})})),1):i("div",[i("el-empty")],1)])])],1)],1)},a=[],r=i(26294),s=i(42246),c=i(81289),l=i.n(c),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",t._l(t.items,(function(e){return i("li",{key:e.index,class:{active:e.index===t.value},on:{click:function(i){return t.$emit("input",e.index)}}},[t._v(" "+t._s(e.title)+" ")])})),0)},u=[],f={name:"MyList",props:["value","items"]},m=f,d=i(1001),p=(0,d.Z)(m,o,u,!1,null,"93c69620",null),h=p.exports,g=i(89415),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"up"},[i("p",{staticClass:"title"},[t._v(t._s(t.data.title))]),i("div",{staticClass:"buttons"},[i("el-button",{attrs:{type:"text",icon:"el-icon-delete",title:"删除"},on:{click:function(e){return t.$emit("delete")}}}),i("el-button",{attrs:{type:"text",icon:"el-icon-edit",title:"重命名"},on:{click:function(e){return t.$emit("edit")}}})],1)]),i("div",{staticClass:"body"},[t._l(t.positions,(function(e){return[t.artifactBySlot[e]?i("artifact-display",{key:e,staticClass:"artifact-item",attrs:{width:"200px",item:t.artifactBySlot[e],selectable:"",buttons:!0,"lock-button":!1,"delete-button":!0},on:{click:function(i){return t.$emit("click",e)},delete:function(i){return t.$emit("deleteArtifact",t.artifactBySlot[e].id)}}}):i("add-button",{key:e,staticClass:"artifact-item",on:{click:function(i){return t.$emit("click",e)}}})]}))],2)])},k=[],y=i(98017),b=i(96186),_=i(24044),S={name:"KumiItem",components:{AddButton:b.Z,ArtifactDisplay:_.Z},props:["data"],created(){this.positions=y.m7},computed:{...(0,r.mapGetters)("artifacts",["artifactsById"]),artifacts(){let t=[];for(let e of this.data.artifactIds)Object.prototype.hasOwnProperty.call(this.artifactsById,e)&&t.push(this.artifactsById[e]);return t},artifactBySlot(){let t={};for(let e of this.artifacts){const i=e.position;t[i]=e}return t}}},C=S,D=(0,d.Z)(C,v,k,!1,null,"22701bd6",null),I=D.exports,w=i(4016),x={name:"KumiPage",components:{MyButton1:g.Z,MyList:h,KumiItem:I,SelectArtifact:w.Z},mounted(){const t=this.$refs["content"],e=t.getBoundingClientRect();this.contentHeight=`calc(100vh - ${e.top}px)`},data(){return{currentDirId:0,showSelectArtifactDialog:!1,selectArtifactPosition:"flower",underSelectionKumiId:0,contentHeight:"100px",searchString:""}},computed:{...(0,r.mapGetters)("kumi",["directories","kumiByDir"]),items(){let t=[];for(let e of this.directories)t.push({index:e.id,title:e.title});return t},currentKumiList(){return(0,s.j8)(this.currentDirId)},fuse(){return new(l())(this.currentKumiList,{keys:["title"]})},filteredKumiList(){if(""===this.searchString)return this.currentKumiList;const t=this.fuse.search(this.searchString);return t.map((t=>t.item))}},watch:{"$store.state.accounts.currentAccountId":{handler(){this.currentDirId=0},immediate:!1}},methods:{handleNewDir(){this.getInputDirName("新建","收藏夹名").then((t=>{(0,s.jq)(t)})).catch(this.handleInputResult)},handleDeleteDir(t){0!==t&&(0,s.P$)(t)},handleRenameDir(t){this.getInputDirName("重命名","新收藏夹名").then((e=>{(0,s.UE)(t,e)})).catch(this.handleInputResult)},handleNewKumi(){this.getInputKumiName("新建","圣遗物组名").then((t=>{(0,s.Ee)(this.currentDirId,t)})).catch(this.handleInputResult)},handleDeleteKumi(t){(0,s.At)(t)},handleEditKumi(t){this.getInputKumiName("重命名","新圣遗物组名").then((e=>{(0,s.UE)(t,e)})).catch(this.handleInputResult)},handleSelectArtifact(t){this.showSelectArtifactDialog=!1,(0,s.JN)(this.underSelectionKumiId,t)},handleDeleteArtifact(t,e){(0,s.fF)(t,e)},handleClickPosition(t,e){this.selectArtifactPosition=e,this.showSelectArtifactDialog=!0,this.underSelectionKumiId=t},handleInputResult(t){t.error&&this.$message.error(t.reason)},getInputKumiName(t,e){return new Promise(((i,n)=>{this.$prompt(e??"请输入名称",t??"名称",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((({value:t})=>{const e=(0,s.O5)(this.currentDirId,t);e.error?n({error:!0,reason:e.reason}):i(t)})).catch((()=>{n({error:!1,reason:null})}))}))},getInputDirName(t,e){return new Promise(((i,n)=>{this.$prompt(e??"请输入名称",t??"名称",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((({value:t})=>{const e=(0,s.ym)(t);e.error?n({error:!0,reason:e.reason}):i(t)})).catch((()=>{n({error:!1,reason:null})}))}))}}},A=x,B=(0,d.Z)(A,n,a,!1,null,"eac08ca2",null),Z=B.exports},42246:function(t,e,i){i.d(e,{At:function(){return d},Ee:function(){return f},GV:function(){return m},JN:function(){return v},O5:function(){return u},P$:function(){return h},UE:function(){return p},fF:function(){return k},j8:function(){return o},jq:function(){return c},wJ:function(){return y},ym:function(){return l}});var n=i(55138);function a(){let t=n.Z.getters["kumi/dirNames"];for(let e=0;e<100;e++){const i=`收藏夹${e}`;if(!t.has(i))return i}return`收藏夹${Math.floor(1e5*Math.random())}`}function r(t){const e=o(t);let i=new Set;for(let n of e)i.add(n.title);return i}function s(t){let e=r(t);for(let i=0;i<100;i++){const t=`圣遗物组${i}`;if(!e.has(t))return t}return`圣遗物组${Math.floor(1e5*Math.random())}`}function c(t){const e=t??a();n.Z.commit("kumi/newDir",{name:e})}function l(t){if(""===t||!t)return{error:!0,reason:"名称为空"};const e=n.Z.getters["kumi/dirNames"];return e.has(t)?{error:!0,reason:"名称已存在"}:{error:!1}}function o(t){const e=n.Z.getters["kumi/kumiByDir"][t];if(!e)return[];const i=n.Z.state.kumi.kumi;let a=[];for(let n of e)a.push(i[n]);return a}function u(t,e){if(""===e||!e)return{error:!0,reason:"名称为空"};let i=r(t);return i.has(e)?{error:!0,reason:"名称已存在"}:{error:!1}}function f(t,e){const i=e??s(t);n.Z.commit("kumi/newKumi",{artifactIds:[],title:i,dirId:t})}function m(t,e,i){n.Z.commit("kumi/newKumi",{artifactIds:i,title:e,dirId:t})}function d(t){n.Z.commit("kumi/deleteKumi",{id:t})}function p(t,e){n.Z.commit("kumi/renameItem",{id:t,name:e})}function h(t){n.Z.commit("kumi/deleteDir",{id:t})}function g(t){return n.Z.state.kumi.kumi[t]}function v(t,e){const i=n.Z.getters["artifacts/artifactsById"],a=i[e];if(!a)return;const r=a.position;let s=[e];const c=g(t);if(!c)return;const l=c.artifactIds??[];for(let n of l){const t=i[n];t&&t.position===r||s.push(n)}n.Z.commit("kumi/updateKumiArtifact",{artifactIds:s,kumiId:t})}function k(t,e){const i=g(t);if(!i)return;let a=i.artifactIds??[],r=a.indexOf(e);-1!==r&&a.splice(r,1),n.Z.commit("kumi/updateKumiArtifact",{artifactIds:a,kumiId:t})}function y(t){const e=g(t);if(!e)return[];let i=e.artifactIds??[],n=new Set;for(let a of i)n.add(a);return n}},4222:function(t,e,i){i.d(e,{F_:function(){return o},Lk:function(){return c},MI:function(){return l},jH:function(){return r},ut:function(){return s}});var n=i(98017),a=i(36110);function r(t,e){let i=n.vB[t];if(!i)throw"tag name not exist";let a="";switch(t){case"attackPercentage":case"attackStatic":a="攻击力";break;case"lifePercentage":case"lifeStatic":a="生命值";break;case"defendPercentage":case"defendStatic":a="防御力";break;default:a=i.chs;break}if(i.percentage){let t=(100*e).toFixed(1);return a+"+"+t+"%"}return a+"+"+e}function s(t,e){let i=n.vB[t];if(!i)throw"tag name not exist";return i.percentage?(100*e).toFixed(1):e}function c(t){let e=a.oN[t];return e["flower"]?e["flower"].url:e["head"].url}function l(t,e){let i=parseFloat(e);return n.vB[t].percentage?i/100:i}function o(t,e){return a.oN[t][e].chs}}}]);