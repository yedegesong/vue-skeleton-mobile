<template>
    <div class="picker-Pca" @click="handleCheckPca">
        <p>{{PcaValue}}</p>
        <xfd-picker :visible.sync="isVisible" :columns="addressColumns" @change="onAddressChange" :visible-item-count="5" @confirm="confirmPerson" @cancel="handleCancel" ref="addressPicker">
        </xfd-picker>
    </div>
</template>

<script>
    import Picker from './common/picker';
    //import Pca from 'utils/pc-code';
    import Pca from './city/pca-code';
    // console.log(Pca)
    let tunkData = (arr = []) => {
        return arr.map((item) => {
            return item.name
        })
    }
    let getCityIndex = (value) => {
        let indexOf = Pca.findIndex((item) => {
            return item.name == value;
        });
        return indexOf;
    }
    
    let getAreIndex = (Are, value) => {
        let indexOf = Are.findIndex((item) => {
            return item.name == value;
        });
        return indexOf;
    }
    export default {
        name: 'xfdPickerPca',
        props: {
            value: [String, Number, Array],
            title: [String],
            isPca: {
                type: [Boolean],
                default: false
            }
        },
        computed: {
            PcaValue() {
                return this.value.length > 0 ? this.value.toString() : this.title;
            }
        },
        data() {
            return {
                isVisible: false,
                addressColumns: this.isPca ? [{
                        values: tunkData(Pca)
                    },
                    {
                        values: tunkData(Pca[0].children)
                    },
                    {
                        values: tunkData(Pca[0].children[0].children)
                    }
                ] : [{
                        values: tunkData(Pca)
                    },
                    {
                        values: tunkData(Pca[0].children)
                    }
                ]
            }
        },
        watch: {
            value(value) {
                this.setPca();
            }
        },
        methods: {
            handleCheckPca() {
                this.isVisible = true;
            },
            onAddressChange(picker, addressValues, slotIndex) {
                let childrenPcaData = [];
                let cityArce = [];
                let PcaPositionChild;
                let PcaPosition = Pca.find(function(value, index, arr) {
                    if (value.name == addressValues[0]) {
                        return value;
                    };
                });
                PcaPositionChild = PcaPosition.children;
                PcaPosition['children'].forEach((v) => {
                    childrenPcaData.push(v.name);
                });
                PcaPositionChild[0]['children'].forEach((v) => {
                    cityArce.push(v.name);
                });
                if (slotIndex == 0) {
                    picker.setColumnValues(1, childrenPcaData);
                    this.isPca ? picker.setColumnValues(2, cityArce) : null;
                }
                if (this.isPca) {
                    if (slotIndex == 1) {
                        let areaArr = [];
                        let areaValue = PcaPositionChild.find(function(value, index, arr) {
                            if (value.name == addressValues[1]) {
                                return value;
                            };
                        });
                        areaValue['children'].forEach((v) => {
                            areaArr.push(v.name);
                        });
                        picker.setColumnValues(2, areaArr);
                    }
                }
    
            },
            handleCancel() {
                this.$nextTick(() => {
                    this.isVisible = false;
                })
            },
            confirmPerson(picker) {
                this.$emit('input', picker.getValues());
    
                this.$nextTick(() => {
                    this.isVisible = false;
                })
            },
            setPca() {
                if (this.value.length > 0) {
                    let provinces = this.value[0];
                    let city = this.value[1];
                    let are = this.value[2];
                    /** arguments
                        省市区
                     */
                    if (this.isPca) {
                        let citys = Pca[getCityIndex(provinces)].children;
                        let ares = citys[getAreIndex(citys, city)].children;
                        this.$set(this.addressColumns, "1", {
                            values: tunkData(citys)
                        })
                        this.$set(this.addressColumns, "2", {
                            values: tunkData(ares)
                        })
                        this.$nextTick(() => {
                            this.$refs.addressPicker.setValues([provinces, city, are]);
                        })
                    } else {
                        let citys = Pca[getCityIndex(provinces)].children;
                        this.$set(this.addressColumns, "1", {
                            values: tunkData(citys)
                        })
                        this.$nextTick(() => {
                            this.$refs.addressPicker.setValues([provinces, city]);
                        })
                    }
                }
            }
        },
        mounted() {
            this.setPca();
        },
        components: {
            'xfd-picker': Picker
        },
    }
</script>