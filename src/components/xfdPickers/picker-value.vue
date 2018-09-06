<template>
    <div @click="handlePicker" style="width:100%;">
        <p :class="{'text-muted':value.length<=0}">{{cityValue}}</p>
        <xfd-picker 
            :visible.sync="isVisible" 
            :columns="columns" 
            @change="onAddressChange" 
            @confirm="confirmPerson"
            @cancel="handleCancel"
            ref="addressPicker"
            >
        </xfd-picker>
    </div>
</template>

<script>
    import Picker from './common/picker';
    let tunkData = (arr = [],label) => {
        return arr.map((item) => {
            return item[label]
        })
    }
    let tunkDataKey = (arr = [],valueKey) => {
        return arr.map((item) => {
            return item[valueKey]
        })
    }


    export default {
        name: 'xfd-picker-value',
        props: {
           addressColumns:{
                type:[Array],
                default: []
            },
            async:{
                type:[Boolean],
                default: false
            },
            label:{
                type:[String],
                default: 'label'
            },
            valueKey:{
                type:[String],
                default: 'value'
            },
            value: [String, Number, Array],
            title:[String]
        },
        computed:{
            columns(){
                return [
                    {
                        values: tunkData(this.addressColumns,this.label)
                    }
                ];
            },
            cityValue(value){
                if(this.value.length>0){
                    return this.labelTitle;
                }
                return this.title;
            }
        },
        data() {
            return {
                isVisible: false,
                labelTitle:'',
                tunkDataKey:[]
            }
        },
        watch:{
            addressColumns(values){
                if (this.value.length > 0&&this.async) {
                    this.$set(this.columns, "0", {
                        values: tunkData(values,this.label)
                    })
                  this.$nextTick(()=>{
                      this.setValue();
                  })
                   
                }
               
            }
        },
        methods: {
            handlePicker() {
                this.isVisible = true;
            },
            onAddressChange(picker, addressValues, slotIndex) {
                //console.log(addressValues)
            },
            handleCancel() {
               
                this.$nextTick(() => {
                    this.isVisible = false;
                })

            },
             confirmPerson(picker) {
                 let valueKey = this.valueKey;
                 let getIndex = (value) => {  
                    let indexOf = this.addressColumns.find((item) => {
                        return item[this.label] == value;
                    });
                        return indexOf;
                    }
                  let checkValue = getIndex(picker.getValues()[0]);
                 
                  this.labelTitle = checkValue[this.label];
                  this.$emit('input',checkValue[valueKey]);
                  this.$nextTick(() => {
                        this.isVisible = false;
                  })
            },
            setValue() {
                if (this.value.length > 0) {
                    let valueKey = this.valueKey;
                    let getIndex = (value) => {
                        let indexOf = this.addressColumns.find((item) => {
                            //console.log(item[valueKey])
                            return item[valueKey] == value;
                        });
                        return indexOf;
                    }
                    let checkValue = getIndex(this.value);
                     this.$refs.addressPicker.setValues([checkValue[this.label]]);
                     this.labelTitle = checkValue[this.label];
                     this.$emit('input',checkValue[valueKey]);
                }
            }
        },
        mounted() {
            if(!this.async){
                this.setValue();
            }
        },
        components: {
            'xfd-picker': Picker
        },
    }
</script>