(globalThis.webpackChunk_ohri_openmrs_esm_ohri_hiv_app=globalThis.webpackChunk_ohri_openmrs_esm_ohri_hiv_app||[]).push([[101],{3747:(e,n,t)=>{"use strict";t.r(n),t.d(n,{I18nContext:()=>k,I18nextProvider:()=>se,Trans:()=>Y,Translation:()=>ce,composeInitialProps:()=>A,date:()=>de,getDefaults:()=>I,getI18n:()=>R,getInitialProps:()=>Z,initReactI18next:()=>T,number:()=>ye,plural:()=>he,select:()=>me,selectOrdinal:()=>ve,setDefaults:()=>N,setI18n:()=>D,time:()=>ge,useSSR:()=>ue,useTranslation:()=>ne,withSSR:()=>fe,withTranslation:()=>ie});var r=t(287);function o(e,n){if(null==e)return{};var t,o,i=(0,r.Z)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var i=t(2326),a=t(3260);function c(e,n,t){return(n=(0,a.Z)(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s=t(268),u=t(8411),l=t.n(u),p=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function f(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(l()[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var o=new RegExp(p),i=null;null!==(i=o.exec(e));)if(i[0].trim())if(i[1]){var a=i[1].trim(),c=[a,""];a.indexOf("=")>-1&&(c=a.split("=")),n.attrs[c[0]]=c[1],o.lastIndex--}else i[2]&&(n.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return n}var d=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,g=/^\s*$/,y=Object.create(null);function m(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var n=[];for(var t in e)n.push(t+'="'+e[t]+'"');return n.length?" "+n.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(m,"")+"</"+n.name+">";case"comment":return e+"\x3c!--"+n.comment+"--\x3e"}}var h={parse:function(e,n){n||(n={}),n.components||(n.components=y);var t,r=[],o=[],i=-1,a=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(d,(function(c,s){if(a){if(c!=="</"+t.name+">")return;a=!1}var u,l="/"!==c.charAt(1),p=c.startsWith("\x3c!--"),d=s+c.length,y=e.charAt(d);if(p){var m=f(c);return i<0?(r.push(m),r):((u=o[i]).children.push(m),r)}if(l&&(i++,"tag"===(t=f(c)).type&&n.components[t.name]&&(t.type="component",a=!0),t.voidElement||a||!y||"<"===y||t.children.push({type:"text",content:e.slice(d,e.indexOf("<",d))}),0===i&&r.push(t),(u=o[i-1])&&u.children.push(t),o[i]=t),(!l||t.voidElement)&&(i>-1&&(t.voidElement||t.name===c.slice(2,-1))&&(i--,t=-1===i?r:o[i]),!a&&"<"!==y&&y)){u=-1===i?r:o[i].children;var h=e.indexOf("<",d),v=e.slice(d,-1===h?void 0:h);g.test(v)&&(v=" "),(h>-1&&i+u.length>=0||" "!==v)&&u.push({type:"text",content:v})}})),r},stringify:function(e){return e.reduce((function(e,n){return e+m("",n)}),"")}};const v=h;var b=t(8784),O=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,j={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},w=function(e){return j[e]};function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var E,x={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function(e){return e.replace(O,w)}},k=(0,s.createContext)();function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};x=S(S({},x),e)}function I(){return x}var C=function(){function e(){(function(e,n){if(t=e,!(null!=(r=n)&&"undefined"!=typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](t):t instanceof r))throw new TypeError("Cannot call a class as a function");var t,r})(this,e),this.usedNamespaces={}}return(0,b.Z)(e,[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach((function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function D(e){E=e}function R(){return E}var T={type:"3rdParty",init:function(e){N(e.options.react),D(e)}};function A(e){return function(n){return new Promise((function(t){var r=Z();e.getInitialProps?e.getInitialProps(n).then((function(e){t(S(S({},e),r))})):t(r)}))}}function Z(){var e=R(),n=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],t={},r={};return e.languages.forEach((function(t){r[t]={},n.forEach((function(n){r[t][n]=e.getResourceBundle(t,n)||{}}))})),t.initialI18nStore=r,t.initialLanguage=e.language,t}function L(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var _={};function z(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&_[n[0]]||("string"==typeof n[0]&&(_[n[0]]=new Date),L.apply(void 0,n))}function B(e,n,t){e.loadNamespaces(n,(function(){e.isInitialized?t():e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}))}function U(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}var F=["format"],H=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function K(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?K(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function W(e,n){if(!e)return!1;var t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function M(e){return e?e.props?e.props.children:e.children:[]}function $(e){return Array.isArray(e)?e:[e]}function q(e,n){if(!e)return"";var t="",r=$(e),a=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return r.forEach((function(e,r){if("string"==typeof e)t+="".concat(e);else if((0,s.isValidElement)(e)){var c=Object.keys(e.props).length,u=a.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===c)t+="<".concat(e.type,"/>");else if(l||u&&0===c)if(e.props.i18nIsDynamicList)t+="<".concat(r,"></").concat(r,">");else if(u&&1===c&&"string"==typeof l)t+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var p=q(l,n);t+="<".concat(r,">").concat(p,"</").concat(r,">")}else t+="<".concat(r,"></").concat(r,">")}else if(null===e)L("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,i.Z)(e)){var f=e.format,d=o(e,F),g=Object.keys(d);if(1===g.length){var y=f?"".concat(g[0],", ").concat(f):g[0];t+="{{".concat(y,"}}")}else L("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else L("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),t}function Y(e){var n=e.children,t=e.count,r=e.parent,a=e.i18nKey,c=e.context,u=e.tOptions,l=void 0===u?{}:u,p=e.values,f=e.defaults,d=e.components,g=e.ns,y=e.i18n,m=e.t,h=e.shouldUnescape,b=o(e,H),O=(0,s.useContext)(k)||{},j=O.i18n,w=O.defaultNS,P=y||j||R();if(!P)return z("You will need to pass in an i18next instance by using i18nextReactModule"),n;var S=m||P.t.bind(P)||function(e){return e};c&&(l.context=c);var E=V(V({},I()),P.options&&P.options.react),x=g||S.ns||w||P.options&&P.options.defaultNS;x="string"==typeof x?[x]:x||["translation"];var N=f||q(n,E)||E.transEmptyNodeValue||a,C=E.hashTransKey,D=a||(C?C(N):N),T=p?l.interpolation:{interpolation:V(V({},l.interpolation),{},{prefix:"#$?",suffix:"?$#"})},A=V(V(V(V({},l),{},{count:t},p),T),{},{defaultValue:N,ns:x}),Z=function(e,n,t,r,o,a){if(""===n)return[];var c=r.transKeepBasicHtmlNodesFor||[],u=n&&new RegExp(c.join("|")).test(n);if(!e&&!u)return[n];var l={};!function e(n){$(n).forEach((function(n){"string"!=typeof n&&(W(n)?e(M(n)):"object"!==(0,i.Z)(n)||(0,s.isValidElement)(n)||Object.assign(l,n))}))}(e);var p=v.parse("<0>".concat(n,"</0>")),f=V(V({},l),o);function d(e,n,t){var r=M(e),o=y(r,n.children,t);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return(0,s.isValidElement)(e)}))}(r)&&0===o.length?r:o}function g(e,n,t,r,o){e.dummy&&(e.children=n),t.push((0,s.cloneElement)(e,V(V({},e.props),{},{key:r}),o?void 0:n))}function y(n,o,l){var p=$(n);return $(o).reduce((function(n,o,m){var h,v,b,O=o.children&&o.children[0]&&o.children[0].content&&t.services.interpolator.interpolate(o.children[0].content,f,t.language);if("tag"===o.type){var j=p[parseInt(o.name,10)];!j&&1===l.length&&l[0][o.name]&&(j=l[0][o.name]),j||(j={});var w=0!==Object.keys(o.attrs).length?(h={props:o.attrs},(b=V({},v=j)).props=Object.assign(h.props,v.props),b):j,P=(0,s.isValidElement)(w),S=P&&W(o,!0)&&!o.voidElement,E=u&&"object"===(0,i.Z)(w)&&w.dummy&&!P,x="object"===(0,i.Z)(e)&&null!==e&&Object.hasOwnProperty.call(e,o.name);if("string"==typeof w){var k=t.services.interpolator.interpolate(w,f,t.language);n.push(k)}else if(W(w)||S)g(w,d(w,o,l),n,m);else if(E){var N=y(p,o.children,l);n.push((0,s.cloneElement)(w,V(V({},w.props),{},{key:m}),N))}else if(Number.isNaN(parseFloat(o.name)))if(x)g(w,d(w,o,l),n,m,o.voidElement);else if(r.transSupportBasicHtmlNodes&&c.indexOf(o.name)>-1)if(o.voidElement)n.push((0,s.createElement)(o.name,{key:"".concat(o.name,"-").concat(m)}));else{var I=y(p,o.children,l);n.push((0,s.createElement)(o.name,{key:"".concat(o.name,"-").concat(m)},I))}else if(o.voidElement)n.push("<".concat(o.name," />"));else{var C=y(p,o.children,l);n.push("<".concat(o.name,">").concat(C,"</").concat(o.name,">"))}else if("object"!==(0,i.Z)(w)||P)1===o.children.length&&O?n.push((0,s.cloneElement)(w,V(V({},w.props),{},{key:m}),O)):n.push((0,s.cloneElement)(w,V(V({},w.props),{},{key:m})));else{var D=o.children[0]?O:null;D&&n.push(D)}}else if("text"===o.type){var R=r.transWrapTextNodes,T=a?r.unescape(t.services.interpolator.interpolate(o.content,f,t.language)):t.services.interpolator.interpolate(o.content,f,t.language);R?n.push((0,s.createElement)(R,{key:"".concat(o.name,"-").concat(m)},T)):n.push(T)}return n}),[])}return M(y([{dummy:!0,children:e||[]}],p,$(e||[]))[0])}(d||n,D?S(D,A):N,P,E,A,h),L=void 0!==r?r:E.defaultTransParent;return L?(0,s.createElement)(L,b,Z):Z}function J(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function G(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,c=[],s=!0,u=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=i.call(t)).done)&&(c.push(r.value),c.length!==n);s=!0);}catch(e){u=!0,o=e}finally{try{if(!s&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,n)||function(e,n){if(e){if("string"==typeof e)return J(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?J(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function X(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Q(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ee=function(e,n){var t=(0,s.useRef)();return(0,s.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function ne(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,s.useContext)(k)||{},o=r.i18n,i=r.defaultNS,a=t||o||R();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new C),!a){z("You will need to pass in an i18next instance by using initReactI18next");var c=function(e){return Array.isArray(e)?e[e.length-1]:e},u=[c,{},!1];return u.t=c,u.i18n={},u.ready=!1,u}a.options.react&&void 0!==a.options.react.wait&&z("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=X(X(X({},I()),a.options.react),n),p=l.useSuspense,f=l.keyPrefix,d=e||i||a.options&&a.options.defaultNS;d="string"==typeof d?[d]:d||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(d);var g=(a.isInitialized||a.initializedStoreOnce)&&d.every((function(e){return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.languages&&n.languages.length?void 0!==n.options.ignoreJSONStructure?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],o=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e)||!n.hasResourceBundle(r,e)&&n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages)&&(!a(r,e)||o&&!a(i,e)))}(e,n,t):(z("i18n.languages were undefined or empty",n.languages),!0)}(e,a,l)}));function y(){return a.getFixedT(null,"fallback"===l.nsMode?d:d[0],f)}var m=G((0,s.useState)(y),2),h=m[0],v=m[1],b=d.join(),O=ee(b),j=(0,s.useRef)(!0);(0,s.useEffect)((function(){var e=l.bindI18n,n=l.bindI18nStore;function t(){j.current&&v(y)}return j.current=!0,g||p||B(a,d,(function(){j.current&&v(y)})),g&&O&&O!==b&&j.current&&v(y),e&&a&&a.on(e,t),n&&a&&a.store.on(n,t),function(){j.current=!1,e&&a&&e.split(" ").forEach((function(e){return a.off(e,t)})),n&&a&&n.split(" ").forEach((function(e){return a.store.off(e,t)}))}}),[a,b]);var w=(0,s.useRef)(!0);(0,s.useEffect)((function(){j.current&&!w.current&&v(y),w.current=!1}),[a,f]);var P=[h,a,g];if(P.t=h,P.i18n=a,P.ready=g,g)return P;if(!g&&!p)return P;throw new Promise((function(e){B(a,d,(function(){e()}))}))}var te=["forwardedRef"];function re(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function oe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?re(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):re(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ie(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function r(r){var i=r.forwardedRef,a=o(r,te),c=G(ne(e,oe(oe({},a),{},{keyPrefix:n.keyPrefix})),3),u=c[0],l=c[1],p=c[2],f=oe(oe({},a),{},{t:u,i18n:l,tReady:p});return n.withRef&&i?f.ref=i:!n.withRef&&i&&(f.forwardedRef=i),(0,s.createElement)(t,f)}return r.displayName="withI18nextTranslation(".concat(U(t),")"),r.WrappedComponent=t,n.withRef?(0,s.forwardRef)((function(e,n){return(0,s.createElement)(r,Object.assign({},e,{forwardedRef:n}))})):r}}var ae=["ns","children"];function ce(e){var n=e.ns,t=e.children,r=G(ne(n,o(e,ae)),3),i=r[0],a=r[1],c=r[2];return t(i,{i18n:a,lng:a.language},c)}function se(e){var n=e.i18n,t=e.defaultNS,r=e.children,o=(0,s.useMemo)((function(){return{i18n:n,defaultNS:t}}),[n,t]);return(0,s.createElement)(k.Provider,{value:o},r)}function ue(e,n){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).i18n,r=((0,s.useContext)(k)||{}).i18n,o=t||r||R();o.options&&o.options.isClone||(e&&!o.initializedStoreOnce&&(o.services.resourceStore.data=e,o.options.ns=Object.values(e).reduce((function(e,n){return Object.keys(n).forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}),o.options.ns),o.initializedStoreOnce=!0,o.isInitialized=!0),n&&!o.initializedLanguageOnce&&(o.changeLanguage(n),o.initializedLanguageOnce=!0))}var le=["initialI18nStore","initialLanguage"];function pe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function fe(){return function(e){function n(n){var t=n.initialI18nStore,r=n.initialLanguage,i=o(n,le);return ue(t,r),(0,s.createElement)(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?pe(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):pe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},i))}return n.getInitialProps=A(e),n.displayName="withI18nextSSR(".concat(U(e),")"),n.WrappedComponent=e,n}}var de=function(){return""},ge=function(){return""},ye=function(){return""},me=function(){return""},he=function(){return""},ve=function(){return""}},8411:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},8784:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(3260);function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(0,r.Z)(o.key),o)}}function i(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}},3260:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r=t(2326);function o(e){var n=function(e,n){if("object"!==(0,r.Z)(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,"string");if("object"!==(0,r.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===(0,r.Z)(n)?n:String(n)}},2326:(e,n,t)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.d(n,{Z:()=>r})}}]);