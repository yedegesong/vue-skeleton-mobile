<template>
    <div ref="navbox">
        <div class="xfd-scrollNav-list" ref="nav">
            <div :class="{'text-primary':index==activeIndex?true:false}" :ref="'navitem_' + index" v-for="(item, index) in navList" @click.stop="scrollContent(index)">{{item.name}}</div>
        </div>
    
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'xfd-scroll-nav',
        props:{
            navList:[Array],
            index: {
                validator(val) {
                    return /^(([1-9]\d*)|0)$/.test(val);
                },
                default: 0
            },
            callback: {
                type: Function
            }
        },
        data() {
            return {
                activeIndex:this.index,
                currentOffset: 0,
                currentPosition: 0,
                scrolling: false
            }
        },
        mounted() {
            this.$nextTick(this.init);
        },
        watch: {
            activeIndex(val) {
                this.scrollNav(val);
            }, 
            index(index) {
                this.activeIndex = index;
            } 
        },
        methods: {
            scrollNav(_uid, animate = true) {
                const navWidth = ~~this.$refs.nav.offsetWidth / 2;
                this.navList.every((item, index) => {
                    if (index === _uid) {
                        const navitem = this.$refs['navitem_' + index][0];
                        const scrollOffset = navitem.offsetLeft - navWidth + navitem.offsetWidth / 2;
                        this.scrollLeft(this.currentOffset, scrollOffset, animate, () => {
                            this.callback && this.callback(index,item);
                        });
                        return false;
                    }
                    return true;
                });
            },
            scrollContent(index) {
                this.activeIndex = index;
            },
            scrollLeft(from, to, animate, callback) {
                const difference = Math.abs(from - to);
                const step = animate ? Math.ceil(difference / 600 * 50) : difference;
                const self = this;
                function scroll(start, end, step) {
                    if (start === end) {
                        callback && callback();
                        return;
                    }
                    let d = (start + step > end) ? end : start + step;
                    if (start > end) {
                        d = (start - step < end) ? end : start - step;
                    }
                    self.$refs.nav.scrollLeft = d;
                    self.currentOffset = d;
                    window.requestAnimationFrame(() => scroll(d, end, step));
                }
                scroll(from, to, step);
            }
        },
    }
</script>