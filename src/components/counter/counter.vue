<template>
  <div class="xfd-counter xfd-row-flex" :class="{'xfd-counter-two':cls=='2'}">
    <a href="javascript:;" class="xfd-count-minus" @click="minusClick" v-show="isShow">
        <i 
        class="icon iconfont icon-jian-xianxingyuankuang" 
        :class="iconJian">
        </i>
    </a>
    <input type="number" v-show="isShow"  
      class="xfd-col xfd-col-1 input-reset count-num"  
      @blur="outChange" :readonly="readonly" v-model="delCounts" />
    <a href="javascript:;"
      class="xfd-count-add" 
      @click="addClick">
       <i class="icon iconfont icon-jia-yuankuang"  :class="iconAdd" ></i>
    </a>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'xfd-counter',
    props: {
      disabled: {
        type: Boolean,
        default: true
      },
      readonly: {
        type: Boolean,
        default: false
      },
      data: [String,Object,Array,Number],
      cls:{
        type: String,
        default: '2'
      },
      type: {
        type: String,
        default: '1'
      },
      delvalue: {
        type: Number,
        default: 1
      },
      step: {
        type: Number,
        default: 1
      },
      minCount: {
        type: Number,
        default: 1
      },
      maxCount: {
        type: Number,
        default: 999
      }
    },
    computed:{
      iconJian(){
        return this.cls=='2'?'icon-jian':'icon-jian-xianxingyuankuang';
      },
      iconAdd(){
        return this.cls=='2'?'icon-tianjia':'icon-jia-yuankuang';
      }
    },
    data() {
      return {
        isShow: this.type === '1' ? true : false,
        types: this.type,
        delCounts:this.delvalue
      }
    },
    watch: {
      delCounts(val, oldVal) {
        if (this.types === '2') {
          val > this.minCount ? this.isShow = true : this.isShow = false;
        }
        if(!/^\d+$/.test(val)){
           
        }else{
          this.$emit('change', parseInt(this.delCounts), this.data ? this.data : 0);
        }
        
      }
    },
    methods: {
      //取最接近的数
      changeVal(value) {
        let i = this.step;
        let index = value;
        if (index < i) {
          return i;
        }
        let a = Math.round(index / i);
        if (index % i == 0) {
          return a * i;
        }
        return (a + 1) * i;
      },
      outChange() {
        if(!/^\d+$/.test(this.delCounts)){
          this.delCounts = 1;
        }else{
          this.delCounts = parseInt(this.delCounts)
        }
     
      },
      addClick() {
        if (this.delCounts >= this.maxCount) {
           
            return false;
          }
        this.delCounts = this.delCounts + this.step;
      },
      minusClick() {
        if (this.delCounts <= this.minCount) {
          return;
        }
        this.delCounts = this.delCounts - this.step;
      }
    },
    mounted() {
      //console.log(this.data)
    }
  }
</script>