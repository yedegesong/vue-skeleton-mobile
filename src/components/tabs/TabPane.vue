<template>
  <div class="xfd-tabpane" :class="classes">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'xfd-tab-pane',
    props: {
      label: [String,Object],
      active: Boolean
    },
    computed: {
      classes() {
        return this.$parent.activeIndex == this._uid ? 'TabConOn' : '';
      }
    }
  }
</script>