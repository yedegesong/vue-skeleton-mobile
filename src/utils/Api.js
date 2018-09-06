import promise from './Promise';
import axios from 'axios';
/**
 * 整站API模块
 */

const BaseApi = {
	/**
	 * 查询接口
	 */
   /* queryContent:()=>{
    return promise.resource('get', 'api/fullconfig',
            {querystring1:'1'});
    } */
    /* queryContent:()=>{
        return promise.res('post', 'cwgjerp_3.0.0_login',
            {username:'111',password:'22'},true);
    } */
        queryContent:()=>{
           
        return promise.resource({
            url: `http://118.31.168.147:9010/omp/v1.0/companys`,
            type: 'POST',
            param: {
                 nickName: 'a',
                 email: 'b',
                 telephone: 'c'
            }
        });
    },
    getRes:()=>{
           
        return promise.resource({
            url: `http://127.0.0.1:8676/flow/normal/countHandle`,
            type: 'GET',
            param: {
                 nickName: 'a',
                 email: 'b',
                 telephone: 'c'
            }
        });
    }
}

export default BaseApi;