<template>
    <transition name='fade'>
        <div class="xfd-loading-block xfd-toast-visible">
            <div class="xfd-loading-cnt">
                <i class="icon iconfont xfd-loading-icion"></i>
                <p>{{message}}</p>
            </div>
        </div>
    </transition>
    
</template>

<script type="text/babel">
    export default {
        props: {
            message: String
        }
    }
</script>


<style>
.fade-enter-active, .fade-leave-active {
  transition: transform .5s
}
.fade-enter, .fade-leave-active {
  transform:translate(-50%,-50%) scale(0);
}
</style>