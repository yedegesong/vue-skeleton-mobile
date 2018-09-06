<template>
    <div class="xfd-viewpager">
        <header class="xfd-header xfd-border-b">
            <div class="xfd-header-left" v-router="{router:this.$router}">
                <span>返回</span>
            </div>
            <h1>选择框(Picker))</h1>
            <div class="xfd-header-right text-center">
    
            </div>
        </header>
        <section class="xfd-container">
            <h1 class="page-title">单列</h1>
            <div class="xfd-form xfd-cells-box" style="margin-bottom:.96rem;">
                <div class="xfd-line xfd-cells xfd-arrowlink">
                    <label class="xfd-form-label required">单选</label>
                    <div class="xfd-col-1 xfd-form-input">
                        <xfd-picker-value v-model="singleValue" :addressColumns="addressColumns" title="请选择单列"></xfd-picker-value>
                    </div>
                </div>
                <div class="xfd-line xfd-cells xfd-arrowlink">
                    <label class="xfd-form-label required">默认初始有值</label>
                    <div class="xfd-col-1 xfd-form-input">
                        <xfd-picker-value v-model="singleValue2" :addressColumns="addressColumns" title="请选择单列"></xfd-picker-value>
                    </div>
                </div>
            </div>
            <h1 class="page-title">城市联动</h1>
            <div class="xfd-form xfd-cells-box" style="margin-bottom:.96rem;">
                <div class="xfd-line xfd-cells xfd-arrowlink">
                    <label class="xfd-form-label required">选择省市</label>
                    <div class="xfd-col-1 xfd-form-input">
                        <xfd-picker-city-are v-model="city" :is-pca="true" title="请选择城市"></xfd-picker-city-are>
                    </div>
                </div>
            </div>
            <h1 class="page-title">多列</h1>
            <div class="xfd-form xfd-cells-box" style="margin-bottom:.96rem;">
                <div class="xfd-line xfd-cells xfd-arrowlink">
                    <label class="xfd-form-label required">多列选择</label>
                    <div class="xfd-col-1 xfd-form-input" @click="cellSwitch">
                        <xfd-picker :visible.sync="dayPickerShow" :columns="dayColumns" @confirm="confirmDayTime" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script type="text/babel">
    import Picker from '@components/xfdPickers/common/picker';
    import PickerValue from '@components/xfdPickers/picker-value';
    import PickerCityAre from '@components/xfdPickers/picker-city-area';
    
    export default {
        name: 'PickerController',
        data() {
            return {
                singleValue: '',
                singleValue2: '3',
                dayPickerShow: false,
                city: ['福建省', '福州市', '鼓楼区'],
                dayColumns: [{
                        values: [
                            '星期一',
                            '星期二',
                            '星期三',
                            '星期四',
                            '星期五',
                            '星期六',
                            '星期日'
                        ],
                        defaultIndex: 0
                    },
                    {
                        values: [
                            '上午',
                            '下午'
                        ],
                        defaultIndex: 0
                    }
                ],
                addressColumns: [{
                        label: 'Apple',
                        value: '1'
                    },
                    {
                        label: 'Banana',
                        value: '2'
                    },
                    {
                        label: 'Orange',
                        value: '3'
                    },
                    {
                        label: 'Pear',
                        value: '4'
                    }
                ]
            }
        },
        methods: {
            confirmDayTime(picker) {
                console.log(picker.getValues())
            },
            cellSwitch(){
                this.dayPickerShow = true;
            }
        },
        components: {
            'xfd-picker-value': PickerValue,
            'xfd-picker-city-are': PickerCityAre,
            'xfd-picker': Picker
        }
    }
</script>
