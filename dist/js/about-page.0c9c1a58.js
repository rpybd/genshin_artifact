"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[459],{14700:function(e,a){a["Z"]=[{time:"2021/2/20",version:"2.0.1",changes:["能够计入乐团4、角斗士4的效果","优化了UI","增加甘雨的专属目标函数"]},{time:"2021/2/22",version:"2.1.0",changes:["增加魈的专属目标函数","增加圣遗物编辑功能","修复若干bug","优化一小部分的推荐算法"]},{time:"2021/2/23",version:"2.1.1",changes:["增加迪奥娜专属目标函数","新增禁用结果按钮","添加算法说明","修复先选突破后再选突破前等级时无法正确计算的bug"]},{time:"2021/2/24",version:"2.2.0",changes:["增加护摩之杖、千岩古剑、千岩长枪（粗略计算这些武器都很离谱）","增加诺艾尔专属目标函数","新增“50%暴击”目标函数","新增“全部启用”按钮","新增json增量导入","修复“狼的末路”无法正确计算的bug"]},{time:"2021/2/25",version:"2.3.0",changes:["重构目标函数的逻辑，使之有能力计算动态buff收益","角色面板可以查看详细属性（详细暴击率、伤害加成）","重写甘雨目标函数，使之能够适应阿莫斯之弓、天赋、冰4套的动态加成","重构通用目标函数，可以适应不同角色使用不同的属性"]},{time:"2021/2/26",version:"2.3.1",changes:["增加了技能等级的支持，某些角色（如诺艾尔、钟离等）计算更精确","修复黎明神剑无法正确计算的bug","新增某些武器的特殊参数","修复甘雨目标函数的bug","新增阿贝多、芭芭拉的目标函数"]},{time:"2021/2/27",version:"2.3.2",changes:["新增融化反应目标函数","增加胡桃（非正式服数据）"]},{time:"2021/3/2",version:"2.4.0",changes:["重构目标函数逻辑，目标函数可以进行更精细的配置","大幅优化刻晴目标函数"]},{time:"2021/3/3",version:"2.4.1",changes:["优化胡桃目标函数，现在可以自定义蒸发、融化频率，重击比例等"]},{time:"2021/3/4",version:"2.4.2",changes:["增加“温迪-风神之诗”目标函数","增加“期望伤害-充能”目标函数"]},{time:"2021/3/6",version:"2.4.3",changes:["新增随机副词条功能，方便计算某个角色适合什么圣遗物"]},{time:"2021/3/7",version:"2.4.4",changes:["新增“元素反应-增幅反应-期望伤害”目标函数","支持限定圣遗物的主词条"]},{time:"2021/3/10",version:"3.0.0",changes:["新增计算：圣遗物潜力值","圣遗物支持等级和品质"]},{time:"2021/3/11",version:"3.0.1",changes:["新增“固定暴击率-期望伤害”目标函数"]},{time:"2021/3/12",version:"3.0.2",changes:["修复阿贝多2命情况下无法计算的问题"]},{time:"2021/3/13",version:"3.0.3",changes:["圣遗物数量取消上限，新增圣遗物数量的提示","增加胡桃目标函数的最大伤害选项","优化UI"]},{time:"2021/3/18",version:"3.1.0",changes:["新增终末嗟叹之诗、暗巷的酒与诗、暗巷闪光","增加预设系统","修改圣遗物搭配配置的逻辑"]},{time:"2021/3/20",version:"3.1.1",changes:["修复无法正确编辑圣遗物的问题","增加“钟离-天动万象-最低生命值”目标函数"]},{time:"2021/3/22",version:"3.1.2",changes:["新增“比例”圣遗物评分/潜力算法","增加配装结果页面禁用单个圣遗物功能"]},{time:"2021/3/26",version:"3.2.0",changes:["修复磐岩结绿计算错误的问题","新增部分帮助文档"]},{time:"2021/4/5",version:"3.2.1",changes:["修复“魈-靖腰傩舞”无法正确计算的问题"]},{time:"2021/4/7",version:"3.3.0",changes:["增加罗莎莉亚","增加“罗莎莉亚-噬罪的告解”目标函数"]},{time:"2021/4/14",version:"3.4.0",changes:["新增武器风花之颂、暗巷猎手","增加json文件拖拽"]},{time:"2021/4/15",version:"3.5.0",changes:["修改迪卢克专属目标函数，更加可定制化","修改若干bug","建立全局API"]},{time:"2021/4/17",version:"3.6.0",changes:["支持查看前五名最优配装","增加配装最大值的历史记录"]},{time:"2021/4/18",version:"3.7.0",changes:["增加配装计算时自定义buff支持","增强迪卢克目标函数","优化UI","增加部分globalAPI"]},{time:"2021/4/19",version:"3.8.0",changes:["支持手机端访问，但不支持手机端运算","增加保存预设功能","升级预设表示，能够保存buff以及限制等全部参数"]},{time:"2021/4/21",version:"3.9.0",changes:["增加计算时等级过滤器","属性的绿字与白字分开显示"]},{time:"2021/4/21",version:"3.9.1",changes:["修复限定主词条无效的bug","3星及以下圣遗物不参与潜能计算"]},{time:"2021/4/24",version:"3.10.0",changes:["增加圣遗物统计页面","优化、修复若干项目"]},{time:"2021/4/25",version:"3.10.1",changes:["增强胡桃函数，支持设定6命占比","圣遗物潜力结果支持分页","增强词条效率潜力函数，支持自定义权重"]},{time:"2021/4/29",version:"3.11.0",changes:["新增圣遗物苍白之火、千岩牢固","新增角色烟绯","圣遗物根据星级显示不同的颜色"]},{time:"2021/5/8",version:"3.11.1",changes:["修复若干bug，详见commit","没有符合条件的圣遗物时提示更友好"]},{time:"2021/5/19",version:"3.12.0",changes:["增加新角色-优菈","增加新武器-松籁响起之时"]},{time:"2021/6/3",version:"4.0.0",changes:["增加角色伤害计算器","增加计算预设单独导出/导入与批量导出/导入","增加更详细的武器参数","增加圣遗物参数","增加限定属性最小值","增加简易圣遗物过滤器","增加圣遗物搭配分析、角色面板分析","优化配装页面"]},{time:"2021/6/11",version:"4.1.0",changes:["新增武器：嘟嘟可故事集，幽夜华尔兹","优化圣遗物显示","升级“温迪-风神之诗”目标函数"]},{time:"2021/6/18",version:"4.2.0",changes:["新增圣遗物套装（圣遗物组）","修复在筛选情况下无法正确删除、锁定、编辑圣遗物的问题"]},{time:"2021/6/30",version:"4.3.0",changes:["新增枫原万叶、苍古自由之誓","新增“最大扩散伤害”期望函数"]},{time:"2021/7/22",version:"4.4.0",changes:["增加角色神里凌华","增加武器天目影打刀、雾切之回光、破魔之弓、喜多院十文字、桂木斩长正、白辰之环","增加圣遗物套装追忆之注连、绝缘之旗印"]},{time:"2021/8/11",version:"4.5.0",changes:["增加角色宵宫、早柚","增加武器飞雷之弦振","增加目标函数：早柚-呼呼大睡时间"]},{time:"2021/9/1",version:"4.6.0",changes:["增加角色雷电将军、埃洛伊","增加武器薙草之稻光、衔珠海皇、渔获"]},{time:"2021/9/8",version:"4.6.1",changes:["增加目标函数：神里绫华-白鹭公主","增加buff：雷电将军-雷罚恶曜之眼"]},{time:"2021/9/21",version:"4.7.0",changes:["增加角色：珊瑚宫心海","增加武器：不灭月华"]},{time:"2021/10/13",version:"4.8.0",changes:["增加武器：恶玉丸、冬极白星"]},{time:"2021/10/22",version:"4.8.1",changes:["修复若干bug"]},{time:"2021/11/2",version:"4.9.0",changes:["优化导入圣遗物，只会进行增量导入","新增角色：托马","新增武器：朦云之月、断浪长鳍"]},{time:"2021/11/17",version:"4.9.1",changes:["新增行秋、达达利亚配装函数","增加角色旅行者-雷"]},{time:"2021/11/24",version:"4.10.0",changes:["增加2.3版本新内容","修复若干bug"]},{time:"2021/12/1",version:"4.11.0",changes:["新增0级圣遗物评分机制","修复若干bug"]},{time:"2021/12/4",version:"4.12.0",changes:["面板分析可以分析不同目标函数的不同词条的价值","新增胡桃目标函数"]},{time:"2022/1/1",version:"4.13.0",changes:["添加凝光、可莉的目标函数","修复若干bug"]},{time:"2022/1/5",version:"4.14.0",changes:["添加新角色申鹤、云堇","添加新武器息灾"]},{time:"2022/2/16",version:"4.15.0",changes:["添加八重神子、神乐之真意、证誓之明瞳"]},{time:"2022/3/7",version:"4.16.0",changes:["Arts Planner页面添加快快计算按钮"]}]},48875:function(e,a,s){s.r(a),s.d(a,{default:function(){return o}});var n=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("el-breadcrumb",[s("el-breadcrumb-item",[e._v("算法说明")]),s("el-breadcrumb-item",[e._v("目标函数")])],1),s("el-divider"),s("el-row",{attrs:{type:"flex",justify:"center"}},[s("el-col",{attrs:{xs:24,sm:18}},[s("h1",[e._v("期望函数")]),s("p",{directives:[{name:"katex",rawName:"v-katex",value:"V=atk*(1+crit*cd)*(1+bonus)",expression:"'V=atk*(1+crit*cd)*(1+bonus)'"}]}),s("h1",[e._v("最大输出函数")]),s("p",{directives:[{name:"katex",rawName:"v-katex",value:"V=atk*(1+cd)*(1+bonus)",expression:"'V=atk*(1+cd)*(1+bonus)'"}]}),s("h1",[e._v("基于频率的输出期望函数")]),s("p",{directives:[{name:"katex",rawName:"v-katex",value:"V=atk*(a*f_a'+b*f_b'+e*f_e'+q*f_q')",expression:"'V=atk*(a*f_a\\'+b*f_b\\'+e*f_e\\'+q*f_q\\')'"}]}),s("p",{directives:[{name:"katex",rawName:"v-katex",value:"f_a'=\\frac{f_a}{f_a+f_b+f_e+f_q*(1+c)}",expression:"'f_a\\'=\\\\frac{f_a}{f_a+f_b+f_e+f_q*(1+c)}'"}]}),s("p",{directives:[{name:"katex",rawName:"v-katex",value:"f_b'=\\frac{f_b}{f_a+f_b+f_e+f_q*(1+c)}",expression:"'f_b\\'=\\\\frac{f_b}{f_a+f_b+f_e+f_q*(1+c)}'"}]}),s("p",{directives:[{name:"katex",rawName:"v-katex",value:"f_e'=\\frac{f_e}{f_a+f_b+f_e+f_q*(1+c)}",expression:"'f_e\\'=\\\\frac{f_e}{f_a+f_b+f_e+f_q*(1+c)}'"}]}),s("p",{directives:[{name:"katex",rawName:"v-katex",value:"f_q'=\\frac{f_q*(1+c)}{f_a+f_b+f_e+f_q*(1+c)}",expression:"'f_q\\'=\\\\frac{f_q*(1+c)}{f_a+f_b+f_e+f_q*(1+c)}'"}]}),s("p",{directives:[{name:"katex",rawName:"v-katex",value:"a=(1+bonus_p*(1-r_a)+bonus_{ele}*r_a+bonus_a+bonus_{other})*T_a*(1+cd*c_a)",expression:"'a=(1+bonus_p*(1-r_a)+bonus_{ele}*r_a+bonus_a+bonus_{other})*T_a*(1+cd*c_a)'"}]}),s("p",{directives:[{name:"katex",rawName:"v-katex",value:"b=(1+bonus_p*(1-r_b)+bonus_{ele}*r_b+bonus_b+bonus_{other})*T_b*(1+cd*c_b)",expression:"'b=(1+bonus_p*(1-r_b)+bonus_{ele}*r_b+bonus_b+bonus_{other})*T_b*(1+cd*c_b)'"}]}),s("p",{directives:[{name:"katex",rawName:"v-katex",value:"e=(1+bonus_{ele}+bonus_e+bonus_{other})*T_e*(1+cd*c_e)",expression:"'e=(1+bonus_{ele}+bonus_e+bonus_{other})*T_e*(1+cd*c_e)'"}]}),s("p",{directives:[{name:"katex",rawName:"v-katex",value:"q=(1+bonus_{ele}+bonus_q+bonus_{other})*T_q*(1+cd*c_q)",expression:"'q=(1+bonus_{ele}+bonus_q+bonus_{other})*T_q*(1+cd*c_q)'"}]}),s("p",[e._v(" 其中，"),s("br"),s("span",{directives:[{name:"katex",rawName:"v-katex",value:"f_x",expression:"'f_x'"}]}),e._v("为技能x的频率，"),s("span",{directives:[{name:"katex",rawName:"v-katex",value:"f_x'",expression:"'f_x\\''"}]}),e._v("为算上充能效率后的等效频率，"),s("br"),s("span",{directives:[{name:"katex",rawName:"v-katex",value:"T_x",expression:"'T_x'"}]}),e._v("为技能x的倍率"),s("br"),s("span",{directives:[{name:"katex",rawName:"v-katex",value:"c_x",expression:"'c_x'"}]}),e._v("为技能x的暴击率"),s("br"),s("span",{directives:[{name:"katex",rawName:"v-katex",value:"r_x",expression:"'r_x'"}]}),e._v("为技能x的附魔占比"),s("br"),s("span",{directives:[{name:"katex",rawName:"v-katex",value:"bonus_p",expression:"'bonus_p'"}]}),e._v("为物理伤害加成，"),s("span",{directives:[{name:"katex",rawName:"v-katex",value:"bonus_{ele}",expression:"'bonus_{ele}'"}]}),e._v("为元素伤害加成"),s("br"),s("span",{directives:[{name:"katex",rawName:"v-katex",value:"c",expression:"'c'"}]}),e._v("为充能效率，"),s("span",{directives:[{name:"katex",rawName:"v-katex",value:"cd",expression:"'cd'"}]}),e._v("为暴击伤害 ")]),s("p",[e._v("说明：刻晴、迪卢克使用了该函数")])])],1)],1)},t=[],i={name:"AlgorithmPage"},r=i,c=s(1001),v=(0,c.Z)(r,n,t,!1,null,null,null),o=v.exports},33866:function(e,a,s){s.r(a),s.d(a,{default:function(){return _}});var n=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("el-breadcrumb",[s("el-breadcrumb-item",[e._v("更新记录")])],1),s("el-divider"),s("el-timeline",{attrs:{reverse:""}},e._l(e.changelogs,(function(a,n){return s("el-timeline-item",{key:n,attrs:{timestamp:a.time+" ---- V"+a.version,placement:"top"}},[s("el-card",[s("ul",{staticStyle:{"list-style-type":"disc"}},e._l(a.changes,(function(a,n){return s("li",{key:n},[e._v(e._s(a))])})),0)])],1)})),1)],1)},t=[],i=s(14700),r={name:"ChangeLogPage",created:function(){this.changelogs=i.Z}},c=r,v=s(1001),o=(0,v.Z)(c,n,t,!1,null,"06448d5a",null),_=o.exports},23545:function(e,a,s){s.r(a),s.d(a,{default:function(){return _}});var n=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("el-breadcrumb",[s("el-breadcrumb-item",[e._v("友情链接")])],1),s("el-divider"),s("el-row",{attrs:{gutter:16}},e._l(e.links,(function(a){return s("el-col",{key:a.name,attrs:{xs:24,sm:8}},[s("el-card",{staticStyle:{"margin-bottom":"16px"}},[s("span",{staticClass:"link-title",attrs:{slot:"header"},slot:"header"},[e._v(e._s(a.name))]),a.word?s("div",{staticClass:"words"},[s("span",{staticClass:"quote"},[e._v("“")]),s("span",{staticClass:"content"},[e._v(e._s(a.word))])]):e._e(),s("div",{staticClass:"link-tags"},e._l(a.tags,(function(a,n){return s("span",{key:n,staticClass:"link-tag fs-12"},[e._v(e._s(a))])})),0),s("div",{staticClass:"link-footer"},e._l(a.url,(function(a,n){return s("a",{key:n,staticClass:"el-button link-button",attrs:{href:a,target:"_blank"}},[s("i",{staticClass:"el-icon-connection",staticStyle:{"margin-right":"4px"}}),e._v(" "+e._s(n)+" ")])})),0)])],1)})),1)],1)},t=[],i=[{name:"可莉特调",tags:["圣遗物评分","角色/武器计算","素材表"],url:{"https://genshin.pub/":"https://genshin.pub/"}},{name:"原神地图",tags:["地图工具"],url:{"https://yuanshen.site/":"https://yuanshen.site/"}},{name:"MEW原神社区",tags:["社区"],url:{"https://mew.fun/n/ys":"https://mew.fun/n/ys"}},{name:"NOKNOK",tags:["社区"],word:"我们也是一个纯公益性质的游戏社区，希望给原神的小伙伴们一个更方便便捷的沟通阵地，可以更快的交流心得和组队",url:{"网址":"https://www.noknok.cn/","原神群组":"https://www.noknok.cn/act/share_group_20210625/index.html?uid=100000041&gid=117757"}},{name:"兴趣来源",tags:["游戏助手","工具"],url:{"https://xingqulaiyuan.chenyuwulu.top/":"https://xingqulaiyuan.chenyuwulu.top/"}}],r={name:"ExternalLinkPage",created:function(){this.links=i},methods:{navigateTo(e){window.open(e,"_blank")}}},c=r,v=s(1001),o=(0,v.Z)(c,n,t,!1,null,"dd885670",null),_=o.exports},41330:function(e,a,s){s.r(a),s.d(a,{default:function(){return o}});var n=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("el-breadcrumb",[s("el-breadcrumb-item",[e._v("算法说明")]),s("el-breadcrumb-item",[e._v("潜力函数")])],1),s("el-divider"),s("el-row",{attrs:{type:"flex",justify:"center"}},[s("el-col",{attrs:{xs:24,sm:18}},[s("h1",[e._v("影响因素")]),s("p",[e._v("众所周知，输出向副词条的影响基本可以用以下这个公式概括：")]),s("p",{directives:[{name:"katex",rawName:"v-katex",value:"atk*(1+crit*cd)",expression:"'atk*(1+crit*cd)'"}]}),s("p",{directives:[{name:"katex",rawName:"v-katex",value:"atk=baseAtk*(1+p)+s",expression:"'atk=baseAtk*(1+p)+s'"}]}),s("p",[e._v("其中，"),s("span",{directives:[{name:"katex",rawName:"v-katex",value:"baseAtk",expression:"'baseAtk'"}]}),e._v("为基础攻击力，"),s("span",{directives:[{name:"katex",rawName:"v-katex",value:"p",expression:"'p'"}]}),e._v("为百分比攻击力加成，"),s("span",{directives:[{name:"katex",rawName:"v-katex",value:"s",expression:"'s'"}]}),e._v("为固定攻击力加成")]),s("h1",[e._v("期望")]),s("p",[e._v("对于满级圣遗物"),s("span",{directives:[{name:"katex",rawName:"v-katex",value:"X",expression:"'X'"}]}),e._v("，定义：")]),s("p",{directives:[{name:"katex",rawName:"v-katex",value:"V=f(X)",expression:"'V=f(X)'"}]}),s("p",[e._v(" 其中，"),s("span",{directives:[{name:"katex",rawName:"v-katex",value:"f",expression:"'f'"}]}),e._v("为潜力函数，它是圣遗物副词条的函数。"),s("br"),e._v(" 而对于非满级圣遗物，"),s("span",{directives:[{name:"katex",rawName:"v-katex",value:"X",expression:"'X'"}]}),e._v("是随机变量，因此： ")]),s("p",{directives:[{name:"katex",rawName:"v-katex",value:"V=E(f(X))",expression:"'V=E(f(X))'"}]}),s("p",[e._v("因此，这个模型不仅可以给满级圣遗物评分，也可以给未满级圣遗物计算“潜力值”")]),s("h1",[e._v("算法")]),s("p",[e._v("知道了上述原理，其实就是简单地进行搜索，每个子树相当于一个强化中的状态，每个叶节点就是强化到满级的状态")])])],1)],1)},t=[],i={name:"PotentialFuncPage"},r=i,c=s(1001),v=(0,c.Z)(r,n,t,!1,null,null,null),o=v.exports}}]);