<template>
    <div class="picker-city" @click="handleCheckCity">
        <p>{{cityValue}}</p>
        <xfd-picker 
            :visible.sync="isVisible" 
            :columns="addressColumns" 
            @change="onAddressChange" 
            :visible-item-count="5" 
            @confirm="confirmPerson"
            @cancel="handleCancel"
            ref="addressPicker"
            >
        </xfd-picker>
    </div>
</template>

<script>
    import Picker from './picker';
    import City from './city/pc-code';
    let tunkData = (arr = []) => {
        return arr.map((item) => {
            return item.name
        })
    }
    let getCityIndex = (value) => {
        let indexOf = City.findIndex((item) => {
            return item.name == value;
        });
        return indexOf;
    }
    export default {
        name: 'xfdPickerCity',
        props: {
            value: [String, Number, Array],
            title:[String]
        },
        computed:{
            cityValue(){
                return this.value.length>0?this.value.toString():this.title;
            }
        },
        data() {
            return {
                isVisible: false,
                addressColumns: [{
                        values: tunkData(City)
                    },
                    {
                        values: tunkData(City[0].childs)
                    }
                ]
            }
        },
        watch:{
            value(value){
                this.setCity();
            }
        },
        methods: {
            handleCheckCity() {
                this.isVisible = true;
            },
            onAddressChange(picker, addressValues, slotIndex) {
                let childrenCityData = [];
                let cityPosition = City.find(function(value, index, arr) {
                    if (value.name == addressValues[0]) {
                        return value;
                    };
                });
                cityPosition['childs'].forEach((v) => {
                    childrenCityData.push(v.name);
                });
    
                picker.setColumnValues(1, childrenCityData);
            },
            handleCancel(){
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
            setCity(){
                if (this.value.length > 0) {
                    let provinces = this.value[0];
                    let city = this.value[1];
                    let citys = City[getCityIndex(provinces)].childs
                    this.$set(this.addressColumns, "1", {
                        values: tunkData(citys)
                    })
                    this.$nextTick(() => {
                        this.$refs.addressPicker.setValues([provinces, city]);
                    })
                }
            }
        },
        mounted() {
            this.setCity();
        },
        components: {
            'xfd-picker': Picker
        },
    }
</script>