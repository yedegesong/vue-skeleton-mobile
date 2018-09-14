<template>
    <div class="xfd-viewpager">
        <header class="xfd-header xfd-border-b">
            <div class="xfd-header-left" v-router="{router:this.$router}">
                <span>返回</span>
            </div>
            <h1>记录滚动内容infiniteScroll(滚动加载)</h1>
            <div class="xfd-header-right text-center">
    
            </div>
        </header>
        <section class="xfd-container" ref="scrollView">
            <xfd-infinite-scroll :isNextPage="isNextPage" ref="infiniteScroll" :callback="handleLoadList" @scroll-callback="getScroll">
                <div class="xfd-cells-box">
                    <div class="xfd-cells xfd-arrowlink xfd-line" v-for="(link,key) in links" :key="key" @click="goPath">
                        {{link.title}}
                    </div>
                </div>
            </xfd-infinite-scroll>
        </section>
    </div>
</template>

<script type="text/babel">
    import {
        mapGetters,
        mapState,
        mapActions
    } from 'vuex';
    import infiniteScroll from '@components/pull/infiniteScroll';
    export default {
        name: 'InfiniteScrollController',
        data() {
            return {
                isNextPage: true,
                page: 1
            }
        },
        computed: {
            ...mapState({
                // 箭头函数可使代码更简练
                links: (state) => {
                    return state.ListMutation.links
                }
            })
        },
        methods: {
            goPath() {
                this.$router.push('/')
            },
            handleLoadList() {
                this.page++;
                this.queryOrderList();
            },
            queryOrderList(reset = false) {
                let items;
                let _list = this.links
                setTimeout(() => {
                    if (reset) {
                        items = _list;
                    } else {
                        items = [...this.links, ..._list];
                    }
                    this.isNextPage = this.page > 2 ? false : true;
                    this.$store.dispatch('ListMutation/queryList', items)
                    this.$store.dispatch(`setScrollPage`, this.page)
                }, 1000 )
    
    
            },
            getScroll(scrollTop) {
                this.$store.dispatch(`setScrollBehaviorScroll`, scrollTop)
            }
        },
        components: {
            'xfd-infinite-scroll': infiniteScroll
        },
        mounted() {
            let scrollBehaviorPath = this.$store.state.scrollBehavior.path;
            if (scrollBehaviorPath == this.$route.fullPath) {
                this.$refs.scrollView.scrollTop = this.$store.state.scrollBehavior.scrollTop;
                this.page = this.$store.state.scrollBehavior.page;
            } else {
                this.queryOrderList(true);
            }
            this.$store.dispatch(`setScrollBehavior`, this.$route.fullPath)
            this.$refs.infiniteScroll.init(this.$refs.scrollView);
        }
    }
</script>
