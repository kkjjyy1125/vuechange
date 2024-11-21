import{e as sr,r as Vt,m as ir,i as de,w as Kt,a as cr,b as Ze,c as lr,t as ca,h as la,g as fa,o as ua,n as fr,d as da,f as D,j as rt,k as ma,l as pa,p as ha,s as ga,u as Fe,q as ya,v as qt,x as gt,y as va,z as ba}from"./primevue-2aef5b60.js";var xa=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let ur;const at=e=>ur=e,dr=Symbol();function _t(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ze;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ze||(ze={}));function Ea(){const e=sr(!0),t=e.run(()=>Vt({}));let n=[],r=[];const a=ir({install(o){at(a),a._a=o,o.provide(dr,a),o.config.globalProperties.$pinia=a,r.forEach(s=>n.push(s)),r=[]},use(o){return!this._a&&!xa?r.push(o):n.push(o),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const mr=()=>{};function dn(e,t,n,r=mr){e.push(t);const a=()=>{const o=e.indexOf(t);o>-1&&(e.splice(o,1),r())};return!n&&fa()&&ua(a),a}function we(e,...t){e.slice().forEach(n=>{n(...t)})}const wa=e=>e(),mn=Symbol(),yt=Symbol();function Ot(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,r)=>e.set(r,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],a=e[n];_t(a)&&_t(r)&&e.hasOwnProperty(n)&&!Ze(r)&&!lr(r)?e[n]=Ot(a,r):e[n]=r}return e}const Aa=Symbol();function Sa(e){return!_t(e)||!e.hasOwnProperty(Aa)}const{assign:le}=Object;function Pa(e){return!!(Ze(e)&&e.effect)}function ka(e,t,n,r){const{state:a,actions:o,getters:s}=t,i=n.state.value[e];let c;function l(){i||(n.state.value[e]=a?a():{});const f=da(n.state.value[e]);return le(f,o,Object.keys(s||{}).reduce((u,d)=>(u[d]=ir(D(()=>{at(n);const p=n._s.get(e);return s[d].call(p,p)})),u),{}))}return c=pr(e,l,t,n,r,!0),c}function pr(e,t,n={},r,a,o){let s;const i=le({actions:{}},n),c={deep:!0};let l,f,u=[],d=[],p;const w=r.state.value[e];!o&&!w&&(r.state.value[e]={}),Vt({});let A;function S(R){let O;l=f=!1,typeof R=="function"?(R(r.state.value[e]),O={type:ze.patchFunction,storeId:e,events:p}):(Ot(r.state.value[e],R),O={type:ze.patchObject,payload:R,storeId:e,events:p});const B=A=Symbol();fr().then(()=>{A===B&&(l=!0)}),f=!0,we(u,O,r.state.value[e])}const g=o?function(){const{state:O}=n,B=O?O():{};this.$patch(Q=>{le(Q,B)})}:mr;function h(){s.stop(),u=[],d=[],r._s.delete(e)}const x=(R,O="")=>{if(mn in R)return R[yt]=O,R;const B=function(){at(r);const Q=Array.from(arguments),ae=[],J=[];function ut(j){ae.push(j)}function Ie(j){J.push(j)}we(d,{args:Q,name:B[yt],store:_,after:ut,onError:Ie});let oe;try{oe=R.apply(this&&this.$id===e?this:_,Q)}catch(j){throw we(J,j),j}return oe instanceof Promise?oe.then(j=>(we(ae,j),j)).catch(j=>(we(J,j),Promise.reject(j))):(we(ae,oe),oe)};return B[mn]=!0,B[yt]=O,B},C={_p:r,$id:e,$onAction:dn.bind(null,d),$patch:S,$reset:g,$subscribe(R,O={}){const B=dn(u,R,O.detached,()=>Q()),Q=s.run(()=>Kt(()=>r.state.value[e],ae=>{(O.flush==="sync"?f:l)&&R({storeId:e,type:ze.direct,events:p},ae)},le({},c,O)));return B},$dispose:h},_=cr(C);r._s.set(e,_);const N=(r._a&&r._a.runWithContext||wa)(()=>r._e.run(()=>(s=sr()).run(()=>t({action:x}))));for(const R in N){const O=N[R];if(Ze(O)&&!Pa(O)||lr(O))o||(w&&Sa(O)&&(Ze(O)?O.value=w[R]:Ot(O,w[R])),r.state.value[e][R]=O);else if(typeof O=="function"){const B=x(O,R);N[R]=B,i.actions[R]=O}}return le(_,N),le(ca(_),N),Object.defineProperty(_,"$state",{get:()=>r.state.value[e],set:R=>{S(O=>{le(O,R)})}}),r._p.forEach(R=>{le(_,s.run(()=>R({store:_,app:r._a,pinia:r,options:i})))}),w&&o&&n.hydrate&&n.hydrate(_.$state,w),l=!0,f=!0,_}function Zi(e,t,n){let r,a;const o=typeof t=="function";typeof e=="string"?(r=e,a=o?n:t):(a=e,r=e.id);function s(i,c){const l=la();return i=i||(l?de(dr,null):null),i&&at(i),i=ur,i._s.has(r)||(o?pr(r,t,a,i):ka(r,a,i)),i._s.get(r)}return s.$id=r,s}function _a(e){return typeof e=="object"&&e!==null}function pn(e,t){return e=_a(e)?e:Object.create(null),new Proxy(e,{get(n,r,a){return r==="key"?Reflect.get(n,r,a):Reflect.get(n,r,a)||Reflect.get(t,r,a)}})}function Oa(e,t){return t.reduce((n,r)=>n?.[r],e)}function Ca(e,t,n){return t.slice(0,-1).reduce((r,a)=>/^(__proto__)$/.test(a)?{}:r[a]=r[a]||{},e)[t[t.length-1]]=n,e}function Ra(e,t){return t.reduce((n,r)=>{const a=r.split(".");return Ca(n,a,Oa(e,a))},{})}function Ia(e,t){return n=>{var r;try{const{storage:a=localStorage,beforeRestore:o=void 0,afterRestore:s=void 0,serializer:i={serialize:JSON.stringify,deserialize:JSON.parse},key:c=t.$id,paths:l=null,debug:f=!1}=n;return{storage:a,beforeRestore:o,afterRestore:s,serializer:i,key:((r=e.key)!=null?r:u=>u)(typeof c=="string"?c:c(t.$id)),paths:l,debug:f}}catch(a){return n.debug&&console.error("[pinia-plugin-persistedstate]",a),null}}}function hn(e,{storage:t,serializer:n,key:r,debug:a}){try{const o=t?.getItem(r);o&&e.$patch(n?.deserialize(o))}catch(o){a&&console.error("[pinia-plugin-persistedstate]",o)}}function gn(e,{storage:t,serializer:n,key:r,paths:a,debug:o}){try{const s=Array.isArray(a)?Ra(e,a):e;t.setItem(r,n.serialize(s))}catch(s){o&&console.error("[pinia-plugin-persistedstate]",s)}}function Na(e={}){return t=>{const{auto:n=!1}=e,{options:{persist:r=n},store:a,pinia:o}=t;if(!r)return;if(!(a.$id in o.state.value)){const i=o._s.get(a.$id.replace("__hot:",""));i&&Promise.resolve().then(()=>i.$persist());return}const s=(Array.isArray(r)?r.map(i=>pn(i,e)):[pn(r,e)]).map(Ia(e,a)).filter(Boolean);a.$persist=()=>{s.forEach(i=>{gn(a.$state,i)})},a.$hydrate=({runHooks:i=!0}={})=>{s.forEach(c=>{const{beforeRestore:l,afterRestore:f}=c;i&&l?.(t),hn(a,c),i&&f?.(t)})},s.forEach(i=>{const{beforeRestore:c,afterRestore:l}=i;c?.(t),hn(a,i),l?.(t),a.$subscribe((f,u)=>{gn(u,i)},{detached:!0})})}}var La=Na();const Ta=rt({__name:"App",setup(e){return(t,n)=>{const r=ma("router-view");return ha(),pa(r)}}});const Ma=function(){const t=typeof document<"u"&&document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),Fa=function(e,t){return new URL(e,t).href},yn={},se=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Fa(o,r),o in yn)return;yn[o]=!0;const s=o.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(!!r)for(let f=a.length-1;f>=0;f--){const u=a[f];if(u.href===o&&(!s||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${i}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":Ma,s||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),s)return new Promise((f,u)=>{l.addEventListener("load",f),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})};/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ae=typeof document<"u";function za(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const I=Object.assign;function vt(e,t){const n={};for(const r in t){const a=t[r];n[r]=V(a)?a.map(e):e(a)}return n}const je=()=>{},V=Array.isArray,hr=/#/g,ja=/&/g,Da=/\//g,Ba=/=/g,$a=/\?/g,gr=/\+/g,Ua=/%5B/g,Wa=/%5D/g,yr=/%5E/g,Ha=/%60/g,vr=/%7B/g,Ya=/%7C/g,br=/%7D/g,Ga=/%20/g;function Xt(e){return encodeURI(""+e).replace(Ya,"|").replace(Ua,"[").replace(Wa,"]")}function Va(e){return Xt(e).replace(vr,"{").replace(br,"}").replace(yr,"^")}function Ct(e){return Xt(e).replace(gr,"%2B").replace(Ga,"+").replace(hr,"%23").replace(ja,"%26").replace(Ha,"`").replace(vr,"{").replace(br,"}").replace(yr,"^")}function Ka(e){return Ct(e).replace(Ba,"%3D")}function qa(e){return Xt(e).replace(hr,"%23").replace($a,"%3F")}function Xa(e){return e==null?"":qa(e).replace(Da,"%2F")}function Ue(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Qa=/\/$/,Ja=e=>e.replace(Qa,"");function bt(e,t,n="/"){let r,a={},o="",s="";const i=t.indexOf("#");let c=t.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(r=t.slice(0,c),o=t.slice(c+1,i>-1?i:t.length),a=e(o)),i>-1&&(r=r||t.slice(0,i),s=t.slice(i,t.length)),r=no(r??t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:a,hash:Ue(s)}}function Za(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function vn(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function eo(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&ke(t.matched[r],n.matched[a])&&xr(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ke(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function xr(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!to(e[n],t[n]))return!1;return!0}function to(e,t){return V(e)?bn(e,t):V(t)?bn(t,e):e===t}function bn(e,t){return V(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function no(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let o=n.length-1,s,i;for(s=0;s<r.length;s++)if(i=r[s],i!==".")if(i==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(s).join("/")}const ie={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var We;(function(e){e.pop="pop",e.push="push"})(We||(We={}));var De;(function(e){e.back="back",e.forward="forward",e.unknown=""})(De||(De={}));function ro(e){if(!e)if(Ae){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ja(e)}const ao=/^[^#]+#/;function oo(e,t){return e.replace(ao,"#")+t}function so(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ot=()=>({left:window.scrollX,top:window.scrollY});function io(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=so(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function xn(e,t){return(history.state?history.state.position-t:-1)+e}const Rt=new Map;function co(e,t){Rt.set(e,t)}function lo(e){const t=Rt.get(e);return Rt.delete(e),t}let fo=()=>location.protocol+"//"+location.host;function Er(e,t){const{pathname:n,search:r,hash:a}=t,o=e.indexOf("#");if(o>-1){let i=a.includes(e.slice(o))?e.slice(o).length:1,c=a.slice(i);return c[0]!=="/"&&(c="/"+c),vn(c,"")}return vn(n,e)+r+a}function uo(e,t,n,r){let a=[],o=[],s=null;const i=({state:d})=>{const p=Er(e,location),w=n.value,A=t.value;let S=0;if(d){if(n.value=p,t.value=d,s&&s===w){s=null;return}S=A?d.position-A.position:0}else r(p);a.forEach(g=>{g(n.value,w,{delta:S,type:We.pop,direction:S?S>0?De.forward:De.back:De.unknown})})};function c(){s=n.value}function l(d){a.push(d);const p=()=>{const w=a.indexOf(d);w>-1&&a.splice(w,1)};return o.push(p),p}function f(){const{history:d}=window;d.state&&d.replaceState(I({},d.state,{scroll:ot()}),"")}function u(){for(const d of o)d();o=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:l,destroy:u}}function En(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?ot():null}}function mo(e){const{history:t,location:n}=window,r={value:Er(e,n)},a={value:t.state};a.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,l,f){const u=e.indexOf("#"),d=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+c:fo()+e+c;try{t[f?"replaceState":"pushState"](l,"",d),a.value=l}catch(p){console.error(p),n[f?"replace":"assign"](d)}}function s(c,l){const f=I({},t.state,En(a.value.back,c,a.value.forward,!0),l,{position:a.value.position});o(c,f,!0),r.value=c}function i(c,l){const f=I({},a.value,t.state,{forward:c,scroll:ot()});o(f.current,f,!0);const u=I({},En(r.value,c,null),{position:f.position+1},l);o(c,u,!1),r.value=c}return{location:r,state:a,push:i,replace:s}}function po(e){e=ro(e);const t=mo(e),n=uo(e,t.state,t.location,t.replace);function r(o,s=!0){s||n.pauseListeners(),history.go(o)}const a=I({location:"",base:e,go:r,createHref:oo.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function ho(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),po(e)}function go(e){return typeof e=="string"||e&&typeof e=="object"}function wr(e){return typeof e=="string"||typeof e=="symbol"}const Ar=Symbol("");var wn;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(wn||(wn={}));function _e(e,t){return I(new Error,{type:e,[Ar]:!0},t)}function Z(e,t){return e instanceof Error&&Ar in e&&(t==null||!!(e.type&t))}const An="[^/]+?",yo={sensitive:!1,strict:!1,start:!0,end:!0},vo=/[.+*?^${}()[\]/\\]/g;function bo(e,t){const n=I({},yo,t),r=[];let a=n.start?"^":"";const o=[];for(const l of e){const f=l.length?[]:[90];n.strict&&!l.length&&(a+="/");for(let u=0;u<l.length;u++){const d=l[u];let p=40+(n.sensitive?.25:0);if(d.type===0)u||(a+="/"),a+=d.value.replace(vo,"\\$&"),p+=40;else if(d.type===1){const{value:w,repeatable:A,optional:S,regexp:g}=d;o.push({name:w,repeatable:A,optional:S});const h=g||An;if(h!==An){p+=10;try{new RegExp(`(${h})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${w}" (${h}): `+C.message)}}let x=A?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;u||(x=S&&l.length<2?`(?:/${x})`:"/"+x),S&&(x+="?"),a+=x,p+=20,S&&(p+=-8),A&&(p+=-20),h===".*"&&(p+=-50)}f.push(p)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const s=new RegExp(a,n.sensitive?"":"i");function i(l){const f=l.match(s),u={};if(!f)return null;for(let d=1;d<f.length;d++){const p=f[d]||"",w=o[d-1];u[w.name]=p&&w.repeatable?p.split("/"):p}return u}function c(l){let f="",u=!1;for(const d of e){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const p of d)if(p.type===0)f+=p.value;else if(p.type===1){const{value:w,repeatable:A,optional:S}=p,g=w in l?l[w]:"";if(V(g)&&!A)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const h=V(g)?g.join("/"):g;if(!h)if(S)d.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${w}"`);f+=h}}return f||"/"}return{re:s,score:r,keys:o,parse:i,stringify:c}}function xo(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Sr(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const o=xo(r[n],a[n]);if(o)return o;n++}if(Math.abs(a.length-r.length)===1){if(Sn(r))return 1;if(Sn(a))return-1}return a.length-r.length}function Sn(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Eo={type:0,value:""},wo=/[a-zA-Z0-9_]/;function Ao(e){if(!e)return[[]];if(e==="/")return[[Eo]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const a=[];let o;function s(){o&&a.push(o),o=[]}let i=0,c,l="",f="";function u(){l&&(n===0?o.push({type:0,value:l}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&u(),s()):c===":"?(u(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:wo.test(c)?d():(u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),u(),s(),a}function So(e,t,n){const r=bo(Ao(e.path),n),a=I(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Po(e,t){const n=[],r=new Map;t=_n({strict:!1,end:!0,sensitive:!1},t);function a(u){return r.get(u)}function o(u,d,p){const w=!p,A=ko(u);A.aliasOf=p&&p.record;const S=_n(t,u),g=[A];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const _ of C)g.push(I({},A,{components:p?p.record.components:A.components,path:_,aliasOf:p?p.record:A}))}let h,x;for(const C of g){const{path:_}=C;if(d&&_[0]!=="/"){const $=d.record.path,N=$[$.length-1]==="/"?"":"/";C.path=d.record.path+(_&&N+_)}if(h=So(C,d,S),p?p.alias.push(h):(x=x||h,x!==h&&x.alias.push(h),w&&u.name&&!kn(h)&&s(u.name)),Pr(h)&&c(h),A.children){const $=A.children;for(let N=0;N<$.length;N++)o($[N],h,p&&p.children[N])}p=p||h}return x?()=>{s(x)}:je}function s(u){if(wr(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(s),d.alias.forEach(s))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(s),u.alias.forEach(s))}}function i(){return n}function c(u){const d=Co(u,n);n.splice(d,0,u),u.record.name&&!kn(u)&&r.set(u.record.name,u)}function l(u,d){let p,w={},A,S;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw _e(1,{location:u});S=p.record.name,w=I(Pn(d.params,p.keys.filter(x=>!x.optional).concat(p.parent?p.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),u.params&&Pn(u.params,p.keys.map(x=>x.name))),A=p.stringify(w)}else if(u.path!=null)A=u.path,p=n.find(x=>x.re.test(A)),p&&(w=p.parse(A),S=p.record.name);else{if(p=d.name?r.get(d.name):n.find(x=>x.re.test(d.path)),!p)throw _e(1,{location:u,currentLocation:d});S=p.record.name,w=I({},d.params,u.params),A=p.stringify(w)}const g=[];let h=p;for(;h;)g.unshift(h.record),h=h.parent;return{name:S,path:A,params:w,matched:g,meta:Oo(g)}}e.forEach(u=>o(u));function f(){n.length=0,r.clear()}return{addRoute:o,resolve:l,removeRoute:s,clearRoutes:f,getRoutes:i,getRecordMatcher:a}}function Pn(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ko(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:_o(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function _o(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function kn(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Oo(e){return e.reduce((t,n)=>I(t,n.meta),{})}function _n(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Co(e,t){let n=0,r=t.length;for(;n!==r;){const o=n+r>>1;Sr(e,t[o])<0?r=o:n=o+1}const a=Ro(e);return a&&(r=t.lastIndexOf(a,r-1)),r}function Ro(e){let t=e;for(;t=t.parent;)if(Pr(t)&&Sr(e,t)===0)return t}function Pr({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Io(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const o=r[a].replace(gr," "),s=o.indexOf("="),i=Ue(s<0?o:o.slice(0,s)),c=s<0?null:Ue(o.slice(s+1));if(i in t){let l=t[i];V(l)||(l=t[i]=[l]),l.push(c)}else t[i]=c}return t}function On(e){let t="";for(let n in e){const r=e[n];if(n=Ka(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(V(r)?r.map(o=>o&&Ct(o)):[r&&Ct(r)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function No(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=V(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Lo=Symbol(""),Cn=Symbol(""),st=Symbol(""),Qt=Symbol(""),It=Symbol("");function Le(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function fe(e,t,n,r,a,o=s=>s()){const s=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((i,c)=>{const l=d=>{d===!1?c(_e(4,{from:n,to:t})):d instanceof Error?c(d):go(d)?c(_e(2,{from:t,to:d})):(s&&r.enterCallbacks[a]===s&&typeof d=="function"&&s.push(d),i())},f=o(()=>e.call(r&&r.instances[a],t,n,l));let u=Promise.resolve(f);e.length<3&&(u=u.then(l)),u.catch(d=>c(d))})}function xt(e,t,n,r,a=o=>o()){const o=[];for(const s of e)for(const i in s.components){let c=s.components[i];if(!(t!=="beforeRouteEnter"&&!s.instances[i]))if(To(c)){const f=(c.__vccOpts||c)[t];f&&o.push(fe(f,n,r,s,i,a))}else{let l=c();o.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));const u=za(f)?f.default:f;s.components[i]=u;const p=(u.__vccOpts||u)[t];return p&&fe(p,n,r,s,i,a)()}))}}return o}function To(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Rn(e){const t=de(st),n=de(Qt),r=D(()=>{const c=Fe(e.to);return t.resolve(c)}),a=D(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],u=n.matched;if(!f||!u.length)return-1;const d=u.findIndex(ke.bind(null,f));if(d>-1)return d;const p=In(c[l-2]);return l>1&&In(f)===p&&u[u.length-1].path!==p?u.findIndex(ke.bind(null,c[l-2])):d}),o=D(()=>a.value>-1&&jo(n.params,r.value.params)),s=D(()=>a.value>-1&&a.value===n.matched.length-1&&xr(n.params,r.value.params));function i(c={}){return zo(c)?t[Fe(e.replace)?"replace":"push"](Fe(e.to)).catch(je):Promise.resolve()}return{route:r,href:D(()=>r.value.href),isActive:o,isExactActive:s,navigate:i}}const Mo=rt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rn,setup(e,{slots:t}){const n=cr(Rn(e)),{options:r}=de(st),a=D(()=>({[Nn(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Nn(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:qt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},o)}}}),Fo=Mo;function zo(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function jo(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!V(a)||a.length!==r.length||r.some((o,s)=>o!==a[s]))return!1}return!0}function In(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Nn=(e,t,n)=>e??t??n,Do=rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=de(It),a=D(()=>e.route||r.value),o=de(Cn,0),s=D(()=>{let l=Fe(o);const{matched:f}=a.value;let u;for(;(u=f[l])&&!u.components;)l++;return l}),i=D(()=>a.value.matched[s.value]);gt(Cn,D(()=>s.value+1)),gt(Lo,i),gt(It,a);const c=Vt();return Kt(()=>[c.value,i.value,e.name],([l,f,u],[d,p,w])=>{f&&(f.instances[u]=l,p&&p!==f&&l&&l===d&&(f.leaveGuards.size||(f.leaveGuards=p.leaveGuards),f.updateGuards.size||(f.updateGuards=p.updateGuards))),l&&f&&(!p||!ke(f,p)||!d)&&(f.enterCallbacks[u]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=a.value,f=e.name,u=i.value,d=u&&u.components[f];if(!d)return Ln(n.default,{Component:d,route:l});const p=u.props[f],w=p?p===!0?l.params:typeof p=="function"?p(l):p:null,S=qt(d,I({},w,t,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(u.instances[f]=null)},ref:c}));return Ln(n.default,{Component:S,route:l})||S}}});function Ln(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Bo=Do;function $o(e){const t=Po(e.routes,e),n=e.parseQuery||Io,r=e.stringifyQuery||On,a=e.history,o=Le(),s=Le(),i=Le(),c=ga(ie);let l=ie;Ae&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=vt.bind(null,m=>""+m),u=vt.bind(null,Xa),d=vt.bind(null,Ue);function p(m,v){let y,E;return wr(m)?(y=t.getRecordMatcher(m),E=v):E=m,t.addRoute(E,y)}function w(m){const v=t.getRecordMatcher(m);v&&t.removeRoute(v)}function A(){return t.getRoutes().map(m=>m.record)}function S(m){return!!t.getRecordMatcher(m)}function g(m,v){if(v=I({},v||c.value),typeof m=="string"){const P=bt(n,m,v.path),z=t.resolve({path:P.path},v),Ne=a.createHref(P.fullPath);return I(P,z,{params:d(z.params),hash:Ue(P.hash),redirectedFrom:void 0,href:Ne})}let y;if(m.path!=null)y=I({},m,{path:bt(n,m.path,v.path).path});else{const P=I({},m.params);for(const z in P)P[z]==null&&delete P[z];y=I({},m,{params:u(P)}),v.params=u(v.params)}const E=t.resolve(y,v),L=m.hash||"";E.params=f(d(E.params));const F=Za(r,I({},m,{hash:Va(L),path:E.path})),k=a.createHref(F);return I({fullPath:F,hash:L,query:r===On?No(m.query):m.query||{}},E,{redirectedFrom:void 0,href:k})}function h(m){return typeof m=="string"?bt(n,m,c.value.path):I({},m)}function x(m,v){if(l!==m)return _e(8,{from:v,to:m})}function C(m){return N(m)}function _(m){return C(I(h(m),{replace:!0}))}function $(m){const v=m.matched[m.matched.length-1];if(v&&v.redirect){const{redirect:y}=v;let E=typeof y=="function"?y(m):y;return typeof E=="string"&&(E=E.includes("?")||E.includes("#")?E=h(E):{path:E},E.params={}),I({query:m.query,hash:m.hash,params:E.path!=null?{}:m.params},E)}}function N(m,v){const y=l=g(m),E=c.value,L=m.state,F=m.force,k=m.replace===!0,P=$(y);if(P)return N(I(h(P),{state:typeof P=="object"?I({},L,P.state):L,force:F,replace:k}),v||y);const z=y;z.redirectedFrom=v;let Ne;return!F&&eo(r,E,y)&&(Ne=_e(16,{to:z,from:E}),fn(E,E,!0,!1)),(Ne?Promise.resolve(Ne):B(z,E)).catch(U=>Z(U)?Z(U,2)?U:mt(U):dt(U,z,E)).then(U=>{if(U){if(Z(U,2))return N(I({replace:k},h(U.to),{state:typeof U.to=="object"?I({},L,U.to.state):L,force:F}),v||z)}else U=ae(z,E,!0,k,L);return Q(z,E,U),U})}function R(m,v){const y=x(m,v);return y?Promise.reject(y):Promise.resolve()}function O(m){const v=qe.values().next().value;return v&&typeof v.runWithContext=="function"?v.runWithContext(m):m()}function B(m,v){let y;const[E,L,F]=Uo(m,v);y=xt(E.reverse(),"beforeRouteLeave",m,v);for(const P of E)P.leaveGuards.forEach(z=>{y.push(fe(z,m,v))});const k=R.bind(null,m,v);return y.push(k),Ee(y).then(()=>{y=[];for(const P of o.list())y.push(fe(P,m,v));return y.push(k),Ee(y)}).then(()=>{y=xt(L,"beforeRouteUpdate",m,v);for(const P of L)P.updateGuards.forEach(z=>{y.push(fe(z,m,v))});return y.push(k),Ee(y)}).then(()=>{y=[];for(const P of F)if(P.beforeEnter)if(V(P.beforeEnter))for(const z of P.beforeEnter)y.push(fe(z,m,v));else y.push(fe(P.beforeEnter,m,v));return y.push(k),Ee(y)}).then(()=>(m.matched.forEach(P=>P.enterCallbacks={}),y=xt(F,"beforeRouteEnter",m,v,O),y.push(k),Ee(y))).then(()=>{y=[];for(const P of s.list())y.push(fe(P,m,v));return y.push(k),Ee(y)}).catch(P=>Z(P,8)?P:Promise.reject(P))}function Q(m,v,y){i.list().forEach(E=>O(()=>E(m,v,y)))}function ae(m,v,y,E,L){const F=x(m,v);if(F)return F;const k=v===ie,P=Ae?history.state:{};y&&(E||k?a.replace(m.fullPath,I({scroll:k&&P&&P.scroll},L)):a.push(m.fullPath,L)),c.value=m,fn(m,v,y,k),mt()}let J;function ut(){J||(J=a.listen((m,v,y)=>{if(!un.listening)return;const E=g(m),L=$(E);if(L){N(I(L,{replace:!0}),E).catch(je);return}l=E;const F=c.value;Ae&&co(xn(F.fullPath,y.delta),ot()),B(E,F).catch(k=>Z(k,12)?k:Z(k,2)?(N(k.to,E).then(P=>{Z(P,20)&&!y.delta&&y.type===We.pop&&a.go(-1,!1)}).catch(je),Promise.reject()):(y.delta&&a.go(-y.delta,!1),dt(k,E,F))).then(k=>{k=k||ae(E,F,!1),k&&(y.delta&&!Z(k,8)?a.go(-y.delta,!1):y.type===We.pop&&Z(k,20)&&a.go(-1,!1)),Q(E,F,k)}).catch(je)}))}let Ie=Le(),oe=Le(),j;function dt(m,v,y){mt(m);const E=oe.list();return E.length?E.forEach(L=>L(m,v,y)):console.error(m),Promise.reject(m)}function ia(){return j&&c.value!==ie?Promise.resolve():new Promise((m,v)=>{Ie.add([m,v])})}function mt(m){return j||(j=!m,ut(),Ie.list().forEach(([v,y])=>m?y(m):v()),Ie.reset()),m}function fn(m,v,y,E){const{scrollBehavior:L}=e;if(!Ae||!L)return Promise.resolve();const F=!y&&lo(xn(m.fullPath,0))||(E||!y)&&history.state&&history.state.scroll||null;return fr().then(()=>L(m,v,F)).then(k=>k&&io(k)).catch(k=>dt(k,m,v))}const pt=m=>a.go(m);let ht;const qe=new Set,un={currentRoute:c,listening:!0,addRoute:p,removeRoute:w,clearRoutes:t.clearRoutes,hasRoute:S,getRoutes:A,resolve:g,options:e,push:C,replace:_,go:pt,back:()=>pt(-1),forward:()=>pt(1),beforeEach:o.add,beforeResolve:s.add,afterEach:i.add,onError:oe.add,isReady:ia,install(m){const v=this;m.component("RouterLink",Fo),m.component("RouterView",Bo),m.config.globalProperties.$router=v,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>Fe(c)}),Ae&&!ht&&c.value===ie&&(ht=!0,C(a.location).catch(L=>{}));const y={};for(const L in ie)Object.defineProperty(y,L,{get:()=>c.value[L],enumerable:!0});m.provide(st,v),m.provide(Qt,ya(y)),m.provide(It,c);const E=m.unmount;qe.add(m),m.unmount=function(){qe.delete(m),qe.size<1&&(l=ie,J&&J(),J=null,c.value=ie,ht=!1,j=!1),E()}}};function Ee(m){return m.reduce((v,y)=>v.then(()=>O(y)),Promise.resolve())}return un}function Uo(e,t){const n=[],r=[],a=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const i=t.matched[s];i&&(e.matched.find(l=>ke(l,i))?r.push(i):n.push(i));const c=e.matched[s];c&&(t.matched.find(l=>ke(l,c))||a.push(c))}return[n,r,a]}function ec(){return de(st)}function tc(e){return de(Qt)}const Wo=[{path:"/",name:"LoginIndex",component:()=>se(()=>import("./LoginIndex-8e404859.js"),["./LoginIndex-8e404859.js","./primevue-2aef5b60.js","./primevue-616d0caa.css","./_plugin-vue_export-helper-c27b6911.js","./CCheckbox.vue_vue_type_script_setup_true_lang-11ec537d.js","./TitleBar-991dd130.js","./dayjs.min-185a5676.js","./_commonjsHelpers-23102255.js","./user.store-e2ce3946.js","./setting.store-e57f9b22.js","./TitleBar-d2817ac0.css","./LoginIndex-5e75ea1b.css"],import.meta.url)},{path:"/front",name:"FrontIndex",component:()=>se(()=>import("./FrontIndex-7860cd3b.js"),["./FrontIndex-7860cd3b.js","./primevue-2aef5b60.js","./primevue-616d0caa.css","./TitleBar-991dd130.js","./dayjs.min-185a5676.js","./_commonjsHelpers-23102255.js","./user.store-e2ce3946.js","./setting.store-e57f9b22.js","./_plugin-vue_export-helper-c27b6911.js","./TitleBar-d2817ac0.css","./CCheckbox.vue_vue_type_script_setup_true_lang-11ec537d.js","./CTextClip.vue_vue_type_script_setup_true_lang-2acd9278.js","./bluebird-ac77514c.js","./match.both.store-efca186c.js","./match.winover.store-a855c5fe.js","./FrontIndex-db793bbf.css"],import.meta.url),children:[{path:"/matchInfo",name:"FrontMatchInfo",component:()=>se(()=>import("./FrontMatchInfo-0a97a766.js"),["./FrontMatchInfo-0a97a766.js","./primevue-2aef5b60.js","./primevue-616d0caa.css","./setting.store-e57f9b22.js","./user.store-e2ce3946.js","./match.both.store-efca186c.js","./CIconSports.vue_vue_type_script_setup_true_lang-166e2401.js","./CIconPublicSite.vue_vue_type_script_setup_true_lang-87df5751.js","./_plugin-vue_export-helper-c27b6911.js","./CIconPublicSite-e77bd446.css","./CTextClip.vue_vue_type_script_setup_true_lang-2acd9278.js","./CFrontCommonMatchFind.vue_vue_type_script_setup_true_lang-9e3c6666.js","./CCheckbox.vue_vue_type_script_setup_true_lang-11ec537d.js","./dayjs.min-185a5676.js","./_commonjsHelpers-23102255.js","./bluebird-ac77514c.js","./CFrontCommonMatchSites.vue_vue_type_script_setup_true_lang-65215b96.js","./FrontMatchInfo-cdf5fb41.css"],import.meta.url)},{path:"/twoFolder/:mode",name:"FrontTwoFolder",component:()=>se(()=>import("./FrontTwoFolder-370689a1.js"),["./FrontTwoFolder-370689a1.js","./primevue-2aef5b60.js","./primevue-616d0caa.css","./setting.store-e57f9b22.js","./match.both.store-efca186c.js","./dayjs.min-185a5676.js","./_commonjsHelpers-23102255.js","./CIconSports.vue_vue_type_script_setup_true_lang-166e2401.js","./CIconPublicSite.vue_vue_type_script_setup_true_lang-87df5751.js","./_plugin-vue_export-helper-c27b6911.js","./CIconPublicSite-e77bd446.css","./CTextClip.vue_vue_type_script_setup_true_lang-2acd9278.js","./CFrontCommonMatchFind.vue_vue_type_script_setup_true_lang-9e3c6666.js","./CCheckbox.vue_vue_type_script_setup_true_lang-11ec537d.js","./user.store-e2ce3946.js","./COdds.vue_vue_type_script_setup_true_lang-65929990.js","./FrontTwoFolder-af502813.css"],import.meta.url)},{path:"/threeFolder/:mode",name:"FrontThreeFolder",component:()=>se(()=>import("./FrontThreeFolder-71ecb519.js"),["./FrontThreeFolder-71ecb519.js","./primevue-2aef5b60.js","./primevue-616d0caa.css","./setting.store-e57f9b22.js","./match.both.store-efca186c.js","./dayjs.min-185a5676.js","./_commonjsHelpers-23102255.js","./CIconSports.vue_vue_type_script_setup_true_lang-166e2401.js","./CIconPublicSite.vue_vue_type_script_setup_true_lang-87df5751.js","./_plugin-vue_export-helper-c27b6911.js","./CIconPublicSite-e77bd446.css","./CTextClip.vue_vue_type_script_setup_true_lang-2acd9278.js","./CFrontCommonMatchFind.vue_vue_type_script_setup_true_lang-9e3c6666.js","./CCheckbox.vue_vue_type_script_setup_true_lang-11ec537d.js","./user.store-e2ce3946.js","./COdds.vue_vue_type_script_setup_true_lang-65929990.js","./FrontThreeFolder-3cf1431e.css"],import.meta.url)},{path:"/winOver",name:"FrontWinOver",component:()=>se(()=>import("./FrontWinOver-24aaa411.js"),["./FrontWinOver-24aaa411.js","./primevue-2aef5b60.js","./primevue-616d0caa.css","./setting.store-e57f9b22.js","./match.winover.store-a855c5fe.js","./CIconPublicSite.vue_vue_type_script_setup_true_lang-87df5751.js","./_plugin-vue_export-helper-c27b6911.js","./CIconPublicSite-e77bd446.css","./CTextClip.vue_vue_type_script_setup_true_lang-2acd9278.js","./CCheckbox.vue_vue_type_script_setup_true_lang-11ec537d.js","./COdds.vue_vue_type_script_setup_true_lang-65929990.js","./CFrontCommonMatchFind.vue_vue_type_script_setup_true_lang-9e3c6666.js","./CFrontCommonMatchSites.vue_vue_type_script_setup_true_lang-65215b96.js","./FrontWinOver-8621a73d.css"],import.meta.url)},{path:"/overSea",name:"FrontOversea",component:()=>se(()=>import("./FrontOversea-a41d6a45.js"),["./FrontOversea-a41d6a45.js","./primevue-2aef5b60.js","./primevue-616d0caa.css","./setting.store-e57f9b22.js","./index-d199903f.js","./user.store-e2ce3946.js","./CIconSports.vue_vue_type_script_setup_true_lang-166e2401.js","./CIconPublicSite.vue_vue_type_script_setup_true_lang-87df5751.js","./_plugin-vue_export-helper-c27b6911.js","./CIconPublicSite-e77bd446.css","./CTextClip.vue_vue_type_script_setup_true_lang-2acd9278.js"],import.meta.url)},{path:"/playGround",name:"FrontPlayGround",component:()=>se(()=>import("./FrontPlayground-f19ea148.js"),["./FrontPlayground-f19ea148.js","./primevue-2aef5b60.js","./primevue-616d0caa.css","./setting.store-e57f9b22.js","./match.both.store-efca186c.js"],import.meta.url)}]}],Ho=$o({history:ho(),routes:Wo}),Tn=()=>{};let Jt={},kr={},_r=null,Or={mark:Tn,measure:Tn};try{typeof window<"u"&&(Jt=window),typeof document<"u"&&(kr=document),typeof MutationObserver<"u"&&(_r=MutationObserver),typeof performance<"u"&&(Or=performance)}catch{}const{userAgent:Mn=""}=Jt.navigator||{},me=Jt,T=kr,Fn=_r,Xe=Or;me.document;const re=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",Cr=~Mn.indexOf("MSIE")||~Mn.indexOf("Trident/");var M="classic",Rr="duotone",H="sharp",Y="sharp-duotone",Yo=[M,Rr,H,Y],Go={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},zn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Vo=["kit"],Ko=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,qo=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Xo={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Qo={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Jo={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Zo={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},es={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},ts={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Ir={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},ns=["solid","regular","light","thin","duotone","brands"],Nr=[1,2,3,4,5,6,7,8,9,10],rs=Nr.concat([11,12,13,14,15,16,17,18,19,20]),Te={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},as=[...Object.keys(Zo),...ns,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Te.GROUP,Te.SWAP_OPACITY,Te.PRIMARY,Te.SECONDARY].concat(Nr.map(e=>"".concat(e,"x"))).concat(rs.map(e=>"w-".concat(e))),os={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ss={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},is={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},jn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const te="___FONT_AWESOME___",Nt=16,Lr="fa",Tr="svg-inline--fa",be="data-fa-i2svg",Lt="data-fa-pseudo-element",cs="data-fa-pseudo-element-pending",Zt="data-prefix",en="data-icon",Dn="fontawesome-i2svg",ls="async",fs=["HTML","HEAD","STYLE","SCRIPT"],Mr=(()=>{try{return!0}catch{return!1}})(),Fr=[M,H,Y];function Ge(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[M]}})}const zr={...Ir};zr[M]={...Ir[M],...zn.kit,...zn["kit-duotone"]};const ye=Ge(zr),Tt={...ts};Tt[M]={...Tt[M],...jn.kit,...jn["kit-duotone"]};const He=Ge(Tt),Mt={...es};Mt[M]={...Mt[M],...is.kit};const ve=Ge(Mt),Ft={...Jo};Ft[M]={...Ft[M],...ss.kit};const us=Ge(Ft),ds=Ko,jr="fa-layers-text",ms=qo,ps={...Go};Ge(ps);const hs=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Et=Te,Oe=new Set;Object.keys(He[M]).map(Oe.add.bind(Oe));Object.keys(He[H]).map(Oe.add.bind(Oe));Object.keys(He[Y]).map(Oe.add.bind(Oe));const gs=[...Vo,...as],Be=me.FontAwesomeConfig||{};function ys(e){var t=T.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function vs(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}T&&typeof T.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=vs(ys(n));a!=null&&(Be[r]=a)});const Dr={styleDefault:"solid",familyDefault:"classic",cssPrefix:Lr,replacementClass:Tr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Be.familyPrefix&&(Be.cssPrefix=Be.familyPrefix);const Ce={...Dr,...Be};Ce.autoReplaceSvg||(Ce.observeMutations=!1);const b={};Object.keys(Dr).forEach(e=>{Object.defineProperty(b,e,{enumerable:!0,set:function(t){Ce[e]=t,$e.forEach(n=>n(b))},get:function(){return Ce[e]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(e){Ce.cssPrefix=e,$e.forEach(t=>t(b))},get:function(){return Ce.cssPrefix}});me.FontAwesomeConfig=b;const $e=[];function bs(e){return $e.push(e),()=>{$e.splice($e.indexOf(e),1)}}const ce=Nt,K={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xs(e){if(!e||!re)return;const t=T.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=T.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const o=n[a],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return T.head.insertBefore(t,r),e}const Es="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ye(){let e=12,t="";for(;e-- >0;)t+=Es[Math.random()*62|0];return t}function Re(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function tn(e){return e.classList?Re(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Br(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ws(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Br(e[n]),'" '),"").trim()}function it(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function nn(e){return e.size!==K.size||e.x!==K.x||e.y!==K.y||e.rotate!==K.rotate||e.flipX||e.flipY}function As(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),i="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(o," ").concat(s," ").concat(i)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:l}}function Ss(e){let{transform:t,width:n=Nt,height:r=Nt,startCentered:a=!1}=e,o="";return a&&Cr?o+="translate(".concat(t.x/ce-n/2,"em, ").concat(t.y/ce-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(t.x/ce,"em), calc(-50% + ").concat(t.y/ce,"em)) "):o+="translate(".concat(t.x/ce,"em, ").concat(t.y/ce,"em) "),o+="scale(".concat(t.size/ce*(t.flipX?-1:1),", ").concat(t.size/ce*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var Ps=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $r(){const e=Lr,t=Tr,n=b.cssPrefix,r=b.replacementClass;let a=Ps;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),i=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(i,".".concat(r))}return a}let Bn=!1;function wt(){b.autoAddCss&&!Bn&&(xs($r()),Bn=!0)}var ks={mixout(){return{dom:{css:$r,insertCss:wt}}},hooks(){return{beforeDOMElementCreation(){wt()},beforeI2svg(){wt()}}}};const ne=me||{};ne[te]||(ne[te]={});ne[te].styles||(ne[te].styles={});ne[te].hooks||(ne[te].hooks={});ne[te].shims||(ne[te].shims=[]);var q=ne[te];const Ur=[],Wr=function(){T.removeEventListener("DOMContentLoaded",Wr),et=1,Ur.map(e=>e())};let et=!1;re&&(et=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),et||T.addEventListener("DOMContentLoaded",Wr));function _s(e){re&&(et?setTimeout(e,0):Ur.push(e))}function Ve(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Br(e):"<".concat(t," ").concat(ws(n),">").concat(r.map(Ve).join(""),"</").concat(t,">")}function $n(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Os=function(t,n){return function(r,a,o,s){return t.call(n,r,a,o,s)}},At=function(t,n,r,a){var o=Object.keys(t),s=o.length,i=a!==void 0?Os(n,a):n,c,l,f;for(r===void 0?(c=1,f=t[o[0]]):(c=0,f=r);c<s;c++)l=o[c],f=i(f,t[l],l,t);return f};function Cs(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((a&1023)<<10)+(o&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function zt(e){const t=Cs(e);return t.length===1?t[0].toString(16):null}function Rs(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Un(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function jt(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=Un(t);typeof q.hooks.addPack=="function"&&!r?q.hooks.addPack(e,Un(t)):q.styles[e]={...q.styles[e]||{},...a},e==="fas"&&jt("fa",t)}const{styles:ge,shims:Is}=q,Ns={[M]:Object.values(ve[M]),[H]:Object.values(ve[H]),[Y]:Object.values(ve[Y])};let rn=null,Hr={},Yr={},Gr={},Vr={},Kr={};const Ls={[M]:Object.keys(ye[M]),[H]:Object.keys(ye[H]),[Y]:Object.keys(ye[Y])};function Ts(e){return~gs.indexOf(e)}function Ms(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Ts(a)?a:null}const qr=()=>{const e=r=>At(ge,(a,o,s)=>(a[s]=At(o,r,{}),a),{});Hr=e((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(i=>typeof i=="number").forEach(i=>{r[i.toString(16)]=o}),r)),Yr=e((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(i=>typeof i=="string").forEach(i=>{r[i]=o}),r)),Kr=e((r,a,o)=>{const s=a[2];return r[o]=o,s.forEach(i=>{r[i]=o}),r});const t="far"in ge||b.autoFetchSvg,n=At(Is,(r,a)=>{const o=a[0];let s=a[1];const i=a[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:i}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:i}),r},{names:{},unicodes:{}});Gr=n.names,Vr=n.unicodes,rn=ct(b.styleDefault,{family:b.familyDefault})};bs(e=>{rn=ct(e.styleDefault,{family:b.familyDefault})});qr();function an(e,t){return(Hr[e]||{})[t]}function Fs(e,t){return(Yr[e]||{})[t]}function ue(e,t){return(Kr[e]||{})[t]}function Xr(e){return Gr[e]||{prefix:null,iconName:null}}function zs(e){const t=Vr[e],n=an("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function pe(){return rn}const on=()=>({prefix:null,iconName:null,rest:[]});function ct(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=M}=t,r=ye[n][e],a=He[n][e]||He[n][r],o=e in q.styles?e:null;return a||o||null}const js={[M]:Object.keys(ve[M]),[H]:Object.keys(ve[H]),[Y]:Object.keys(ve[Y])};function lt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[M]:"".concat(b.cssPrefix,"-").concat(M),[H]:"".concat(b.cssPrefix,"-").concat(H),[Y]:"".concat(b.cssPrefix,"-").concat(Y)};let a=null,o=M;const s=Yo.filter(c=>c!==Rr);s.forEach(c=>{(e.includes(r[c])||e.some(l=>js[c].includes(l)))&&(o=c)});const i=e.reduce((c,l)=>{const f=Ms(b.cssPrefix,l);if(ge[l]?(l=Ns[o].includes(l)?us[o][l]:l,a=l,c.prefix=l):Ls[o].indexOf(l)>-1?(a=l,c.prefix=ct(l,{family:o})):f?c.iconName=f:l!==b.replacementClass&&!s.some(u=>l===r[u])&&c.rest.push(l),!n&&c.prefix&&c.iconName){const u=a==="fa"?Xr(c.iconName):{},d=ue(c.prefix,c.iconName);u.prefix&&(a=null),c.iconName=u.iconName||d||c.iconName,c.prefix=u.prefix||c.prefix,c.prefix==="far"&&!ge.far&&ge.fas&&!b.autoFetchSvg&&(c.prefix="fas")}return c},on());return(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(i.prefix="fad"),!i.prefix&&o===H&&(ge.fass||b.autoFetchSvg)&&(i.prefix="fass",i.iconName=ue(i.prefix,i.iconName)||i.iconName),!i.prefix&&o===Y&&(ge.fasds||b.autoFetchSvg)&&(i.prefix="fasds",i.iconName=ue(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||a==="fa")&&(i.prefix=pe()||"fas"),i}class Ds{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...a[o]},jt(o,a[o]);const s=ve[M][o];s&&jt(s,a[o]),qr()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:o,iconName:s,icon:i}=r[a],c=i[2];t[o]||(t[o]={}),c.length>0&&c.forEach(l=>{typeof l=="string"&&(t[o][l]=i)}),t[o][s]=i}),t}}let Wn=[],Se={};const Pe={},Bs=Object.keys(Pe);function $s(e,t){let{mixoutsTo:n}=t;return Wn=e,Se={},Object.keys(Pe).forEach(r=>{Bs.indexOf(r)===-1&&delete Pe[r]}),Wn.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{Se[s]||(Se[s]=[]),Se[s].push(o[s])})}r.provides&&r.provides(Pe)}),n}function Dt(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(Se[e]||[]).forEach(s=>{t=s.apply(null,[t,...r])}),t}function xe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(Se[e]||[]).forEach(o=>{o.apply(null,n)})}function he(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Pe[e]?Pe[e].apply(null,t):void 0}function Bt(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||pe();if(t)return t=ue(n,t)||t,$n(Qr.definitions,n,t)||$n(q.styles,n,t)}const Qr=new Ds,Us=()=>{b.autoReplaceSvg=!1,b.observeMutations=!1,xe("noAuto")},Ws={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return re?(xe("beforeI2svg",e),he("pseudoElements2svg",e),he("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,_s(()=>{Ys({autoReplaceSvgRoot:t}),xe("watch",e)})}},Hs={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ue(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=ct(e[0]);return{prefix:n,iconName:ue(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(b.cssPrefix,"-"))>-1||e.match(ds))){const t=lt(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||pe(),iconName:ue(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=pe();return{prefix:t,iconName:ue(t,e)||e}}}},G={noAuto:Us,config:b,dom:Ws,parse:Hs,library:Qr,findIconDefinition:Bt,toHtml:Ve},Ys=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=T}=e;(Object.keys(q.styles).length>0||b.autoFetchSvg)&&re&&b.autoReplaceSvg&&G.dom.i2svg({node:t})};function ft(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Ve(n))}}),Object.defineProperty(e,"node",{get:function(){if(!re)return;const n=T.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Gs(e){let{children:t,main:n,mask:r,attributes:a,styles:o,transform:s}=e;if(nn(s)&&n.found&&!r.found){const{width:i,height:c}=n,l={x:i/c/2,y:.5};a.style=it({...o,"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")})}return[{tag:"svg",attributes:a,children:t}]}function Vs(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:o}=e;const s=o===!0?"".concat(t,"-").concat(b.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:s},children:r}]}]}function sn(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:o,symbol:s,title:i,maskId:c,titleId:l,extra:f,watchable:u=!1}=e,{width:d,height:p}=n.found?n:t,w=r==="fak",A=[b.replacementClass,a?"".concat(b.cssPrefix,"-").concat(a):""].filter(_=>f.classes.indexOf(_)===-1).filter(_=>_!==""||!!_).concat(f.classes).join(" ");let S={children:[],attributes:{...f.attributes,"data-prefix":r,"data-icon":a,class:A,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(p)}};const g=w&&!~f.classes.indexOf("fa-fw")?{width:"".concat(d/p*16*.0625,"em")}:{};u&&(S.attributes[be]=""),i&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(l||Ye())},children:[i]}),delete S.attributes.title);const h={...S,prefix:r,iconName:a,main:t,mask:n,maskId:c,transform:o,symbol:s,styles:{...g,...f.styles}},{children:x,attributes:C}=n.found&&t.found?he("generateAbstractMask",h)||{children:[],attributes:{}}:he("generateAbstractIcon",h)||{children:[],attributes:{}};return h.children=x,h.attributes=C,s?Vs(h):Gs(h)}function Hn(e){const{content:t,width:n,height:r,transform:a,title:o,extra:s,watchable:i=!1}=e,c={...s.attributes,...o?{title:o}:{},class:s.classes.join(" ")};i&&(c[be]="");const l={...s.styles};nn(a)&&(l.transform=Ss({transform:a,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const f=it(l);f.length>0&&(c.style=f);const u=[];return u.push({tag:"span",attributes:c,children:[t]}),o&&u.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),u}function Ks(e){const{content:t,title:n,extra:r}=e,a={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=it(r.styles);o.length>0&&(a.style=o);const s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:St}=q;function $t(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(Et.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Et.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Et.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const qs={found:!1,width:512,height:512};function Xs(e,t){!Mr&&!b.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ut(e,t){let n=t;return t==="fa"&&b.styleDefault!==null&&(t=pe()),new Promise((r,a)=>{if(n==="fa"){const o=Xr(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&St[t]&&St[t][e]){const o=St[t][e];return r($t(o))}Xs(e,t),r({...qs,icon:b.showMissingIcons&&e?he("missingIconAbstract")||{}:{}})})}const Yn=()=>{},Wt=b.measurePerformance&&Xe&&Xe.mark&&Xe.measure?Xe:{mark:Yn,measure:Yn},Me='FA "6.6.0"',Qs=e=>(Wt.mark("".concat(Me," ").concat(e," begins")),()=>Jr(e)),Jr=e=>{Wt.mark("".concat(Me," ").concat(e," ends")),Wt.measure("".concat(Me," ").concat(e),"".concat(Me," ").concat(e," begins"),"".concat(Me," ").concat(e," ends"))};var cn={begin:Qs,end:Jr};const Qe=()=>{};function Gn(e){return typeof(e.getAttribute?e.getAttribute(be):null)=="string"}function Js(e){const t=e.getAttribute?e.getAttribute(Zt):null,n=e.getAttribute?e.getAttribute(en):null;return t&&n}function Zs(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(b.replacementClass)}function ei(){return b.autoReplaceSvg===!0?Je.replace:Je[b.autoReplaceSvg]||Je.replace}function ti(e){return T.createElementNS("http://www.w3.org/2000/svg",e)}function ni(e){return T.createElement(e)}function Zr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?ti:ni}=t;if(typeof e=="string")return T.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(Zr(o,{ceFn:n}))}),r}function ri(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Je={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Zr(n),t)}),t.getAttribute(be)===null&&b.keepOriginalSource){let n=T.createComment(ri(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~tn(t).indexOf(b.replacementClass))return Je.replace(e);const r=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,i)=>(i===b.replacementClass||i.match(r)?s.toSvg.push(i):s.toNode.push(i),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const a=n.map(o=>Ve(o)).join(`
`);t.setAttribute(be,""),t.innerHTML=a}};function Vn(e){e()}function ea(e,t){const n=typeof t=="function"?t:Qe;if(e.length===0)n();else{let r=Vn;b.mutateApproach===ls&&(r=me.requestAnimationFrame||Vn),r(()=>{const a=ei(),o=cn.begin("mutate");e.map(a),o(),n()})}}let ln=!1;function ta(){ln=!0}function Ht(){ln=!1}let tt=null;function Kn(e){if(!Fn||!b.observeMutations)return;const{treeCallback:t=Qe,nodeCallback:n=Qe,pseudoElementsCallback:r=Qe,observeMutationsRoot:a=T}=e;tt=new Fn(o=>{if(ln)return;const s=pe();Re(o).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!Gn(i.addedNodes[0])&&(b.searchPseudoElements&&r(i.target),t(i.target)),i.type==="attributes"&&i.target.parentNode&&b.searchPseudoElements&&r(i.target.parentNode),i.type==="attributes"&&Gn(i.target)&&~hs.indexOf(i.attributeName))if(i.attributeName==="class"&&Js(i.target)){const{prefix:c,iconName:l}=lt(tn(i.target));i.target.setAttribute(Zt,c||s),l&&i.target.setAttribute(en,l)}else Zs(i.target)&&n(i.target)})}),re&&tt.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ai(){tt&&tt.disconnect()}function oi(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const o=a.split(":"),s=o[0],i=o.slice(1);return s&&i.length>0&&(r[s]=i.join(":").trim()),r},{})),n}function si(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=lt(tn(e));return a.prefix||(a.prefix=pe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Fs(a.prefix,e.innerText)||an(a.prefix,zt(e.innerText))),!a.iconName&&b.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ii(e){const t=Re(e.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return b.autoA11y&&(n?t["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(r||Ye()):(t["aria-hidden"]="true",t.focusable="false")),t}function ci(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function qn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=si(e),o=ii(e),s=Dt("parseNodeAttributes",{},e);let i=t.styleParser?oi(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:K,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:i,attributes:o},...s}}const{styles:li}=q;function na(e){const t=b.autoReplaceSvg==="nest"?qn(e,{styleParser:!1}):qn(e);return~t.extra.classes.indexOf(jr)?he("generateLayersText",e,t):he("generateSvgReplacementMutation",e,t)}let X=new Set;Fr.map(e=>{X.add("fa-".concat(e))});Object.keys(ye[M]).map(X.add.bind(X));Object.keys(ye[H]).map(X.add.bind(X));Object.keys(ye[Y]).map(X.add.bind(X));X=[...X];function Xn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!re)return Promise.resolve();const n=T.documentElement.classList,r=f=>n.add("".concat(Dn,"-").concat(f)),a=f=>n.remove("".concat(Dn,"-").concat(f)),o=b.autoFetchSvg?X:Fr.map(f=>"fa-".concat(f)).concat(Object.keys(li));o.includes("fa")||o.push("fa");const s=[".".concat(jr,":not([").concat(be,"])")].concat(o.map(f=>".".concat(f,":not([").concat(be,"])"))).join(", ");if(s.length===0)return Promise.resolve();let i=[];try{i=Re(e.querySelectorAll(s))}catch{}if(i.length>0)r("pending"),a("complete");else return Promise.resolve();const c=cn.begin("onTree"),l=i.reduce((f,u)=>{try{const d=na(u);d&&f.push(d)}catch(d){Mr||d.name==="MissingIcon"&&console.error(d)}return f},[]);return new Promise((f,u)=>{Promise.all(l).then(d=>{ea(d,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),c(),f()})}).catch(d=>{c(),u(d)})})}function fi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;na(e).then(n=>{n&&ea([n],t)})}function ui(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Bt(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:Bt(a||{})),e(r,{...n,mask:a})}}const di=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=K,symbol:r=!1,mask:a=null,maskId:o=null,title:s=null,titleId:i=null,classes:c=[],attributes:l={},styles:f={}}=t;if(!e)return;const{prefix:u,iconName:d,icon:p}=e;return ft({type:"icon",...e},()=>(xe("beforeDOMElementCreation",{iconDefinition:e,params:t}),b.autoA11y&&(s?l["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(i||Ye()):(l["aria-hidden"]="true",l.focusable="false")),sn({icons:{main:$t(p),mask:a?$t(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:d,transform:{...K,...n},symbol:r,title:s,maskId:o,titleId:i,extra:{attributes:l,styles:f,classes:c}})))};var mi={mixout(){return{icon:ui(di)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Xn,e.nodeCallback=fi,e}}},provides(e){e.i2svg=function(t){const{node:n=T,callback:r=()=>{}}=t;return Xn(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:o,prefix:s,transform:i,symbol:c,mask:l,maskId:f,extra:u}=n;return new Promise((d,p)=>{Promise.all([Ut(r,s),l.iconName?Ut(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[A,S]=w;d([t,sn({icons:{main:A,mask:S},prefix:s,iconName:r,transform:i,symbol:c,maskId:f,title:a,titleId:o,extra:u,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:o,styles:s}=t;const i=it(s);i.length>0&&(r.style=i);let c;return nn(o)&&(c=he("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(c||a.icon),{children:n,attributes:r}}}},pi={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return ft({type:"layer"},()=>{xe("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},hi={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:o={}}=t;return ft({type:"counter",content:e},()=>(xe("beforeDOMElementCreation",{content:e,params:t}),Ks({content:e.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(b.cssPrefix,"-layers-counter"),...r]}})))}}}},gi={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=K,title:r=null,classes:a=[],attributes:o={},styles:s={}}=t;return ft({type:"text",content:e},()=>(xe("beforeDOMElementCreation",{content:e,params:t}),Hn({content:e,transform:{...K,...n},title:r,extra:{attributes:o,styles:s,classes:["".concat(b.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:o}=n;let s=null,i=null;if(Cr){const c=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();s=l.width/c,i=l.height/c}return b.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Hn({content:t.innerHTML,width:s,height:i,transform:a,title:r,extra:o,watchable:!0})])}}};const yi=new RegExp('"',"ug"),Qn=[1105920,1112319],Jn={FontAwesome:{normal:"fas",400:"fas"},...Qo,...Xo,...os},Yt=Object.keys(Jn).reduce((e,t)=>(e[t.toLowerCase()]=Jn[t],e),{}),vi=Object.keys(Yt).reduce((e,t)=>{const n=Yt[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function bi(e){const t=e.replace(yi,""),n=Rs(t,0),r=n>=Qn[0]&&n<=Qn[1],a=t.length===2?t[0]===t[1]:!1;return{value:zt(a?t[0]:t),isSecondary:r||a}}function xi(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(Yt[n]||{})[a]||vi[n]}function Zn(e,t){const n="".concat(cs).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const s=Re(e.children).filter(d=>d.getAttribute(Lt)===t)[0],i=me.getComputedStyle(e,t),c=i.getPropertyValue("font-family"),l=c.match(ms),f=i.getPropertyValue("font-weight"),u=i.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&u!=="none"&&u!==""){const d=i.getPropertyValue("content");let p=xi(c,f);const{value:w,isSecondary:A}=bi(d),S=l[0].startsWith("FontAwesome");let g=an(p,w),h=g;if(S){const x=zs(w);x.iconName&&x.prefix&&(g=x.iconName,p=x.prefix)}if(g&&!A&&(!s||s.getAttribute(Zt)!==p||s.getAttribute(en)!==h)){e.setAttribute(n,h),s&&e.removeChild(s);const x=ci(),{extra:C}=x;C.attributes[Lt]=t,Ut(g,p).then(_=>{const $=sn({...x,icons:{main:_,mask:on()},prefix:p,iconName:h,extra:C,watchable:!0}),N=T.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(N,e.firstChild):e.appendChild(N),N.outerHTML=$.map(R=>Ve(R)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ei(e){return Promise.all([Zn(e,"::before"),Zn(e,"::after")])}function wi(e){return e.parentNode!==document.head&&!~fs.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Lt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function er(e){if(re)return new Promise((t,n)=>{const r=Re(e.querySelectorAll("*")).filter(wi).map(Ei),a=cn.begin("searchPseudoElements");ta(),Promise.all(r).then(()=>{a(),Ht(),t()}).catch(()=>{a(),Ht(),n()})})}var Ai={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=er,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=T}=t;b.searchPseudoElements&&er(n)}}};let tr=!1;var Si={mixout(){return{dom:{unwatch(){ta(),tr=!0}}}},hooks(){return{bootstrap(){Kn(Dt("mutationObserverCallbacks",{}))},noAuto(){ai()},watch(e){const{observeMutationsRoot:t}=e;tr?Ht():Kn(Dt("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const nr=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),o=a[0];let s=a.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var Pi={mixout(){return{parse:{transform:e=>nr(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=nr(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:o}=t;const s={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(i," ").concat(c," ").concat(l)},u={transform:"translate(".concat(o/2*-1," -256)")},d={outer:s,inner:f,path:u};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const Pt={x:0,y:0,width:"100%",height:"100%"};function rr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ki(e){return e.tag==="g"?e.children:[e]}var _i={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?lt(n.split(" ").map(a=>a.trim())):on();return r.prefix||(r.prefix=pe()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:o,maskId:s,transform:i}=t;const{width:c,icon:l}=a,{width:f,icon:u}=o,d=As({transform:i,containerWidth:f,iconWidth:c}),p={tag:"rect",attributes:{...Pt,fill:"white"}},w=l.children?{children:l.children.map(rr)}:{},A={tag:"g",attributes:{...d.inner},children:[rr({tag:l.tag,attributes:{...l.attributes,...d.path},...w})]},S={tag:"g",attributes:{...d.outer},children:[A]},g="mask-".concat(s||Ye()),h="clip-".concat(s||Ye()),x={tag:"mask",attributes:{...Pt,id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[p,S]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:ki(u)},x]};return n.push(C,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(g,")"),...Pt}}),{children:n,attributes:r}}}},Oi={provides(e){let t=!1;me.matchMedia&&(t=me.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...a,attributeName:"opacity"},s={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||s.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ci={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Ri=[ks,mi,pi,hi,gi,Ai,Si,Pi,_i,Oi,Ci];$s(Ri,{mixoutsTo:G});G.noAuto;G.config;const Ii=G.library;G.dom;const Gt=G.parse;G.findIconDefinition;G.toHtml;const Ni=G.icon;G.layer;G.text;G.counter;function ar(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ar(Object(n),!0).forEach(function(r){W(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ar(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Li(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ti(e){var t=Li(e,"string");return typeof t=="symbol"?t:t+""}function nt(e){"@babel/helpers - typeof";return nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nt(e)}function W(e,t,n){return t=Ti(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mi(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Fi(e,t){if(e==null)return{};var n=Mi(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ra={exports:{}};(function(e){(function(t){var n=function(g,h,x){if(!l(h)||u(h)||d(h)||p(h)||c(h))return h;var C,_=0,$=0;if(f(h))for(C=[],$=h.length;_<$;_++)C.push(n(g,h[_],x));else{C={};for(var N in h)Object.prototype.hasOwnProperty.call(h,N)&&(C[g(N,x)]=n(g,h[N],x))}return C},r=function(g,h){h=h||{};var x=h.separator||"_",C=h.split||/(?=[A-Z])/;return g.split(C).join(x)},a=function(g){return w(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(h,x){return x?x.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},o=function(g){var h=a(g);return h.substr(0,1).toUpperCase()+h.substr(1)},s=function(g,h){return r(g,h).toLowerCase()},i=Object.prototype.toString,c=function(g){return typeof g=="function"},l=function(g){return g===Object(g)},f=function(g){return i.call(g)=="[object Array]"},u=function(g){return i.call(g)=="[object Date]"},d=function(g){return i.call(g)=="[object RegExp]"},p=function(g){return i.call(g)=="[object Boolean]"},w=function(g){return g=g-0,g===g},A=function(g,h){var x=h&&"process"in h?h.process:h;return typeof x!="function"?g:function(C,_){return x(C,g,_)}},S={camelize:a,decamelize:s,pascalize:o,depascalize:s,camelizeKeys:function(g,h){return n(A(a,h),g)},decamelizeKeys:function(g,h){return n(A(s,h),g,h)},pascalizeKeys:function(g,h){return n(A(o,h),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(zi)})(ra);var ji=ra.exports,Di=["class","style"];function Bi(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ji.camelize(n.slice(0,r)),o=n.slice(r+1).trim();return t[a]=o,t},{})}function $i(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function aa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return aa(c)}),a=Object.keys(e.attributes||{}).reduce(function(c,l){var f=e.attributes[l];switch(l){case"class":c.class=$i(f);break;case"style":c.style=Bi(f);break;default:c.attrs[l]=f}return c},{attrs:{},class:{},style:{}});n.class;var o=n.style,s=o===void 0?{}:o,i=Fi(n,Di);return qt(e.tag,ee(ee(ee({},t),{},{class:a.class,style:ee(ee({},a.style),s)},a.attrs),i),r)}var oa=!1;try{oa=!0}catch{}function Ui(){if(!oa&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function kt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?W({},e,t):{}}function Wi(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},W(W(W(W(W(W(W(W(W(W(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),"fa-flash",e.flash),W(W(t,"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function or(e){if(e&&nt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Gt.icon)return Gt.icon(e);if(e===null)return null;if(nt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Hi=rt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=D(function(){return or(t.icon)}),o=D(function(){return kt("classes",Wi(t))}),s=D(function(){return kt("transform",typeof t.transform=="string"?Gt.transform(t.transform):t.transform)}),i=D(function(){return kt("mask",or(t.mask))}),c=D(function(){return Ni(a.value,ee(ee(ee(ee({},o.value),s.value),i.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Kt(c,function(f){if(!f)return Ui("Could not find one or more icon(s)",a.value,i.value)},{immediate:!0});var l=D(function(){return c.value?aa(c.value.abstract[0],{},r):null});return function(){return l.value}}});const Yi={prefix:"fas",iconName:"volleyball",icon:[512,512,[127952,"volleyball-ball"],"f45f","M511.8 267.4c-26.1 8.7-53.4 13.8-81 15.1c9.2-105.3-31.5-204.2-103.2-272.4C434.1 41.1 512 139.5 512 256c0 3.8-.1 7.6-.2 11.4zm-3.9 34.7c-5.8 32-17.6 62-34.2 88.7c-97.5 48.5-217.7 42.6-311.9-24.5c23.7-36.2 55.4-67.7 94.5-91.8c79.9 43.2 170.1 50.8 251.6 27.6zm-236-55.5c-2.5-90.9-41.1-172.7-101.9-231.7C196.8 5.2 225.8 0 256 0c2.7 0 5.3 0 7.9 .1c90.8 60.2 145.7 167.2 134.7 282.3c-43.1-2.4-86.4-14.1-126.8-35.9zM138 28.8c20.6 18.3 38.7 39.4 53.7 62.6C95.9 136.1 30.6 220.8 7.3 316.9C2.5 297.4 0 277 0 256C0 157.2 56 71.5 138 28.8zm69.6 90.5c19.5 38.6 31 81.9 32.3 127.7C162.5 294.6 110.9 368.9 90.2 451C66 430.4 45.6 405.4 30.4 377.2c6.7-108.7 71.9-209.9 177.1-257.9zM256 512c-50.7 0-98-14.7-137.8-40.2c5.6-27 14.8-53.1 27.4-77.7C232.2 454.6 338.1 468.8 433 441c-46 44-108.3 71-177 71z"]},Gi={prefix:"fas",iconName:"hockey-puck",icon:[512,512,[],"f453","M256 256C114.6 256 0 213 0 160s114.6-96 256-96s256 43 256 96s-114.6 96-256 96zm192.3 1.8c24.7-9.3 46.9-21 63.7-35.6L512 352c0 53-114.6 96-256 96S0 405 0 352L0 222.3c16.8 14.6 39 26.3 63.7 35.6C114.5 276.9 182.5 288 256 288s141.5-11.1 192.3-30.2z"]},Vi={prefix:"fas",iconName:"futbol",icon:[512,512,[9917,"futbol-ball","soccer-ball"],"f1e3","M417.3 360.1l-71.6-4.8c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-17.6 69.6C289.5 445.8 273 448 256 448s-33.5-2.2-49.2-6.4L189.2 372c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-71.6 4.8c-17.6-27.2-28.5-59.2-30.4-93.6L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15l-26.7-66.6C128 109.2 155.3 89 186.7 76.9l55.2 46c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l55.2-46c31.3 12.1 58.7 32.3 79.6 57.9l-26.7 66.6c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9l60.7 38.2c-1.9 34.4-12.8 66.4-30.4 93.6zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6l59.2 0c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z"]},Ki={prefix:"fas",iconName:"basketball",icon:[512,512,[127936,"basketball-ball"],"f434","M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z"]},qi={prefix:"fas",iconName:"baseball-bat-ball",icon:[512,512,[],"f432","M424 0c-12.4 0-24.2 4.9-33 13.7L233.5 171.2c-10.5 10.5-19.8 22.1-27.7 34.6L132.7 321.6c-7.3 11.5-15.8 22.2-25.5 31.9L69.9 390.7l51.3 51.3 37.3-37.3c9.6-9.6 20.3-18.2 31.9-25.5l115.8-73.1c12.5-7.9 24.1-17.2 34.6-27.7L498.3 121c8.7-8.7 13.7-20.6 13.7-33s-4.9-24.2-13.7-33L457 13.7C448.2 4.9 436.4 0 424 0zm88 432a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM15 399c-9.4 9.4-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L49 399c-9.4-9.4-24.6-9.4-33.9 0z"]},Xi={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Qi={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]};Ii.add(Vi,qi,Ki,Yi,Gi,Qi,Xi);const sa=Ea();sa.use(La);const Ke=va(Ta);Ke.component("FontAwesomeIcon",Hi);Ke.use(ba);Ke.use(sa);Ke.use(Ho);Ke.mount("#app");export{tc as a,Zi as d,ec as u};
