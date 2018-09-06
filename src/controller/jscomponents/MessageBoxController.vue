<template>
    <div class="xfd-viewpager">
        <header class="xfd-header xfd-border-b">
            <div class="xfd-header-left" v-router="{router:this.$router}">
                <span>返回</span>
            </div>
            <h1>弹框容器(messageBox)</h1>
            <div class="xfd-header-right text-center">
    
            </div>
        </header>
        <section class="xfd-container">
            <div class="xfd-btn-content">
                <button class="xfd-btn xfd-btn-primary xfd-btn-block" @click="message(0)">弹出自定义弹框内容</button>
            </div>
             <div class="xfd-btn-content">
                <button class="xfd-btn xfd-btn-primary xfd-btn-block" @click="message(1)">无遮罩弹窗</button>
            </div>
             <div class="xfd-btn-content">
                <button class="xfd-btn xfd-btn-primary xfd-btn-block" @click="message(2)">有尾部按钮</button>
            </div>
        </section>
         <xfd-message-box :opts="opts" :isMask="isMask" :isShow="isShow" @close="message">
            <div @click.stop="message">关闭</div>
            <div class="xfd-form xfd-cells-box">
                    <div class="xfd-row-flex xfd-line-border xfd-cells">
                        <div class="xfd-col-1 xfd-form-input">
                            <input type="text" placeholder="请输入账号">
                        </div>
                        <i class="icon iconfont icon-guanbi2fill"></i>
                    </div>
                    <div class="xfd-row-flex xfd-line-border xfd-cells">
                        <div class="xfd-col-1 xfd-form-input">
                            <input type="text" placeholder="请输入密码">
                        </div>
                        <i class="icon iconfont icon-guanbi2fill"></i>
                    </div>
                </div>
        </xfd-message-box>
    </div>
</template>

<script type="text/babel">
    import MessageBox from '@components/messageBox/MessageBox';
    export default {
        name: 'MessageBoxController',
        data() {
            return {
                isShow: false,
                isMask: true,
                opts: false
            }
        },
        methods: {
            message(type) {
                this.isShow = this.isShow ? false : true;
    
                if (type === 0) {
                    this.isMask = true;
                    this.opts = false;
                }
                if (type === 1) {
                    this.isMask = false;
                    this.opts = false;
                }
    
                if (type === 2) {
                    this.isMask = true;
                    this.opts = [{
                        txt: '确定',
                        color: true,
                        callback: () => {
                            this.isShow = false;
                        }
                    }];
                }
            }
        },
        components: {
            'xfd-message-box':MessageBox
        },
        mounted() {
    
        }
    }
</script>
