<template>
  <div>
    <div :class="classes">
      <div class="action-header" v-if="slotsHeader">
        <slot name="header"></slot>
      </div>
      <div class="action-content">
        <slot name="content">我是下拉弹框</slot>
        
      </div>
      <div class="action-floter">
        <slot name="floter" v-if="slotsFloter">我是尾部123</slot>
      </div>
    </div>
    <div class="xfd-mask" v-if="toggles" @click.stop="toggle"></div>
  </div>
</template>

<script type="text/babel">
  import Vue from 'vue';
  export default {
    name: 'xfd-action-sheet',
    props: {
      toggles: {
        type: [Boolean],
        default: false
      }
    },
    data() {
      return {
        slotsHeader: this.$slots.header,
        slotsFloter: this.$slots.floter
      }
    },
    computed: {
      classes() {
        return {
          'xfd-actiosheet': true,
          [`actionsheet-toggle`]: this.toggles
        }
      }
    },
    methods: {
      toggle(event) {
        this.$emit('close', event)
      }
    }
  }
</script>