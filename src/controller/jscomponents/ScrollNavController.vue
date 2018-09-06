<template>
    <div class="xfd-viewpager">
        <header class="xfd-header xfd-border-b">
            <div class="xfd-header-left" v-router="{router:this.$router}">
                <span>返回</span>
            </div>
            <h1>滚动菜单(ScrollNav))</h1>
            <div class="xfd-header-right text-center">
    
            </div>
        </header>
        <section class="xfd-container">
            <div class="xfd-scrollNav xfd-row-flex" >
                <xfd-scroll-nav 
                    class="xfd-col-1" 
                    :index="1"
                    :callback="callbackChange" 
                    :nav-list="navList" 
                    style="overflow-x:scroll;"
                    ></xfd-scroll-nav>
                <div class="xfd-scrollNav-icon">
                </div>
            </div>
        </section>
    </div>
</template>

<script type="text/babel">
    import scrollNav from '@components/scrollNav/scrollNav';
    export default {
        name: 'SearchController',
        data() {
             return {
                index: 0,
                navList: [{
                        id: 2,
                        name: '全部'
                    },
                    {
                        id: 1,
                        name: '面馆'
                    },
                    {
                        id: 3,
                        name: '快餐'
                    },
                    {
                        id: 4,
                        name: '披萨'
                    },
                    {
                        id: 5,
                        name: '汉堡'
                    },
                    {
                        id: 6,
                        name: '饺子'
                    },
                    {
                        id: 7,
                        name: '炸鸡'
                    },
                    {
                        id: 8,
                        name: '麻辣烫'
                    }
                ]
            }
        },
        methods: {
           /**@argument key 高亮的索引  @argument value 高亮的值 */
            callbackChange(key, value) {
                this.index = key;
                console.log(value)
            }
        },
        components: {
            'xfd-scroll-nav': scrollNav
        },
        mounted() {
    
        }
    }
</script>
