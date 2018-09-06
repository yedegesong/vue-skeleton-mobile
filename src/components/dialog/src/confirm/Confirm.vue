<template>
  <div>
    <div class="xfd-dialog-confirm">
      <div class="xfd-dialog">
        <div class="xfd-dialog-hd" v-html="title"></div>
        <div ref="tpl" class="xfd-dialog-bd" v-html="mes">
        </div>
        <div class="xfd-dialog-ft">
          <a href="javascript:;" class="xfd-btn-dialog" 
          :class="{default:!item.color}" 
          v-for="item in opts"
          @click.stop="closeConfirm(item.callback)"
          >{{item.txt}}</a>
        </div>
      </div>
    </div>
    <div class="xfd-mask"></div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'xfd-dialog',
    props: {
      title: [String,Boolean],
      mes: String,
      opts: {
        type: [Array, Function],
        default: () => {}
      }
    },
    mounted(){
      
    }
  }
</script>