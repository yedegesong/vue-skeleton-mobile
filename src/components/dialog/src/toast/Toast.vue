<template>
    <transition>
        <div v-show='visible' class='xfd-loading-block'>
            <div class="xfd-tips-cnt">
                <i class="icon iconfont" :class="icon"></i>
                <p>{{message}}</p>
            </div>
        </div>
    </transition>
    
</template>

<script>
    export default {
        props: {
            message: String,
            icon:String,
            timeout: Number,
            callback: Function
        },
        data() {
            return {
                visible:''
            };
        }
    }
</script>


