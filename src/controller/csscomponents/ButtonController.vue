<template>
  <div class="xfd-viewpager">
    <header class="xfd-header xfd-border-b">
      <div class="xfd-header-left" v-router="{router:this.$router}">
        <span>返回</span>
      </div>
      <h1>按钮</h1>
      <div class="xfd-header-right text-center">
  
      </div>
    </header>
    <section class="xfd-container">
      <div class="mod">
        <div>
          <button class="xfd-btn xfd-btn-primary xfd-btn-sm">小按钮</button>
          <button class="xfd-btn xfd-btn-primary">默认按钮</button>
          <button class="xfd-btn xfd-btn-primary xfd-btn-lg">大按钮</button>
        </div>
      </div>
      <div class="mod">
        <div>
          <button class="xfd-btn xfd-btn-default">默认default</button>
          <button class="xfd-btn xfd-btn-primary">首选primary</button>
          <button class="xfd-btn xfd-btn-success">成功</button>
          <button class="xfd-btn xfd-btn-warning">warning</button>
          <button class="xfd-btn xfd-btn-danger">danger</button>
          <button class="xfd-btn xfd-btn-link">link</button>
          <button class="xfd-btn xfd-btn-link primary">link</button>
          <button class="xfd-btn xfd-btn-link success">link</button>
          <button class="xfd-btn xfd-btn-link warning">link</button>
          <button class="xfd-btn xfd-btn-link danger">link</button>
        </div>
      </div>
      <div class="mod">
        <div>
          <button class="fuck-you xfd-btn xfd-btn-default xfd-btn-block">默认default</button>
          <button class="xfd-btn xfd-btn-primary xfd-btn-block">首选primary</button>
          <button class="xfd-btn xfd-btn-primary xfd-btn-block" disabled="disabled">按钮禁用</button>
          <button class="xfd-btn xfd-btn-success xfd-btn-block">成功</button>
          <button class="xfd-btn xfd-btn-danger xfd-btn-block">danger</button>
          <button class="xfd-btn xfd-btn-warning xfd-btn-block">warning</button>
          <button class="xfd-btn xfd-btn-link xfd-btn-block">link</button>
        </div>
      </div>
      <div class="mod">
        <div>
          <button class="xfd-btn xfd-btn-primary xfd-btn-block xfd-btn-circle">circel</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'BasicController'
  }
</script>
