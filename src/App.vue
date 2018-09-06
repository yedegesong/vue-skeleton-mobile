<template>
  <div id="app" class="xfd-viewpager">
    <!--<section class="xfd-views">-->
      <transition>
        <router-view></router-view>
      </transition>
    <!--</section>-->
    <footer class="xfd-footer xfd-border-t" v-show="isFooter">
      <ul class="xfd-tabbar">
        <li v-for="link in links" :class="{ active: isActive==link.url }" @click="handleGoto(link.url)">
          <i :class="[fix_cls,'icon-'+link.icon]"></i>
          <div>{{link.title}}</div>
          <div>1</div>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script type="text/babel">
  const ShowAppFooterUrls = /^\/(|component)$/g;
  let pathArray = ['/'];
  export default {
    name: 'App',
    data() {
      return {
        hasError: true,
        isActive: '/',
        isFooter: true,
        transitionName: 'fade',
        fix_cls: 'icon iconfont',
        links: [{
            title: '首页',
            url: '/',
            icon: 'github'
          },
          {
            title: '登录拦截',
            url: '/myinfo',
            icon: 'ellipsis'
          }
        ]
      }
    },
    watch: {
      '$route' (to, from) {
        this.isActive = to.path;
        let is_path = to.path.match(ShowAppFooterUrls);
        this.isFooter = is_path;
        // if (is_path) {
        //     this.transitionName = '';
        //     pathArray = [];
        //     return;
        // }
        let index = pathArray.indexOf(to.path);
      }
    },
    methods: {
      handleGoto(type) {
        this.isActive = type;
        this.$router.push(type);
      }
    },
    mounted() {
      //解决刷新之后导航热点状态
      this.isActive = this.$router.currentRoute.path;
    }
  }
</script>
<style>
  body{
    background-color: #fbf9fe;
  }
</style>