"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[416],{99777:function(t,e,a){a.r(e),a.d(e,{default:function(){return S}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",[a("el-breadcrumb-item",[t._v("圣遗物统计")])],1),a("el-divider"),a("el-row",{staticStyle:{"margin-bottom":"16px"}},[a("el-col",{attrs:{span:24}},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[t._v(" 副词条效率分布（只计入20级5星圣遗物） ")]),a("div",{staticStyle:{height:"400px"}},[a("v-chart",{attrs:{option:t.subStatEffDistribution.options}})],1),a("el-tag",[t._v(" 圣遗物综合分数："+t._s(t.overallRating.toFixed(3))+" ")])],1)],1)],1),a("el-row",{staticStyle:{"margin-bottom":"16px"},attrs:{gutter:16}},[a("el-col",{attrs:{span:12}},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[t._v(" 星级分布 ")]),a("div",{staticStyle:{height:"400px"}},[a("v-chart",{attrs:{option:t.starDistribution}})],1)])],1),a("el-col",{attrs:{span:12}},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[t._v(" 等级分布 ")]),a("div",{staticStyle:{height:"400px"}},[a("v-chart",{attrs:{option:t.levelDistribution}})],1)])],1)],1),a("el-row",{attrs:{gutter:16}},[a("el-col",{attrs:{span:8}},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[t._v(" 时之沙主词条分布 "),a("div",{staticStyle:{float:"right"}},[a("el-switch",{attrs:{"active-text":">=16级"},model:{value:t.sandMainStat16Only,callback:function(e){t.sandMainStat16Only=e},expression:"sandMainStat16Only"}})],1)]),a("div",{staticStyle:{height:"300px"}},[a("v-chart",{attrs:{option:t.sandMainStatDistribution}})],1)])],1),a("el-col",{attrs:{span:8}},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[t._v(" 空之杯主词条分布 "),a("div",{staticStyle:{float:"right"}},[a("el-switch",{attrs:{"active-text":">=16级"},model:{value:t.cupMainStat16Only,callback:function(e){t.cupMainStat16Only=e},expression:"cupMainStat16Only"}})],1)]),a("div",{staticStyle:{height:"300px"}},[a("v-chart",{attrs:{option:t.cupMainStatDistribution}})],1)])],1),a("el-col",{attrs:{span:8}},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[t._v(" 理之冠主词条分布 "),a("div",{staticStyle:{float:"right"}},[a("el-switch",{attrs:{"active-text":">=16级"},model:{value:t.headMainStat16Only,callback:function(e){t.headMainStat16Only=e},expression:"headMainStat16Only"}})],1)]),a("div",{staticStyle:{height:"300px"}},[a("v-chart",{attrs:{option:t.headMainStatDistribution}})],1)])],1)],1)],1)},i=[],l=a(20629);function n(t){let e=t.$store.getters["artifacts/allFlat"],a=[0,0,0,0,0];for(let i=0;i<e.length;i++){let t=e[i].star??5;a[t-1]++}let r={tooltip:{trigger:"item"},legend:{left:"left",orient:"vertical"},series:[{name:"品质分布",type:"pie",radius:["40%","70%"],label:{show:!1},itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:[{value:a[0],name:"1星"},{value:a[1],name:"2星"},{value:a[2],name:"3星"},{value:a[3],name:"4星"},{value:a[4],name:"5星"}]}]};return r}function s(t){let e=t.$store.getters["artifacts/allFlat"],a=Array(21).fill(0);for(let i=0;i<e.length;i++){let t=e[i].level??20;a[t]++}let r={tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"等级分布",type:"pie",radius:["40%","70%"],label:{show:!1},itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:a.map(((t,e)=>({value:t,name:`${e}级`}))).filter((t=>t.value>0))}]};return r}var o=a(73334),d=a(28054);function c(t){let e=t.$store.getters["artifacts/allArtifacts"].sand;t.sandMainStat16Only&&(e=e.filter((t=>(t.level??20)>=16)));let a={};for(let i of o.Fb.sand)a[i]=0;for(let i=0;i<e.length;i++){let t=e[i].mainTag.name;a[t]++}let r={tooltip:{trigger:"item"},series:[{name:"时之沙主词条分布",type:"pie",radius:["40%","70%"],itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:Object.keys(a).map((t=>({name:d.C[t].chs,value:a[t]}))).filter((t=>t.value>0))}]};return r}function u(t){let e=t.$store.getters["artifacts/allArtifacts"].cup;t.cupMainStat16Only&&(e=e.filter((t=>(t.level??20)>=16)));let a={};for(let i of o.Fb.cup)a[i]=0;for(let i=0;i<e.length;i++){let t=e[i].mainTag.name;a[t]++}let r={tooltip:{trigger:"item"},series:[{name:"空之杯主词条分布",type:"pie",radius:["40%","70%"],itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:Object.keys(a).map((t=>({name:d.C[t].chs,value:a[t]}))).filter((t=>t.value>0))}]};return r}function f(t){let e=t.$store.getters["artifacts/allArtifacts"].head;t.headMainStat16Only&&(e=e.filter((t=>(t.level??20)>=16)));let a={};for(let i of o.Fb.head)a[i]=0;for(let i=0;i<e.length;i++){let t=e[i].mainTag.name;a[t]++}let r={tooltip:{trigger:"item"},series:[{name:"理之冠主词条分布",type:"pie",radius:["40%","70%"],itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:Object.keys(a).map((t=>({name:d.C[t].chs,value:a[t]}))).filter((t=>t.value>0))}]};return r}var h=a(19762);function v(t){let e=t.$store.getters["artifacts/allFlat"];e=e.filter((t=>{let e=t.level??20;return 20===e}));let a={};for(let l in h.Z[5])a[l]=0;for(let l=0;l<e.length;l++){let t=e[l],r=t.star??5;if(r<=3)continue;let i=h.Z[r];for(let e=0;e<t.normalTags.length;e++){let r=t.normalTags[e],l=r.value/i[r.name][3];a[r.name]+=l}}let r=Object.values(a).reduce(((t,e)=>t+e)),i={tooltip:{trigger:"item"},legend:{left:"left",orient:"vertical"},series:[{name:"副词条效率分布",type:"pie",radius:["40%","70%"],label:{formatter:({data:t})=>0===r?"没有满足条件的圣遗物":`${t.name}: ${(100*t.value/r).toFixed(3)}%`},itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:Object.keys(a).map((t=>({name:d.C[t].chs,value:a[t]}))).filter((t=>t.value>0))}]};return{options:i,eff:a}}var p={name:"ArtifactsStatisticsPage",data(){return{sandMainStat16Only:!1,cupMainStat16Only:!1,headMainStat16Only:!1}},computed:{...(0,l.Se)("artifacts",["allArtifacts"]),starDistribution(){return n(this)},levelDistribution(){return s(this)},sandMainStatDistribution(){return c(this)},cupMainStatDistribution(){return u(this)},headMainStatDistribution(){return f(this)},subStatEffDistribution(){return v(this)},overallRating(){let t=this.subStatEffDistribution.eff,e={critical:1,lifePercentage:.1,attackPercentage:1,recharge:.1,defendPercentage:.08,criticalDamage:1,attackStatic:.2,defendStatic:.05,elementalMastery:.5,lifeStatic:0},a=Object.values(t).reduce(((t,e)=>t+e)),r=0;for(let i in e)r+=e[i]*t[i];return 100*r/a}}},m=p,b=a(1001),g=(0,b.Z)(m,r,i,!1,null,"cb905ed6",null),S=g.exports}}]);