<template>
     <div class="xfd-scrollTab xfd-row-flex">
               <ul class="xfd-scrollTab-nav">
                    <li 
                    class="xfd-line-border" 
                    v-for="(item, index) in data"
                    :class="{'active':index==activeIndex?true:false}"
                    @click.stop="scrollContent(index)"
                    >
                        {{item.name}}
                    </li>
               </ul>
               <div class="xfd-scrollTab-content xfd-col-1" ref="scrollView">
                    <slot></slot>
               </div>
            </div>
</template>

<script type="text/babel">
const scrollTop = function (el, from = 0, to, duration = 500, callback) {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback, 1000 / 60);
            }
        );
    }
    const difference = Math.abs(from - to);
    const step = Math.ceil(difference / duration * 50);

    function scroll(start, end, step) {
        if (start === end) {
            typeof callback === 'function' && callback();
            return;
        }

        let d = (start + step > end) ? end : start + step;
        if (start > end) {
            d = (start - step < end) ? end : start - step;
        }

        if (el === window) {
            window.scrollTo(d, d);
        } else {
            el.scrollTop = d;
        }
        window.requestAnimationFrame(() => scroll(d, end, step));
    }

    scroll(from, to, step);
};
    export default {
        name: 'xfd-scroll-tab',
        props:{
            data:[Array],
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
       
        watch: {
            activeIndex(val) {
                //this.scrollContent(val);
            },
            index(index) {
                
            }
        },
        methods: {
            init() {
                this.scrollView = this.$refs.scrollView;
                this.contentOffsetTop = this.scrollView.getBoundingClientRect().top;
                this.bindEvent();
            },
            
            bindEvent() {
                this.scrollView.addEventListener('scroll', this.scrollHandler);
                window.addEventListener('resize', this.scrollHandler);
            },
            scrollHandler() {
                if (this.scrolling) return;

                const panels = this.getPanels();
                const panelsLength = panels.length;
                const scrollBox = this.scrollView;

                if (scrollBox.scrollTop >= panels[0].$el.offsetHeight * panelsLength - scrollBox.offsetHeight) {
                    this.activeIndex = panelsLength - 1;
                    return;
                }

                panels.forEach((panel, index) => {
                    if (panel.$el.getBoundingClientRect().top <= scrollBox.offsetHeight / 2 + this.contentOffsetTop) {
                        this.currentPosition = panel.$el.offsetTop;
                        this.activeIndex = index;
                    }
                });
            },
            getPanels() {
                return this.$children.filter((item) => {
                    //console.log(item.$options.name)
                    return item.$options.name === 'xfd-scrolltab-panel'
                });
            },
            scrollContent(index, animate = true) {
                this.activeIndex = index;
                this.scrolling = true;

                const panel = this.getPanels()[index].$el;
                const speed = animate && (window.navigator && window.navigator.userAgent || '').indexOf('MicroMessenger') < 0 ? 500 : 0;
                scrollTop(this.scrollView, this.currentPosition, panel.offsetTop, speed, () => {
                    this.scrolling = false;
                });

                this.currentPosition = panel.offsetTop;
            },
        },
        mounted() {
            this.$nextTick(this.init);
        },
        destroyed() {
            this.scrollView.removeEventListener('scroll', this.scrollHandler);
            window.removeEventListener('resize', this.scrollHandler);
        }
    }
</script>