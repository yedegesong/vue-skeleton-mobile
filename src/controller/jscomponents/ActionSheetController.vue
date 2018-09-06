<template>
    <div class="xfd-viewpager">
        <header class="xfd-header xfd-border-b">
            <div class="xfd-header-left" v-router="{router:this.$router}">
                <span>返回</span>
            </div>
            <h1>下拉选择(ActionSheet))</h1>
            <div class="xfd-header-right text-center">
    
            </div>
        </header>
        <section class="xfd-container">
        <div class="xfd-btn-content">
                <button class="xfd-btn xfd-btn-primary xfd-btn-block" @click="message">下拉弹出内容</button>
            </div>
            <xfd-action-sheet :toggles="toggles" @close="message">
                <div slot="header">同时会将我从对方的列表中删除</div>
                <div slot="content">
                    <div class="xfd-cells-box font-size-15">
                        <div class="xfd-cells text-center xfd-line-border box-pack">
                            分享
                        </div>
                        <div class="xfd-cells xfd-line-border box-pack">
                            删除
                        </div>
                    </div>
                </div>
                <div slot="floter">
                    <div class="xfd-cells-box font-size-15" @click="message">
                        <div class="xfd-cells xfd-line-border box-pack text-danger">
                            取消
                        </div>
                    </div>
                </div>
            </xfd-action-sheet>
        </section>
    </div>
</template>

<script type="text/babel">
    import ActionSheet from '@components/actionSheet/ActionSheet';
    export default {
        name: 'ActionSheetController',
        data() {
            return {
                toggles: false
            }
        },
        methods: {
            message(event) {
                this.toggles = this.toggles ? false : true
            }
        },
        components: {
            'xfd-action-sheet': ActionSheet
        },
        mounted() {
    
        }
    }
</script>
