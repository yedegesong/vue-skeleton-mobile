import moment from 'moment';
moment.locale('zh-cn');
/****
 * 定义静态工具类
 */
export default class Tool {
    constructor() {

    }
    

    /***
     * @augments 获取?后面所有参数
     */
    static getQueryParas(paramsUrl) {
        var url = paramsUrl?paramsUrl:window.location.search;
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            var strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }

    
    /***
     * @augments 获取?后面指定参数
     */
    static getQueryString(Paras){
         return Tool.getQueryParas()[Paras]
    }

    /**
     * 设置标题页
     */
    static setTitle(title) {
        document.title = title ? title : '';
        var mobile = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(mobile)) {
            var iframe = document.createElement('iframe');
            iframe.style.visibility = 'hidden';
            iframe.setAttribute('src', '');
            var iframeCallback = function () {
                setTimeout(function () {
                    iframe.removeEventListener('load', iframeCallback);
                    document.body.removeChild(iframe);
                }, 0);
            };
            iframe.addEventListener('load', iframeCallback);
            document.body.appendChild(iframe);
        }
    }
    /**
     * 格式化处理树数组
     * @param {*} data
     */
    static getRootArray(data = []) {
        let root = [];
         data.forEach((value)=>{
            let regValue = (JSON.stringify(value).replace(/child_list/g, "children"));
            root.push(JSON.parse(regValue));
        }) 
        return root;
    }
 /**
     * 自定义转换树格式
     * @param {*} data
     */
    static RootArray(data = [],nodeAttr={},attribute='child_list') {
        let obj = data;
        function dg(obj){
            for (var prop in obj)
            {
               
                if(prop==attribute){
                    
                    obj.children = obj[prop];
                    $.extend(obj,{expand:false},nodeAttr);
                    
                }
               if(prop=='children'){
                $.extend(obj,{expand:false},nodeAttr);
               }
                if(obj[prop] instanceof Object || obj[prop] instanceof Array){

                    dg(obj[prop]);
                }
            }
        }
        dg(obj);
        return obj;
    }
    /**
     * 自定义转换树格式
     * @param {*} data
     */
    static RootArrayTwo(data = [],nodeAttr={},attribute='child_list') {
        let obj = data;
        function dg(obj){
            for (var prop in obj)
            {
               
                if(prop==attribute){
                    
                    // if(obj.staff_list){
                    //     obj.children = [...obj[prop],...obj.staff_list];
                    // }else{
                    //     obj.children = obj[prop];
                    // }
                    let children = obj[prop]? obj[prop] : [];
                    obj.children = [...children,...obj.staff_list];
                    $.extend(obj,{expand:false},nodeAttr);
                    
                }
               
                if(obj[prop] instanceof Object || obj[prop] instanceof Array){

                    dg(obj[prop]);
                }
            }
        }
        dg(obj);
        return obj;
    }
    /**
     * 格式化处理树数据
     * @param {*} data
     */
    static getRoot(data =[]) {
        if(!this.lang().isPlainObject(data)){
            new Error( `传入格式不正确,必须包含{key:value,children:[]}` );
        }
        let root = [];
        function traverseTree(node) {
            if (!node) {
                return;
            }
            root.push(node);
            //traverseNode(node);
            if (node.children && node.children.length > 0) {

                for (let i = 0; i < node.children.length; i++) {
                    traverseTree(node.children[i]);
                }
            }
        }
        
        data.forEach((value)=>{
            traverseTree(value);
        }) 
        
        return root;
    }

    static add0(m){return m<10?'0'+m:m }
    
     static FormatYmd(value, type = 'date'){
        if (value !== null && typeof value === 'object') {
            let year = value.getFullYear()
            let month = value.getMonth() + 1
            let date = value.getDate()
            let hour = value.getHours()
            let minute = value.getMinutes()
    
            return type === 'date' ? `${year}年${month}月${date}日` : `${year}-${month}-${date} ${hour}:${minute}`
        } else {
            return value
        }
    } 
    /**
     * 获取当前时间
     */
    static getDate(type='dateTime'){
        //console.log(moment().format('YYYY-MM-DD HH:mm'))
        if(type=='dateTime'){
            return moment().format('YYYY-MM-DD HH:mm');
        }
        return moment().format('YYYY-MM-DD');
    }
      /**
     * 时间戳转日期
     * @param {} dateTime 
     */
    static formatDate(dateTime,type='date'){
        
        if(type=='dateTime'){
            return moment(dateTime).format('YYYY-MM-DD HH:mm');
        }
        return moment(dateTime).format('YYYY-MM-DD');
    }

    /**
     * 日期转时间戳
     * @param {} dateTime 
     */
    static dateConversionTime(dateTime){
        
        let reg = /^\d{4}\-\d{2}\-\d{2}$/;
        //如果格式为 2018-02-01
        if(reg.test(dateTime)){
            return new Date(`${dateTime} 00:00:00`).getTime();
        }else{
            console.log(dateTime)
            console.log(new Date(dateTime))
            return new Date(dateTime).getTime();
        }
    }

    /**
     * 获取当前时间戳
     * @param {} dateTime  
     * @param {} type //'ms' 默认返回毫秒 'seconds' 秒
     */
    static getDayTime1(value,type="ms"){
        let REFERENCE = moment(value);
        
        if(type=='seconds'){
            return REFERENCE.clone().unix();
        }
        
        return (REFERENCE.clone().unix())*1000;
    }
    /**
     * 获取当前时间戳
     * @param {} dateTime  
     * @param {} type //'ms' 默认返回毫秒 'seconds' 秒
     */
    static getDayTime(type="ms"){
        let REFERENCE = moment();
        
        if(type=='seconds'){
            return REFERENCE.clone().unix();
        }
        
        return (REFERENCE.clone().unix())*1000;
    }
     /**
     * 获取昨天时间戳
     * @param {} dateTime  
     * @param {} type //'ms' 默认返回毫秒 'seconds' 秒
     */
    static getYesterdayTime(type="ms"){
         let REFERENCE = moment();
         let YESTERDAY = REFERENCE.clone().subtract(1, 'days');

        if(type=='seconds'){
            return YESTERDAY.unix();
        }
        
        return (YESTERDAY.unix())*1000;
    }

     /**
     * 获取本周时间戳
     * @param {} dateTime  
     * @param {} type //'ms' 默认返回毫秒 'seconds' 秒
     */
    static getWeekFirstTime(type="ms",week=1){
        var A_WEEK_FIRST = moment().day(0);
       if(type=='seconds'){
           return A_WEEK_FIRST.unix();
       }
       
       return (A_WEEK_FIRST.unix())*1000;
   }

    /**
     * 获取指定天数后时间戳
     * @param {} dateTime  
     * @param {} type //'ms' 默认返回毫秒 'seconds' 秒
     */
    static getWeekOldTime(day=7,type="ms"){
        let REFERENCE = moment();
        var A_WEEK_OLD = REFERENCE.clone().subtract(day, 'days');
       if(type=='seconds'){
           return A_WEEK_OLD.unix();
       }
       
       return (A_WEEK_OLD.unix())*1000;
   }

   /**@argument 是否今天 */
   static isToday(momentDate){
        return moment(momentDate).isSame(this.getDayTime(), 'd');
   }

   /**@argument 是否昨天 */
   static isYesterday(momentDate){
        return moment(momentDate).isSame(this.getYesterdayTime(), 'd');
    }

     /**@argument 是否当周 */
   static isWeek(momentDate){
        return moment(momentDate).isAfter(this.getWeekFirstTime("ms",0), 'd');
    }
     /**@argument 是否不是当周 */
   static isNoWeek(momentDate){
     return !moment(momentDate).isAfter(this.getWeekFirstTime("ms",0), 'd');
 }
   /**
    * @argument 获取分页总数
    */
   static pageTotal(pageSize,total_num){
        return Math.ceil(total_num/pageSize)
   }
    /**
     * 数据类型判断
     * @param {*} value
     */
    static lang() {
        let class2type = {};
        let dataType = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
        let type = (e) => {
            if (e == null) {
                return String(e);
            }
            return typeof e === "object" || typeof e === "function" ?
            class2type[toString.call(e)] || "object" :
                typeof e;
        }

        dataType.forEach((name) => {
            class2type["[object " + name + "]"] = name.toLowerCase();
        })
        return {
            hasPrototype: (object, name) =>{
                if (isPlainObject(object)) {
                    return object.hasOwnProperty ? object.hasOwnProperty(name) : (name in object);
                }
            },
            //检测对象是否为空
            isEmptyObject:(obj)=> {
                var name;
                for (name in obj) {
                    return false;
                }
                return true;
            },
            /**
             * 判断是否为字符串
             */
            isString:(obj) =>{
                return type(obj) == 'string' ? true : false;
            },
            //判断是否是window对象
            isWindow:(obj) =>{
                return obj != null && obj == obj.window;
            },
            //判断是否是一个函数
            isFunction:(obj) =>{
                return type(obj) === "function";
            },
            //判断是否是数组
            isArray:(e) =>{
                return e instanceof Array;
            },
            //判断是否为空
            isNull:(e) =>{
                return e === null;
            },
            //判断参数是否未赋值undefined
            isUndefined: (e) =>{
                return e === void 0;
            },
            //判断是否无穷大
            isNaN: (e) =>{
                return e !== e;
            },
            //判断是否是纯碎的数字
            isNumeric:(obj) =>{
                return !isNaN(parseFloat(obj)) && isFinite(obj);
            },
            //判断object 是否是原生的DOM 元素
            isElement: (obj)=> {
                return !!(obj && obj.nodeType === 1);
            },
            //判断是否是微信
            isWeiXin: () =>{
                return /MicroMessenger/i.test(navigator.userAgent);
            },
            //测试对象是否是纯粹的对象
            isPlainObject: (obj) =>{
                //如果参数是对象类型 不是WINDOW对象 没有构造函数
                if (type(obj) === 'object' && !this.lang().isWindow(obj) && obj.constructor) {
                    return true;
                }
                return false;

            }
        }
    }
    
}