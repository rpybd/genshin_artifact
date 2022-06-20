(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[344],{6370:function(i,e,t){"use strict";t.d(e,{Z:function(){return w}});var a=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"artifact",class:{selectable:i.selectable,omit:i.item.omit},style:i.artifactStyle,on:{click:i.handleClick}},[t("div",{staticClass:"up"},[i.showBack?t("div",{staticClass:"back",style:{width:100*i.backValue+"%"}}):i._e(),t("span",{staticClass:"name"},[i._v(" "+i._s(i.displayedTitle)+" ")]),i.buttons?t("div",{staticClass:"buttons"},[i.lockButton?t("el-button",{staticClass:"mybutton",attrs:{icon:i.item.omit?"el-icon-unlock":"el-icon-lock",circle:"",size:"mini",type:"text",title:i.item.omit?"启用":"禁用"},on:{click:function(e){return e.stopPropagation(),i.$emit("toggle")}}}):i._e(),i.deleteButton?t("el-button",{staticClass:"mybutton",attrs:{icon:"el-icon-delete",circle:"",size:"mini",type:"text",title:"删除"},on:{click:function(e){return e.stopPropagation(),i.$emit("delete")}}}):i._e(),i.editButton?t("el-button",{staticClass:"mybutton",attrs:{icon:"el-icon-edit",circle:"",size:"mini",type:"text",title:"编辑"},on:{click:function(e){return e.stopPropagation(),i.$emit("edit")}}}):i._e()],1):i._e(),i.extra?t("span",{staticClass:"extra fs-12"},[i._v(i._s(i.extra))]):i._e()]),t("div",{staticClass:"down"},[t("div",[t("img",{staticClass:"myimage",style:{background:i.imageBackground},attrs:{src:i.imageSrc}})]),t("div",{staticClass:"detail-div"},[t("p",{staticClass:"main-tag"},[i._v(i._s(i.mainDisplayTag))]),i._l(i.secTags,(function(e,a){return t("p",{key:a,staticClass:"sec-tag"},[i._v(" "+i._s(e)+" ")])}))],2)])])},o=[],n=(t(3948),t(7267)),r=t(8600),s=t(4774),l={name:"ArtifactDisplay",props:{item:{type:Object,default:()=>({setName:"luckyDog",position:"cup",mainTag:{name:"attackPercentage",value:.1},normalTags:[{name:"defendStatic",value:20},{name:"attackPercentage",value:.3},{name:"attackPercentage",value:.3},{name:"attackPercentage",value:.3}],omit:!1})},selectable:{type:Boolean,default:!1},extra:{type:String,default:""},buttons:{default:!1},deleteButton:{default:!1},lockButton:{default:!0},editButton:{default:!1},showBack:{default:!1},backValue:{default:1}},methods:{handleClick(){this.selectable&&this.$emit("click")}},computed:{displayedTitle(){let i=r.oN[this.item.setName];if(!i)throw"no artifact";let e="not exist";return i[this.item.position]&&(e=i[this.item.position].chs,Object.prototype.hasOwnProperty.call(this.item,"level")?e+="+"+this.item.level:e+="+??"),e},displayedStar(){return this.item.star||"??"},imageSrc(){let i=r.oN[this.item.setName];if(!i)throw"no artifact";if(i[this.item.position])return i[this.item.position].url;throw"error no position"},mainDisplayTag(){return(0,n.jH)(this.item.mainTag.name,this.item.mainTag.value)},secTags(){let i=[];for(let e of this.item.normalTags)i.push((0,n.jH)(e.name,e.value));return i},imageBackground(){var i;let e=null!==(i=this.item.star)&&void 0!==i?i:5;return s.Z[e-1]},artifactStyle(){return{}}}},c=l,b=t(1001),u=(0,b.Z)(c,a,o,!1,null,"52fb866a",null),w=u.exports},4774:function(i,e){"use strict";e["Z"]=["rgb(125,127,131)","rgb(108,168,139)","rgb(86,155,175)","rgb(177,135,195)","rgb(211,159,81)"]},8722:function(i,e,t){"use strict";t.d(e,{B:function(){return r}});var a=t(2238);const o=new a.UAParser;function n(){const i=o.getDevice().type;return!i}const r=n()},7267:function(i,e,t){"use strict";t.d(e,{F_:function(){return c},Lk:function(){return s},MI:function(){return l},jH:function(){return n},ut:function(){return r}});var a=t(2032),o=t(8600);function n(i,e){let t=a.vB[i];if(!t)throw"tag name not exist";let o="";switch(i){case"attackPercentage":case"attackStatic":o="攻击力";break;case"lifePercentage":case"lifeStatic":o="生命值";break;case"defendPercentage":case"defendStatic":o="防御力";break;default:o=t.chs;break}if(t.percentage){let i=(100*e).toFixed(1);return o+"+"+i+"%"}return o+"+"+e}function r(i,e){let t=a.vB[i];if(!t)throw"tag name not exist";return t.percentage?(100*e).toFixed(1):e}function s(i){let e=o.oN[i];return e["flower"]?e["flower"].url:e["head"].url}function l(i,e){let t=parseFloat(e);return a.vB[i].percentage?t/100:t}function c(i,e){return o.oN[i][e].chs}},2238:function(i,e,t){var a;(function(o,n){"use strict";var r="1.0.2",s="",l="?",c="function",b="undefined",u="object",w="string",d="major",m="model",p="name",f="type",h="vendor",g="version",v="architecture",k="console",x="mobile",y="tablet",_="smarttv",T="wearable",S="embedded",C=255,N="Amazon",z="Apple",B="ASUS",q="BlackBerry",P="Browser",A="Chrome",j="Edge",O="Firefox",E="Google",U="Huawei",R="LG",D="Microsoft",M="Motorola",V="Opera",$="Samsung",F="Sony",Z="Xiaomi",I="Zebra",H="Facebook",L=function(i,e){var t={};for(var a in i)e[a]&&e[a].length%2===0?t[a]=e[a].concat(i[a]):t[a]=i[a];return t},W=function(i){for(var e={},t=0;t<i.length;t++)e[i[t].toUpperCase()]=i[t];return e},G=function(i,e){return typeof i===w&&-1!==X(e).indexOf(X(i))},X=function(i){return i.toLowerCase()},K=function(i){return typeof i===w?i.replace(/[^\d\.]/g,s).split(".")[0]:n},Q=function(i,e){if(typeof i===w)return i=i.replace(/^\s\s*/,s).replace(/\s\s*$/,s),typeof e===b?i:i.substring(0,C)},Y=function(i,e){var t,a,o,r,s,l,b=0;while(b<e.length&&!s){var w=e[b],d=e[b+1];t=a=0;while(t<w.length&&!s)if(s=w[t++].exec(i),s)for(o=0;o<d.length;o++)l=s[++a],r=d[o],typeof r===u&&r.length>0?2===r.length?typeof r[1]==c?this[r[0]]=r[1].call(this,l):this[r[0]]=r[1]:3===r.length?typeof r[1]!==c||r[1].exec&&r[1].test?this[r[0]]=l?l.replace(r[1],r[2]):n:this[r[0]]=l?r[1].call(this,l,r[2]):n:4===r.length&&(this[r[0]]=l?r[3].call(this,l.replace(r[1],r[2])):n):this[r]=l||n;b+=2}},J=function(i,e){for(var t in e)if(typeof e[t]===u&&e[t].length>0){for(var a=0;a<e[t].length;a++)if(G(e[t][a],i))return t===l?n:t}else if(G(e[t],i))return t===l?n:t;return i},ii={"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},ei={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},ti={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[g,[p,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[g,[p,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[p,g],[/opios[\/ ]+([\w\.]+)/i],[g,[p,V+" Mini"]],[/\bopr\/([\w\.]+)/i],[g,[p,V]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[p,g],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[g,[p,"UC"+P]],[/\bqbcore\/([\w\.]+)/i],[g,[p,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[g,[p,"WeChat"]],[/konqueror\/([\w\.]+)/i],[g,[p,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[g,[p,"IE"]],[/yabrowser\/([\w\.]+)/i],[g,[p,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[p,/(.+)/,"$1 Secure "+P],g],[/\bfocus\/([\w\.]+)/i],[g,[p,O+" Focus"]],[/\bopt\/([\w\.]+)/i],[g,[p,V+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[g,[p,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[g,[p,"Dolphin"]],[/coast\/([\w\.]+)/i],[g,[p,V+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[g,[p,"MIUI "+P]],[/fxios\/([-\w\.]+)/i],[g,[p,O]],[/\bqihu|(qi?ho?o?|360)browser/i],[[p,"360 "+P]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[p,/(.+)/,"$1 "+P],g],[/(comodo_dragon)\/([\w\.]+)/i],[[p,/_/g," "],g],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[p,g],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[p],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[p,H],g],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[p,g],[/\bgsa\/([\w\.]+) .*safari\//i],[g,[p,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[g,[p,A+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[p,A+" WebView"],g],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[g,[p,"Android "+P]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[p,g],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[g,[p,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[g,p],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[p,[g,J,ii]],[/(webkit|khtml)\/([\w\.]+)/i],[p,g],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[p,"Netscape"],g],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[g,[p,O+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[p,g]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[v,"amd64"]],[/(ia32(?=;))/i],[[v,X]],[/((?:i[346]|x)86)[;\)]/i],[[v,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[v,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[v,"armhf"]],[/windows (ce|mobile); ppc;/i],[[v,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[v,/ower/,s,X]],[/(sun4\w)[;\)]/i],[[v,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[v,X]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[m,[h,$],[f,y]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[m,[h,$],[f,x]],[/\((ip(?:hone|od)[\w ]*);/i],[m,[h,z],[f,x]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[m,[h,z],[f,y]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[m,[h,U],[f,y]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[m,[h,U],[f,x]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[m,/_/g," "],[h,Z],[f,x]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[m,/_/g," "],[h,Z],[f,y]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[m,[h,"OPPO"],[f,x]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[m,[h,"Vivo"],[f,x]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[m,[h,"Realme"],[f,x]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[m,[h,M],[f,x]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[m,[h,M],[f,y]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[m,[h,R],[f,y]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[m,[h,R],[f,x]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[m,[h,"Lenovo"],[f,y]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[m,/_/g," "],[h,"Nokia"],[f,x]],[/(pixel c)\b/i],[m,[h,E],[f,y]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[m,[h,E],[f,x]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[m,[h,F],[f,x]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[m,"Xperia Tablet"],[h,F],[f,y]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[m,[h,"OnePlus"],[f,x]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[m,[h,N],[f,y]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[m,/(.+)/g,"Fire Phone $1"],[h,N],[f,x]],[/(playbook);[-\w\),; ]+(rim)/i],[m,h,[f,y]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[m,[h,q],[f,x]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[m,[h,B],[f,y]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[m,[h,B],[f,x]],[/(nexus 9)/i],[m,[h,"HTC"],[f,y]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[h,[m,/_/g," "],[f,x]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[m,[h,"Acer"],[f,y]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[m,[h,"Meizu"],[f,x]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[m,[h,"Sharp"],[f,x]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[h,m,[f,x]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[h,m,[f,y]],[/(surface duo)/i],[m,[h,D],[f,y]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[m,[h,"Fairphone"],[f,x]],[/(u304aa)/i],[m,[h,"AT&T"],[f,x]],[/\bsie-(\w*)/i],[m,[h,"Siemens"],[f,x]],[/\b(rct\w+) b/i],[m,[h,"RCA"],[f,y]],[/\b(venue[\d ]{2,7}) b/i],[m,[h,"Dell"],[f,y]],[/\b(q(?:mv|ta)\w+) b/i],[m,[h,"Verizon"],[f,y]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[m,[h,"Barnes & Noble"],[f,y]],[/\b(tm\d{3}\w+) b/i],[m,[h,"NuVision"],[f,y]],[/\b(k88) b/i],[m,[h,"ZTE"],[f,y]],[/\b(nx\d{3}j) b/i],[m,[h,"ZTE"],[f,x]],[/\b(gen\d{3}) b.+49h/i],[m,[h,"Swiss"],[f,x]],[/\b(zur\d{3}) b/i],[m,[h,"Swiss"],[f,y]],[/\b((zeki)?tb.*\b) b/i],[m,[h,"Zeki"],[f,y]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[h,"Dragon Touch"],m,[f,y]],[/\b(ns-?\w{0,9}) b/i],[m,[h,"Insignia"],[f,y]],[/\b((nxa|next)-?\w{0,9}) b/i],[m,[h,"NextBook"],[f,y]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[h,"Voice"],m,[f,x]],[/\b(lvtel\-)?(v1[12]) b/i],[[h,"LvTel"],m,[f,x]],[/\b(ph-1) /i],[m,[h,"Essential"],[f,x]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[m,[h,"Envizen"],[f,y]],[/\b(trio[-\w\. ]+) b/i],[m,[h,"MachSpeed"],[f,y]],[/\btu_(1491) b/i],[m,[h,"Rotor"],[f,y]],[/(shield[\w ]+) b/i],[m,[h,"Nvidia"],[f,y]],[/(sprint) (\w+)/i],[h,m,[f,x]],[/(kin\.[onetw]{3})/i],[[m,/\./g," "],[h,D],[f,x]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[m,[h,I],[f,y]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[m,[h,I],[f,x]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[h,m,[f,k]],[/droid.+; (shield) bui/i],[m,[h,"Nvidia"],[f,k]],[/(playstation [345portablevi]+)/i],[m,[h,F],[f,k]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[m,[h,D],[f,k]],[/smart-tv.+(samsung)/i],[h,[f,_]],[/hbbtv.+maple;(\d+)/i],[[m,/^/,"SmartTV"],[h,$],[f,_]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[h,R],[f,_]],[/(apple) ?tv/i],[h,[m,z+" TV"],[f,_]],[/crkey/i],[[m,A+"cast"],[h,E],[f,_]],[/droid.+aft(\w)( bui|\))/i],[m,[h,N],[f,_]],[/\(dtv[\);].+(aquos)/i],[m,[h,"Sharp"],[f,_]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[h,Q],[m,Q],[f,_]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[f,_]],[/((pebble))app/i],[h,m,[f,T]],[/droid.+; (glass) \d/i],[m,[h,E],[f,T]],[/droid.+; (wt63?0{2,3})\)/i],[m,[h,I],[f,T]],[/(quest( 2)?)/i],[m,[h,H],[f,T]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[h,[f,S]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[m,[f,x]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[m,[f,y]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[f,y]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[f,x]],[/(android[-\w\. ]{0,9});.+buil/i],[m,[h,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[g,[p,j+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[g,[p,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[p,g],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[g,p]],os:[[/microsoft (windows) (vista|xp)/i],[p,g],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[p,[g,J,ei]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[p,"Windows"],[g,J,ei]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[g,/_/g,"."],[p,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[p,"Mac OS"],[g,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[g,p],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[p,g],[/\(bb(10);/i],[g,[p,q]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[g,[p,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[g,[p,O+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[g,[p,"webOS"]],[/crkey\/([\d\.]+)/i],[g,[p,A+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[p,"Chromium OS"],g],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[p,g],[/(sunos) ?([\w\.\d]*)/i],[[p,"Solaris"],g],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[p,g]]},ai=function(i,e){if(typeof i===u&&(e=i,i=n),!(this instanceof ai))return new ai(i,e).getResult();var t=i||(typeof o!==b&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:s),a=e?L(ti,e):ti;return this.getBrowser=function(){var i={};return i[p]=n,i[g]=n,Y.call(i,t,a.browser),i.major=K(i.version),i},this.getCPU=function(){var i={};return i[v]=n,Y.call(i,t,a.cpu),i},this.getDevice=function(){var i={};return i[h]=n,i[m]=n,i[f]=n,Y.call(i,t,a.device),i},this.getEngine=function(){var i={};return i[p]=n,i[g]=n,Y.call(i,t,a.engine),i},this.getOS=function(){var i={};return i[p]=n,i[g]=n,Y.call(i,t,a.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return t},this.setUA=function(i){return t=typeof i===w&&i.length>C?Q(i,C):i,this},this.setUA(t),this};ai.VERSION=r,ai.BROWSER=W([p,g,d]),ai.CPU=W([v]),ai.DEVICE=W([m,h,f,k,x,_,y,T,S]),ai.ENGINE=ai.OS=W([p,g]),typeof e!==b?("object"!==b&&i.exports&&(e=i.exports=ai),e.UAParser=ai):"function"===c&&t.amdO?(a=function(){return ai}.call(e,t,e,i),a===n||(i.exports=a)):typeof o!==b&&(o.UAParser=ai);var oi=typeof o!==b&&(o.jQuery||o.Zepto);if(oi&&!oi.ua){var ni=new ai;oi.ua=ni.getResult(),oi.ua.get=function(){return ni.getUA()},oi.ua.set=function(i){ni.setUA(i);var e=ni.getResult();for(var t in e)oi.ua[t]=e[t]}}})("object"===typeof window?window:this)}}]);