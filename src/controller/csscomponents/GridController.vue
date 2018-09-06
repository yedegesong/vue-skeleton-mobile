<template>
  <div class="xfd-viewpager">
    <header class="xfd-header xfd-border-b">
      <div class="xfd-header-left" v-router="{router:this.$router}">
        <span>返回</span>
      </div>
      <h1>格式化Grid(布局)</h1>
      <div class="xfd-header-right text-center">
          
      </div>
    </header>
    <section class="xfd-container">
       <h1 class="template-title">等分2列</h1>
        <div class="xfd-row xfd-grids-2">
            <div class="xfd-col xfd-col-50 demo-grids xfd-grids-item box box-align box-pack">50%</div>
            <div class="xfd-col xfd-col-50 demo-grids xfd-grids-item box box-align box-pack">50%</div>
        </div>
        <h1 class="template-title">等分3列</h1>
        <div class="xfd-row xfd-grids-3">
            <div class="xfd-col xfd-col-33 demo-grids xfd-grids-item box box-align box-pack">33%</div>
            <div class="xfd-col xfd-col-33 demo-grids xfd-grids-item box box-align box-pack">33%</div>
            <div class="xfd-col xfd-col-33 demo-grids xfd-grids-item box box-align box-pack">33%</div>
            <div class="xfd-col xfd-col-33 demo-grids xfd-grids-item box box-align box-pack">33%</div>
            <div class="xfd-col xfd-col-33 demo-grids xfd-grids-item box box-align box-pack">33%</div>
            <div class="xfd-col xfd-col-33 demo-grids xfd-grids-item box box-align box-pack">33%</div>
        </div>
        <h1 class="template-title">等分4列</h1>
        <div class="xfd-row xfd-grids-4">
            <div class="xfd-col xfd-col-25 demo-grids xfd-grids-item box box-align box-pack">25%</div>
            <div class="xfd-col xfd-col-25 demo-grids xfd-grids-item box box-align box-pack">25%</div>
            <div class="xfd-col xfd-col-25 demo-grids xfd-grids-item box box-align box-pack">25%</div>
            <div class="xfd-col xfd-col-25 demo-grids xfd-grids-item box box-align box-pack">25%</div>
            <div class="xfd-col xfd-col-25 demo-grids xfd-grids-item box box-align box-pack">25%</div>
            <div class="xfd-col xfd-col-25 demo-grids xfd-grids-item box box-align box-pack">25%</div>
        </div>
        <h1 class="template-title">等分5列</h1>
        <div class="xfd-row xfd-grids-5">
            <div class="xfd-col xfd-col-20 demo-grids xfd-grids-item box box-align box-pack">20%</div>
            <div class="xfd-col xfd-col-20 demo-grids xfd-grids-item box box-align box-pack">20%</div>
            <div class="xfd-col xfd-col-20 demo-grids xfd-grids-item box box-align box-pack">20%</div>
            <div class="xfd-col xfd-col-20 demo-grids xfd-grids-item box box-align box-pack">20%</div>
            <div class="xfd-col xfd-col-20 demo-grids xfd-grids-item box box-align box-pack">20%</div>
            <div class="xfd-col xfd-col-20 demo-grids xfd-grids-item box box-align box-pack">20%</div>
        </div>
    </section>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'GridController'
  }
</script>

