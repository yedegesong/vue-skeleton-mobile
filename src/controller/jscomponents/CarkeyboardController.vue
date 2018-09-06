<template>
    <div class="xfd-viewpager">
        <header class="xfd-header xfd-border-b">
            <div class="xfd-header-left" v-router="{router:this.$router}">
                <span>返回</span>
            </div>
            <h1>Carkeyboard(车牌键盘)</h1>
            <div class="xfd-header-right text-center">
    
            </div>
        </header>
        <section class="xfd-container" @click="hideKeyboard">
            <xfd-car-key-board carNo="闽A" :isShow="isShow" :isEnergy="checkedNames" @change="getCarNo"></xfd-car-key-board>
            <div>
                <label class="xfd-form-checkbox">
                    <input type="checkbox" value="Jack11" v-model="checkedNames">
                    <span>新能源车牌</span>
                  </label>
            </div>
            <div>{{checkedNames}}</div>
        </section>
    </div>
</template>

<script type="text/babel">
    import CarKeyBoard from '@components/carKeyBoard/CarKeyBoard';
    export default {
        name: 'CarkeyboardController',
        data() {
            return {
                 isShow: false,
                checkedNames: false
            }
        },
        methods: {
             getCarNo(car_no) {
                console.log(car_no);
            },
            hideKeyboard() {
                this.isShow = !this.isShow;
            }
        },
        components: {
           'xfd-car-key-board':CarKeyBoard
        },
        mounted() {
    
        }
    }
</script>
