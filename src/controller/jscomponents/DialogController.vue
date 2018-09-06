<template>
  <div class="xfd-viewpager">
    <header class="xfd-header xfd-border-b">
      <div class="xfd-header-left" v-router="{router:this.$router}">
        <span>返回</span>
      </div>
      <h1>弹框(Dialog)</h1>
      <div class="xfd-header-right text-center">
  
      </div>
    </header>
    <section class="xfd-container">
      <div class="mod">
        <div>
          <button class="fuck-you xfd-btn xfd-btn-default xfd-btn-block" @click="dialog(1)">默认default</button> 
        </div>
        <div>
          <button class="fuck-you xfd-btn xfd-btn-default xfd-btn-block" @click="dialog(2)">Alert</button> 
        </div>
        <div>
          <button class="fuck-you xfd-btn xfd-btn-default xfd-btn-block" @click="dialog(3)">Alert(带事件)</button> 
        </div>
        <div>
          <button class="fuck-you xfd-btn xfd-btn-default xfd-btn-block" @click="dialog(4)">Toast</button> 
        </div>
        <div>
          <button class="fuck-you xfd-btn xfd-btn-default xfd-btn-block" @click="dialog(5)">Toast(带事件)</button> 
        </div>
        <div>
          <button class="fuck-you xfd-btn xfd-btn-default xfd-btn-block" @click="dialog(6)">开启Loading</button> 
        </div>
        <div>
          <button class="fuck-you xfd-btn xfd-btn-default xfd-btn-block" @click="dialog(7)">关闭Loading</button> 
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/babel">
  import xfdDialog from '@components/dialog/index';
  
  export default {
    name: 'DialogController',
     data() {
            return {
    
            }
        },
        methods: {
            dialog(type) {
                if (type == 1) {
                    xfdDialog.confirm({
                        title: '我是标题',
                        mes: '<div class="aaa"><span>关闭</span></div>',
                        opts: [{
                                txt: '取消',
                                color: false,
                                callback: () => {
                                    console.log('您点击了取消');
                                    xfdDialog.alert('我是内容');
                                }
                            },
                            {
                                txt: '确定',
                                color: true,
                                callback: () => {
                                    console.log('您点击了确定')
                                }
                            }
                        ]
                    });
                }
    
                if (type == 2) {
                    xfdDialog.alert('我是内容');
                }
                if (type == 3) {
                    xfdDialog.confirm({
                        title: '我是标题',
                        mes: '带事件回调',
                        opts: [{
                            txt: '确定',
                            color: true,
                            callback: () => {
                                console.log('您点击了确定')
                            }
                        }]
                    });
                }
                if (type == 4) {
                    xfdDialog.toast('未在该场查询到车辆');
                }
                if (type == 5) {
                    xfdDialog.toast({
                        message: '带事件回调,3秒回弹',
                        timeout: 3000,
                        icon: 'success', //success,info,danger
                        callback: () => {
                            xfdDialog.alert('给你一次重来的机会！');
                        }
                    });
                }
                if (type == 6) {
                    //this.$xfdDialog.loading.open('自定义文本');
                    xfdDialog.loading.open();
                }
                if (type == 7) {
                    xfdDialog.loading.close();
                }
            }
        },
        mounted() {
    
        }
  }
</script>
