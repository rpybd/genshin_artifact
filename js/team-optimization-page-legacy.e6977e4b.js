"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[121],{24928:function(t,e,s){s.r(e),s.d(e,{default:function(){return N}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-drawer",{attrs:{title:"面板",visible:t.showAttributeDrawer,size:t.deviceIsPC?"30%":"100%"},on:{"update:visible":function(e){t.showAttributeDrawer=e}}},[t.wasmAttribute?[s("div",{staticStyle:{padding:"0 20px"}},[s("attribute-panel",{attrs:{attribute:t.wasmAttribute}})],1)]:[s("el-empty",[t._v("In theory, in should not see this")])]],2),s("el-row",{attrs:{gutter:16}},[s("el-col",{staticClass:"mona-scroll-hidden left",attrs:{md:6,sm:24}},[s("div",{staticStyle:{"margin-bottom":"12px"}},[s("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-cpu"},on:{click:t.handleClickStart}},[t._v("开始计算")]),s("el-button",{attrs:{size:"mini",icon:"el-icon-plus"},on:{click:t.handleClickAddMember}},[t._v("添加成员")])],1),t._l(t.presetNames,(function(e,i){return s("div",{key:i,staticClass:"member-item"},[s("div",{staticClass:"member-header",staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[s("p",{staticClass:"team-title"},[t._v("成员"+t._s(i+1))]),s("div",[s("el-button",{staticStyle:{color:"white"},attrs:{circle:"",size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(e){return t.handleDeleteMember(i)}}})],1)]),s("p",{staticClass:"common-title2"},[t._v("计算预设")]),s("select-preset",{model:{value:t.presetNames[i],callback:function(e){t.$set(t.presetNames,i,e)},expression:"presetNames[index]"}}),s("p",{staticClass:"common-title2"},[t._v("权重")]),s("el-slider",{staticStyle:{"padding-left":"8px"},attrs:{min:0,max:1,step:.01,"show-input":!0},model:{value:t.weights[i],callback:function(e){t.$set(t.weights,i,e)},expression:"weights[index]"}})],1)}))],2),s("el-col",{staticClass:"mona-scroll-hidden right",attrs:{md:18,sm:24}},[t.currentResultEntry?[s("el-input-number",{staticStyle:{"margin-bottom":"12px"},attrs:{value:t.resultIndex+1,min:1,max:t.results.length,size:"small"},on:{input:t.handleChangeResultIndex}}),t._l(t.currentResultEntry,(function(e,i){return s("div",{key:i,staticClass:"result-item"},[s("div",{staticClass:"result-item-top"},[s("div",[s("el-button",{attrs:{icon:"el-icon-s-data",circle:"",size:"mini",type:"text",title:"查看面板"},on:{click:function(e){return t.handleClickDisplayAttributePanel(i)}}})],1),s("div",{staticClass:"result-item-buttons"})]),s("div",{staticClass:"result-item-content"},t._l(t.currentResultEntry[i],(function(e){return s("artifact-display",{key:e,attrs:{item:t.artifactsById[e],buttons:!0,"lock-button":!0,"delete-button":!1,"edit-button":!1},on:{toggle:function(s){return t.handleToggleArtifact(e)}}})})),1)])}))]:[s("div",{staticStyle:{display:"flex","justify-content":"center"}},[s("el-empty")],1)]],2)],1)],1)},n=[],r=s(62032),a=s(4367),l=s(16198),c=(s(35666),s(41539),s(26833),s(57327),s(21249),s(26294)),u=s(65735),o=s(64273),h=s(39285),m=s(67828),f=s(60058),p=s(79699),d=s(16746),v=s(77921),y=s(65010),b=s(89415),g=s(37632),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-select",{attrs:{size:"small",value:t.value},on:{input:function(e){return t.$emit("input",e)}}},t._l(t.list,(function(t){return s("el-option",{key:t,attrs:{label:t,value:t}})})),1)},x=[],k=(s(68309),{name:"SelectPreset",props:["value"],computed:(0,a.Z)((0,a.Z)({},(0,c.mapGetters)("presets",["allFlat"])),{},{list:function(){var t,e=[],s=(0,r.Z)(this.allFlat);try{for(s.s();!(t=s.n()).done;){var i=t.value;e.push(i.name)}}catch(n){s.e(n)}finally{s.f()}return e}})}),I=k,C=s(1001),A=(0,C.Z)(I,w,x,!1,null,"0cfb48b7",null),_=A.exports,Z=s(96581),z={name:"TeamOptimizationPage",components:{SelectCharacter:p.Z,SelectWeapon:d.Z,ItemConfig:v.Z,ArtifactDisplay:y.Z,MyButton1:b.Z,PresetItem:g.Z,SelectPreset:_,AttributePanel:Z.Z},data:function(){return{results:[],resultIndex:0,presetNames:[null],weights:[],showAttributeDrawer:!1,wasmAttribute:null,deviceIsPC:f.B}},methods:{handleClickAddMember:function(){8!==this.presetNames.length?(this.presetNames.push(null),this.weights.push(0)):this.$message.error("最多支持8个成员")},handleDeleteMember:function(t){1!==this.presetNames.length&&(this.$delete(this.presetNames,t),this.$delete(this.weights,t))},handleClickStart:function(){var t=this,e=this.presets.length===this.presetNames.length;if(e){var s=this.optimizeTeamWasmInterface,i=this.filteredArtifactsWasm,n=this.$loading({lock:!0,text:"莫娜占卜中（可能需要数分钟）"});(0,o.YK)(s,i).then((function(e){t.results=e.artifacts,t.resultIndex=0})).catch((function(t){console.log(t)})).finally((function(){n.close()}))}else this.$message.error("请选择计算预设")},handleChangeResultIndex:function(t){this.resultIndex=t-1},handleClickDisplayAttributePanel:function(){var t=(0,l.Z)(regeneratorRuntime.mark((function t(e){var s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=this.wasmGetAttributeInterface(e),t.next=3,(0,o.le)(s);case 3:i=t.sent,this.wasmAttribute=i,this.showAttributeDrawer=!0;case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),wasmGetAttributeInterface:function(t){var e=this,s=[];if(this.currentResultEntry){var i=Object.values(this.currentResultEntry[t]),n=i.map((function(t){return e.artifactsById[t]})).filter((function(t){return t}));s=n.map((function(t){return(0,u.Lz)(t)}))}return{character:this.presets[t].item.character,weapon:this.presets[t].item.weapon,buffs:this.presets[t].item.buffs,artifacts:s}},handleClickSaveAsKumi:function(t){var e=this;if(this.currentResultEntry){var s=Object.values(this.currentResultEntry[t]);s.map((function(t){return e.artifactsById[t]})).filter((function(t){return t}))}},handleToggleArtifact:function(t){(0,m.kY)(t)}},computed:(0,a.Z)((0,a.Z)({},(0,c.mapGetters)("artifacts",{artifactsFlat:"allFlat",artifactsById:"artifactsById"})),{},{singleInterfaces:function(){return this.presets.map((function(t){return(0,h.DR)(t.item)}))},currentResultEntry:function(){return 0===this.results.length?null:this.results[this.resultIndex]},filteredArtifacts:function(){var t,e=[],s=(0,r.Z)(this.artifactsFlat);try{for(s.s();!(t=s.n()).done;){var i=t.value;i.level>=16&&e.push(i)}}catch(n){s.e(n)}finally{s.f()}return e.filter((function(t){return!t.omit}))},filteredArtifactsWasm:function(){return this.filteredArtifacts.map(u.Lz)},presets:function(){var t,e=[],s=(0,r.Z)(this.presetNames);try{for(s.s();!(t=s.n()).done;){var i=t.value;i&&e.push((0,h.kE)(i))}}catch(n){s.e(n)}finally{s.f()}return e},optimizeTeamHyperParamInterface:function(){return{mva_step:5,work_space:1e3,max_re_optimize:5,max_search:1e6,count:1e3}},optimizeTeamWasmInterface:function(){return{single_interfaces:this.singleInterfaces,weights:this.weights,hyper_param:this.optimizeTeamHyperParamInterface}}}),watch:{"$store.state.accounts.currentAccountId":function(){this.results=[],this.resultIndex=0,this.presetNames=[null],this.weights=[]}}},S=z,R=(0,C.Z)(S,i,n,!1,null,"06b788f1",null),N=R.exports}}]);