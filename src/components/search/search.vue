<template>
  <div :class="{'xfd-search-bar':true,'xfd-search-bar-focuse':show}" @click.stop="handleShow">
                
                <div class="xfd-search-box">
                        <i class="xfd-icon-search icon iconfont icon-weixinsousuoicon"></i>
                        <div class="xfd-searchbar-text">
                        <i class="xfd-icon-search icon iconfont icon-weixinsousuoicon"></i>
                            搜索
                            </div>
                    <div class="xfd-searchbar-input">
                        <input  
                       ref="input"
                        v-model="searchValue" 
                        type="text" 
                        :placeholder="placeholder"
                        :autofocus="autofocus"
                        >
                    </div>
                    <i class="xfd-icon-close icon iconfont icon-guanbi2fill" @click.stop="cleanValue"></i>
                </div>
                <button v-if="isSearch" class="xfd-btn xfd-searchbar-cancel" @click.stop="handleSearch">搜索</button>
                <button v-if="!isSearch" class="xfd-btn xfd-searchbar-cancel" @click.stop="handleCancel">取消</button>
            </div>
</template>

<script type="text/babel">
     export default {
        name: 'xfd-search',
        props:{
            placeholder: {
                type: String,
                default: '搜索'
            },
            focus:{
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                show:false,
                autofocus:false,
                isSearch:false,
                searchValue:''
            }
        },
        computed:{
            /* isSearch(){
                return this.searchValue.toString().trim().length>0? true : false;
            } */
        },
        watch:{
            searchValue(value){
                this.isSearch = value.length>0? true : false;
            }
        },
        methods:{
            cleanValue(){
                this.searchValue = '';
            },
            handleSearch(){
                this.isSearch = false;
                this.$emit('search', this.searchValue);
            },
            handleShow(){  
                this.show = true;
                this.cleanValue();
                this.$refs.input.focus();
                 
            },
            /**@取消事件回调 */
            handleCancel(){
                this.show = false;
                this.$emit('cancel', this.searchValue);
            }
        },
        mounted() {
             if(this.focus){
                this.handleShow();
            } 
        }
     }
</script>