(function(t){function e(e){for(var o,r,l=e[0],c=e[1],s=e[2],p=0,d=[];p<l.length;p++)r=l[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("app-nav-bar"),n("router-view")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{staticClass:"amber roboto",attrs:{permanent:"","mini-variant":t.mini,fixed:"",app:""},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item",{staticClass:"px-2"},[n("v-list-item-avatar",[n("v-icon",[t._v("mdi-face-man")])],1),n("v-list-item-title",[t._v("Hello User!")]),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[n("v-icon",[t._v("mdi-chevron-left")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("router-link",{attrs:{to:e.path}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)],1)})),1)],1)},l=[],c={data:function(){return{drawer:!0,items:[{title:"List to do",icon:"mdi-format-list-checks",path:"/"},{title:"List to buy",icon:"mdi-basket-plus",path:"/tobuy"},{title:"About",icon:"mdi-information-variant",path:"/about"}],mini:!0}}},s=c,u=n("2877"),p=n("6544"),d=n.n(p),m=n("8336"),f=n("ce7e"),v=n("132d"),h=n("8860"),b=n("da13"),g=n("8270"),w=n("5d23"),_=n("34c3"),x=n("f774"),y=Object(u["a"])(s,r,l,!1,null,null,null),k=y.exports;d()(y,{VBtn:m["a"],VDivider:f["a"],VIcon:v["a"],VList:h["a"],VListItem:b["a"],VListItemAvatar:g["a"],VListItemContent:w["a"],VListItemIcon:_["a"],VListItemTitle:w["b"],VNavigationDrawer:x["a"]});var V={name:"App",components:{AppNavBar:k}},C=V,S=n("7496"),I=n("f6c4"),O=Object(u["a"])(C,a,i,!1,null,null,null),A=O.exports;d()(O,{VApp:S["a"],VMain:I["a"]});var j=n("9483");Object(j["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var P=n("8c4f"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("banner",{attrs:{iconList:t.icona}},[t._v("Cosa farai oggi?")]),n("pop-up-alert",{attrs:{dialog:t.showPopup},on:{CloseAlert:function(e){t.showPopup=e}}}),n("input-element",{on:{ShowAlert:function(e){t.showPopup=e},WriteItem:function(e){return t.todos.push(e)}}}),n("card",{attrs:{deleteItem:t.deleteItem,items:t.todos}})],1)},B=[],$=(n("c740"),n("a434"),n("e9c4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-banner",{staticClass:"amber lighten-5 text-center f-size-17 text-uppercase",attrs:{sticky:"",elevation:"4",icon:t.iconList,app:""}},[t._t("default",(function(){return[t._v(t._s(t.textBanner))]}))],2)}),E=[],L={props:{textBanner:String,iconList:String}},D=L,N=n("e4e5"),z=Object(u["a"])(D,$,E,!1,null,null,null),F=z.exports;d()(z,{VBanner:N["a"]});var J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"m-top-20"},[n("v-text-field",{attrs:{"background-color":"amber lighten-2",color:"black",solo:"","append-icon":"mdi-lead-pencil",clearable:"","clear-icon":"mdi-close-circle-outline"},on:{"click:append":t.writeItem},model:{value:t.label,callback:function(e){t.label=e},expression:"label"}})],1)},M=[],U=n("98dc"),W=n.n(U),q={data:function(){return{label:"",show:!1}},methods:{writeItem:function(){if(""==this.label)this.show=!0,this.$emit("ShowAlert",this.show);else{var t={id:W()("item_"),label:this.label};this.$emit("WriteItem",t),this.label=""}}}},H=q,G=n("a523"),Y=n("8654"),K=Object(u["a"])(H,J,M,!1,null,null,null),Q=K.exports;d()(K,{VContainer:G["a"],VTextField:Y["a"]});var R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",t._l(t.items,(function(e){return n("div",{key:e,staticClass:"scale-animation",staticStyle:{"padding-bottom":"15px"}},[n("v-banner",{attrs:{height:"65",elevation:"5",color:"amber lighten-5 text-center",shaped:"",icon:"mdi-close-circle-outline","icon-color":"amber",id:e.id},on:{"click:icon":function(n){return t.deleteItem(e.id)}}},[n("p",[t._v(t._s(e.label))])])],1)})),0)},X=[],Z={props:{items:{type:Array,id:String,label:String},deleteItem:Function}},tt=Z,et=Object(u["a"])(tt,R,X,!1,null,null,null),nt=et.exports;d()(et,{VBanner:N["a"],VContainer:G["a"]});var ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[t._v(" Attenzione ")]),n("v-card-text",[t._v("Non è stato inserito alcun elemento")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"amber lighten-2",text:""},on:{click:t.closePopUp}},[t._v(" Ok ")])],1)],1)],1)],1)},at=[],it={props:{dialog:{type:Boolean}},data:function(){return{noShow:!1}},methods:{closePopUp:function(){this.noShow=!1,this.$emit("CloseAlert",this.noShow)}}},rt=it,lt=n("b0af"),ct=n("99d9"),st=n("169a"),ut=n("2fa4"),pt=Object(u["a"])(rt,ot,at,!1,null,null,null),dt=pt.exports;d()(pt,{VBtn:m["a"],VCard:lt["a"],VCardActions:ct["a"],VCardText:ct["b"],VCardTitle:ct["c"],VContainer:G["a"],VDialog:st["a"],VSpacer:ut["a"]});var mt={name:"ToDo",data:function(){return{icona:"mdi-checkbox-marked-circle-outline",todos:JSON.parse(localStorage.getItem("itemToDo"))||[],showPopup:!1}},methods:{deleteItem:function(t){var e=this.todos.findIndex((function(e){return e.id===t}));this.todos.splice(e,1)}},watch:{todos:{deep:!0,handler:function(t){localStorage.setItem("itemToDo",JSON.stringify(t))}}},components:{Banner:F,InputElement:Q,Card:nt,PopUpAlert:dt}},ft=mt,vt=Object(u["a"])(ft,T,B,!1,null,null,null),ht=vt.exports;d()(vt,{VContainer:G["a"]});var bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("banner",{attrs:{iconList:t.icona}},[t._v("Cosa comprerai oggi?")]),n("pop-up-alert",{attrs:{dialog:t.showPopup},on:{CloseAlert:function(e){t.showPopup=e}}}),n("input-element",{on:{ShowAlert:function(e){t.showPopup=e},WriteItem:function(e){return t.buys.push(e)}}}),n("card",{attrs:{deleteItem:t.deleteItem,items:t.buys}})],1)},gt=[],wt={name:"ToBuy",data:function(){return{icona:"mdi-cart",buys:JSON.parse(localStorage.getItem("itemToBuy"))||[],showPopup:!1}},methods:{deleteItem:function(t){var e=this.buys.findIndex((function(e){return e.id===t}));this.buys.splice(e,1)}},components:{Banner:F,InputElement:Q,Card:nt,PopUpAlert:dt},watch:{buys:{deep:!0,handler:function(t){localStorage.setItem("itemToBuy",JSON.stringify(t))}}}},_t=wt,xt=Object(u["a"])(_t,bt,gt,!1,null,null,null),yt=xt.exports;d()(xt,{VContainer:G["a"]});var kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("about-social")],1)},Vt=[],Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"scale-animation",attrs:{elevation:"5",padless:""}},[n("v-card",{staticClass:"amber lighten-2 text-center text--black",attrs:{flat:"",tile:""}},[n("v-card-text",t._l(t.icons,(function(e){return n("v-btn",{key:e,staticClass:"mx-4 text--black",attrs:{href:e.link,icon:""}},[n("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e.icona)+" ")])],1)})),1),n("v-card-text",{staticClass:"text--black pt-0"},[n("h3",[t._v("Hei tu!")]),n("p",{staticStyle:{"line-height":"30px"}},[t._v(" Grazie per aver utilizzato quest'app, spero che l'esperienza sia stata gradevole. Seguimi sui i miei social, trovi i bottoni esattamente nel box sopra! Se hai delle domande, richieste o devi semplicemente segnalare un bug non esitare a contattarmi. ")])]),n("v-divider"),n("v-card-text",{staticClass:"text--black"},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Domenico Tenace")])])],1)],1)},St=[],It={data:function(){return{icons:[{icona:"mdi-facebook",link:"https://www.facebook.com/domenico.tenace"},{icona:"mdi-twitter",link:"https://twitter.com/dome_tena99"},{icona:"mdi-linkedin",link:"https://www.linkedin.com/in/domenico-tenace-982ba51ab/"},{icona:"mdi-instagram",link:"https://www.instagram.com/dome_t99/"}]}}},Ot=It,At=n("553a"),jt=Object(u["a"])(Ot,Ct,St,!1,null,null,null),Pt=jt.exports;d()(jt,{VBtn:m["a"],VCard:lt["a"],VCardText:ct["b"],VDivider:f["a"],VFooter:At["a"],VIcon:v["a"]});var Tt={name:"About",data:function(){return{portfolio:"https://domet99.github.io/"}},components:{AboutSocial:Pt},methods:{openPortfolio:function(){window.open(this.portfolio)}}},Bt=Tt,$t=Object(u["a"])(Bt,kt,Vt,!1,null,null,null),Et=$t.exports;d()($t,{VContainer:G["a"]}),o["a"].use(P["a"]);var Lt=[{path:"/",name:"ToDo",component:ht},{path:"/tobuy",name:"ToBuy",component:yt},{path:"/about",name:"About",component:Et}],Dt=new P["a"]({routes:Lt}),Nt=Dt,zt=n("f309");o["a"].use(zt["a"]);var Ft=new zt["a"]({}),Jt=n("e008"),Mt=n.n(Jt);o["a"].config.productionTip=!1,new o["a"]({router:Nt,vuetify:Ft,global:Mt.a,render:function(t){return t(A)}}).$mount("#app")},e008:function(t,e,n){}});
//# sourceMappingURL=app.2d48035b.js.map