"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[641],{11641:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root"},[a("div",{staticClass:"chart-div"},[a("v-chart",{attrs:{option:t.chartOptionForEChart,autoresize:!0}})],1),a("div",{staticClass:"table-div"},[a("el-table",{ref:"table",attrs:{data:t.tableDataForElementUI,size:"mini"},on:{"selection-change":function(e){t.selection=e}}},[a("el-table-column",{attrs:{type:"selection",width:"48"}}),a("el-table-column",{attrs:{label:"词条"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(a.chs)+" ")]}}])}),a("el-table-column",{attrs:{label:"值"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[a.percentage?[t._v(" "+t._s((100*a.value).toFixed(1))+"% ")]:[t._v(" "+t._s(a.value.toFixed(0))+" ")]]}}])}),a("el-table-column",{attrs:{label:"有效词条数"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.eff.toFixed(3))+" ")]}}])}),a("el-table-column",{attrs:{label:"强化次数"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ["+t._s(e.row.upgradeCount[0])+", "+t._s(e.row.upgradeCount[1])+"] ")]}}])})],1),a("p",{staticStyle:{"font-size":"12px"}},[t._v("选中："+t._s(t.selectedEff.toFixed(1)))])],1)])},s=[],l=a(67828),o=a(98017),n={name:"ArtifactsSetStatistics",components:{},props:["artifactIds"],data(){return{selection:[]}},methods:{setSelection(t,e){const a=this.$refs["table"];if(a)for(let r of this.tableDataForElementUI)if(r.name===t){a.toggleRowSelection(r,e);break}}},computed:{artifacts(){const t=this.$store.getters["artifacts/artifactsById"];let e=[];for(let a of this.artifactIds){let r=t[a];r&&e.push(r)}return e},data(){let t={};if(!this.artifacts)return{};for(let e of this.artifacts){const a=e.star??5;if(!(a<=3))for(let r of e.normalTags){const e=r.name,s=r.value,[n,i]=(0,l.gA)(s,e,a),c=o.Og[a][e],f=c.reduce(((t,e)=>t+e))/c.length,u=s/f;if(Object.prototype.hasOwnProperty.call(t,e)){let a=t[e];a.upgradeCount[0]+=n,a.upgradeCount[1]+=i,a.value+=s,a.eff+=u}else t[e]={name:e,upgradeCount:[n,i],value:s,chs:o.vB[e].chs,eff:u,percentage:o.vB[e].percentage}}}return t},selectedEff(){let t=0;for(let e of this.selection)t+=e.eff;return t},tableDataForElementUI(){let t=[];for(let e in this.data)t.push(this.data[e]);return t.sort(((t,e)=>e.eff-t.eff)),t},chartOptionForEChart(){let t=[];for(let e in this.data)t.push({value:this.data[e].eff,name:this.data[e].chs});return t.sort(((t,e)=>t.value-e.value)),{tooltip:{trigger:"item",formatter:t=>{const e=t.value,a=t.percent;return`${e.toFixed(1)}/${a.toFixed(0)}%`}},visualMap:{show:!1,min:0,max:25,inRange:{colorLightness:[.3,1]}},series:[{name:"有效词条分布",type:"pie",label:{},itemStyle:{color:"#c23531"},data:t}]}}}},i=n,c=a(1001),f=(0,c.Z)(i,r,s,!1,null,"5720697f",null),u=f.exports}}]);