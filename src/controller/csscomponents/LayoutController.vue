<template>
  <div class="xfd-viewpager">
    <header class="xfd-header xfd-border-b">
      <div class="xfd-header-left" v-router="{router:this.$router}">
        <span>返回</span>
      </div>
      <h1>布局(Layout)</h1>
      <div class="xfd-header-right text-center">
  
      </div>
    </header>
    <section class="xfd-container">
      <div class="demo-layout">
        <h1>百分比浮动布局</h1>
        <div class="xfd-row ">
          <div class="xfd-col xfd-col-10 demo-layout-item">10%</div>
          <div class="xfd-col xfd-col-90 demo-layout-item">90%</div>
        </div>
        <div class="xfd-row">
          <div class="xfd-col xfd-col-25 demo-layout-item">25%</div>
          <div class="xfd-col xfd-col-75 demo-layout-item">75%</div>
        </div>
        <div class="xfd-row">
          <div class="xfd-col xfd-col-33 demo-layout-item">33%</div>
          <div class="xfd-col xfd-col-33 demo-layout-item">33%</div>
          <div class="xfd-col xfd-col-33 demo-layout-item">33%</div>
        </div>
        <div class="xfd-row">
          <div class="xfd-col xfd-col-33 demo-layout-item">33%</div>
          <div class="xfd-col xfd-col-67 demo-layout-item">67%</div>
        </div>
        <div class="xfd-row">
          <div class="xfd-col xfd-col-50 demo-layout-item">50%</div>
          <div class="xfd-col xfd-col-50 demo-layout-item">50%</div>
        </div>
      </div>
      <div>
        <h1>盒子flex布局</h1>
        <div class="demo-layout">
          <div class="xfd-row-flex">
            <div class="xfd-col xfd-col-1 demo-layout-item">平均分</div>
            <div class="xfd-col xfd-col-1 demo-layout-item">平均分</div>
          </div>
          <div class="xfd-row-flex">
            <div class="xfd-col xfd-col-2 demo-layout-item">2/3</div>
            <div class="xfd-col xfd-col-1 demo-layout-item">1/3</div>
          </div>
          <div class="xfd-row-flex">
            <div class="xfd-col xfd-col-3 demo-layout-item">3/4</div>
            <div class="xfd-col xfd-col-1 demo-layout-item">1/4</div>
          </div>
          <div class="xfd-row-flex">
            <div class="xfd-col xfd-col-3 demo-layout-item">3/5</div>
            <div class="xfd-col xfd-col-2 demo-layout-item">2/5</div>
          </div>
        </div>
      </div>
      <div>
        <h1>flex布局排列</h1>
        <div class="demo-flex box">
          <div>上</div>
          <div>上</div>
        </div>
        <div class="demo-flex box box-align-end">
          <div>下</div>
          <div>下</div>
        </div>
        <div class="demo-flex box box-pack-end">
          <div>右</div>
          <div>右</div>
        </div>
        <div class="demo-flex box box-pack">
          <div>中</div>
          <div>中</div>
        </div>
        <div class="demo-flex box box-align box-pack">
          <div>中</div>
          <div>中</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'LayoutController'
  }
</script>
