webpackJsonp([5],{qy9M:function(t,e,i){"use strict";var s={name:"xfd-infinite-scroll",props:{isNextPage:{type:Boolean,default:!1},callback:{type:Function}},data:function(){return{}},methods:{init:function(t){this.scrollView=t,this.bindEvent()},bindEvent:function(){this.scrollView.addEventListener("scroll",this.scrollHandler)},scrollHandler:function(t){if(this.$emit("scroll-callback",this.scrollView.scrollTop),this.isNextPage){var e=this.scrollView.getBoundingClientRect().height,i=parseFloat(e)+parseFloat(this.scrollView.scrollTop);this.$refs.content.offsetHeight<=i&&this.callback()}}},mounted:function(){},destroyed:function(){this.scrollView.removeEventListener("scroll",this.scrollHandler)}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"content",staticClass:"xfd-infinite-scroll"},[t._t("default"),t._v(" "),i("div",{staticClass:"xfd-loadmore",staticStyle:{padding:".48rem"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isNextPage,expression:"isNextPage"}]},[i("i",{staticClass:"xfd-loading"}),t._v(" "),i("p",[t._v("努力加载中..")])]),t._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:!t.isNextPage,expression:"!isNextPage"}]},[t._v("没有更多")])])],2)},staticRenderFns:[]},r=i("VU/8")(s,l,!1,null,null,null);e.a=r.exports},xar0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Gu7T"),l=i.n(s),r=i("Dd8w"),n=i.n(r),a=i("NYxO"),o=i("qy9M"),c={name:"InfiniteScrollController",data:function(){return{isNextPage:!0,page:1}},computed:n()({},Object(a.b)({links:function(t){return t.ListMutation.links}})),filters:{capitalize:function(t){return 0==t?"未读":"已读"}},methods:{goPath:function(t,e){this.$store.dispatch("ListMutation/setList",e),this.$router.push("/")},handleLoadList:function(){this.page++,this.queryOrderList()},queryOrderList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=void 0,s=this.links;setTimeout(function(){i=e?s:[].concat(l()(t.links),l()(s)),t.isNextPage=!(t.page>2),t.$store.dispatch("ListMutation/queryList",i),t.$store.dispatch("setScrollPage",t.page)},1e3)},getScroll:function(t){this.$store.dispatch("setScrollBehaviorScroll",t)}},components:{"xfd-infinite-scroll":o.a},mounted:function(){this.$store.state.scrollBehavior.path==this.$route.fullPath?(this.$refs.scrollView.scrollTop=this.$store.state.scrollBehavior.scrollTop,this.page=this.$store.state.scrollBehavior.page):this.queryOrderList(!0),this.$store.dispatch("setScrollBehavior",this.$route.fullPath),this.$refs.infiniteScroll.init(this.$refs.scrollView)}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"xfd-viewpager"},[i("header",{staticClass:"xfd-header xfd-border-b"},[i("div",{directives:[{name:"router",rawName:"v-router",value:{router:this.$router},expression:"{router:this.$router}"}],staticClass:"xfd-header-left"},[i("span",[t._v("返回")])]),t._v(" "),i("h1",[t._v("记录滚动内容infiniteScroll(滚动加载)")]),t._v(" "),i("div",{staticClass:"xfd-header-right text-center"})]),t._v(" "),i("section",{ref:"scrollView",staticClass:"xfd-container"},[i("xfd-infinite-scroll",{ref:"infiniteScroll",attrs:{isNextPage:t.isNextPage,callback:t.handleLoadList},on:{"scroll-callback":t.getScroll}},[i("div",{staticClass:"xfd-cells-box"},t._l(t.links,function(e,s){return i("div",{key:s,staticClass:"xfd-cells xfd-arrowlink xfd-line",on:{click:function(i){t.goPath(e,s)}}},[t._v("\n                    "+t._s(e.title)),i("span",{staticClass:"text-warning"},[t._v(t._s(t._f("capitalize")(e.status)))])])}))])],1)])},staticRenderFns:[]},u=i("VU/8")(c,d,!1,null,null,null);e.default=u.exports}});
//# sourceMappingURL=5.6ce150079e6683ec971d.js.map