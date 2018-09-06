<template>
    <div class="xfd-scrollTab-item">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'xfd-scrolltab-panel',
        props: {
            label: [String,Object]
        },
        mounted() {
            this.$parent.addItem({label: this.label, _uid: this._uid});
        }
    }
</script>