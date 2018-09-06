<template>
    <div class="xfd-viewpager">
        <header class="xfd-header xfd-border-b">
            <div class="xfd-header-left" v-router="{router:this.$router}">
                <span>返回</span>
            </div>
            <h1>表单</h1>
            <div class="xfd-header-right text-center">
    
            </div>
        </header>
        <section class="xfd-container">
            <div>
                <h1 class="template-title">行类单选框 类型1</h1>
                <div class="xfd-form xfd-cells-box">
                    <div class="xfd-row-flex xfd-line xfd-cells">
                        <div class="xfd-row-flex xfd-radio-group radio-group-2">
                            <label>
                                            <input type="radio" value="-1" name="sex">
                                            <span class="radio-label">value:1</span>
                                        </label>
                            <label>
                                            <input type="radio" value="-1" name="sex">
                                            <span class="radio-label">value:2</span>
                                        </label>
                            <label>
                                            <input type="radio" value="-1" name="sex">
                                            <span class="radio-label">value:3</span>
                                        </label>
                            <label>
                                            <input type="radio" value="-1" name="sex">
                                            <span class="radio-label">value:4</span>
                                        </label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 class="template-title">行类单选框 类型2</h1>
                <div class="xfd-form xfd-cells-box">
                    <div class="xfd-row-flex xfd-line xfd-cells">
                        <div class="xfd-row-flex xfd-radio-group">
                            <label class="xfd-col xfd-col-1">
                                    <input type="radio" value="-1" name="sex">
                                    <span class="radio-label">value:1</span>
                                </label>
                            <label class="xfd-col xfd-col-1">
                                    <input type="radio" value="-1" name="sex">
                                    <span class="radio-label">value:2</span>
                                </label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 class="template-title">单选框按钮样式组</h1>
                <div class="xfd-form xfd-cells-box">
                    <div class="xfd-row-flex xfd-line xfd-cells">
                        <label class="xfd-form-radio">
                                <input type="radio" value="-1" name="sex" disabled="disabled">
                            </label>
                        <label class="xfd-form-label xfd-col-1">禁止</label>
                    </div>
                    <div class="xfd-row-flex  xfd-cells">
                        <label class="xfd-form-radio">
                                <input type="radio" value="女" name="sex">
                            </label>
                        <label class="xfd-form-label xfd-col-1">女</label>
                    </div>
    
                </div>
            </div>
            <div>
                <h1 class="template-title">行类单选框</h1>
                <div class="xfd-form xfd-cells-box">
                    <div class="xfd-row-flex xfd-cells radio-group-line">
                        <label class="xfd-form-radio">
                                <input type="radio" value="-1" name="sex"> 是
                            </label>
                        <label class="xfd-form-radio">
                                <input type="radio" value="-1" name="sex"> 否
                            </label>
                    </div>
                </div>
            </div>
    
            <div>
                <h1 class="template-title">复选框</h1>
                <div class="xfd-form xfd-cells-box">
                    <div class="xfd-row-flex xfd-line xfd-cells">
                        <label class="xfd-form-label">复选框</label>
                        <div class="xfd-col-1">
                            <label class="xfd-form-checkbox">
                                    <input type="checkbox" value="Jack">
                                    <span>Jack</span>
                                </label>
                            <label class="xfd-form-checkbox">
                                    <input type="checkbox" value="Jack11">
                                    <span>Jack11</span>
                                </label>
                            <label class="xfd-form-checkbox">
                                    <input type="checkbox" disabled="disabled" alue="join">
                                    <span>禁止复选框</span>
                                </label>
                        </div>
                    </div>
                    <div class="xfd-row-flex xfd-cells">
                        <label class="xfd-form-label">选中值</label>
                        <div class="xfd-col-1">
                            [ "Jack" ]
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 class="template-title">无左侧说明表单</h1>
                <div class="xfd-form xfd-cells-box">
                    <div class="xfd-row-flex xfd-border-line xfd-cells">
                        <div class="xfd-col-1 xfd-form-input">
                            <input type="text" placeholder="请输入账号">
                        </div>
                        <i class="icon iconfont icon-guanbi2fill"></i>
                    </div>
                    <div class="xfd-row-flex xfd-border-line xfd-cells">
                        <div class="xfd-col-1 xfd-form-input">
                            <input type="text" placeholder="请输入密码">
                        </div>
                        <i class="icon iconfont icon-guanbi2fill"></i>
                    </div>
                </div>
            </div>
            <div>
                <h1 class="template-title">下拉列表</h1>
                <div class="xfd-form xfd-cells-box">
                    <div class="xfd-row-flex xfd-cells">
                        <label class="xfd-form-label">select</label>
                        <div class="xfd-col-1 xfd-form-input xfd-form-select">
                            <select type="text" class="xfd-form-select">
                                    <option>请选择</option>
                                    <option>北京</option>
                                    <option>福州</option>
                                </select>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 class="template-title">切换switch</h1>
                <div class="xfd-form xfd-cells-box">
                    <div class="xfd-row-flex xfd-cells">
                        <label class="xfd-form-label">switch</label>
                        <div class="xfd-col-1 xfd-form-input">
                            <input type="checkbox" class="xfd-form-switch">
                            <span>true</span>
                        </div>
                    </div>
                </div>
            </div>
    
            <div>
                <h1 class="template-title">基础表单</h1>
                <div class="xfd-form xfd-cells-box font-size-15">
                    <div class="xfd-line xfd-cells">
                        <label class="xfd-form-label">手机号码</label>
                        <div class="xfd-col-1 xfd-form-input">
                            <input type="text" placeholder="请输入手机号码">
                        </div>
                    </div>
                    <div class="xfd-line xfd-cells">
                        <label class="xfd-form-label">验证码</label>
                        <div class="xfd-col-1 xfd-form-input">
                            <input type="text" placeholder="请输入验证码">
                        </div>
                        <div class="xfd-code">
                            <button class="xfd-btn xfd-btn-primary">获取验证码</button>
                        </div>
                    </div>
                    <div class="xfd-line xfd-cells">
                        <label class="xfd-form-label">获取定位</label>
                        <div class="xfd-col-1 xfd-form-input">
                            <input type="text">
                        </div>
                        <div class="xfd-icon-load">
                            <i class="icon iconfont icon-jiazai"></i>
                        </div>
                    </div>
                    <div class="xfd-cells">
                        <label class="xfd-form-label">密码</label>
                        <div class="xfd-col-1 xfd-form-input">
                            <input type="password" placeholder="请输入密码">
                        </div>
                    </div>
                </div>
            </div>
    
            <div>
                <h1 class="template-title">textarea多列输入框</h1>
                <div class="xfd-cells-box xfd-form">
                    <div class="xfd-row-flex xfd-border-line xfd-cells" style="background-color:#fff;">
                        <div class="xfd-form-textarea xfd-col-1">
                            <textarea type="textarea" placeholder="请输入宝贵意见" rows="3" maxlength="200"></textarea>
                            <p class="textarea-counter">1/100</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'FormController'
    }
</script>
