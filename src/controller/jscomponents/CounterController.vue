<template>
    <div class="xfd-viewpager">
        <header class="xfd-header xfd-border-b">
            <div class="xfd-header-left" v-router="{router:this.$router}">
                <span>返回</span>
            </div>
            <h1>计步器(Counter))</h1>
            <div class="xfd-header-right text-center">
    
            </div>
        </header>
        <section class="xfd-container">
            <div>
                <xfd-counter cls="1" :readonly="true"></xfd-counter>
            </div>
            <div>
                <xfd-counter :delvalue="5"></xfd-counter>
            </div>
            <div v-for="item in items">
                <span>{{item.name}}</span>
                <xfd-counter :disabled="true" @change="changeCallback" :data="item"></xfd-counter>
            </div>
        </section>
    </div>
</template>

<script type="text/babel">
    import Counter from '@components/counter/counter';
    export default {
        name: 'CounterController',
        data() {
            return {
                priceManager: {
                    coupons: {
    
                    }
                },
                items: [{
                    name: '小明',
                    sex: '男',
                    userId: '111'
                }, {
                    name: '小红',
                    sex: '女',
                    userId: '222'
                }]
            }
        },
        methods: {
            changeCallback(num, item) {
                this.priceManager.coupons[item.userId] = {};
                this.priceManager.coupons[item.userId].num = num;
                console.log(this.priceManager);
            }
        },
        components: {
            'xfd-counter': Counter
        },
        mounted() {
    
        }
    }
</script>
