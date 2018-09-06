import Vue from 'vue';
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tree=t():e.tree=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=13)}([function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++)if(e===t[n])return!0;return!1}function r(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function i(e){if(T)return 0;if(e||void 0===$){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var n=document.createElement("div"),o=n.style;o.position="absolute",o.top=0,o.left=0,o.pointerEvents="none",o.visibility="hidden",o.width="200px",o.height="150px",o.overflow="hidden",n.appendChild(t),document.body.appendChild(n);var r=t.offsetWidth;n.style.overflow="scroll";var i=t.offsetWidth;r===i&&(i=n.clientWidth),document.body.removeChild(n),$=r-i}return $}function a(e){return e.replace(C,function(e,t,n,o){return o?n.toUpperCase():n}).replace(k,"Moz$1")}function d(e,t){if(!e||!t)return null;"float"===(t=a(t))&&(t="cssFloat");try{var n=document.defaultView.getComputedStyle(e,"");return e.style[t]||n?n[t]:null}catch(n){return e.style[t]}}function s(e){return e.toString()[0].toUpperCase()+e.toString().slice(1)}function l(e,t,n,o){n=s(n),o=s(o),console.error("[iView warn]: Invalid prop: type check failed for prop "+t+". Expected "+n+", got "+o+". (found in component: "+e+")")}function c(e){var t=Object.prototype.toString;return{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"}[t.call(e)]}function u(e){var t=c(e),n=void 0;if("array"===t)n=[];else{if("object"!==t)return e;n={}}if("array"===t)for(var o=0;o<e.length;o++)n.push(u(e[o]));else if("object"===t)for(var r in e)n[r]=u(e[r]);return n}function f(e){function t(n,o,r){if(n!==o){var i=n+r>o?o:n+r;n>o&&(i=n-r<o?o:n-r),e===window?window.scrollTo(i,i):e.scrollTop=i,window.requestAnimationFrame(function(){return t(i,o,r)})}}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var i=Math.abs(n-o);t(n,o,Math.ceil(i/r*50))}function h(e,t,n){n="string"==typeof t?[t]:t;for(var o=e.$parent,r=o.$options.name;o&&(!r||n.indexOf(r)<0);)(o=o.$parent)&&(r=o.$options.name);return o}function p(e,t){var n=e.$children,o=null;if(n.length){var r=!0,i=!1,a=void 0;try{for(var d,s=n[Symbol.iterator]();!(r=(d=s.next()).done);r=!0){var l=d.value;if(l.$options.name===t){o=l;break}if(o=p(l,t))break}}catch(e){i=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw a}}}return o}function v(e,t){return e.$children.reduce(function(e,n){n.$options.name===t&&e.push(n);var o=v(n,t);return e.concat(o)},[])}function y(e,t){var n=[],o=e.$parent;return o?(o.$options.name===t&&n.push(o),n.concat(y(o,t))):[]}function m(e,t){var n=e.$parent.$children.filter(function(e){return e.$options.name===t}),o=n.indexOf(e);return n.splice(o,1),n}function g(e,t){if(!e||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}function w(e,t){if(e){for(var n=e.className,o=(t||"").split(" "),r=0,i=o.length;r<i;r++){var a=o[r];a&&(e.classList?e.classList.add(a):g(e,a)||(n+=" "+a))}e.classList||(e.className=n)}}function b(e,t){if(e&&t){for(var n=t.split(" "),o=" "+e.className+" ",r=0,i=n.length;r<i;r++){var a=n[r];a&&(e.classList?e.classList.remove(a):g(e,a)&&(o=o.replace(" "+a+" "," ")))}e.classList||(e.className=_(o))}}function x(){if("undefined"!=typeof window){var e=function(e){return{media:e,matches:!1,on:function(){},off:function(){}}};window.matchMedia=window.matchMedia||e}}Object.defineProperty(t,"__esModule",{value:!0}),t.oneOf=o,t.camelcaseToHyphen=r,t.getScrollBarSize=i,t.getStyle=d,t.warnProp=l,t.scrollTop=f,t.findComponentDownward=p,t.findComponentsDownward=v,t.findComponentsUpward=y,t.findBrothersComponents=m,t.hasClass=g,t.addClass=w,t.removeClass=b,t.setMatchMedia=x;var T=Vue.prototype.$isServer,$=void 0,C=(t.MutationObserver=!T&&(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver||!1),/([\:\-\_]+(.))/g),k=/^moz([A-Z])/;t.firstUpperCase=s,t.deepCopy=u,t.findComponentUpward=h;var _=function(e){return(e||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")};t.dimensionMap={xs:"480px",sm:"768px",md:"992px",lg:"1200px",xl:"1600px"}},function(e,t,n){"use strict";function o(e,t,n){this.$children.forEach(function(r){r.$options.name===e?r.$emit.apply(r,[t].concat(n)):o.apply(r,[e,t].concat([n]))})}Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{dispatch:function(e,t,n){for(var o=this.$parent||this.$root,r=o.$options.name;o&&(!r||r!==e);)(o=o.$parent)&&(r=o.$options.name);o&&o.$emit.apply(o,[t].concat(n))},broadcast:function(e,t,n){o.call(this,e,t,n)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2);t.default={methods:{t:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return o.t.apply(this,t)}}}},function(e,t){e.exports=function(e,t,n,o){var r,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(r=e,i=e.default);var d="function"==typeof i?i.options:i;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns),n&&(d._scopeId=n),o){var s=Object.create(d.computed||null);Object.keys(o).forEach(function(e){var t=o[e];s[e]=function(){return t}}),d.computed=s}return{esModule:r,exports:i,options:d}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=r.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),a=o(i),d=n(7),s=o(d),l=n(1),c=o(l),u=n(0);t.default={name:"TreeNode",mixins:[c.default],components:{CollapseTransition:s.default,Render:a.default},props:{data:{type:Object,default:function(){return{}}},multiple:{type:Boolean,default:!1},childrenKey:{type:String,default:"children"},showCheckbox:{type:Boolean,default:!1}},data:function(){return{prefixCls:"ivu-tree"}},computed:{classes:function(){return["ivu-tree-children"]},selectedCls:function(){return[r({},"ivu-tree-node-selected",this.data.selected)]},arrowClasses:function(){var e;return["ivu-tree-arrow",(e={},r(e,"ivu-tree-arrow-disabled",this.data.disabled),r(e,"ivu-tree-arrow-open",this.data.expand),e)]},titleClasses:function(){return["ivu-tree-title",r({},"ivu-tree-title-selected",this.data.selected)]},showArrow:function(){return this.data[this.childrenKey]&&this.data[this.childrenKey].length||"loading"in this.data&&!this.data.loading},showLoading:function(){return"loading"in this.data&&this.data.loading},isParentRender:function(){var e=(0,u.findComponentUpward)(this,"Tree");return e&&e.render},parentRender:function(){var e=(0,u.findComponentUpward)(this,"Tree");return e&&e.render?e.render:null},node:function(){var e=this,t=(0,u.findComponentUpward)(this,"Tree");return t?[t.flatState,t.flatState.find(function(t){return t.nodeKey===e.data.nodeKey})]:[]},children:function(){return this.data[this.childrenKey]}},methods:{handleExpand:function(){var e=this,t=this.data;if(!t.disabled){if(0===t[this.childrenKey].length){var n=(0,u.findComponentUpward)(this,"Tree");if(n&&n.loadData)return this.$set(this.data,"loading",!0),void n.loadData(t,function(t){e.$set(e.data,"loading",!1),t.length&&(e.$set(e.data,e.childrenKey,t),e.$nextTick(function(){return e.handleExpand()}))})}t[this.childrenKey]&&t[this.childrenKey].length&&(this.$set(this.data,"expand",!this.data.expand),this.dispatch("Tree","toggle-expand",this.data))}},handleSelect:function(){this.data.disabled||this.dispatch("Tree","on-selected",this.data.nodeKey)},handleCheck:function(){if(!this.data.disabled){var e={checked:!this.data.checked&&!this.data.indeterminate,nodeKey:this.data.nodeKey};this.dispatch("Tree","on-check",e)}}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),i=o(r),a=n(1),d=o(a),s=n(2),l=o(s);t.default={name:"Tree",mixins:[d.default,l.default],components:{TreeNode:i.default},props:{data:{type:Array,default:function(){return[]}},multiple:{type:Boolean,default:!1},showCheckbox:{type:Boolean,default:!1},emptyText:{type:String},childrenKey:{type:String,default:"children"},loadData:{type:Function},render:{type:Function}},data:function(){return{prefixCls:"ivu-tree",stateTree:this.data,flatState:[]}},watch:{data:{deep:!0,handler:function(){this.stateTree=this.data,this.flatState=this.compileFlatState(),this.rebuildTree()}}},computed:{localeEmptyText:function(){return void 0===this.emptyText?this.t("i.tree.emptyText"):this.emptyText}},methods:{compileFlatState:function(){function e(r,i){r.nodeKey=t++,o[r.nodeKey]={node:r,nodeKey:r.nodeKey},void 0!==i&&(o[r.nodeKey].parent=i.nodeKey,o[i.nodeKey][n].push(r.nodeKey)),r[n]&&(o[r.nodeKey][n]=[],r[n].forEach(function(t){return e(t,r)}))}var t=0,n=this.childrenKey,o=[];return this.stateTree.forEach(function(t){e(t)}),o},updateTreeUp:function(e){var t=this.flatState[e].parent;if(void 0!==t){var n=this.flatState[e].node,o=this.flatState[t].node;n.checked==o.checked&&n.indeterminate==o.indeterminate||(1==n.checked?(this.$set(o,"checked",o[this.childrenKey].every(function(e){return e.checked})),this.$set(o,"indeterminate",!o.checked)):(this.$set(o,"checked",!1),this.$set(o,"indeterminate",o[this.childrenKey].some(function(e){return e.checked||e.indeterminate}))),this.updateTreeUp(t))}},rebuildTree:function(){var e=this;this.getCheckedNodes().forEach(function(t){e.updateTreeDown(t,{checked:!0});var n=e.flatState[t.nodeKey].parent;if(n||0===n){var o=e.flatState[n].node;void 0!==t.checked&&t.checked&&o.checked!=t.checked&&e.updateTreeUp(t.nodeKey)}})},getSelectedNodes:function(){return this.flatState.filter(function(e){return e.node.selected}).map(function(e){return e.node})},getCheckedNodes:function(){return this.flatState.filter(function(e){return e.node.checked}).map(function(e){return e.node})},updateTreeDown:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var o in n)this.$set(e,o,n[o]);e[this.childrenKey]&&e[this.childrenKey].forEach(function(e){t.updateTreeDown(e,n)})},handleSelect:function(e){var t=this.flatState[e].node;if(!this.multiple){var n=this.flatState.findIndex(function(e){return e.node.selected});n>=0&&n!==e&&this.$set(this.flatState[n].node,"selected",!1)}this.$set(t,"selected",!t.selected),this.$emit("on-select-change",this.getSelectedNodes())},handleCheck:function(e){var t=e.checked,n=e.nodeKey,o=this.flatState[n].node;this.$set(o,"checked",t),this.$set(o,"indeterminate",!1),this.updateTreeUp(n),this.updateTreeDown(o,{checked:t,indeterminate:!1}),this.$emit("on-check-change",this.getCheckedNodes())}},created:function(){this.flatState=this.compileFlatState(),this.rebuildTree()},mounted:function(){var e=this;this.$on("on-check",this.handleCheck),this.$on("on-selected",this.handleSelect),this.$on("toggle-expand",function(t){return e.$emit("on-toggle-expand",t)})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r={beforeEnter:function(e){(0,o.addClass)(e,"collapse-transition"),e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.height="0",e.style.paddingTop=0,e.style.paddingBottom=0},enter:function(e){e.dataset.oldOverflow=e.style.overflow,0!==e.scrollHeight?(e.style.height=e.scrollHeight+"px",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.height="",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},afterEnter:function(e){(0,o.removeClass)(e,"collapse-transition"),e.style.height="",e.style.overflow=e.dataset.oldOverflow},beforeLeave:function(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.height=e.scrollHeight+"px",e.style.overflow="hidden"},leave:function(e){0!==e.scrollHeight&&((0,o.addClass)(e,"collapse-transition"),e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave:function(e){(0,o.removeClass)(e,"collapse-transition"),e.style.height="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom}};t.default={name:"CollapseTransition",functional:!0,render:function(e,t){var n=t.children;return e("transition",{on:r},n)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"RenderCell",functional:!0,props:{render:Function,data:Object,node:Array},render:function(e,t){var n={root:t.props.node[0],node:t.props.node[1],data:t.props.data};return t.props.render(e,n)}}},function(e,t,n){var o=n(3)(n(5),n(11),null,null);e.exports=o.exports},function(e,t,n){var o=n(3)(n(6),n(12),null,null);e.exports=o.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("collapse-transition",[n("ul",{class:e.classes},[n("li",[n("span",{class:e.arrowClasses,on:{click:e.handleExpand}},[e.showArrow?n("i",{attrs:{type:"arrow-right-b"}}):e._e(),e._v(" "),e.showLoading?n("i",{staticClass:"ivu-load-loop",attrs:{type:"load-c"}}):e._e()]),e._v(" "),e.data.render?n("Render",{attrs:{render:e.data.render,data:e.data,node:e.node}}):e.isParentRender?n("Render",{attrs:{render:e.parentRender,data:e.data,node:e.node}}):n("span",{class:e.titleClasses,on:{click:e.handleSelect}},[e._v(e._s(e.data.title))]),e._v(" "),e._l(e.children,function(t,o){return e.data.expand?n("Tree-node",{key:o,attrs:{data:t,multiple:e.multiple,"show-checkbox":e.showCheckbox,"children-key":e.childrenKey}}):e._e()})],2)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.prefixCls},[e._l(e.stateTree,function(t,o){return n("Tree-node",{key:o,attrs:{data:t,visible:"",multiple:e.multiple,"show-checkbox":e.showCheckbox,"children-key":e.childrenKey}})}),e._v(" "),e.stateTree.length?e._e():n("div",{class:[e.prefixCls+"-empty"]},[e._v(e._s(e.localeEmptyText))])],2)},staticRenderFns:[]}},function(e,t,n){e.exports=n(4)}])});