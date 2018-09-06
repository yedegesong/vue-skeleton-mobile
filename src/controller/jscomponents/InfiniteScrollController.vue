<template>
    <div class="xfd-viewpager">
        <header class="xfd-header xfd-border-b">
            <div class="xfd-header-left" v-router="{router:this.$router}">
                <span>返回</span>
            </div>
            <h1>infiniteScroll(滚动加载)</h1>
            <div class="xfd-header-right text-center">

            </div>
        </header>
        <section class="xfd-container" ref="scrollView">
            <xfd-infinite-scroll :isNextPage="isNextPage" ref="infiniteScroll" :callback="handleLoadList" @scroll-callback="getScroll">
                <div class="xfd-cells-box">
                    <div class="xfd-cells xfd-arrowlink xfd-line" v-for="(link,key) in links" :key="key">
                        {{link.title}}
                    </div>
                </div>
            </xfd-infinite-scroll>
        </section>
    </div>
</template>

<script type="text/babel">
    import infiniteScroll from '@components/pull/infiniteScroll';
    export default {
        name: 'InfiniteScrollController',
        data() {
           return {
                isNextPage: true,
                links: [
            {
                title: 'vuex(数据状态)',
                url: '/vuex'
            },
            {
                title: 'tree(树)',
                url: '/tree'
            },
            {
                title: 'picker(下拉选择)',
                url: '/picker'
            },
            {
                title: 'dialog(弹框)',
                url: '/dialog'
            },
            {
                title: 'messageBox(自定义弹出内容)',
                url: '/messageBox'
            },
            {
                title: 'counter（计步器）',
                url: '/counter'
            },
            {
                title: 'sendCode（计时按钮）',
                url: '/code'
            },
            {
                title: 'search（搜索框）',
                url: '/search'
            },
            {
                title: 'infiniteScroll（持续滚动加载)',
                url: '/infiniteScroll'
            },
            {
                title: 'carkeyboard（自定义车牌键盘)',
                url: '/carkeyboard'
            },
            {
                title: 'actionsheet(下拉弹出选择)',
                url: '/actionsheet'
            },
            {
                title: 'upload(图片上传)',
                url: '/upload'
            },
            {
                title: 'scrollNav(滚动菜单)',
                url: '/scrollNav'
            },
            {
                title: 'scrolltab(分类菜单)',
                url: '/scrolltab'
            },
            {
                title: 'tabs(元素模块切换)',
                url: '/tabs'
            },
            {
                title: 'cellSwipe(左拉删除)',
                url: '/pullleft'
            },
            {
                title: '下拉刷新',
                url: '/pulldown'
            },
            {
                title: '上拉刷新',
                url: '/pullup'
            },
            {
                title: '上拉,下拉刷新',
                url: '/pull'
            },

            {
                title: '左拉实时滑动',
                url: '/pulllefttwo'
            },
            {
                title: 'jQuery插件结合',
                url: '/jQuery'
            },
        ]
            }
        },
        methods: {
           handleLoadList() {
               let _list = this.links
                setTimeout(() => {
                   this.links = [...this.links, ..._list]
                    this.isNextPage = false;
                }, 250)
            },
            getScroll(scrollTop) {
                
            }
        },
        components: {
            'xfd-infinite-scroll': infiniteScroll
        },
        mounted() {
            this.$refs.infiniteScroll.init(this.$refs.scrollView);
        }
    }
</script>
