<template>
  <div class="xfd-cell-swipe" @touchstart="_touchStart" @touchmove="_touchMove" @touchend="_touchEnd">
  <div class="xfd-cells" :style="txtStyle" :class="{ active: isActive}">
    <slot></slot>
  </div>
    <div class="xfd-cell-swipe-right" ref="right">
      <slot name="right">
      </slot>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'xfd-pull-left',
    data() {
      return {
        isActive:false,
        startX: 0, //触摸位置
        moveX: 0, //滑动时的位置
        disX: 0, //移动距离
        txtStyle: '',
        delWidth: 0,
        top: '',
        zIndex: '-1',
      }
    },
    mounted(){
      //获得需要滑动的距离
     this.delWidth = this.$refs.right.getBoundingClientRect().width;
    },
    methods: {
      _resetTranslateX(){
          this.txtStyle = "transform:translateX(0px)";
      },
      _touchStart: function(ev) {
        ev = ev || event;
        if (ev.touches.length == 1) {
          // 手指按下的时候记录按下的位置
          this.startX = ev.touches[0].clientX;
        }
      },
      _touchMove: function(ev) {
        ev = ev || event;
        if (ev.touches.length == 1) {
          // 滑动过程中的实时位置
          this.moveX = ev.touches[0].clientX
          // 滑动过程中实时计算滑动距离
          this.disX = this.startX - this.moveX;
          // console.log('disX==>',this.disX)
          // 如果是向右滑动或者只是点击，不改变滑动位置
          if (this.disX < 0 || this.disX == 0) {
             
            this.txtStyle = "transform:translateX(0px)";
          } else if (this.disX > 0) {
            //如果是向左滑动，则实时给这个根元素一个向左的偏移-left，当偏移量到达固定值delWidth时，固定元素的偏移量为 delWidth
            this.txtStyle = "transform:translateX(-" + this.disX  + "px)";
            if (this.disX >= this.delWidth / 100) {
             
              this.txtStyle = "transform:translateX(-" + this.delWidth + "px)";
              
              this.zIndex = "z-index:" + 10 + "rem";
            }
          }
        }
      },
      _touchEnd: function(ev) {
        if (event.changedTouches.length == 1) {
          this.startX = 0;
          this.zIndex = "z-index:" + -1 + "rem";
          // 手指移动结束后的水平位置
          let endX = event.changedTouches[0].clientX;
          // 触摸开始与结束,手指移动的距离
          this.disX = this.startX - endX;
          //如果距离小于删除按钮的1/2，不显示删除按钮
          /*if(this.disX>0){
            
          }*/
        }
      }
    }
  }
</script>


