var _ampath_esm_patient_registration_app;(()=>{"use strict";var e,t,r,n,a,o,i,l,u,s,f,p,d,h,c,m,v,g,b={800:(e,t,r)=>{var n={"./start":()=>Promise.all([r.e(229),r.e(343),r.e(434),r.e(885)]).then((()=>()=>r(885)))},a=(e,t)=>(r.R=t,t=r.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),o=(e,t)=>{if(r.S){var n="default",a=r.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[n]=e,r.I(n,t)}};r.d(t,{get:()=>a,init:()=>o})}},y={};function _(e){var t=y[e];if(void 0!==t)return t.exports;var r=y[e]={id:e,loaded:!1,exports:{}};return b[e].call(r.exports,r,r.exports,_),r.loaded=!0,r.exports}_.m=b,_.c=y,_.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return _.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,_.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var a=Object.create(null);_.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,_.d(a,o),a},_.d=(e,t)=>{for(var r in t)_.o(t,r)&&!_.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},_.f={},_.e=e=>Promise.all(Object.keys(_.f).reduce(((t,r)=>(_.f[r](e,t),t)),[])),_.u=e=>e+".js",_.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),_.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="@ampath/esm-patient-registration-app:",_.l=(e,t,a,o)=>{if(r[e])r[e].push(t);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==n+a){i=f;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,_.nc&&i.setAttribute("nonce",_.nc),i.setAttribute("data-webpack",n+a),i.src=e),r[e]=[t];var p=(t,n)=>{i.onerror=i.onload=null,clearTimeout(d);var a=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}},_.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{_.S={};var e={},t={};_.I=(r,n)=>{n||(n=[]);var a=t[r];if(a||(a=t[r]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[r])return e[r];_.o(_.S,r)||(_.S[r]={});var o=_.S[r],i="@ampath/esm-patient-registration-app",l=(e,t,r,n)=>{var a=o[e]=o[e]||{},l=a[t];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[t]={get:r,from:i,eager:!!n})},u=[];return"default"===r&&(l("@openmrs/esm-framework","5.4.1-pre.1581",(()=>Promise.all([_.e(831),_.e(343)]).then((()=>()=>_(831))))),l("dayjs","1.11.10",(()=>_.e(464).then((()=>()=>_(3464))))),l("react-i18next","11.18.6",(()=>Promise.all([_.e(343),_.e(537)]).then((()=>()=>_(2537))))),l("react-router-dom","6.22.1",(()=>Promise.all([_.e(913),_.e(343)]).then((()=>()=>_(2913))))),l("react","18.2.0",(()=>_.e(41).then((()=>()=>_(4041))))),l("swr/_internal","2.2.5",(()=>Promise.all([_.e(372),_.e(343)]).then((()=>()=>_(2372))))),l("swr/immutable","2.2.5",(()=>Promise.all([_.e(343),_.e(434),_.e(876)]).then((()=>()=>_(9876)))))),e[r]=u.length?Promise.all(u).then((()=>e[r]=1)):1}}})(),(()=>{var e;_.g.importScripts&&(e=_.g.location+"");var t=_.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),_.p=e})(),a=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},o=(e,t)=>{e=a(e),t=a(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],o=(typeof n)[0];if(r>=t.length)return"u"==o;var i=t[r],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;r++}},i=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,r+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return r}var o=[];for(a=1;a<e.length;a++){var l=e[a];o.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?o.pop()+" "+o.pop():i(l))}return u();function u(){return o.pop().replace(/^\((.+)\)$/,"$1")}},l=(e,t)=>{if(0 in e){t=a(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var o=0,i=1,u=!0;;i++,o++){var s,f,p=i<e.length?(typeof e[i])[0]:"";if(o>=t.length||"o"==(f=(typeof(s=t[o]))[0]))return!u||("u"==p?i>r&&!n:""==p!=n);if("u"==f){if(!u||"u"!=p)return!1}else if(u)if(p==f)if(i<=r){if(s!=e[i])return!1}else{if(n?s>e[i]:s<e[i])return!1;s!=e[i]&&(u=!1)}else if("s"!=p&&"n"!=p){if(n||i<=r)return!1;u=!1,i--}else{if(i<=r||f<p!=n)return!1;u=!1}else"s"!=p&&"n"!=p&&(u=!1,i--)}}var d=[],h=d.pop.bind(d);for(o=1;o<e.length;o++){var c=e[o];d.push(1==c?h()|h():2==c?h()&h():c?l(c,t):!h())}return!!h()},u=(e,t)=>{var r=e[t];return Object.keys(r).reduce(((e,t)=>!e||!r[e].loaded&&o(e,t)?t:e),0)},s=(e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+i(n)+")",f=(e,t,r,n)=>{var a=u(e,r);return l(n,a)||p(s(e,r,a,n)),d(e[r][a])},p=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},d=e=>(e.loaded=1,e.get()),h=(e=>function(t,r,n,a){var o=_.I(t);return o&&o.then?o.then(e.bind(e,t,_.S[t],r,n,a)):e(0,_.S[t],r,n,a)})(((e,t,r,n,a)=>t&&_.o(t,r)?f(t,0,r,n):a())),c={},m={1343:()=>h("default","react",[1,18],(()=>_.e(41).then((()=>()=>_(4041))))),5434:()=>h("default","swr/_internal",[1,2],(()=>_.e(372).then((()=>()=>_(2372))))),1083:()=>h("default","@openmrs/esm-framework",[1,5],(()=>_.e(831).then((()=>()=>_(831))))),3150:()=>h("default","react-i18next",[1,11],(()=>_.e(918).then((()=>()=>_(2537))))),6372:()=>h("default","dayjs",[1,1],(()=>_.e(464).then((()=>()=>_(3464))))),8010:()=>h("default","swr/immutable",[1,2],(()=>_.e(495).then((()=>()=>_(9876))))),8877:()=>h("default","react-router-dom",[1,6],(()=>_.e(913).then((()=>()=>_(2913)))))},v={343:[1343],434:[5434],885:[1083,3150,6372,8010,8877]},g={},_.f.consumes=(e,t)=>{_.o(v,e)&&v[e].forEach((e=>{if(_.o(c,e))return t.push(c[e]);if(!g[e]){var r=t=>{c[e]=0,_.m[e]=r=>{delete _.c[e],r.exports=t()}};g[e]=!0;var n=t=>{delete c[e],_.m[e]=r=>{throw delete _.c[e],t}};try{var a=m[e]();a.then?t.push(c[e]=a.then(r).catch(n)):r(a)}catch(e){n(e)}}}))},(()=>{var e={898:0};_.f.j=(t,r)=>{var n=_.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(343|434)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var o=_.p+_.u(t),i=new Error;_.l(o,(r=>{if(_.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,a,[o,i,l]=r,u=0;if(o.some((t=>0!==e[t]))){for(n in i)_.o(i,n)&&(_.m[n]=i[n]);l&&l(_)}for(t&&t(r);u<o.length;u++)a=o[u],_.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=globalThis.webpackChunk_ampath_esm_patient_registration_app=globalThis.webpackChunk_ampath_esm_patient_registration_app||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),_.nc=void 0;var w=_(800);_ampath_esm_patient_registration_app=w})();