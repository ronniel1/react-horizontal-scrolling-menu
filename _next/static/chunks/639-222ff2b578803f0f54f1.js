(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[639],{2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},4239:function(e,t,n){var r=n(2705),o=n(9607),i=n(2333),l=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?o(e):i(e)}},7561:function(e,t,n){var r=n(7990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),o=Object.prototype,i=o.hasOwnProperty,l=o.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(a){}var o=l.call(e);return r&&(t?e[s]=n:delete e[s]),o}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},7990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},3279:function(e,t,n){var r=n(3218),o=n(7771),i=n(4841),l=Math.max,s=Math.min;e.exports=function(e,t,n){var a,c,u,d,f,v,m=0,h=!1,p=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function w(t){var n=a,r=c;return a=c=void 0,m=t,d=e.apply(r,n)}function b(e){return m=e,f=setTimeout(x,t),h?w(e):d}function y(e){var n=e-v;return void 0===v||n>=t||n<0||p&&e-m>=u}function x(){var e=o();if(y(e))return E(e);f=setTimeout(x,function(e){var n=t-(e-v);return p?s(n,u-(e-m)):n}(e))}function E(e){return f=void 0,g&&a?w(e):(a=c=void 0,d)}function T(){var e=o(),n=y(e);if(a=arguments,c=this,v=e,n){if(void 0===f)return b(v);if(p)return clearTimeout(f),f=setTimeout(x,t),w(v)}return void 0===f&&(f=setTimeout(x,t)),d}return t=i(t)||0,r(n)&&(h=!!n.leading,u=(p="maxWait"in n)?l(i(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),m=0,a=v=c=f=void 0},T.flush=function(){return void 0===f?d:E(o())},T}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(5639);e.exports=function(){return r.Date.now()}},3493:function(e,t,n){var r=n(3279),o=n(3218);e.exports=function(e,t,n){var i=!0,l=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,l="trailing"in n?!!n.trailing:l),r(e,t,{leading:i,maxWait:t,trailing:l})}},4841:function(e,t,n){var r=n(7561),o=n(3218),i=n(3448),l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=s.test(e);return n||a.test(e)?c(e.slice(2),n?2:8):l.test(e)?NaN:+e}},6086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},4155:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var s,a=[],c=!1,u=-1;function d(){c&&s&&(c=!1,s.length?a=s.concat(a):u=-1,a.length&&f())}function f(){if(!c){var e=l(d);c=!0;for(var t=a.length;t;){for(s=a,a=[];++u<t;)s&&s[u].run();u=-1,t=a.length}s=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new v(e,t)),1!==a.length||c||l(f)},v.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},2218:function(e,t,n){!function(e,t){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(t);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".react-horizontal-scrolling-menu--wrapper {\n  display: flex;\n}\n\n.react-horizontal-scrolling-menu--scroll-container {\n  display: flex;\n  height: max-content;\n  overflow-y: hidden;\n  position: relative;\n  width: 100%;\n}\n\n:export {\n  wrapper: react-horizontal-scrolling-menu--wrapper;\n  container: react-horizontal-scrolling-menu--scroll-container;\n}\n");const i="react-horizontal-scrolling-menu",l="-separator",s=`${i}--separator`,a=`${i}--item`,c=`${i}--scroll-container`,u=`${i}--wrapper`,d="itemId";var f=Object.freeze({__proto__:null,rootClassName:i,separatorString:l,separatorClassName:s,itemClassName:a,scrollContainerClassName:c,wrapperClassName:u,id:d});function v({children:e,onScroll:t=(()=>{}),scrollRef:n}){return o.default.createElement("div",{className:c,onScroll:t,ref:n},e)}var m=o.default.memo((function({id:e,index:t,refs:n}){const r=o.default.useRef(null);return n[t]=r,o.default.createElement("div",{className:s,"data-key":e,"data-index":t,ref:r})})),h=o.default.memo((function({children:e,id:t,index:n,refs:r}){const i=o.default.useRef(null);return r[n]=i,o.default.createElement("div",{className:a,"data-key":t,"data-index":n,ref:i},e)}));function p({children:e,refs:t}){const n=o.default.Children.toArray(e).filter(Boolean),r=n.length;return o.default.createElement(o.default.Fragment,null,n.map(((e,n)=>{var i,s;const a=null===(s=null===(i=e)||void 0===i?void 0:i.props)||void 0===s?void 0:s[d],c=a+l,u=n+1===r;return[o.default.createElement(h,{id:a,key:"menuItem__"+a,refs:t,index:n},e),!u&&o.default.createElement(m,{id:c,refs:t,key:c,index:n+.1})]})))}function g(e,t="smooth",n="end",r="nearest"){var o,i;const l=(null===(i=null===(o=e)||void 0===o?void 0:o.entry)||void 0===i?void 0:i.target)||e;l&&window&&window.requestAnimationFrame((()=>l.scrollIntoView({block:r,behavior:t,inline:n})))}function w(e){return o.default.isValidElement(e)&&e||"function"==typeof e&&o.default.createElement(e,null)||null}const b=e=>e.filter((e=>!new RegExp(".*-separator$").test(e)));function y({items:e,itemsChanged:t,refs:r,options:i}){const l=o.default.useRef(),[s,a]=o.default.useState([]),c=o.default.useRef(+setTimeout((()=>{}),0)),u=o.default.useCallback((t=>{const r=function(e,t){return[...e].map((e=>{var n,r;const o=e.target,i=(null===(n=null==o?void 0:o.dataset)||void 0===n?void 0:n.key)||"";return[i,{index:String((null===(r=null==o?void 0:o.dataset)||void 0===r?void 0:r.index)||""),key:i,entry:e,visible:e.intersectionRatio>=t.ratio}]}))}(t,i);e.set(r),n.g.clearTimeout(c.current),c.current=+setTimeout((()=>n.g.requestAnimationFrame((()=>{a((t=>{const n=e.getVisible().map((e=>e[1].key));return JSON.stringify(t)!==JSON.stringify(n)?n:t}))}))),i.throttle)}),[e,i]);return o.default.useLayoutEffect((()=>{const e=(e=>Object.values(e).map((e=>e.current)).filter(Boolean))(r),t=l.current||new IntersectionObserver(u,i);return l.current=t,e.forEach((e=>t.observe(e))),()=>{clearTimeout(c.current),t.disconnect(),l.current=void 0}}),[u,t,i,r]),{visibleItems:s}}class x extends Map{toArr(){return[...this]}toItemsKeys(){return this.toArr().map((e=>e[0]))}onlyDigits(e){return String(e).replace(/[^0-9.]/g,"")}sort(e){return e.sort(((e,t)=>+this.onlyDigits(e[1].index)-+this.onlyDigits(t[1].index)))}set(e,t){return Array.isArray(e)?this.sort(e).forEach((e=>{super.set(e[0],e[1])})):super.set(e,t),this}first(){var e;return null===(e=this.toArr()[0])||void 0===e?void 0:e[1]}last(){var e,t;return null===(t=null===(e=this.toArr().slice(-1))||void 0===e?void 0:e[0])||void 0===t?void 0:t[1]}filter(e){return this.toArr().filter(e)}find(e){return this.toArr().find(e)}findIndex(e){return this.toArr().findIndex(e)}prev(e){var t;const n=this.toArr(),r=n.findIndex((t=>t[0]===e||t[1]===e));return-1!==r?null===(t=n[r-1])||void 0===t?void 0:t[1]:void 0}next(e){var t;const n=this.toArr(),r=n.findIndex((t=>t[0]===e||t[1]===e));return-1!==r?null===(t=n[r+1])||void 0===t?void 0:t[1]:void 0}getVisible(){return this.filter((e=>e[1].visible))}}const E={ratio:.9,rootMargin:"5px",threshold:[.05,.5,.75,.95],throttle:100},T=o.default.createContext({}),S=e=>e.reduce(((e,t)=>e.concat(t).concat(`${t}-separator`)),[]).slice(0,-1);e.ScrollMenu=function({LeftArrow:e,RightArrow:t,children:n,onInit:r=(()=>{}),onMouseDown:i,onMouseUp:l,onMouseMove:s,onScroll:a=(()=>{}),onWheel:c=(()=>{}),options:f=E,wrapperClassName:m=""}){const h=w(e),S=w(t),I=o.default.useRef(null),[k]=o.default.useState({}),C=o.default.useMemo((()=>Object.assign(Object.assign(Object.assign({},E),f),{root:I.current})),[f,I.current]),N=function(e,t){const[n,r]=o.default.useState("");return o.default.useLayoutEffect((()=>{const t=(e?o.default.Children.toArray(e):[]).map((e=>{var t,n;return null===(n=null===(t=e)||void 0===t?void 0:t.props)||void 0===n?void 0:n[d]})).filter(Boolean).join("");r(t)}),[e,t]),n}(n,k),O=o.default.useRef(new x).current,{visibleItems:j}=y({items:O,itemsChanged:N,options:C,refs:k}),M=o.default.useRef({}),V=!!j.length,[A,_]=o.default.useState(!1);o.default.useEffect((()=>{V&&!A&&(_(!0),r(M.current))}),[V,A]);const L=o.default.useMemo((()=>function(e,t=[]){var n,r;const o=b(t),i=!!(null===(n=e.first())||void 0===n?void 0:n.visible),l=!!(null===(r=e.last())||void 0===r?void 0:r.visible),s=t=>{var n;return null===(n=e.find((e=>e[1].key===String(t))))||void 0===n?void 0:n[1]},a=()=>{var t,n;return e.prev(null===(n=null===(t=e.getVisible())||void 0===t?void 0:t[0])||void 0===n?void 0:n[1])},c=()=>{var t,n,r,o;return e.next(null===(o=null===(r=null===(n=null===(t=e.getVisible())||void 0===t?void 0:t.slice)||void 0===n?void 0:n.call(t,-1))||void 0===r?void 0:r[0])||void 0===o?void 0:o[1])};return{getItemById:s,getItemByIndex:t=>{var n;return null===(n=e.find((e=>String(e[1].index)===String(t))))||void 0===n?void 0:n[1]},getNextItem:c,getPrevItem:a,isFirstItemVisible:i,isItemVisible:e=>{var t;return null===(t=s(e))||void 0===t?void 0:t.visible},isLastItem:t=>e.last()===s(t),isLastItemVisible:l,scrollNext:(e="smooth",t="start",n="nearest")=>g(c(),e,t,n),scrollPrev:(e="smooth",t="end",n="nearest")=>g(a(),e,t,n),scrollToItem:g,visibleItemsWithoutSeparators:o}}(O,j)),[O,j]);M.current=o.default.useMemo((()=>Object.assign(Object.assign({},L),{initComplete:V,items:O,scrollContainer:I,visibleItems:j})),[L,V,O,j]);const W=o.default.useCallback((e=>a(M.current,e)),[a,M]),R=o.default.useCallback((e=>c(M.current,e)),[c,M]);return o.default.createElement("div",{className:`${u} ${m}`,onWheel:R,onMouseDown:null==i?void 0:i(M.current),onMouseUp:null==l?void 0:l(M.current),onMouseMove:null==s?void 0:s(M.current)},o.default.createElement(T.Provider,{value:M.current},h,o.default.createElement(v,{onScroll:W,scrollRef:I},o.default.createElement(p,{refs:k},n)),S))},e.VisibilityContext=T,e.constants=f,e.getItemsPos=e=>{var t;const n=(e=>e.filter(((e,t,n)=>{const r=0===t,o=t===n.length-1,i=new RegExp(l).test(e);return!((r||o)&&i)})))(e),r=n[Math.floor(n.length/2)];return{first:null==n?void 0:n[0],center:r,last:null===(t=n.slice(-1))||void 0===t?void 0:t[0]}},e.slidingWindow=function(e,t){const n=b(e),r=b(t);return{prev:()=>S(function(e,t){const n=e.findIndex((e=>e===(null==t?void 0:t[0]))),r=t.length,o=e.slice(n-r,n);return o.length===r?o:e.slice(n,r)}(n,r)),next:()=>S(function(e,t){const n=e.findIndex((e=>{var n;return e===(null===(n=t.slice(-1))||void 0===n?void 0:n[0])})),r=t.length,o=e.slice(n+1,n+r+1);return o.length===r?o:e.slice(e.length-r,e.length+r)}(n,r))}},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(7294))},5182:function(e,t,n){"use strict";n.d(t,{C:function(){return w}});const r=e=>.5*(1-Math.cos(Math.PI*e)),o={_elementScroll:void 0,get elementScroll(){return this._elementScroll||(this._elementScroll=HTMLElement.prototype.scroll||HTMLElement.prototype.scrollTo||function(e,t){this.scrollLeft=e,this.scrollTop=t})},_elementScrollIntoView:void 0,get elementScrollIntoView(){return this._elementScrollIntoView||(this._elementScrollIntoView=HTMLElement.prototype.scrollIntoView)},_windowScroll:void 0,get windowScroll(){return this._windowScroll||(this._windowScroll=window.scroll||window.scrollTo)}},i=()=>{var e,t,n;return null!==(n=null===(t=null===(e=window.performance)||void 0===e?void 0:e.now)||void 0===t?void 0:t.call(e))&&void 0!==n?n:Date.now()},l=e=>{const t=(i()-e.timeStamp)/(e.duration||500);if(t>1)return e.method(e.targetX,e.targetY),void e.callback();const n=(e.timingFunc||r)(t),o=e.startX+(e.targetX-e.startX)*n,s=e.startY+(e.targetY-e.startY)*n;e.method(o,s),e.rafId=requestAnimationFrame((()=>{l(e)}))},s=e=>isFinite(e)?Number(e):0,a=e=>{const t=typeof e;return null!==e&&("object"===t||"function"===t)},c=(e,t)=>{var n,r;const a=o.elementScroll.bind(e);if(void 0===t.left&&void 0===t.top)return;const c=e.scrollLeft,u=e.scrollTop,d=s(null!==(n=t.left)&&void 0!==n?n:c),f=s(null!==(r=t.top)&&void 0!==r?r:u);if("smooth"!==t.behavior)return a(d,f);const v=()=>{window.removeEventListener("wheel",h),window.removeEventListener("touchmove",h)},m={timeStamp:i(),duration:t.duration,startX:c,startY:u,targetX:d,targetY:f,rafId:0,method:a,timingFunc:t.timingFunc,callback:v},h=()=>{cancelAnimationFrame(m.rafId),v()};window.addEventListener("wheel",h,{passive:!0,once:!0}),window.addEventListener("touchmove",h,{passive:!0,once:!0}),l(m)},u=(e,t,n,r,o,i,l,s)=>i<e&&l>t||i>e&&l<t?0:i<=e&&s<=n||l>=t&&s>=n?i-e-r:l>t&&s<n||i<e&&s>n?l-t+o:0,d=e=>"visible"!==e&&"clip"!==e,f=(e,t)=>(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth)&&(d(t.overflowY)||d(t.overflowX)||(e=>{const t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(t){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)),v=e=>{const t=e.parentNode;return null!==t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?t.host:t},m=(e,t)=>e<-t?-t:e>t?t:e,h=e=>e in document.documentElement.style,p=(e,t)=>{const{top:n,right:r,bottom:o,left:i}=e.getBoundingClientRect(),[l,s,a,c]=["top","right","bottom","left"].map((e=>{const n=["scroll-margin","scroll-snap-margin"].filter(h)[0],r=t.getPropertyValue(`${n}-${e}`);return parseInt(r,10)||0}));return[n-l,r+s,o+a,i-c]},g=(e,t)=>{if(!1===e.isConnected)return;const n=document.scrollingElement||document.documentElement,r=[],o=getComputedStyle(document.documentElement);for(let c=v(e);null!==c;c=v(c)){if(c===n){r.push(c);break}const e=getComputedStyle(c);if((c!==document.body||!f(c,e)||f(document.documentElement,o))&&(f(c,e)&&r.push(c),"fixed"===e.position))break}const i=window.visualViewport?window.visualViewport.width:innerWidth,l=window.visualViewport?window.visualViewport.height:innerHeight,s=window.scrollX||window.pageXOffset,a=window.scrollY||window.pageYOffset,d=getComputedStyle(e),[h,g,w,b]=p(e,d),y=w-h,x=g-b,E=(e=>{switch(e){case"horizontal-tb":case"lr":case"lr-tb":case"rl":case"rl-tb":return 0;case"vertical-rl":case"tb":case"tb-rl":return 1;case"vertical-lr":case"tb-lr":return 2;case"sideways-rl":return 3;case"sideways-lr":return 4}return 0})(d.writingMode||d.getPropertyValue("-webkit-writing-mode")||d.getPropertyValue("-ms-writing-mode")),T="rtl"!==d.direction,[S,I]=((e,t,n)=>{let[r,o]=[e.block||"start",e.inline||"nearest"],i=0;switch(n||(i^=2),t){case 0:i=i>>1|(1&i)<<1,[r,o]=[o,r];break;case 1:case 3:i^=1;break;case 4:i^=2}return[r,o].map(((e,t)=>{switch(e){case"center":return 1;case"nearest":return 0;default:return"start"===e===!(i>>t&1)?2:3}}))})(t,E,T);let k=(()=>{switch(I){case 1:return h+y/2;case 2:case 0:return h;case 3:return w}})(),C=(()=>{switch(S){case 1:return b+x/2;case 3:return g;case 2:case 0:return b}})();const N=[];r.forEach((e=>{const{height:r,width:o,top:d,right:f,bottom:v,left:h}=e.getBoundingClientRect(),p=getComputedStyle(e),g=parseInt(p.borderLeftWidth,10),w=parseInt(p.borderTopWidth,10),b=parseInt(p.borderRightWidth,10),E=parseInt(p.borderBottomWidth,10);let T=0,O=0;const j="offsetWidth"in e?e.offsetWidth-e.clientWidth-g-b:0,M="offsetHeight"in e?e.offsetHeight-e.clientHeight-w-E:0;if(n===e){switch(I){case 2:T=k;break;case 3:T=k-l;break;case 1:T=k-l/2;break;case 0:T=u(a,a+l,l,w,E,a+k,a+k+y,y)}switch(S){case 2:O=C;break;case 3:O=C-i;break;case 1:O=C-i/2;break;case 0:O=u(s,s+i,i,g,b,s+C,s+C+x,x)}T+=a,O+=s}else{switch(I){case 2:T=k-d-w;break;case 3:T=k-v+E+M;break;case 1:T=k-(d+r/2)+M/2;break;case 0:T=u(d,v,r,w,E+M,k,k+y,y)}switch(S){case 2:O=C-h-g;break;case 3:O=C-f+b+j;break;case 1:O=C-(h+o/2)+j/2;break;case 0:O=u(h,f,o,g,b+j,C,C+x,x)}const{scrollLeft:t,scrollTop:n}=e;T=m(n+T,e.scrollHeight-r+M),O=m(t+O,e.scrollWidth-o+j),k+=n-T,C+=t-O}N.push((()=>c(e,{...t,top:T,left:O})))})),N.forEach((e=>e()))},w=e=>{if("scrollBehavior"in document.documentElement.style)return;const t=o.elementScrollIntoView;var n;n=n=>n.scrollIntoView=function(){const n=arguments[0];return 1===arguments.length&&a(n)?g(this,{...n,...e}):t.apply(this,arguments)},[HTMLElement.prototype,SVGElement.prototype,Element.prototype].forEach((e=>n(e)))}}}]);