<template>
  <div class="xfd-form-input">
    <input v-if="type == 'text'" type="text" v-model="currentValue" @blur="blurHandler" :name="name" @focus="showClear = true" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabaled="disabaled" ref="input"
       />
    <input v-if="type == 'password'" type="password" v-model="currentValue" @blur="blurHandler" :name="name" @focus="showClear = true" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabaled="disabaled" ref="input"
      />
    <a href="javascript:;" class="close-button icon iconfont icon-qk" @click="clearInput" v-show="showClear && !isempty"></a>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'xfd-input',
    props: {
      message: String,
      name: String,
      placeholder: String,
      value: [String, Number],
      readonly: Boolean,
      disabaled: Boolean,
      type: {
        type: String,
        default: 'text'
      },
      placeholder: String,
    },
    watch: {
      currentValue(value) {
        this.isempty = !value;
        this.emitInput();
      }
    },
    data() {
      return {
        currentValue: '',
        isempty: true,
        showClear: false
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.currentValue = this.value;
      },
      blurHandler() {
        setTimeout(() => {
          this.showClear = false;
        }, 200);
      },
      clearInput() {
        this.currentValue = '';
        this.emitInput();
      },
      emitInput() {
        this.$emit('input', this.currentValue);
      },
    },
    mounted() {
      console.log(this.type)
      //console.log(this.types = this.$refs.inputs.attributes['type'].value)
    }
  }
</script>

<style>
  .close-button {
    color: #000;
    height: 18px;
  }
</style>