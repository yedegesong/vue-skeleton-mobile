<template>
  <div v-if="isShow">
      <div class="xfd-message-box">
        <div class="xfd-message">
          <div>
            <slot>我是多功能弹框</slot>
          </div>
          <div class="xfd-dialog-ft" v-if="typeof opts !='boolean'">
            <a 
              href="javascript:;"
              class="xfd-btn-dialog"
              :class="{default:!item.color}"
              v-for="item in opts"
              @click.stop="handleToggle(item)">
                {{item.txt}}
              </a>
          </div>
        </div>
      </div>
    <div class="xfd-mask" v-if="isMask"></div>
  </div>
</template>

<script>
  export default {
    name: 'xfd-message-box',
    props: {
      isShow: {
        type: [String, Boolean],
        default: true
      },
      isMask: {
        type: [String, Boolean],
        default: true
      },
      opts: {
        type: [Array, Boolean],
        default: false
      }
    },
    methods: {
      handleToggle(item) {
        item.callback();
      }
    },
    mounted() {
      
    }
  }
</script>