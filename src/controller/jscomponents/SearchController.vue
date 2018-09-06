<template>
    <div class="xfd-viewpager">
        <header class="xfd-header xfd-border-b">
            <div class="xfd-header-left" v-router="{router:this.$router}">
                <span>返回</span>
            </div>
            <h1>搜索(Search))</h1>
            <div class="xfd-header-right text-center">
    
            </div>
        </header>
        <section class="xfd-container">
            <xfd-search  placeholder="车场名称" @search="handleSearch" @cancel="handleCancelSearch"></xfd-search>
        </section>
    </div>
</template>

<script type="text/babel">
    import Search from '@components/search/search';
    export default {
        name: 'SearchController',
        data() {
            return {
              
            }
        },
        methods: {
           handleSearch(searchValue) {
                    console.log(searchValue)
                },
            handleCancelSearch(){
                console.log('点击关闭')
            },
        },
        components: {
            'xfd-search': Search
        },
        mounted() {
    
        }
    }
</script>
