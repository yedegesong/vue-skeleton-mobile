<template>
    <div class="xfd-viewpager">
        <header class="xfd-header xfd-border-b">
            <div class="xfd-header-left" v-router="{router:this.$router}">
                <span>返回</span>
            </div>
            <h1>倒计时按钮(sendCode)</h1>
            <div class="xfd-header-right text-center">
    
            </div>
        </header>
        <section class="xfd-container">
            <xfd-code 
                v-model="sendStart"
                @click.native="sendCode" 
                second="30" 
                init-str="获取短信验证码" 
                run-str="{%s}秒重新获取"
                  reset-str="获取短信验证码">
              </xfd-code>
        </section>
    </div>
</template>

<script type="text/babel">
    import SendCode from '@components/code/sendCode';
    export default {
        name: 'counterController',
        data() {
            return {
                sendStart: false,
            }
        },
        methods: {
             sendCode() {
                this.sendStart = true;
            },
        },
        components: {
            'xfd-code': SendCode
        },
        mounted() {
    
        }
    }
</script>
