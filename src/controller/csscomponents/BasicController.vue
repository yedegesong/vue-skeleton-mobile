<template>
  <div class="xfd-viewpager">
    <header class="xfd-header xfd-border-b">
      <div class="xfd-header-left" v-router="{router:this.$router}">
        <span>返回</span>
      </div>
      <h1>基本样式</h1>
      <div class="xfd-header-right text-center">
        设置
      </div>
    </header>
    <section class="xfd-container">
      <h1 class="template-title">字体颜色</h1>
      <div class="mod">
        <p class="text-primary">颜色一</p>
        <p class="text-danger">颜色二</p>
        <p class="text-warning">颜色三</p>
        <p class="text-success">颜色四</p>
        <p class="text-muted">颜色一</p>
      </div>
      <h1 class="template-title">字体尺寸</h1>
      <div class="mod">
        <p class="font-size-12">字体大小</p>
        <p class="font-size-13">字体大小</p>
        <p class="font-size-15">字体大小</p>
        <p class="font-size-17">字体大小</p>
      </div>
      <h1 class="template-title">文本位置</h1>
      <div class="mod">
        <p class="text-left">左</p>
        <p class="text-center">中</p>
        <p class="text-right">右</p>
      </div>
      <h1 class="template-title">徽标</h1>
      <div class="demo-box">
        <div class="xfd-badge">1</div>
        <div class="xfd-badge primary">2</div>
        <div class="xfd-badge success">3</div>
        <div class="xfd-badge danger">4</div>
        <div class="xfd-badge warning">5</div>
      </div>
      <div class="demo-box">
        <div class="xfd-badge wrap">临时车</div>
        <div class="xfd-badge primary wrap">临时车</div>
        <div class="xfd-badge success wrap">临时车</div>
        <div class="xfd-badge danger wrap">临时车</div>
        <div class="xfd-badge warning wrap">临时车</div>
      </div>
      <div class="demo-box">
        <div class="xfd-badge wrap badge-radius">临时车</div>
        <div class="xfd-badge primary wrap badge-radius">临时车</div>
        <div class="xfd-badge success wrap badge-radius">临时车</div>
        <div class="xfd-badge danger wrap badge-radius">临时车</div>
        <div class="xfd-badge warning wrap badge-radius">临时车</div>
      </div>
      <div class="demo-box">
        <div class="xfd-badge un-wrap">临时车</div>
        <div class="xfd-badge primary un-wrap">临时车</div>
        <div class="xfd-badge success un-wrap">临时车</div>
        <div class="xfd-badge danger un-wrap">临时车</div>
        <div class="xfd-badge warning un-wrap">临时车</div>
      </div>
      <div class="demo-box">
        <div class="xfd-badge primary un-wrap large">临时车</div>
      </div>
       <h1 class="template-title">文字截断</h1>
       <div class="xfd-nowrap">
            一行文字超出长度省略，内容文字超出长度省略，内容文字超出长度省略，内容文字超出长度省略，内容文字超出长度省略，内容文字超出长度省略，内容文字超出长度省略，内容文字超出长度省略，内容文字超出长度省略，内容文字超出长度省略，内容文字超出长度省略
        </div>
    </section>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'BasicController'
  }
</script>
