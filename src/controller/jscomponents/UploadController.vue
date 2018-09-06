<template>
    <div class="xfd-viewpager">
        <header class="xfd-header xfd-border-b">
            <div class="xfd-header-left" v-router="{router:this.$router}">
                <span>返回</span>
            </div>
            <h1>图片上传(Upload)))</h1>
            <div class="xfd-header-right text-center">
    
            </div>
        </header>
        <section class="xfd-container">
            <div class="xfd-form xfd-cells-box">
                <div class="xfd-line xfd-cells">
                    <label class="xfd-form-label">上传附件</label>
                    <div class="xfd-col-1 xfd-form-input">
                        <div class="xfd-upload-box xfd-clearfix">
                            <div class="xfd-upload-list">
                                <div class="xfd-upload-item" v-for="item in formInline.fileList">
                                    <template v-if="item.status === 'finished'">
                                            <div class="item-img images">
                                                <img :src="item.url">
                                            </div>
                                    </template>
                                    <template v-else>
                                        <div class="item-img">
                                            <span class="xfd-loadmore">
                                                <i class="xfd-loading"></i>
                                            </span>
                                            <p style="font-size:12px;">正在上传</p>
                                        </div>
                                    </template>
                                    <i class="upload-close icon iconfont icon-guanbi2fill" @click.stop="handleRemove(item)"></i>
                                   </div>
                            </div>
                            <!--图片上传-->
                             <div class="text-primary">
                                 <Upload 
                                ref="upload"
                                :multiple = "true"
                                :max-size="5120"
                                :show-upload-list="false"
                                :default-file-list="defaultList"
                                :action="action" 
                                :headers="{Authorization:token}" 
                                :on-success="handleSuccess"
                                :on-format-error="handleFormatError"
                                :before-upload="handleBeforeUpload"
                                :on-exceeded-size="handleMaxSize"
                                >
                                    <div class="upload-btn-box">
                                        <i class="icon iconfont icon-xiangji1fill"></i>
                                    </div>
                                </Upload>
                        </div>
                            <!--图片上传结束-->
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script type="text/babel">
    import Upload from '@components/upload/upload';
    export default {
        name: 'UploadController',
        data() {
            return {
                token: '',
                action: `http://apitest.amborzex.com/amborzex/workorder/uploadFile`,
                defaultList: [{
                    fileType: 1,
                    name: '双瞳如小窗 佳景观历历',
                    url: 'http://static.ydcss.com/uploads/lightbox/meizu_3.jpg'
                }],
                formInline: {
                    fileList: [],
                }
            }
        },
        methods: {
            handleMaxSize(file) {
                console.log('文件不能超过5M');
            },
            /**
               上传成功
            */
            handleSuccess(res, file, fileList) {
                if (res.code != 200) {
                    let fileList = this.formInline.fileList;
                    this.formInline.fileList.splice(fileList.indexOf(file), 1);
                    return;
                }
                console.log(file)
                file.url = res.result.url;
                file.fileType = res.result.fileType;
            },
            /**
                删除文件
             */
            handleRemove(file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            /**
                上传失败
             */
            handleFormatError(file) {
                console.log('上传失败')
            },
            /**
                上传之前
             */
            handleBeforeUpload(file, fileList) {
                const check = this.formInline.fileList.length < 5;
                if (!check) {
                    this.$xfdDialog.toast('最多上传五张');
                }
                return check;
            },
        },
        components: {
            'Upload': Upload
        },
        mounted() {
            this.formInline.fileList = this.$refs.upload.fileList;
        }
    }
</script>
