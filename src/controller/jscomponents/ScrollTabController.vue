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
            <xfd-scroll-tab :data="list">
                <xfd-scrolltab-panel>
                    <div class="xfd-panel">
                        <div class="xfd-panel-hd xfd-line-border">
                            生鲜水果
                        </div>
                        <div class="xfd-panel-cn">
                            <div style="margin-top:.48rem;height: 480px; background-color: gray;">
                                空调
                            </div>
                        </div>
                    </div>
                </xfd-scrolltab-panel>
                <xfd-scrolltab-panel>
                    <div class="xfd-panel">
                        <div class="xfd-panel-hd xfd-line-border">
                            进口食品
                        </div>
                        <div class="xfd-panel-cn">
                            <div style="margin-top:.48rem;height: 480px; background-color: gray;">
                                空调
                            </div>
                        </div>
                    </div>
                </xfd-scrolltab-panel>
                <xfd-scrolltab-panel>
                    <div class="xfd-panel">
                        <div class="xfd-panel-hd xfd-line-border">
                            休闲食品
                        </div>
                        <div class="xfd-panel-cn">
                            <div style="margin-top:.48rem;height: 480px; background-color: gray;">
                                空调
                            </div>
                        </div>
                    </div>
                </xfd-scrolltab-panel>
            </xfd-scroll-tab>
        </section>
    </div>
</template>

<script type="text/babel">
    import scrollTab from '@components/scrollTab/scrollTab';
    import scrollnavPanel from '@components/scrollTab/scrollnav-panel';
    export default {
        name: 'ScrollTabController',
        data() {
            return {
                index: 0,
                list: [{
                        id: 1,
                        name: '生鲜水果'
                    },
                    {
                        id: 2,
                        name: '进口食品'
                    },
                    {
                        id: 3,
                        name: '休闲食品'
                    }
    
                ]
            }
        },
        methods: {
           
        },
       components: {
            'xfd-scroll-tab': scrollTab,
            'xfd-scrolltab-panel': scrollnavPanel
        },
        mounted() {
    
        }
    }
</script>
