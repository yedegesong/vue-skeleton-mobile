webpackJsonp([12],{OpXX:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"xfd-scroll-nav",props:{navList:[Array],index:{validator:function(t){return/^(([1-9]\d*)|0)$/.test(t)},default:0},callback:{type:Function}},data:function(){return{activeIndex:this.index,currentOffset:0,currentPosition:0,scrolling:!1}},mounted:function(){this.$nextTick(this.init)},watch:{activeIndex:function(t){this.scrollNav(t)},index:function(t){this.activeIndex=t}},methods:{scrollNav:function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=~~this.$refs.nav.offsetWidth/2;this.navList.every(function(i,r){if(r===t){var s=e.$refs["navitem_"+r][0],c=s.offsetLeft-a+s.offsetWidth/2;return e.scrollLeft(e.currentOffset,c,n,function(){e.callback&&e.callback(r,i)}),!1}return!0})},scrollContent:function(t){this.activeIndex=t},scrollLeft:function(t,e,n,a){var i=Math.abs(t-e),r=this;!function t(e,n,i){if(e!==n){var s=e+i>n?n:e+i;e>n&&(s=e-i<n?n:e-i),r.$refs.nav.scrollLeft=s,r.currentOffset=s,window.requestAnimationFrame(function(){return t(s,n,i)})}else a&&a()}(t,e,n?Math.ceil(i/600*50):i)}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"navbox"},[n("div",{ref:"nav",staticClass:"xfd-scrollNav-list"},t._l(t.navList,function(e,a){return n("div",{ref:"navitem_"+a,refInFor:!0,class:{"text-primary":a==t.activeIndex},on:{click:function(e){e.stopPropagation(),t.scrollContent(a)}}},[t._v(t._s(e.name))])}))])},staticRenderFns:[]},r={name:"SearchController",data:function(){return{index:0,navList:[{id:2,name:"全部"},{id:1,name:"面馆"},{id:3,name:"快餐"},{id:4,name:"披萨"},{id:5,name:"汉堡"},{id:6,name:"饺子"},{id:7,name:"炸鸡"},{id:8,name:"麻辣烫"}]}},methods:{callbackChange:function(t,e){this.index=t,console.log(e)}},components:{"xfd-scroll-nav":n("VU/8")(a,i,!1,null,null,null).exports},mounted:function(){}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xfd-viewpager"},[n("header",{staticClass:"xfd-header xfd-border-b"},[n("div",{directives:[{name:"router",rawName:"v-router",value:{router:this.$router},expression:"{router:this.$router}"}],staticClass:"xfd-header-left"},[n("span",[t._v("返回")])]),t._v(" "),n("h1",[t._v("滚动菜单(ScrollNav))")]),t._v(" "),n("div",{staticClass:"xfd-header-right text-center"})]),t._v(" "),n("section",{staticClass:"xfd-container"},[n("div",{staticClass:"xfd-scrollNav xfd-row-flex"},[n("xfd-scroll-nav",{staticClass:"xfd-col-1",staticStyle:{"overflow-x":"scroll"},attrs:{index:1,callback:t.callbackChange,"nav-list":t.navList}}),t._v(" "),n("div",{staticClass:"xfd-scrollNav-icon"})],1)])])},staticRenderFns:[]},c=n("VU/8")(r,s,!1,null,null,null);e.default=c.exports}});
//# sourceMappingURL=12.8b7339689f7ee3551721.js.map