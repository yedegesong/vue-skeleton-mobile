<template>
    <div class="xfd-tabs">
        <div class="xfd-tabs-title box-align">
            <div  v-for="item in navList"
                :class="item._uid == activeIndex ? 'tabOn' : ''"
                @click="changeHandler(item._uid, item)"
                >{{item.label}}</div>
        </div>
        <div class="xfd-tabs-content">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'xfd-tabs',
        data() {
            return {
                navList: [],
                activeIndex: 0
            }
        },
        props:{
            titleLabel:{
                type:String,
                default:'label'
            },
            change:Function,
            active: {
                type:Number,
                default:0
            }
        },
        methods:{
            init(){
                 const tabPanels = this.$children.filter(item => item.$options.name === 'xfd-tab-pane');
                let num = 0;
                tabPanels.forEach((panel,panelIndex) => {
                    this.navList.push({
                        label: panel.label[this.titleLabel],
                        _uid: panel._uid
                    });
                    if (panelIndex == this.active) {
                        this.activeIndex = panel._uid;
                    } else {
                        ++num;
                        if (num >= tabPanels.length) this.activeIndex = tabPanels[0]._uid;
                    }
                });
            },
            changeHandler(uid, label) {
                typeof this.change == 'function' && this.change(label);
                this.activeIndex = uid;
            }
        },
        mounted() {
            this.init();
            
        }
    }
</script>