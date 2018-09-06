<template>
    <div class="xfd-viewpager">
        <header class="xfd-header xfd-border-b">
            <div class="xfd-header-left" v-router="{router:this.$router}">
                <span>返回</span>
            </div>
            <h1>时间日期(DateTime))</h1>
            <div class="xfd-header-right text-center">
    
            </div>
        </header>
        <section class="xfd-container">
             <div class="xfd-form xfd-cells-box" style="margin-bottom:.96rem;">
                <div class="xfd-line xfd-cells xfd-arrowlink">
                    <label class="xfd-form-label required">time</label>
                    <div class="xfd-col-1 xfd-form-input">
                         <yd-datetime type="time" v-model="datetime1"></yd-datetime>
                    </div>
                </div>
                <div class="xfd-line xfd-cells xfd-arrowlink">
                    <label class="xfd-form-label required">day</label>
                    <div class="xfd-col-1 xfd-form-input">
                         <yd-datetime type="day" v-model="datetime2"></yd-datetime>
                    </div>
                </div>
                <div class="xfd-line xfd-cells xfd-arrowlink">
                    <label class="xfd-form-label required">month</label>
                    <div class="xfd-col-1 xfd-form-input">
                         <yd-datetime type="month" v-model="datetime3"></yd-datetime>
                    </div>
                </div>
                <div class="xfd-line xfd-cells xfd-arrowlink">
                    <label class="xfd-form-label required">date</label>
                    <div class="xfd-col-1 xfd-form-input">
                         <yd-datetime type="date" v-model="datetime4"></yd-datetime>
                    </div>
                </div>
                 <div class="xfd-line xfd-cells xfd-arrowlink">
                    <label class="xfd-form-label required">datetime</label>
                    <div class="xfd-col-1 xfd-form-input">
                         <yd-datetime type="datetime" v-model="datetime5"></yd-datetime>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script type="text/babel">
    import DateTime from '@components/datetime/index';
    export default {
        name: 'DateTimeController',
        data() {
            return {
                datetime1:'05:21',
                datetime2:'',
                datetime3:'',
                datetime4:'',
                datetime5:'2008-08-08 08:08'
            }
        },
        methods: {
           
        },
        components: {
            'yd-datetime':DateTime
        },
        mounted() {
    
        }
    }
</script>
