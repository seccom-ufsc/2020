(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},o=[];function i(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f7f4f559"}[t]+".js"}function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=i(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}s[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0e1a":function(t,e,a){},"1fda":function(t,e,a){},"320a":function(t,e,a){"use strict";var n=a("d53e"),s=a.n(n);s.a},"3c1e":function(t,e,a){},4315:function(t){t.exports=JSON.parse('[{"name":"Jônata Tyska Carvalho","title":"Robótica Evolutiva: do in silico para o in vivo","text":"A Robótica Evolutiva é uma área que busca inspiração na biologia para realizar o desenvolvimento de morfologias e comportamentos robóticos adaptativos e soluções práticas no âmbito da robótica móvel e de serviço. Nesta palestra apresentarei uma visão geral e um breve histórico dessa área que em 30 anos foi do desenvolvimento de robôs em simulação para a criação de robôs usando células vivas. Serão apresentados aspectos teóricos e práticos relacionados à inteligência corporificada, e ao desenvolvimento e comportamento robótico adaptativo através do uso de redes neurais e algoritmos evolutivos.","photo":"https://i.ibb.co/yqTqwpk/jtyska-Squared.png"},{"name":"Geomar Schreiner","title":"O que são BDs NewSQL","text":"NewSQL é o temo utilizado para designar um novo paradigma de Banco de Dados (BDs). São BDs que combinam a capacidade de lidar com grandes quantidades de dados dos BDs NoSQL com as características do modelo relacional (SQL, ACID). Serão apresentados os principais conceitos que envolvem os BDs NewSQL e quais as situações em que estes bancos são a solução mais indicada","photo":"https://i.ibb.co/Kh3Gvh6/geomar.jpg"},{"name":"Mateus Grellert","title":"Data Mining e Machine Learning com Python","text":"Nessa Palestra, vamos aprender um pouco sobre algumas técnicas básicas aplicadas em Data Mining e Machine Learning, bem como as ferramentas e bibliotecas em Python que nos permitem implementar soluções deste tipo. O objetivo é que os participantes sejam capazes de coletar seus próprios conjuntos de dados, analisar e processar esses dados, tratar problemas comuns e treinar modelos preditivos.","photo":"https://i.ibb.co/7pg6nMh/image1.jpg"}]')},"50be":function(t,e,a){"use strict";var n=a("91b5"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary"}},[a("div",{staticClass:"text-h6 roboto-mono px-3 blue-text-must-click mobile-hide"},[t._v("SECCOM")]),a("v-spacer"),a("v-tabs",{attrs:{right:"","slider-color":"#BCBCDC","slider-size":"4",color:"#BCBCDC"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},t._l(t.tabs,(function(e,n){return a("v-tab",{key:e.id,staticClass:"roboto-mono",attrs:{id:e.id},on:{click:function(e){return t.changeTab(n)}}},[t._v(" "+t._s(e.title)+" ")])})),1)],1),a("v-main",[a("StartPage"),a("SpeakersPage"),a("ContactPage"),a("RegistrationPage"),a("FourierBackground"),a("PulsarRadioBackground")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"start-page"}},[a("v-col",{staticClass:"d-flex align-center flex-column",staticStyle:{height:"90vh"}},[a("v-row",{staticClass:"d-flex align-center mobile-flex-column"},[a("div",{staticClass:"text-h1 roboto-mono",domProps:{textContent:t._s("SECCOM")}}),a("div",{staticClass:"text-h1 blue-text-must-click roboto-mono",domProps:{textContent:t._s(2020)}})]),a("v-col",{staticClass:"d-flex flex-column justify-center"},[a("v-row",{staticClass:"flex-grow-0 text-h5 roboto-mono"},[t._v("Semana Acadêmica da Computação e Sistemas")])],1)],1)],1)},r=[],c={name:"StartPage",data:function(){return{}}},l=c,u=(a("5c99"),a("2877")),d=a("6544"),p=a.n(d),h=a("62ad"),m=a("a523"),f=a("0fd9"),v=Object(u["a"])(l,i,r,!1,null,null,null),g=v.exports;p()(v,{VCol:h["a"],VContainer:m["a"],VRow:f["a"]});var b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{"min-height":"100vh"},attrs:{id:"speakers-page"}},[a("v-row",{staticClass:"d-flex justify-center"},t._l(t.speakers,(function(t,e){return a("SpeakerCard",{key:e,staticClass:"ma-4",attrs:{speaker:t}})})),1)],1)},w=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"speaker-card",staticStyle:{"max-width":"400px"}},[a("v-row",{staticClass:"d-flex justify-center pa-8"},[a("v-avatar",{attrs:{size:"150",rounded:"circle"}},[a("img",{staticStyle:{"object-fit":"cover"},attrs:{src:t.speaker.photo}})])],1),a("v-card-title",[t._v(t._s(t.speaker.name))]),a("v-card-subtitle",[t._v(t._s(t.speaker.title))]),a("v-card-text",{staticStyle:{"text-align":"justify"}},[t._v(t._s(t.speaker.text))])],1)},k=[],C=n["a"].extend({data:function(){return{}},props:["speaker"]}),x=C,S=(a("50be"),a("8212")),_=a("b0af"),j=a("99d9"),P=Object(u["a"])(x,y,k,!1,null,null,null),T=P.exports;p()(P,{VAvatar:S["a"],VCard:_["a"],VCardSubtitle:j["a"],VCardText:j["b"],VCardTitle:j["c"],VRow:f["a"]});var O=a("4315"),q={name:"SpeakersPage",components:{SpeakerCard:T},data:function(){return{container:document.querySelector("#speakers-page"),speakers:O}},mounted:function(){this.container=document.querySelector("#speakers-page")}},V=q,I=(a("320a"),Object(u["a"])(V,b,w,!1,null,null,null)),E=I.exports;p()(I,{VContainer:m["a"],VRow:f["a"]});var D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{"min-height":"100vh"},attrs:{id:"contact-page"}},[a("v-row",{staticClass:"d-flex justify-center my-15 roboto-mono px-15"},[a("div",{staticClass:"text-h2",domProps:{textContent:t._s("Quer falar com a gente?")}})]),a("v-row",{staticClass:"d-flex justify-center"},t._l(t.contacts,(function(t,e){return a("ContactCard",{key:e,staticClass:"ma-5",attrs:{contact:t}})})),1)],1)},B=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:t.contact.link}},[a("v-card",{staticClass:"pa-10",attrs:{raised:""}},[a("v-icon",{attrs:{color:this.$vuetify.theme.isDark?"#fff":this.$vuetify.theme.themes.light.primary,size:"60"}},[t._v(t._s(t.contact.icon))])],1)],1)},$=[],M={props:["contact"]},A=M,L=a("132d"),N=Object(u["a"])(A,R,$,!1,null,null,null),z=N.exports;p()(N,{VCard:_["a"],VIcon:L["a"]});var Y={name:"ContactPage",components:{ContactCard:z},data:function(){return{container:document.querySelector("#contact-page"),contacts:[{icon:"mdi-facebook",name:"@seccom-ufsc",link:"https://www.facebook.com/seccom.ufsc"},{icon:"mdi-instagram",name:"@seccom-ufsc",link:"https://www.instagram.com/seccom.ufsc/"},{icon:"mdi-email",name:"seccom.ufsc@gmail.com",link:"mailto:seccom.ufsc@gmail.com"},{icon:"mdi-github",name:"seccom.ufsc@gmail.com",link:"https://github.com/seccom-ufsc/"},{icon:"mdi-discord",name:"seccom.ufsc@gmail.com",link:"https://discord.gg/zTmGqsh"},{icon:"mdi-telegram",name:"seccom.ufsc@gmail.com",link:"https://t.me/seccomufsc"}]}},mounted:function(){this.container=document.querySelector("#contact-page")}},Q=Y,H=(a("9e13"),Object(u["a"])(Q,D,B,!1,null,null,null)),W=H.exports;p()(H,{VContainer:m["a"],VRow:f["a"]});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"registration-page"}})},G=[],J={name:"RegistrationPage",components:{},data:function(){return{container:document.querySelector("#registration-page")}},mounted:function(){this.container=document.querySelector("#registration-page")}},X=J,K=(a("d3cd"),Object(u["a"])(X,F,G,!1,null,null,null)),U=K.exports;p()(K,{VContainer:m["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fourier-canvas"})},tt=[],et=(a("cb29"),a("d4ec")),at=a("bee2"),nt=function(){function t(e,a,n,s,o){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5];Object(et["a"])(this,t),this.baseRadius=n,this.radius=n,this.speed=a,this.time=0,this.wave=[],this.color=s,this.x=0,this.y=0,this.n=o,this.prevX=null,this.prevY=null,this.waveDistance=2*n,this.p5Instance=e,this.darkTheme=i}return Object(at["a"])(t,[{key:"update",value:function(t){this.radius=this.baseRadius*(4/(t*Math.PI)),this.prevX=this.x,this.prevY=this.y,this.x+=this.radius*this.p5Instance.cos(t*this.time),this.y+=this.radius*this.p5Instance.sin(t*this.time),this.wave.length>window.innerWidth&&this.wave.pop()}},{key:"show",value:function(){this.x=0,this.y=0,this.time+=this.speed;for(var t=0;t<this.n;t++)this.update(2*t+1),this.p5Instance.noFill(),this.p5Instance.stroke(this.darkTheme?255:0),this.p5Instance.ellipse(this.prevX,this.prevY,2*this.radius),this.p5Instance.fill(this.color),this.p5Instance.stroke(this.color),this.p5Instance.line(this.prevX,this.prevY,this.x,this.y),this.p5Instance.ellipse(this.x,this.y,8);this.wave.unshift({x:this.x,y:this.y}),this.p5Instance.line(this.x,this.y,this.waveDistance,this.wave[0].y),this.p5Instance.translate(this.waveDistance,0),this.p5Instance.beginShape(),this.p5Instance.noFill();for(var e=0;e<this.wave.length;e++)this.p5Instance.vertex(e,this.wave[e].y);this.p5Instance.endShape(),this.p5Instance.translate(-this.waveDistance,0)}}]),t}(),st=a("237d"),ot=a.n(st),it=n["a"].extend({data:function(){return{sketch:null,instance:null}},mounted:function(){this.attachCanvas()},methods:{attachCanvas:function(){var t=this.$vuetify.theme.isDark;this.sketch=function(e){var a=window.innerHeight>window.innerWidth,n=new nt(e,a?.02:.05,70,"#474793",7,t);e.setup=function(){var t=e.createCanvas(window.innerWidth,window.innerHeight);document.querySelector(".fourier-canvas").appendChild(t.elt)},e.draw=function(){e.clear(),e.translate(e.width-120,e.height/2),e.rotate(e.PI),n.show()}},this.instance=new ot.a(this.sketch)}}}),rt=it,ct=(a("f60c"),Object(u["a"])(rt,Z,tt,!1,null,null,null)),lt=ct.exports;p()(ct,{VContainer:m["a"]});var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pulsar-radio-canvas"})},dt=[],pt=n["a"].extend({data:function(){return{sketch:null,instance:null}},mounted:function(){var t=this.$vuetify.theme.isDark;this.sketch=function(e){var a=0;e.setup=function(){var t=e.createCanvas(window.innerWidth,.2*window.innerHeight);document.querySelector(".pulsar-radio-canvas").appendChild(t.elt),e.frameRate(60)},e.draw=function(){a++,e.background(t?"#121212":"#ffffff"),e.fill(t?"#121212":"#ffffff"),e.stroke(t?255:"#474793");for(var n=100;n<e.height;n+=5){e.beginShape();var s=0;for(s=0;s<e.width;++s)e.vertex(s,n-80/(1+e.pow(s-e.width/2,4)/8e6)*e.noise(s/30+a/50+n));e.vertex(s,1e4),e.endShape()}}},this.instance=new ot.a(this.sketch)}}),ht=pt,mt=(a("781b"),Object(u["a"])(ht,ut,dt,!1,null,null,null)),ft=mt.exports,vt={name:"App",components:{StartPage:g,SpeakersPage:E,ContactPage:W,RegistrationPage:U,FourierBackground:lt,PulsarRadioBackground:ft},data:function(){return{marks:{home:null,schedule:null,speakers:null,contact:null,registration:null},tabs:[{id:"start-page-tab",title:"INÍCIO",container:"start-page"},{id:"speakers-page-tab",title:"PALESTRANTES",container:"speakers-page"},{id:"contact-page-tab",title:"CONTATO",container:"contact-page"}],activeTab:0}},mounted:function(){this.marks.home=document.querySelector("#start-page"),this.marks.speakers=document.querySelector("#speakers-page"),this.marks.contact=document.querySelector("#contact-page")},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(t){window.scrollY>=this.marks.contact.offsetTop?this.activeTab=2:window.scrollY>=this.marks.speakers.offsetTop?this.activeTab=1:this.activeTab=0},changeTab:function(t){this.activeTab=t,window.scrollTo({top:document.getElementById(this.tabs[t].container).offsetTop,behavior:"smooth"})}}},gt=vt,bt=(a("5c0b"),a("7496")),wt=a("40dc"),yt=a("f6c4"),kt=a("2fa4"),Ct=a("71a3"),xt=a("fe57"),St=Object(u["a"])(gt,s,o,!1,null,null,null),_t=St.exports;p()(St,{VApp:bt["a"],VAppBar:wt["a"],VMain:yt["a"],VSpacer:kt["a"],VTab:Ct["a"],VTabs:xt["a"]});a("d3b7");var jt=a("8c4f"),Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("StartPage",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},Tt=[],Ot={name:"Home",components:{StartPage:g}},qt=Ot,Vt=Object(u["a"])(qt,Pt,Tt,!1,null,null,null),It=Vt.exports;n["a"].use(jt["a"]);var Et=[{path:"/",name:"Home",component:It},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Dt=new jt["a"]({routes:Et}),Bt=Dt,Rt=a("f309"),$t=(a("15f5"),a("fcf4"));n["a"].use(Rt["a"]);var Mt=new Rt["a"]({icons:{iconfont:"fa"},theme:{dark:!1,themes:{dark:{primary:$t["a"].grey.darken4},light:{primary:"#2e2e5e",accent:"#BCBCDC"}}}});n["a"].config.productionTip=!1,new n["a"]({router:Bt,vuetify:Mt,render:function(t){return t(_t)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},"5c99":function(t,e,a){"use strict";var n=a("98e2"),s=a.n(n);s.a},"781b":function(t,e,a){"use strict";var n=a("1fda"),s=a.n(n);s.a},"7cfa":function(t,e,a){},"91b5":function(t,e,a){},"98e2":function(t,e,a){},"9c0c":function(t,e,a){},"9e13":function(t,e,a){"use strict";var n=a("7cfa"),s=a.n(n);s.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d3cd:function(t,e,a){"use strict";var n=a("0e1a"),s=a.n(n);s.a},d53e:function(t,e,a){},f60c:function(t,e,a){"use strict";var n=a("3c1e"),s=a.n(n);s.a}});
//# sourceMappingURL=app.d76f0ce6.js.map