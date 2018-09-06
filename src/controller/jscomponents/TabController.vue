<template>
    <div class="xfd-viewpager">
        <header class="xfd-header xfd-border-b">
            <div class="xfd-header-left" v-router="{router:this.$router}">
                <span>返回</span>
            </div>
            <h1>切换(Tab))</h1>
            <div class="xfd-header-right text-center">
    
            </div>
        </header>
        <section class="xfd-container">
            <xfd-tabs class="demo-small-pitch" :active ="1" :change="changeTab">
                <xfd-tab-pane :label="labelOne" >土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。如果只能滋生瞑想和幻想的话，即使再大的才能也只是砂地或盐池，那上面连小草也长不出来的。</xfd-tab-pane>
                <xfd-tab-pane :label="labelTwo" >我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友。</xfd-tab-pane>
            </xfd-tabs>
        </section>
    </div>
</template>

<script type="text/babel">
     import Tabs from '@components/tabs/Tabs';
    import TabPane from '@components/tabs/TabPane';
    export default {
        name: 'SearchController',
        data() {
            return {
              labelOne:{
                   id:1,
                   label:'选项一'
               },
               labelTwo:{
                   id:2,
                   label:'选项二'
               }
            }
        },
        methods: {
           changeTab(checkedItem){
                 console.log(checkedItem)
             }
        },
        components: {
            'xfd-tabs': Tabs,
            'xfd-tab-pane':TabPane
        },
        mounted() {
    
        }
    }
</script>
