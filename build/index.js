module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=42)}([function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(2),o=n(0),i=n(30),a=n(7),u=n(5),s=function(t,e,n){var f,l,c,d=t&s.F,p=t&s.G,m=t&s.S,g=t&s.P,v=t&s.B,h=t&s.W,y=p?o:o[e]||(o[e]={}),b=y.prototype,O=p?r:m?r[e]:(r[e]||{}).prototype;for(f in p&&(n=e),n)(l=!d&&O&&void 0!==O[f])&&u(y,f)||(c=l?O[f]:n[f],y[f]=p&&"function"!=typeof O[f]?n[f]:v&&l?i(c,r):h&&O[f]==c?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(c):g&&"function"==typeof c?i(Function.call,c):c,g&&((y.virtual||(y.virtual={}))[f]=c,t&s.R&&b&&!b[f]&&a(b,f,c)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(11),o=n(31),i=n(17),a=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(34),o=n(18);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(3),o=n(14);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(21)("wks"),o=n(16),i=n(2).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},function(t,e,n){var r=n(8);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(33),o=n(22);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=!0},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(8);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(21)("keys"),o=n(16);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(0),o=n(2),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(15)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(18);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports={}},function(t,e,n){var r=n(11),o=n(72),i=n(22),a=n(20)("IE_PROTO"),u=function(){},s=function(){var t,e=n(32)("iframe"),r=i.length;for(e.style.display="none",n(73).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[a]=t):n=s(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(3).f,o=n(5),i=n(10)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){e.f=n(10)},function(t,e,n){var r=n(2),o=n(0),i=n(15),a=n(28),u=n(3).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:a.f(t)})}},function(t,e,n){var r=n(47);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){t.exports=!n(4)&&!n(9)(function(){return 7!=Object.defineProperty(n(32)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(8),o=n(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(5),o=n(6),i=n(49)(!1),a=n(20)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),s=0,f=[];for(n in u)n!=a&&r(u,n)&&f.push(n);for(;e.length>s;)r(u,n=e[s++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){var r=n(35);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(5),o=n(24),i=n(20)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){"use strict";e.__esModule=!0;var r=a(n(67)),o=a(n(78)),i="function"==typeof o.default&&"symbol"==typeof r.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};function a(t){return t&&t.__esModule?t:{default:t}}e.default="function"==typeof o.default&&"symbol"===i(r.default)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":void 0===t?"undefined":i(t)}},function(t,e,n){"use strict";var r=n(15),o=n(1),i=n(39),a=n(7),u=n(25),s=n(71),f=n(27),l=n(36),c=n(10)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,m,g,v,h){s(n,e,m);var y,b,O,_=function(t){if(!d&&t in w)return w[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",P="values"==g,S=!1,w=t.prototype,C=w[c]||w["@@iterator"]||g&&w[g],I=C||_(g),W=g?P?_("entries"):I:void 0,j="Array"==e&&w.entries||C;if(j&&(O=l(j.call(new t)))!==Object.prototype&&O.next&&(f(O,x,!0),r||"function"==typeof O[c]||a(O,c,p)),P&&C&&"values"!==C.name&&(S=!0,I=function(){return C.call(this)}),r&&!h||!d&&!S&&w[c]||a(w,c,I),u[e]=I,u[x]=p,g)if(y={values:P?I:_("values"),keys:v?I:_("keys"),entries:W},h)for(b in y)b in w||i(w,b,y[b]);else o(o.P+o.F*(d||S),e,y);return y}},function(t,e,n){t.exports=n(7)},function(t,e,n){var r=n(33),o=n(22).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(13),o=n(14),i=n(6),a=n(17),u=n(5),s=n(31),f=Object.getOwnPropertyDescriptor;e.f=n(4)?f:function(t,e){if(t=i(t),e=a(e,!0),s)try{return f(t,e)}catch(t){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(43));e.default=r.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.propTypes=e.defaultProps=e.ScrollMenu=e.InnerWrapper=e.innerStyle=e.Arrow=e.defaultSetting=void 0;var r=d(n(44)),o=d(n(52)),i=d(n(57)),a=d(n(61)),u=d(n(62)),s=d(n(66)),f=d(n(88)),l=d(n(96)),c=d(n(97));function d(t){return t&&t.__esModule?t:{default:t}}var p=e.defaultSetting={alignCenter:!0,clickWhenDrag:!1,dragging:!0,data:[],xPoint:0,translate:0,selected:0,menuItems:[],menuPos:0,menuWidth:0,firstPageOffset:0,lastPageOffset:0,menuClass:"horizontal-menu",wrapperClass:"menu-wrapper",innerWrapperClass:"menu-wrapper--inner",itemClass:"menu-item-wrapper",itemClassActive:"active",arrowClass:"scroll-menu-arrow"},m=e.Arrow=function(t){var e=t.className,n=t.onClick,r=t.children;return l.default.createElement("div",{className:e,onClick:n},r)};m.propTypes={className:c.default.string,onClick:c.default.func.isRequired,children:c.default.object.isRequired};var g={display:"flex",alignItems:"center",userSelect:"none"},v={overflow:"hidden",userSelect:"none"},h=e.innerStyle=function(t){var e=t.translate,n=t.dragging,r=t.mounted,o=t.transition;return{width:"9000px",transform:"translate3d("+e+"px, 0px, 0px)",transition:"transform "+(n||!r?"0":o)+"s",whiteSpace:"nowrap",textAlign:"left",userSelect:"none"}},y=e.InnerWrapper=function(t){function e(t){(0,a.default)(this,e);var n=(0,s.default)(this,(e.__proto__||(0,i.default)(e)).call(this,t));return n.setRef=function(t,e){var r=n.props.setRef;n.ref[t]=e,r(n.ref)},n.ref={},n}return(0,f.default)(e,t),(0,u.default)(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.data,r=e.translate,o=e.dragging,i=e.mounted,a=e.transition,u=e.selected,s=e.onClick,f=e.innerWrapperClass,c=e.itemClass,d=e.itemClassActive,p=function(t,e){return t===e},m=n.map(function(t){return l.default.cloneElement(t,{selected:p(t.key,u)})});return l.default.createElement("div",{className:f,style:h({translate:r,dragging:o,mounted:i,transition:a}),ref:function(e){return t.setRef("menuInner",e)}},m.map(function(e,n){return l.default.createElement("div",{ref:function(e){return t.setRef("menuitem-"+n,e)},className:c+" "+(p(e.key,u)?d:""),key:"menuItem-"+e.key,style:{display:"inline-block"},onClick:function(){return s(e.key)}},e)}))}}]),e}(l.default.Component);y.propTypes={data:c.default.arrayOf(c.default.object).isRequired,setRef:c.default.func.isRequired,onClick:c.default.func.isRequired,translate:c.default.number,dragging:c.default.bool,mounted:c.default.bool,transition:c.default.number,selected:c.default.oneOfType([c.default.string,c.default.number]),innerWrapperClass:c.default.string,itemClass:c.default.string,itemClassActive:c.default.string},y.defaultProps={data:[],translate:p.translate,dragging:!0,mounted:!1,transition:p.transition,selected:p.selected};var b=e.ScrollMenu=function(t){function e(t){(0,a.default)(this,e);var n=(0,s.default)(this,(e.__proto__||(0,i.default)(e)).call(this,t));return n.state={initialized:!1,mounted:!1,dragging:!1,xPoint:p.xPoint,translate:n.props.translate,selected:n.props.selected,menuItems:[],menuPos:p.menuPos,menuWidth:p.menuWidth,firstPageOffset:p.firstPageOffset,lastPageOffset:p.lastPageOffset,startDragTranslate:null,stopDragTranslate:null},n.setInitial=function(){var t=n.props,e=t.selected,r=t.data;if(!r||!r.length)return!1;var i=n.getMenuItems(),a=n.updateWidth({items:i}),u=r.find(function(t){return t.key===e});n.setState((0,o.default)({menuItems:i,selected:u&&-1!==u?u.key:p.selected},a))},n.getMenuItems=function(){return(0,r.default)(n.ref).filter(function(t){return t[0].includes("menuitem")})},n.setMounted=function(){var t=n.state,e=t.initialized,r=t.mounted;e?r||n.setState({mounted:!0}):n.setState({initialized:!0})},n.getWidth=function(t){var e=t.items,r=window&&window.innerWidth,o=n.ref.menuWrapper.getBoundingClientRect();return{wWidth:r,menuPos:o.x,menuWidth:o.width,allItemsWidth:n.getItemsWidth({items:e})}},n.updateWidth=function(t){var e=t.items,r=void 0===e?n.state.menuItems:e,i=n.props.alignCenter,a=n.getWidth({items:r});return(0,o.default)({},a,i?n.getPagesOffsets((0,o.default)({items:r},a)):{})},n.getPagesOffsets=function(t){var e=t.items,r=void 0===e?n.state.menuItems:e,o=t.allItemsWidth,i=void 0===o?n.state.allItemsWidth:o,a=t.wWidth,u=void 0===a?n.state.wWidth:a,s=t.menuPos,f=void 0===s?n.state.menuPos:s,l=t.menuWidth,c=void 0===l?n.state.menuWidth:l,d=t.translate,p=void 0===d?n.state.translate:d,m=n.props.alignCenter,g=n.getVisibleItems({items:r,wWidth:u,menuPos:f,menuWidth:c}),v=n.getCenterOffset({items:g,menuWidth:c}),h=n.getVisibleItems({items:r,offset:-i+c,wWidth:u,menuPos:f,menuWidth:c}),y=n.getCenterOffset({items:h,menuWidth:c}),b=0===p&&m?v:p;return n.setState({firstPageOffset:v,lastPageOffset:y,translate:b}),{firstPageOffset:v,lastPageOffset:y}},n.getItemsWidth=function(t){var e=t.items,r=void 0===e?n.state.menuItems:e;return(r.items||r).map(function(t){return t[1]}).reduce(function(t,e){return t+e.getBoundingClientRect().width},0)},n.onItemClick=function(t){var e=n.state.dragging,r=n.props,o=r.clickWhenDrag,i=r.onSelect,a=n.state,u=a.startDragTranslate,s=a.stopDragTranslate,f=Math.abs((u||0)-(s||0));if(e||!(null===u||null===s)&&!o&&f>5)return!1;i&&i(t),n.setState({selected:t})},n.getVisibleItems=function(t){var e=t.items,r=void 0===e?n.state.menuItems:e,o=t.wWidth,i=void 0===o?n.state.wWidth:o,a=t.menuPos,u=void 0===a?n.state.menuPos:a,s=t.menuWidth,f=void 0===s?n.state.menuWidth:s,l=t.offset,c=void 0===l?n.state.translate:l,d=t.firstPageOffset,p=void 0===d?n.state.firstPageOffset:d,m=t.translate,g=void 0===m?n.state.translate:m;return(r.items||r).filter(function(t){var e=t[1].getBoundingClientRect().width,o=n.getItemInd(r,t),a=n.getOffsetToItem({itemId:o,menuItems:r,translate:g,firstPageOffset:p});return n.elemVisible({x:a,elWidth:e,wWidth:i,menuPos:u,menuWidth:f,offset:c})})},n.elemVisible=function(t){var e=t.x,r=t.offset,o=void 0===r?0:r,i=t.elWidth,a=t.wWidth,u=void 0===a?n.state.wWidth:a,s=t.menuPos,f=void 0===s?n.state.menuPos:s,l=t.menuWidth,c=void 0===l?n.state.menuWidth:l,d=e+o;return d>=f-1&&d+i<=u-(u-(f+c))+1},n.getItemInd=function(t,e){return t&&e?t.findIndex(function(t){return t[0]===e[0]}):0},n.getNextItemInd=function(t,e){var r=n.state.menuItems;if(t){if(!e.length)return 0}else if(!e.length)return r.length;var o=t?n.getItemInd(r,e[0])-1:n.getItemInd(r,e.slice(-1)[0])+1;return o<0?0:o},n.getOffsetToItem=function(t){var e=t.itemId,r=t.menuItems,o=void 0===r?n.state.menuItems:r,i=t.translate,a=void 0===i?n.state.translate:i;return o.length?o[e>=o.length?o.length-1:e][1].getBoundingClientRect().x-a:0},n.getScrollRightOffset=function(t,e){var r=n.props.alignCenter,o=n.state,i=o.menuPos,a=o.lastPageOffset,u=n.getNextItem(t&&t.slice(-1)[0]?t.slice(-1)[0][0]:e.slice(-1)[0][0]),s=e.findIndex(function(t){return t[0]===u[0]}),f=n.getOffsetToItem({itemId:s,menuItems:e})-i,l=n.getVisibleItems({items:e,offset:-f});if(l.includes(e.slice(-1)[0]))return r?f+a:f;var c=n.getCenterOffset({items:l});return r?f-c:f},n.getScrollLeftOffset=function(t,e){var r=n.props.alignCenter,o=n.state,i=o.menuPos,a=o.menuWidth,u=o.firstPageOffset,s=n.getPrevItem(t&&t[0]?t[0][0]:e[0][0]),f=e.findIndex(function(t){return t[0]===s[0]}),l=n.getOffsetToItem({itemId:f,menuItems:e})-i-(a-n.getItemsWidth({items:[s]})),c=n.getVisibleItems({items:e,offset:-l});if(c.includes(e[0]))return r?-u:0;var d=n.getCenterOffset({items:c});return r?l+d:l},n.getNextItem=function(t){var e=n.state.menuItems;return e[e.findIndex(function(e){return e[0]===t})+1]||e.slice(-1)[0]},n.getPrevItem=function(t){var e=n.state.menuItems;return e[e.findIndex(function(e){return e[0]===t})-1]||e[0]},n.getOffset=function(t){var e=n.state.menuItems,r=n.getVisibleItems({items:e});return t?n.getScrollLeftOffset(r,e):n.getScrollRightOffset(r,e)},n.getCenterOffset=function(t){var e=t.items,r=void 0===e?n.state.menuItems:e,o=t.menuWidth,i=void 0===o?n.state.menuWidth:o;return r.length?(i-n.getItemsWidth({items:r}))/2:0},n.handleWheel=function(t){t.stopPropagation(),t.preventDefault(),t.deltaY<0?n.handleArrowClick():n.handleArrowClick(!1)},n.handleArrowClick=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=n.props.alignCenter,r=n.state,o=r.allItemsWidth,i=r.menuWidth,a=r.firstPageOffset,u=r.lastPageOffset,s=-n.getOffset(t);if(t&&n.itBeforeStart(s)&&(s=e?a:p.translate),!t&&n.itAfterEnd(s)){var f=o-i;s=e?-f-u:-f}n.setState({translate:s,xPoint:p.xPoint,startDragTranslate:null,stopDragTranslate:null},function(){return n.onUpdate({})})},n.itBeforeStart=function(t){var e=n.props.alignCenter,r=n.state.firstPageOffset;return e?t>r:t>p.translate},n.itAfterEnd=function(t){var e=n.props.alignCenter,r=n.state,o=r.menuWidth,i=r.allItemsWidth,a=r.lastPageOffset;return e?t<p.translate&&Math.abs(t)>i-o+a:t<p.translate&&Math.abs(t)>i-o},n.getPoint=function(t){return t.touches&&t.touches.length?t.touches[0]:t.clientX},n.handleDragStart=function(){if(!n.props.dragging)return!1;var t=n.state.translate;n.setState({dragging:!0,xPoint:0,startDragTranslate:t})},n.handleDrag=function(t){var e=n.props.dragging,r=n.state,o=r.dragging,i=r.xPoint,a=r.translate;if(!e||!o)return!1;var u=n.getPoint(t),s=i===p.xPoint?p.xPoint:i-u,f=a-s;n.itBeforeStart(f)&&(f-=Math.abs(s)/2),n.itAfterEnd(f)&&(f+=Math.abs(s)/2),n.setState({xPoint:u,translate:f||p.translate,stopDragTranslate:f||p.translate})},n.handleDragStop=function(t){var e=n.state,r=e.dragging,o=e.allItemsWidth,i=e.translate,a=e.menuWidth,u=e.xPoint,s=void 0===u?n.getPoint(t):u,f=e.firstPageOffset,l=e.lastPageOffset;if(!n.props.dragging||!r)return!1;var c=n.props.alignCenter;if(n.itBeforeStart(i)&&(i=c?f:0,s=p.xPoint),n.itAfterEnd(i)){var d=o-a;i=c?-d-l:-d,s=p.xPoint}n.setState({dragging:!1,xPoint:s,translate:i},function(){return n.onUpdate({})})},n.onUpdate=function(t){var e=t.selected,r=void 0===e?n.state.selected:e,o=t.translate,i=void 0===o?n.state.translate:o,a=n.props.onUpdate;a&&a({selected:r,translate:i})},n.setRef=function(t){n.ref=t},n.ref={},n}return(0,f.default)(e,t),(0,u.default)(e,[{key:"componentDidMount",value:function(){this.setInitial(),window.addEventListener("resize",this.setInitial),document.addEventListener("mousemove",this.handleDrag),document.addEventListener("mouseup",this.handleDragStop)}},{key:"shouldComponentUpdate",value:function(t,e){var n=this.state,r=n.wWidth,o=n.translate,i=n.selected,a=n.mounted,u=n.menuWidth,s=n.dragging,f=e.translate,l=e.wWidth,c=e.mounted,d=e.selected,p=e.menuWidth,m=e.dragging;return u!==p||r!==l||o!==f||i!==d||a!==c||s!==m}},{key:"componentDidUpdate",value:function(){this.setMounted()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setInitial),document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleDragStop)}},{key:"render",value:function(){var t=this,e=this.props,n=e.data,r=e.arrowLeft,o=e.arrowRight,i=e.transition,a=e.arrowClass,u=e.menuClass,s=e.wrapperClass,f=e.innerWrapperClass,c=e.itemClass,d=e.itemClassActive,p=this.state,h=p.translate,b=p.selected,O=p.dragging,_=p.mounted;return n&&n.length?l.default.createElement("div",{className:u,style:g,onWheel:function(e){return t.handleWheel(e)}},r&&l.default.createElement(m,{className:a,onClick:function(){return t.handleArrowClick()}},r),l.default.createElement("div",{className:s,style:v,ref:function(e){return t.ref.menuWrapper=e},onMouseDown:this.handleDragStart,onTouchStart:this.handleDragStart,onTouchEnd:this.handleDragStop,onMouseMove:this.handleDrag,onTouchMove:this.handleDrag},l.default.createElement(y,{data:n,translate:h,dragging:O,mounted:_,transition:i,selected:b,setRef:this.setRef,onClick:this.onItemClick,innerWrapperClass:f,itemClass:c,itemClassActive:d})),o&&l.default.createElement(m,{className:a,onClick:function(){return t.handleArrowClick(!1)}},o)):null}}]),e}(l.default.Component),O=e.defaultProps={data:p.data,translate:p.translate,selected:p.selected,transition:p.transition,dragging:p.dragging,clickWhenDrag:p.clickWhenDrag,alignCenter:p.alignCenter,wrapperClass:p.wrapperClass,innerWrapperClass:p.innerWrapperClass,itemClass:p.itemClass,itemClassActive:p.itemClassActive,arrowClass:p.arrowClass,menuClass:p.menuClass},_=e.propTypes={data:c.default.array.isRequired,selected:c.default.oneOfType([c.default.number,c.default.string]),translate:c.default.number,transition:c.default.number,arrowLeft:c.default.object,arrowRight:c.default.object,alignCenter:c.default.bool,onSelect:c.default.func,onClick:c.default.func,onUpdate:c.default.func,dragging:c.default.bool,clickWhenDrag:c.default.bool,wrapperClass:c.default.string,innerWrapperClass:c.default.string,itemClass:c.default.string,itemClassActive:c.default.string,arrowClass:c.default.string,menuClass:c.default.string};b.defaultProps=O,b.propTypes=_,e.default=b},function(t,e,n){t.exports={default:n(45),__esModule:!0}},function(t,e,n){n(46),t.exports=n(0).Object.entries},function(t,e,n){var r=n(1),o=n(48)(!0);r(r.S,"Object",{entries:function(t){return o(t)}})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(12),o=n(6),i=n(13).f;t.exports=function(t){return function(e){for(var n,a=o(e),u=r(a),s=u.length,f=0,l=[];s>f;)i.call(a,n=u[f++])&&l.push(t?[n,a[n]]:a[n]);return l}}},function(t,e,n){var r=n(6),o=n(50),i=n(51);t.exports=function(t){return function(e,n,a){var u,s=r(e),f=o(s.length),l=i(a,f);if(t&&n!=n){for(;f>l;)if((u=s[l++])!=u)return!0}else for(;f>l;l++)if((t||l in s)&&s[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(19),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(19),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){"use strict";e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(53));e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){t.exports={default:n(54),__esModule:!0}},function(t,e,n){n(55),t.exports=n(0).Object.assign},function(t,e,n){var r=n(1);r(r.S+r.F,"Object",{assign:n(56)})},function(t,e,n){"use strict";var r=n(12),o=n(23),i=n(13),a=n(24),u=n(34),s=Object.assign;t.exports=!s||n(9)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r})?function(t,e){for(var n=a(t),s=arguments.length,f=1,l=o.f,c=i.f;s>f;)for(var d,p=u(arguments[f++]),m=l?r(p).concat(l(p)):r(p),g=m.length,v=0;g>v;)c.call(p,d=m[v++])&&(n[d]=p[d]);return n}:s},function(t,e,n){t.exports={default:n(58),__esModule:!0}},function(t,e,n){n(59),t.exports=n(0).Object.getPrototypeOf},function(t,e,n){var r=n(24),o=n(36);n(60)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(1),o=n(0),i=n(9);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(63));e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(t,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports={default:n(64),__esModule:!0}},function(t,e,n){n(65);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(1);r(r.S+r.F*!n(4),"Object",{defineProperty:n(3).f})},function(t,e,n){"use strict";e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(37));e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,r.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){t.exports={default:n(68),__esModule:!0}},function(t,e,n){n(69),n(74),t.exports=n(28).f("iterator")},function(t,e,n){"use strict";var r=n(70)(!0);n(38)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(19),o=n(18);t.exports=function(t){return function(e,n){var i,a,u=String(o(e)),s=r(n),f=u.length;return s<0||s>=f?t?"":void 0:(i=u.charCodeAt(s))<55296||i>56319||s+1===f||(a=u.charCodeAt(s+1))<56320||a>57343?t?u.charAt(s):i:t?u.slice(s,s+2):a-56320+(i-55296<<10)+65536}}},function(t,e,n){"use strict";var r=n(26),o=n(14),i=n(27),a={};n(7)(a,n(10)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(3),o=n(11),i=n(12);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),u=a.length,s=0;u>s;)r.f(t,n=a[s++],e[n]);return t}},function(t,e,n){var r=n(2).document;t.exports=r&&r.documentElement},function(t,e,n){n(75);for(var r=n(2),o=n(7),i=n(25),a=n(10)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<u.length;s++){var f=u[s],l=r[f],c=l&&l.prototype;c&&!c[a]&&o(c,a,f),i[f]=i.Array}},function(t,e,n){"use strict";var r=n(76),o=n(77),i=n(25),a=n(6);t.exports=n(38)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){t.exports={default:n(79),__esModule:!0}},function(t,e,n){n(80),n(85),n(86),n(87),t.exports=n(0).Symbol},function(t,e,n){"use strict";var r=n(2),o=n(5),i=n(4),a=n(1),u=n(39),s=n(81).KEY,f=n(9),l=n(21),c=n(27),d=n(16),p=n(10),m=n(28),g=n(29),v=n(82),h=n(83),y=n(11),b=n(8),O=n(6),_=n(17),x=n(14),P=n(26),S=n(84),w=n(41),C=n(3),I=n(12),W=w.f,j=C.f,k=S.f,M=r.Symbol,T=r.JSON,E=T&&T.stringify,D=p("_hidden"),L=p("toPrimitive"),A={}.propertyIsEnumerable,R=l("symbol-registry"),N=l("symbols"),F=l("op-symbols"),V=Object.prototype,B="function"==typeof M,U=r.QObject,q=!U||!U.prototype||!U.prototype.findChild,z=i&&f(function(){return 7!=P(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=W(V,e);r&&delete V[e],j(t,e,n),r&&t!==V&&j(V,e,r)}:j,G=function(t){var e=N[t]=P(M.prototype);return e._k=t,e},H=B&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},J=function(t,e,n){return t===V&&J(F,e,n),y(t),e=_(e,!0),y(n),o(N,e)?(n.enumerable?(o(t,D)&&t[D][e]&&(t[D][e]=!1),n=P(n,{enumerable:x(0,!1)})):(o(t,D)||j(t,D,x(1,{})),t[D][e]=!0),z(t,e,n)):j(t,e,n)},Y=function(t,e){y(t);for(var n,r=v(e=O(e)),o=0,i=r.length;i>o;)J(t,n=r[o++],e[n]);return t},K=function(t){var e=A.call(this,t=_(t,!0));return!(this===V&&o(N,t)&&!o(F,t))&&(!(e||!o(this,t)||!o(N,t)||o(this,D)&&this[D][t])||e)},Q=function(t,e){if(t=O(t),e=_(e,!0),t!==V||!o(N,e)||o(F,e)){var n=W(t,e);return!n||!o(N,e)||o(t,D)&&t[D][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=k(O(t)),r=[],i=0;n.length>i;)o(N,e=n[i++])||e==D||e==s||r.push(e);return r},Z=function(t){for(var e,n=t===V,r=k(n?F:O(t)),i=[],a=0;r.length>a;)!o(N,e=r[a++])||n&&!o(V,e)||i.push(N[e]);return i};B||(u((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===V&&e.call(F,n),o(this,D)&&o(this[D],t)&&(this[D][t]=!1),z(this,t,x(1,n))};return i&&q&&z(V,t,{configurable:!0,set:e}),G(t)}).prototype,"toString",function(){return this._k}),w.f=Q,C.f=J,n(40).f=S.f=X,n(13).f=K,n(23).f=Z,i&&!n(15)&&u(V,"propertyIsEnumerable",K,!0),m.f=function(t){return G(p(t))}),a(a.G+a.W+a.F*!B,{Symbol:M});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)p($[tt++]);for(var et=I(p.store),nt=0;et.length>nt;)g(et[nt++]);a(a.S+a.F*!B,"Symbol",{for:function(t){return o(R,t+="")?R[t]:R[t]=M(t)},keyFor:function(t){if(!H(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){q=!0},useSimple:function(){q=!1}}),a(a.S+a.F*!B,"Object",{create:function(t,e){return void 0===e?P(t):Y(P(t),e)},defineProperty:J,defineProperties:Y,getOwnPropertyDescriptor:Q,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),T&&a(a.S+a.F*(!B||f(function(){var t=M();return"[null]"!=E([t])||"{}"!=E({a:t})||"{}"!=E(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(b(e)||void 0!==t)&&!H(t))return h(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!H(e))return e}),r[1]=e,E.apply(T,r)}}),M.prototype[L]||n(7)(M.prototype,L,M.prototype.valueOf),c(M,"Symbol"),c(Math,"Math",!0),c(r.JSON,"JSON",!0)},function(t,e,n){var r=n(16)("meta"),o=n(8),i=n(5),a=n(3).f,u=0,s=Object.isExtensible||function(){return!0},f=!n(9)(function(){return s(Object.preventExtensions({}))}),l=function(t){a(t,r,{value:{i:"O"+ ++u,w:{}}})},c=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!e)return"E";l(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!s(t))return!0;if(!e)return!1;l(t)}return t[r].w},onFreeze:function(t){return f&&c.NEED&&s(t)&&!i(t,r)&&l(t),t}}},function(t,e,n){var r=n(12),o=n(23),i=n(13);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var a,u=n(t),s=i.f,f=0;u.length>f;)s.call(t,a=u[f++])&&e.push(a);return e}},function(t,e,n){var r=n(35);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(6),o=n(40).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(r(t))}},function(t,e){},function(t,e,n){n(29)("asyncIterator")},function(t,e,n){n(29)("observable")},function(t,e,n){"use strict";e.__esModule=!0;var r=a(n(89)),o=a(n(93)),i=a(n(37));function a(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,i.default)(e)));t.prototype=(0,o.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(r.default?(0,r.default)(t,e):t.__proto__=e)}},function(t,e,n){t.exports={default:n(90),__esModule:!0}},function(t,e,n){n(91),t.exports=n(0).Object.setPrototypeOf},function(t,e,n){var r=n(1);r(r.S,"Object",{setPrototypeOf:n(92).set})},function(t,e,n){var r=n(8),o=n(11),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(30)(Function.call,n(41).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){t.exports={default:n(94),__esModule:!0}},function(t,e,n){n(95);var r=n(0).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){var r=n(1);r(r.S,"Object",{create:n(26)})},function(t,e){t.exports=require("react")},function(t,e,n){t.exports=n(98)()},function(t,e,n){"use strict";var r=n(99);function o(){}t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=o,n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]);