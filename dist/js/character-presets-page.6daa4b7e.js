"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[726],{37520:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-dialog",{attrs:{visible:t.showExportDialog,title:t.exportPresetTitle},on:{"update:visible":function(e){t.showExportDialog=e}}},[r("el-input",{attrs:{type:"textarea",rows:10},model:{value:t.exportPresetItemStr,callback:function(e){t.exportPresetItemStr=e},expression:"exportPresetItemStr"}}),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.showExportDialog=!1}}},[t._v("取消")]),t.canCopy?r("el-button",{attrs:{type:"primary"},on:{click:t.handleCopy}},[t._v("复制")]):t._e()],1)],1),r("el-dialog",{attrs:{visible:t.showImportDialog,title:"导入"},on:{"update:visible":function(e){t.showImportDialog=e}}},[r("el-input",{attrs:{type:"textarea",rows:10},model:{value:t.importPresetStr,callback:function(e){t.importPresetStr=e},expression:"importPresetStr"}}),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.showImportDialog=!1}}},[t._v("取消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleImport("append")}}},[t._v("追加导入")]),r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleImport("overwrite")}}},[t._v("覆盖导入")])],1)],1),r("el-breadcrumb",[r("el-breadcrumb-item",[t._v("预设")])],1),r("el-divider"),r("div",{staticClass:"toolbar"},[r("el-button",{attrs:{icon:"el-icon-download",circle:"",size:"small",title:"导出全部"},on:{click:t.handleExportAll}}),r("el-button",{attrs:{icon:"el-icon-upload2",circle:"",size:"small",title:"导入"},on:{click:function(e){t.showImportDialog=!0}}})],1),r("div",{staticClass:"body"},[t.isEmpty?r("el-alert",{attrs:{title:"请去Artifacts Planner页面添加预设",closable:!1}}):t._l(t.all,(function(e,o){return r("preset-item",{key:o,staticClass:"item",attrs:{item:e},on:{delete:function(e){return t.deletePreset(o)},download:function(r){return t.handleDownload(o,e)}}})}))],2)],1)},s=[],l=r(20629),i=r(7739),a={name:"CharacterPresetsPage",components:{PresetItem:i.Z},created(){this.canCopy=!!navigator.clipboard},data(){return{showExportDialog:!1,showImportDialog:!1,exportPresetTitle:"",exportPresetItemStr:"",importPresetStr:""}},methods:{checkImportType(t){return Object.prototype.hasOwnProperty.call(t,"data")?"multi":"single"},handleImport(t){let e;try{e=JSON.parse(this.importPresetStr)}catch(s){return void this.$message.error("JSON格式错误，请检查导入数据的格式或来源")}let r=[];"overwrite"===t&&(r=Object.keys(this.all));for(let l of r)this.$store.commit("presets/delete",{name:l});let o=this.checkImportType(e);if("multi"===o)for(let l of e.data){let t=l.name;this.$store.commit("presets/add",{name:t,value:l})}else if("single"===o){let t=e.name,r=e;this.$store.commit("presets/add",{name:t,value:r})}this.showImportDialog=!1},deletePreset(t){this.$store.commit("presets/delete",{name:t})},handleDownload(t,e){this.exportPresetTitle=`导出预设"${t}"`,this.exportPresetItemStr=JSON.stringify(e),this.showExportDialog=!0},handleCopy(){navigator.clipboard.writeText(this.exportPresetItemStr).then((()=>{this.$message("复制成功")})).catch((()=>{this.$message.error("复制失败")}))},handleExportAll(){this.exportPresetTitle="导出全部";let t=this.all,e={data:Object.values(t)};this.exportPresetItemStr=JSON.stringify(e),this.showExportDialog=!0}},computed:{...(0,l.Se)("presets",["all"]),isEmpty(){return 0===Object.keys(this.all).length}}},n=a,c=r(1001),p=(0,c.Z)(n,o,s,!1,null,"5202cf34",null),m=p.exports}}]);