<template>
      <input type="checkbox" class="xfd-form-switch" v-model="checked"/>
</template>

<script type="text/babel">
  export default {
    name: 'xfd-switch',
    data() {
      return {
        checked: false
      }
    },
    props: {
      value: Boolean
    },
    watch: {
      checked(val) {
        this.$emit('input', val);
      }
    },
    mounted() {
      this.checked = this.value;
    }
  }
</script>

