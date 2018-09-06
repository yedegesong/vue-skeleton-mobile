<template>
  <div class="xfd-cell-swipe-box" 
  @touchstart="_touchStart" 
  @touchmove="_touchMove" 
  @touchend="_touchEnd"
  @click="swipeMove"
  >
    <div class="xfd-cell-swipe" :style="{ 'transform': 'translate3d(' + -(translate) + 'px, 0,0)' }">
      <slot></slot>
    </div>
    <div class="xfd-cell-swipe-footer" ref="right">
      <slot name="right">
      </slot>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'xfd-pull-left-two',
    data() {
      return {
        translate: 0,
        startX: 0,
        currentX: 0,
        topStatus: '',
        bottomStatus: ''
      }
    },
    mounted() {
      //获得需要滑动的距离
      this.delWidth = this.$refs.right.getBoundingClientRect().width;
    },
    methods: {
      swipeMove(){
        this.translate = 0;
      },
      _touchStart(ev) {
        ev = ev || event;
        if (ev.touches.length == 1) {
          // 手指按下的时候记录按下的位置
          this.startX = ev.touches[0].clientX;
        }
      },
      _touchMove(ev) {
        ev = ev || event;
        if (ev.touches.length == 1) {
          // 滑动过程中的实时位置
          this.currentX = ev.touches[0].clientX
          // 滑动过程中实时计算滑动距离
          this.disX = this.startX - this.currentX;
          // console.log('disX==>',this.disX)
          // 如果是向右滑动或者只是点击，不改变滑动位置
          if (this.disX < 0 || this.disX == 0) {
            this.translate = 0;
          } else if (this.disX > 0) {
            if (this.disX > this.delWidth) {
              this.translate = this.delWidth
            } else {
              this.translate = this.disX
            }
  
          }
        }
      },
      _touchEnd(ev) {
        let swife = this.delWidth / 2;
        if (this.translate < swife || this.translate <= 0) {
          this.translate = 0;
        } else {
          this.translate = this.delWidth
        }
      }
    }
  }
</script>

<style lang="less">
  @import './pull.left.less';
</style>
