<template>
  <div>
    <div class="ui-carkeyboard-main">
      <div class="ui-car-key-board">
        <div @click.stop='revisePlate(0)' :class="{cursor:indexs ===0}">{{setPlateNum[0]}}</div>
        <div @click.stop='revisePlate(1)' :class="{cursor:indexs ===1}">{{setPlateNum[1]}}</div>
        <div v-for="item in inputkeys" @click.stop='revisePlate(item)' :key="item" :class="{cursor:indexs ===item }">{{setPlateNum[item]}}</div>
      </div>
    </div>
    <div class="keyboard" v-show='!showwhere&&isShowKeyBoard' @touchend='dontHide($event)'>
      <ul class="iphone-keyboard">
        <li>
          <div class="v-keychar v-mg" v-for="(fontkey,index) in fontkeys" @touchend="addPlate(fontkey,$event)" :key="fontkey">
            {{fontkey}}
          </div>
        </li>
      </ul>
    </div>
    <div class="keyboard" v-show='showwhere&&isShowKeyBoard' @touchend='dontHide($event)'>
      <ul class="iphone-keyboard">
        <li class="v-keyboard v-mg" v-bind:class="{ active: numkey==='I' || numkey==='O'}" v-for="(numkey,index) in numkeys" :key="index" @touchend='addPlate(numkey, $event)'>
          {{numkey}}
        </li>
        <li class="v-keyboard v-del" @touchend='removePlate($event)'>Delete</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/babel">
  //返回等于空值的索引
  let clearTrim = (arr) => {
    let index = null;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == '') {
        return i;
      }
    }
  }
  
  //返回等于空值的索引
  let clearTrimLength = (arr) => {
    let nullArrLength = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != '') {
        nullArrLength.push({
          value: arr[i],
          key: i
        })
      }
    }
    return nullArrLength;
  }
  
  export default {
    name: 'xfd-car-key-board',
    props: {
      changeCallback: Function,
      carNo: [String, Array],
      isEnergy: {
        type: Boolean,
        default: false
      },
      isShow: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      inputkeys() {
        return this.isEnergy ? [2, 3, 4, 5, 6, 7] : [2, 3, 4, 5, 6]
      }
    },
    data() {
      return {
        index: -1,
        indexs: -1,
        isRevise: false, //是否可以点击修改
        isShowKeyBoard: false,
        setPlateNum: ['', '', '', '', '', '', ''],
        showwhere: false, //true 显示输入车牌keyword   false显示输入车牌区域keyword
        numkeys: [
          '1', '2', '3', '4', '5', '6', '7', '8', '9','0', 
          'Q', 'W', 'E', 'R', 'T', 'Y', 'U','P','澳', '港','A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L','学', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 
        ],
        fontkeys: ['新', '青', '甘', '蒙', '宁', '京', '津', '黑', '吉', '辽', '藏', '川', '渝', '陕', '晋', '冀', '鲁', '豫', '皖', '苏', '云', '贵', '湘', '琼', '鄂', '赣', '浙', '沪', '桂', '粤', '闽','临']
      }
    },
    watch: {
      indexs(val, oldval) {
        val == 0 ? this.showwhere = false : this.showwhere = true;
      },
      index(val, oldVal) {
        let isHide = this.isEnergy ? 8 : 7
        //处理跳选
        if (this.isRevise) {
          if (!this.indexs || this.indexs == isHide) {
              this.indexs ===0 ? this.isShowKeyBoard = true : this.isShowKeyBoard = false;
          }
        } else {
          //处理非跳选
          if (!this.indexs || this.indexs == isHide) {
              this.indexs ===0 ? this.isShowKeyBoard = true : this.isShowKeyBoard = false;
          }
        }
      },
      //判断是否是新能源
      isEnergy(val, oldval) {
        let arr = clearTrimLength(this.setPlateNum);
        if (val) {
          //解决7位数时点亮新能源车牌
          if (arr.length == 7) {
            this.indexs = 7;
          }
          this.$set(this.setPlateNum, 7, '');
          this.isShowKeyBoard = true;
        } else {
          this.setPlateNum.pop();
        }
      },
      //外部点击空白区域.关闭键盘
      isShow(val, oldval) {
        this.isShowKeyBoard = false;
      },
      setPlateNum(val, oldval) {
        this.$emit('changeCallback', val.join(''));
      },
      carNo(val, oldval){
          // if(val[0] == oldval[0] && val[1] == oldval[1]){
          //   return;
          // }
          let defaultArr = val.split('');
          this.indexs = defaultArr.length;
          this.index = defaultArr.length - 1;
          defaultArr.forEach((v, k) => {
          this.setPlateNum[k] = v;
          });
          // this.$set(this.setPlateNum, 0, defaultArr[0]);
          // this.$set(this.setPlateNum, 1, defaultArr[1]);
      }
    },
    methods: {
      //添加车牌
      addPlate(item,event) {
        if (event) event.preventDefault()
        if(item==='I'||item==='O'){
          return;
        }
        let arr = clearTrimLength(this.setPlateNum);
        let maxNumber = this.isEnergy ? 8 : 7;
        let maxReviseNumber = this.isEnergy ? 7 : 6;
        //跳选插入数据逻辑
        if (this.isRevise) {
          if (this.index > maxReviseNumber) {
            this.isShowKeyBoard = false;
            return false;
          }
          this.$set(this.setPlateNum, this.index, item);
          this.indexs += 1;
          this.index = this.indexs;
        } else {
          //自动选择
          if ((arr.length + 1) > maxNumber) {
            return;
          }
          this.index = clearTrim(this.setPlateNum);
          this.$set(this.setPlateNum, this.index, item);
          this.indexs = clearTrim(this.setPlateNum);
        }
        //非车牌第一位
        if (this.index === 0) {
          this.showwhere = true;
        }
      },
      //删除车牌
      removePlate(event) {
        if (event) event.preventDefault()
        if (this.index < 0) {
          this.index = 0;
          return;
        }
        //跳选删除
        if (this.isRevise) {
          this.index -= 1;
          this.$set(this.setPlateNum, this.index, '');
          this.indexs = this.index;
          return;
        }
        //顺序删除
        this.$set(this.setPlateNum, this.index, '');
        this.indexs = this.index
        this.index -= 1;
      },
      //跳选删除车牌
      revisePlate(i) {
        this.isRevise = true;
        this.isShowKeyBoard = true;
        this.index = i;
        this.indexs = i;
        this.$set(this.setPlateNum, this.index, '');
        //非车牌第一位
        if (this.index === 0) {
          this.showwhere = false;
        } else {
          this.showwhere = true;
        }
      },
      dontHide(event){
          if (event) event.preventDefault()
      }
    },
    created() {
      if (this.carNo) {
        let defaultArr = this.carNo.split('');
        this.indexs = defaultArr.length;
        this.index = defaultArr.length - 1;
        defaultArr.forEach((v, k) => {
          this.setPlateNum[k] = v;
        });
        this.$emit('changeCallback', this.setPlateNum.join(''));
      }
    }
  }
</script>

<style lang="less">
  @import './carKeyCoard.less';
</style>