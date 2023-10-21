"use strict";(self.webpackChunksuper_up_docs=self.webpackChunksuper_up_docs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Super up Intro",l={unversionedId:"intro",id:"intro",title:"Super up Intro",description:"- Super up is a full social chat app clone from whatsapp cupertino ui",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Manage Docs Versions",permalink:"/docs/flutter/manage-docs-versions"}},s={},p=[{value:"technologies",id:"technologies",level:3},{value:"requirements",id:"requirements",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"super-up-intro"},"Super up Intro"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Super up is a full social chat app clone from whatsapp ",(0,r.kt)("inlineCode",{parentName:"li"},"cupertino")," ui")),(0,r.kt)("h3",{id:"technologies"},"technologies"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://flutter.dev"},"Flutter")," for clint side (Android, ios,windows, web,macOS)"),(0,r.kt)("li",{parentName:"ol"},"Nodejs in the backend side  ",(0,r.kt)("a",{parentName:"li",href:"https://nestjs.com"},"Nestjs")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://socket.io"},"socket.io")," for real time management"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.mongodb.com"},"mongodb")," for data storage"),(0,r.kt)("li",{parentName:"ol"},"some backend tech Bearer token ",(0,r.kt)("inlineCode",{parentName:"li"},"JWT"),",ORM ",(0,r.kt)("inlineCode",{parentName:"li"},"mongoose"),","),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.agora.io"},"agora.io")," for video and voice calls"),(0,r.kt)("li",{parentName:"ol"},"All media saved on the server on your vps server"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"mailer")," for send reset password OTP"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"firebase-admin")," for push notifications"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"geoip-lite")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"request-ip")," for detect user country")),(0,r.kt)("admonition",{title:"Firebase",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This project not user firebase to save any data it only use the free firebase\nFCM for push notifications only!")),(0,r.kt)("h3",{id:"requirements"},"requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"flutter ",(0,r.kt)("a",{parentName:"li",href:"https://docs.flutter.dev/get-started/install"},"last-sdk")," installed in your local machine"),(0,r.kt)("li",{parentName:"ol"},"nodejs , nestjs , mongodb installed in your vps server"),(0,r.kt)("li",{parentName:"ol"},"vps server should be at lest 2 cpu and 2GB ram and enough ssd storage at lest 20 GB you can check out this companies\n",(0,r.kt)("a",{parentName:"li",href:"https://www.digitalocean.com"},"digitalocean")," ,",(0,r.kt)("a",{parentName:"li",href:"https://www.hostens.com/vps-hosting"},"hostens")," make sure you have\nbandwidth more than ",(0,r.kt)("em",{parentName:"li"},"1TB")),(0,r.kt)("li",{parentName:"ol"},"Domain name it can be from ",(0,r.kt)("a",{parentName:"li",href:"https://www.namecheap.com"},"namecheap")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://firebase.google.com/"},"firebase")," account for handle push notifications ",(0,r.kt)("inlineCode",{parentName:"li"},"Optional")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.agora.io/en/pricing"},"agora account")," if you intent to enable voice and video calls ",(0,r.kt)("inlineCode",{parentName:"li"},"Optional")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://onesignal.com/"},"onesignal")," account if you intent to push notifications over onesignal instead of firebase ",(0,r.kt)("inlineCode",{parentName:"li"},"Optional")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/maps/documentation/javascript/get-api-key"},"google api key")," this key used for search\nand let users able to send locations in chat ",(0,r.kt)("inlineCode",{parentName:"li"},"Optional")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://admob.google.com/home/get-started"},"google ads banner")," keys get one banner id if you want to enable it! ",(0,r.kt)("inlineCode",{parentName:"li"},"Optional"))))}u.isMDXComponent=!0}}]);