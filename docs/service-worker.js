if(!self.define){let n,i={};const r=(r,a)=>(r=new URL(r+".js",a).href,i[r]||new Promise((i=>{if("document"in self){const n=document.createElement("script");n.src=r,n.onload=i,document.head.appendChild(n)}else n=r,importScripts(r),i()})).then((()=>{let n=i[r];if(!n)throw new Error(`Module ${r} didn’t register its module`);return n})));self.define=(a,e)=>{const l=n||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let s={};const t=n=>r(n,l),g={module:{uri:l},exports:s,require:t};i[l]=Promise.all(a.map((n=>g[n]||t(n)))).then((n=>(e(...n),s)))}}define(["./workbox-f3ddde50"],(function(n){"use strict";n.setCacheNameDetails({prefix:"genshin_artifacts"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"/genshin_artifact/css/about-page.db8909e7.css",revision:null},{url:"/genshin_artifact/css/account-page.0c0e0c06.css",revision:null},{url:"/genshin_artifact/css/app.a5221383.css",revision:null},{url:"/genshin_artifact/css/artifact-potential-page.cfa684e6.css",revision:null},{url:"/genshin_artifact/css/artifacts-page.8e1c6f00.css",revision:null},{url:"/genshin_artifact/css/artifacts-plan-page.ecb23a00.css",revision:null},{url:"/genshin_artifact/css/artifacts-statistics-page.5018be3f.css",revision:null},{url:"/genshin_artifact/css/character-presets-page.0df7a4ab.css",revision:null},{url:"/genshin_artifact/css/chunk-vendors.69193779.css",revision:null},{url:"/genshin_artifact/css/config-artifacts.d070f52e.css",revision:null},{url:"/genshin_artifact/css/help-page.97e12a06.css",revision:null},{url:"/genshin_artifact/css/intro-page.c5141d21.css",revision:null},{url:"/genshin_artifact/css/kumi-page.69092edf.css",revision:null},{url:"/genshin_artifact/css/steps-constraint.9fe0effa.css",revision:null},{url:"/genshin_artifact/css/steps-select-buff.aebab83f.css",revision:null},{url:"/genshin_artifact/css/steps-select-c.222d7dba.css",revision:null},{url:"/genshin_artifact/css/steps-select-t.e68e4a9c.css",revision:null},{url:"/genshin_artifact/css/steps-select-w.248c481b.css",revision:null},{url:"/genshin_artifact/download.py",revision:"a24230844187658e97540090cc76828e"},{url:"/genshin_artifact/fonts/KaTeX_AMS-Regular.4335428b.woff",revision:null},{url:"/genshin_artifact/fonts/KaTeX_AMS-Regular.d0da6440.woff2",revision:null},{url:"/genshin_artifact/fonts/KaTeX_AMS-Regular.f0136847.ttf",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Caligraphic-Bold.7adea81e.ttf",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Caligraphic-Bold.a28a2d16.woff",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Caligraphic-Bold.b01d1b79.woff2",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Caligraphic-Regular.4aeb72f0.woff2",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Caligraphic-Regular.ac4d56df.ttf",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Caligraphic-Regular.ceef0449.woff",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Fraktur-Bold.2362cec0.woff",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Fraktur-Bold.f1c05c8e.woff2",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Fraktur-Bold.fbdbb350.ttf",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Fraktur-Regular.1eefed35.ttf",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Fraktur-Regular.2deccc19.woff2",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Fraktur-Regular.f284a77c.woff",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Main-Bold.1246e8f3.ttf",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Main-Bold.24b93032.woff2",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Main-Bold.d483dbca.woff",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Main-BoldItalic.45ff143d.woff2",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Main-BoldItalic.53bf0919.ttf",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Main-BoldItalic.964b8094.woff",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Main-Italic.0a95294f.woff",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Main-Italic.612bbd14.woff2",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Main-Italic.8df227cf.ttf",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Main-Regular.4a3a456a.woff",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Main-Regular.7e33eb02.woff2",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Main-Regular.afa42fae.ttf",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Math-BoldItalic.536f8062.woff",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Math-BoldItalic.57d208ab.ttf",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Math-BoldItalic.d8d1d1ff.woff2",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Math-Italic.2f4e2e0b.ttf",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Math-Italic.b0de506b.woff",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Math-Italic.b0f1432b.woff2",revision:null},{url:"/genshin_artifact/fonts/KaTeX_SansSerif-Bold.1e961ad2.ttf",revision:null},{url:"/genshin_artifact/fonts/KaTeX_SansSerif-Bold.4a9a18b5.woff2",revision:null},{url:"/genshin_artifact/fonts/KaTeX_SansSerif-Bold.ce49a6ad.woff",revision:null},{url:"/genshin_artifact/fonts/KaTeX_SansSerif-Italic.28def728.ttf",revision:null},{url:"/genshin_artifact/fonts/KaTeX_SansSerif-Italic.8c70b128.woff",revision:null},{url:"/genshin_artifact/fonts/KaTeX_SansSerif-Italic.9d5b8fd4.woff2",revision:null},{url:"/genshin_artifact/fonts/KaTeX_SansSerif-Regular.43b4ed19.woff",revision:null},{url:"/genshin_artifact/fonts/KaTeX_SansSerif-Regular.8dc6ea1c.woff2",revision:null},{url:"/genshin_artifact/fonts/KaTeX_SansSerif-Regular.a9ebe9ad.ttf",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Script-Regular.133d0427.woff",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Script-Regular.8b1e737d.ttf",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Script-Regular.981c1192.woff2",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Size1-Regular.b8a02783.ttf",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Size2-Regular.fd8a1ea7.ttf",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Size4-Regular.db126c2e.ttf",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Typewriter-Regular.0c12d85f.woff",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Typewriter-Regular.8ba3bd9d.ttf",revision:null},{url:"/genshin_artifact/fonts/KaTeX_Typewriter-Regular.d3c5e22f.woff2",revision:null},{url:"/genshin_artifact/fonts/element-icons.f1a45d74.ttf",revision:null},{url:"/genshin_artifact/fonts/element-icons.ff18efd1.woff",revision:null},{url:"/genshin_artifact/img/ailuoyi.811d7e17.png",revision:null},{url:"/genshin_artifact/img/alipay.1be52507.png",revision:null},{url:"/genshin_artifact/img/bachongshenzi.4344a0f4.png",revision:null},{url:"/genshin_artifact/img/card.04128782.jpg",revision:null},{url:"/genshin_artifact/img/card.0a616be9.png",revision:null},{url:"/genshin_artifact/img/card.0fe2544f.png",revision:null},{url:"/genshin_artifact/img/card.151660f5.jpg",revision:null},{url:"/genshin_artifact/img/card.15e0661b.jpg",revision:null},{url:"/genshin_artifact/img/card.1f4d9b0a.jpg",revision:null},{url:"/genshin_artifact/img/card.2240ce95.jpg",revision:null},{url:"/genshin_artifact/img/card.25c499a4.jpg",revision:null},{url:"/genshin_artifact/img/card.286cd4bd.jpg",revision:null},{url:"/genshin_artifact/img/card.2f30f728.jpg",revision:null},{url:"/genshin_artifact/img/card.30d97398.jpg",revision:null},{url:"/genshin_artifact/img/card.37b64acf.jpg",revision:null},{url:"/genshin_artifact/img/card.37bc85db.jpg",revision:null},{url:"/genshin_artifact/img/card.382ec825.png",revision:null},{url:"/genshin_artifact/img/card.3df70ff6.jpg",revision:null},{url:"/genshin_artifact/img/card.3ed580af.jpg",revision:null},{url:"/genshin_artifact/img/card.460689f2.jpg",revision:null},{url:"/genshin_artifact/img/card.47f481ea.jpg",revision:null},{url:"/genshin_artifact/img/card.4ab95cb3.jpg",revision:null},{url:"/genshin_artifact/img/card.4e68f7e8.jpg",revision:null},{url:"/genshin_artifact/img/card.50a7f469.jpg",revision:null},{url:"/genshin_artifact/img/card.661b344d.jpg",revision:null},{url:"/genshin_artifact/img/card.68cf59ed.jpg",revision:null},{url:"/genshin_artifact/img/card.6f545c12.jpg",revision:null},{url:"/genshin_artifact/img/card.6f5c842e.jpg",revision:null},{url:"/genshin_artifact/img/card.75b8f580.jpg",revision:null},{url:"/genshin_artifact/img/card.7853cb91.jpg",revision:null},{url:"/genshin_artifact/img/card.82c5e439.png",revision:null},{url:"/genshin_artifact/img/card.893c1835.jpg",revision:null},{url:"/genshin_artifact/img/card.8a2d351d.png",revision:null},{url:"/genshin_artifact/img/card.8b158b73.jpg",revision:null},{url:"/genshin_artifact/img/card.8cc880cd.png",revision:null},{url:"/genshin_artifact/img/card.8e95e528.jpg",revision:null},{url:"/genshin_artifact/img/card.98155a62.jpg",revision:null},{url:"/genshin_artifact/img/card.9a8ab506.png",revision:null},{url:"/genshin_artifact/img/card.9d545eb5.jpg",revision:null},{url:"/genshin_artifact/img/card.9f1c0173.jpg",revision:null},{url:"/genshin_artifact/img/card.a1d07231.jpg",revision:null},{url:"/genshin_artifact/img/card.a6101024.jpg",revision:null},{url:"/genshin_artifact/img/card.b13429af.png",revision:null},{url:"/genshin_artifact/img/card.ba8b1bd1.jpg",revision:null},{url:"/genshin_artifact/img/card.be99df62.jpg",revision:null},{url:"/genshin_artifact/img/card.c53b8772.png",revision:null},{url:"/genshin_artifact/img/card.dcadba93.jpg",revision:null},{url:"/genshin_artifact/img/card.dd8e881e.jpg",revision:null},{url:"/genshin_artifact/img/card.e6eb9ba3.jpg",revision:null},{url:"/genshin_artifact/img/card.f108982a.jpg",revision:null},{url:"/genshin_artifact/img/cryo.e0054787.png",revision:null},{url:"/genshin_artifact/img/cup.03906a78.png",revision:null},{url:"/genshin_artifact/img/cup.066ba5ca.png",revision:null},{url:"/genshin_artifact/img/cup.076e20a0.png",revision:null},{url:"/genshin_artifact/img/cup.0f4eb275.png",revision:null},{url:"/genshin_artifact/img/cup.1ef799b1.png",revision:null},{url:"/genshin_artifact/img/cup.67984cd0.png",revision:null},{url:"/genshin_artifact/img/cup.6b9af618.png",revision:null},{url:"/genshin_artifact/img/cup.6c077056.png",revision:null},{url:"/genshin_artifact/img/cup.727b1fc5.png",revision:null},{url:"/genshin_artifact/img/cup.77f2b5ac.png",revision:null},{url:"/genshin_artifact/img/cup.84b36fb1.png",revision:null},{url:"/genshin_artifact/img/cup.951c81be.png",revision:null},{url:"/genshin_artifact/img/cup.97083bb4.png",revision:null},{url:"/genshin_artifact/img/cup.9be82cf9.png",revision:null},{url:"/genshin_artifact/img/cup.9e502cd3.png",revision:null},{url:"/genshin_artifact/img/cup.b90fca70.png",revision:null},{url:"/genshin_artifact/img/cup.be77092c.png",revision:null},{url:"/genshin_artifact/img/cup.c44e65a0.png",revision:null},{url:"/genshin_artifact/img/cup.d0ed569f.png",revision:null},{url:"/genshin_artifact/img/cup.e09bc92b.png",revision:null},{url:"/genshin_artifact/img/cup.e804ea14.png",revision:null},{url:"/genshin_artifact/img/cup.fff3b2ad.png",revision:null},{url:"/genshin_artifact/img/feather.2965b5c0.png",revision:null},{url:"/genshin_artifact/img/feather.4bd769ff.png",revision:null},{url:"/genshin_artifact/img/feather.8a236d26.png",revision:null},{url:"/genshin_artifact/img/feather.8c4e1479.png",revision:null},{url:"/genshin_artifact/img/feather.956df919.png",revision:null},{url:"/genshin_artifact/img/feather.967c8739.png",revision:null},{url:"/genshin_artifact/img/feather.a139b5a2.png",revision:null},{url:"/genshin_artifact/img/feather.abbad112.png",revision:null},{url:"/genshin_artifact/img/feather.ad96a68d.png",revision:null},{url:"/genshin_artifact/img/feather.afafa7c8.png",revision:null},{url:"/genshin_artifact/img/feather.b88ca6be.png",revision:null},{url:"/genshin_artifact/img/feather.b9830a37.png",revision:null},{url:"/genshin_artifact/img/feather.d5902ddc.png",revision:null},{url:"/genshin_artifact/img/feather.f17f004b.png",revision:null},{url:"/genshin_artifact/img/feather.ff5679a0.png",revision:null},{url:"/genshin_artifact/img/flower.0e3623ce.png",revision:null},{url:"/genshin_artifact/img/flower.0f742305.png",revision:null},{url:"/genshin_artifact/img/flower.1a1be2c6.png",revision:null},{url:"/genshin_artifact/img/flower.1d3fc9d8.png",revision:null},{url:"/genshin_artifact/img/flower.1ecf089b.png",revision:null},{url:"/genshin_artifact/img/flower.215f15af.png",revision:null},{url:"/genshin_artifact/img/flower.44332e6f.png",revision:null},{url:"/genshin_artifact/img/flower.4a9d9f24.png",revision:null},{url:"/genshin_artifact/img/flower.4db6a1de.png",revision:null},{url:"/genshin_artifact/img/flower.65547fd6.png",revision:null},{url:"/genshin_artifact/img/flower.65d1ab71.png",revision:null},{url:"/genshin_artifact/img/flower.69585e18.png",revision:null},{url:"/genshin_artifact/img/flower.8c51e97f.png",revision:null},{url:"/genshin_artifact/img/flower.92af79f3.png",revision:null},{url:"/genshin_artifact/img/flower.94a3d4f7.png",revision:null},{url:"/genshin_artifact/img/flower.a2134499.png",revision:null},{url:"/genshin_artifact/img/flower.aaa92d98.png",revision:null},{url:"/genshin_artifact/img/flower.ab0c5d54.png",revision:null},{url:"/genshin_artifact/img/flower.c5e137de.png",revision:null},{url:"/genshin_artifact/img/flower.d3f65d68.png",revision:null},{url:"/genshin_artifact/img/flower.df8a2d3a.png",revision:null},{url:"/genshin_artifact/img/flower.e5dc95f4.png",revision:null},{url:"/genshin_artifact/img/flower.f018fcc8.png",revision:null},{url:"/genshin_artifact/img/flower.f83d4369.png",revision:null},{url:"/genshin_artifact/img/flower.f8c95a8a.png",revision:null},{url:"/genshin_artifact/img/geo.1bf6ccd6.png",revision:null},{url:"/genshin_artifact/img/head.06f14b53.png",revision:null},{url:"/genshin_artifact/img/head.12a59642.png",revision:null},{url:"/genshin_artifact/img/head.1f91a83f.png",revision:null},{url:"/genshin_artifact/img/head.2d37f123.png",revision:null},{url:"/genshin_artifact/img/head.47471001.png",revision:null},{url:"/genshin_artifact/img/head.48162c98.png",revision:null},{url:"/genshin_artifact/img/head.4ac6b309.png",revision:null},{url:"/genshin_artifact/img/head.52a7019f.png",revision:null},{url:"/genshin_artifact/img/head.5715b989.png",revision:null},{url:"/genshin_artifact/img/head.5d107a84.png",revision:null},{url:"/genshin_artifact/img/head.5fe5c5aa.png",revision:null},{url:"/genshin_artifact/img/head.62622eb5.png",revision:null},{url:"/genshin_artifact/img/head.6ddc7749.png",revision:null},{url:"/genshin_artifact/img/head.7ab66a48.png",revision:null},{url:"/genshin_artifact/img/head.8ba41b0e.png",revision:null},{url:"/genshin_artifact/img/head.99a791fc.png",revision:null},{url:"/genshin_artifact/img/head.a227d632.png",revision:null},{url:"/genshin_artifact/img/head.a55732d2.png",revision:null},{url:"/genshin_artifact/img/head.b29d8264.png",revision:null},{url:"/genshin_artifact/img/head.cef986fc.png",revision:null},{url:"/genshin_artifact/img/head.d189a468.png",revision:null},{url:"/genshin_artifact/img/head.d4637b84.png",revision:null},{url:"/genshin_artifact/img/head.eb423b81.png",revision:null},{url:"/genshin_artifact/img/head.ec12602e.png",revision:null},{url:"/genshin_artifact/img/head.ec85903d.png",revision:null},{url:"/genshin_artifact/img/head.f022b9fe.png",revision:null},{url:"/genshin_artifact/img/head.f2b3dfdb.png",revision:null},{url:"/genshin_artifact/img/head.fb01df8a.png",revision:null},{url:"/genshin_artifact/img/huanglongyidou.6b65bb14.png",revision:null},{url:"/genshin_artifact/img/initial-formula.2c492ab1.jpeg",revision:null},{url:"/genshin_artifact/img/pyro.a23e4dc7.png",revision:null},{url:"/genshin_artifact/img/sand.0d068cf8.png",revision:null},{url:"/genshin_artifact/img/sand.1649f397.png",revision:null},{url:"/genshin_artifact/img/sand.247fdecf.png",revision:null},{url:"/genshin_artifact/img/sand.2c239835.png",revision:null},{url:"/genshin_artifact/img/sand.34ec3453.png",revision:null},{url:"/genshin_artifact/img/sand.3e8b8b15.png",revision:null},{url:"/genshin_artifact/img/sand.3ef217fd.png",revision:null},{url:"/genshin_artifact/img/sand.4f09f707.png",revision:null},{url:"/genshin_artifact/img/sand.79962087.png",revision:null},{url:"/genshin_artifact/img/sand.79ec0497.png",revision:null},{url:"/genshin_artifact/img/sand.7a82d8bb.png",revision:null},{url:"/genshin_artifact/img/sand.7bf303bb.png",revision:null},{url:"/genshin_artifact/img/sand.8033b93e.png",revision:null},{url:"/genshin_artifact/img/sand.81026b3e.png",revision:null},{url:"/genshin_artifact/img/sand.978c7d34.png",revision:null},{url:"/genshin_artifact/img/sand.978d41a3.png",revision:null},{url:"/genshin_artifact/img/sand.9e47e0b4.png",revision:null},{url:"/genshin_artifact/img/sand.a71f4424.png",revision:null},{url:"/genshin_artifact/img/sand.a96c0d54.png",revision:null},{url:"/genshin_artifact/img/sand.b0d95dd4.png",revision:null},{url:"/genshin_artifact/img/sand.b3164b74.png",revision:null},{url:"/genshin_artifact/img/sand.ce6ccb46.png",revision:null},{url:"/genshin_artifact/img/sand.d2f53aa5.png",revision:null},{url:"/genshin_artifact/img/sand.daba32b7.png",revision:null},{url:"/genshin_artifact/img/sand.dce4c753.png",revision:null},{url:"/genshin_artifact/img/sand.ded3a6fa.png",revision:null},{url:"/genshin_artifact/img/sand.e3279686.png",revision:null},{url:"/genshin_artifact/img/sand.e79b6a9e.png",revision:null},{url:"/genshin_artifact/img/sand.eb46d7fb.png",revision:null},{url:"/genshin_artifact/img/sand.ebe43e8f.png",revision:null},{url:"/genshin_artifact/img/sand.f0292b8a.png",revision:null},{url:"/genshin_artifact/img/shenhe.e7b4b13e.png",revision:null},{url:"/genshin_artifact/img/shenlilinghua.1d8bd207.png",revision:null},{url:"/genshin_artifact/img/shield.dd8c2a94.png",revision:null},{url:"/genshin_artifact/img/tn.0d4070bf.png",revision:null},{url:"/genshin_artifact/img/tn.1648ea2c.png",revision:null},{url:"/genshin_artifact/img/tn.28e092b9.png",revision:null},{url:"/genshin_artifact/img/tn.3bf637c0.png",revision:null},{url:"/genshin_artifact/img/tn.41a047af.png",revision:null},{url:"/genshin_artifact/img/tn.48de5bf4.png",revision:null},{url:"/genshin_artifact/img/tn.4c15629b.png",revision:null},{url:"/genshin_artifact/img/tn.6819f8c8.png",revision:null},{url:"/genshin_artifact/img/tn.6e2bd665.png",revision:null},{url:"/genshin_artifact/img/tn.79b4445e.png",revision:null},{url:"/genshin_artifact/img/tn.7cd13367.png",revision:null},{url:"/genshin_artifact/img/tn.801e7f75.png",revision:null},{url:"/genshin_artifact/img/tn.86b5e69c.png",revision:null},{url:"/genshin_artifact/img/tn.8d0a2d65.png",revision:null},{url:"/genshin_artifact/img/tn.923099be.png",revision:null},{url:"/genshin_artifact/img/tn.949fe7f1.png",revision:null},{url:"/genshin_artifact/img/tn.94cc0839.png",revision:null},{url:"/genshin_artifact/img/tn.a1c6e03f.png",revision:null},{url:"/genshin_artifact/img/tn.bb38690b.png",revision:null},{url:"/genshin_artifact/img/tn.be9232df.png",revision:null},{url:"/genshin_artifact/img/tn.c23440ed.png",revision:null},{url:"/genshin_artifact/img/tn.c2d18208.png",revision:null},{url:"/genshin_artifact/img/tn.e0833c02.png",revision:null},{url:"/genshin_artifact/img/tn.e0ae14db.png",revision:null},{url:"/genshin_artifact/img/tn.e914948a.png",revision:null},{url:"/genshin_artifact/img/tn.ea84595b.png",revision:null},{url:"/genshin_artifact/img/tn.eb76a92c.png",revision:null},{url:"/genshin_artifact/img/tn.ef25ea53.png",revision:null},{url:"/genshin_artifact/img/tn.f280017f.png",revision:null},{url:"/genshin_artifact/img/tn.f431277b.png",revision:null},{url:"/genshin_artifact/img/tn.f484eaf7.png",revision:null},{url:"/genshin_artifact/img/tn.f6a22837.png",revision:null},{url:"/genshin_artifact/img/tn.fe166854.png",revision:null},{url:"/genshin_artifact/img/tuoma.a0164ba9.png",revision:null},{url:"/genshin_artifact/img/wechat.3c92b4b8.png",revision:null},{url:"/genshin_artifact/img/wulang.9e50e662.png",revision:null},{url:"/genshin_artifact/img/xiaogong.27d46598.png",revision:null},{url:"/genshin_artifact/img/yunjin.cde488b7.png",revision:null},{url:"/genshin_artifact/img/zaoyou.7cadf673.png",revision:null},{url:"/genshin_artifact/index.html",revision:"33dba17fa9f7fc3ba26f9cc8c96cf205"},{url:"/genshin_artifact/js/157.5c206e76.js",revision:null},{url:"/genshin_artifact/js/240.94a9b8a3.js",revision:null},{url:"/genshin_artifact/js/284.5aa3954c.js",revision:null},{url:"/genshin_artifact/js/426.49863288.js",revision:null},{url:"/genshin_artifact/js/739.c5c724b9.js",revision:null},{url:"/genshin_artifact/js/890.668de454.js",revision:null},{url:"/genshin_artifact/js/about-page.0c9c1a58.js",revision:null},{url:"/genshin_artifact/js/account-page.2c5dd8d0.js",revision:null},{url:"/genshin_artifact/js/app.30733253.js",revision:null},{url:"/genshin_artifact/js/artifact-potential-page.e1a28541.js",revision:null},{url:"/genshin_artifact/js/artifacts-page.f1eb8778.js",revision:null},{url:"/genshin_artifact/js/artifacts-plan-page.8f95965b.js",revision:null},{url:"/genshin_artifact/js/artifacts-statistics-page.02e56ada.js",revision:null},{url:"/genshin_artifact/js/character-presets-page.6daa4b7e.js",revision:null},{url:"/genshin_artifact/js/chunk-vendors.5c9767f6.js",revision:null},{url:"/genshin_artifact/js/config-artifacts.c4e3364d.js",revision:null},{url:"/genshin_artifact/js/help-page.d2464315.js",revision:null},{url:"/genshin_artifact/js/intro-page.da45bded.js",revision:null},{url:"/genshin_artifact/js/kumi-page.283c3225.js",revision:null},{url:"/genshin_artifact/js/steps-constraint.53ea64df.js",revision:null},{url:"/genshin_artifact/js/steps-select-buff.aedeb0c3.js",revision:null},{url:"/genshin_artifact/js/steps-select-c.032e053c.js",revision:null},{url:"/genshin_artifact/js/steps-select-t.7361910d.js",revision:null},{url:"/genshin_artifact/js/steps-select-w.498f8581.js",revision:null},{url:"/genshin_artifact/manifest.json",revision:"d722be72172e157c3f380df03fec36c7"},{url:"/genshin_artifact/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
