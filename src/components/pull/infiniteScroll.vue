<template>
  <div class="xfd-infinite-scroll" ref="content">
    <slot></slot>
    <div  class="xfd-loadmore" style="padding:.48rem;">
        <div v-show="isNextPage">
            <i class="xfd-loading"></i>
            <p>努力加载中..</p>
        </div>
        <p v-show="!isNextPage">没有更多</p>
    </div>
  </div>
</template>


<script type="text/babel">
  export default {
    name: 'xfd-infinite-scroll',
    props: {
        isNextPage:{
           type: Boolean,
           default: false
        },
        callback: {
                type: Function
        }
    },
  
    data() {
      return {
  
      };
    },
  
  
    methods: {
      init(el) {
        this.scrollView = el;
        this.bindEvent(); 
      },
      bindEvent() {
        this.scrollView.addEventListener('scroll', this.scrollHandler);
      },
      scrollHandler(e) {
        this.$emit('scroll-callback', this.scrollView.scrollTop);
        if(!this.isNextPage){
            return;
        }
        let height = this.scrollView.getBoundingClientRect().height
        let totalheight = parseFloat(height) + parseFloat(this.scrollView.scrollTop);
        let domHeight = this.$refs.content.offsetHeight;
        if (domHeight <= totalheight) {
            this.callback();
        } 
      },
    },
  
    mounted() {
      //this.$nextTick(this.init);
    },
    destroyed() {
      this.scrollView.removeEventListener('scroll', this.scrollHandler);
    }
  };
</script>