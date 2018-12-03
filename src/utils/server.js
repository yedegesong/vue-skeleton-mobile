import axios from 'axios';
/**
 * 请求拦截
 */
axios.interceptors.request.use(function (config) {
    //config.common['Authorization'] = 'aabbccddee'
    config.headers.Authorization = 'token';
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
/*--服务类AJAX-Promise--*/
class Server {
    constructor() {

    }
    /**
     * 
     * @param type 类型 get/post
     * @param url  接口地址 /add/1
     * @param param 接口接收的参数 {}
     */
     static resource(opts) {
       
            return axios({
                url: opts.url ? opts.url :'/',
                params:opts.type == 'GET'?opts.param :{},
                data:  opts.param && opts.type == 'POST'? JSON.stringify(opts.param) : opts.param ? opts.param :{},
                method: opts.type ? opts.type : 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                timeout: 3000
            }).then((response,aop) => {
                return response.data;
            }, (err) => {
                console.log(err)
               console.log(err.response)
            }).catch(function (error) {
                
                
            }) 
        

    }

}

export default Server;