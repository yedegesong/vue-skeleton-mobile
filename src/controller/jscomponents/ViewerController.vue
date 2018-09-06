<template>
    <div class="xfd-viewpager">
        <header class="xfd-header xfd-border-b">
            <div class="xfd-header-left" v-router="{router:this.$router}">
                <span>返回</span>
            </div>
            <h1>图片预览(Viewer)</h1>
            <div class="xfd-header-right text-center">
    
            </div>
        </header>
        <section class="xfd-container">
            <div class="xfd-panel">
                <div class="xfd-panel-hd xfd-line-border">
                    <div class="xfd-row-flex">
                        <div class="xfd-col-1 font-size-15">单个图片预览</div>
                    </div>
                </div>
                <div class="xfd-panel-cn">
                    <div class="xfd-media-cell xfd-cells xfd-line">
                        <div class="xfd-media-cn">
                            <div class="xfd-upload-box xfd-clearfix">
                                <div class="xfd-upload-list">
                                    <div class="xfd-upload-item" v-for="item in images">
                                        <div class="item-img" @click="show(item)">
                                            <img :src="item">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--图片弹框组件模式-->
            <viewer :options="options" @inited="inited" class="viewer" ref="viewer">
                <template slot-scope="scope">
                    <img :src="vierwerImage" style="display:none;">
                </template>
            </viewer>
            <!--图片弹框组件模式结束-->
             <div class="xfd-panel">
                <div class="xfd-panel-hd xfd-line-border">
                    <div class="xfd-row-flex">
                        <div class="xfd-col-1 font-size-15">多个图片预览</div>
                    </div>
                </div>
                <div class="xfd-panel-cn">
                    <div class="xfd-media-cell xfd-cells xfd-line">
                        <div class="xfd-media-cn">
                            <div class="xfd-upload-box xfd-clearfix">
                                <div class="xfd-upload-list" v-viewer>
                                    <div class="xfd-upload-item" v-for="item in images">
                                        <div class="item-img">
                                            <img :src="item">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script type="text/babel">
     import 'viewerjs/dist/viewer.css'
  import Viewer from 'v-viewer'
  import Vue from 'vue'
  Vue.use(Viewer)
    let cleanTimeout = null;
    export default {
        name: 'ViewerController',
        data() {
            return {
                images: ['http://static.ydcss.com/uploads/lightbox/meizu_3.jpg', 'http://amborzex-dispatch.oss-cn-hangzhou.aliyuncs.com/0cb15d37f186b2d46ef1e2dd14810202914b41b7262d2-cBMSdb_fw658(1).jpeg'],
                vierwerImage: 'http://static.ydcss.com/uploads/lightbox/meizu_3.jpg',
                options: {
                    toolbar: false, //工具栏
                    navbar: false, //底部图片预览
                    minZoomRatio: 0.8
                },
            }
        },
        methods: {
            inited(viewer) {
                this.$viewer = viewer
            },
            show(item) {
                this.vierwerImage = item;
                cleanTimeout = setTimeout(() => {
                    this.$viewer.show()
                })
            }
        },
       
        mounted() {
    
        }
    }
</script>
