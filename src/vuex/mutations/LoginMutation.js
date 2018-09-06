
import * as AppTypes from '../types/app.types';
const LoginMutation = {
    state: {
        code:456,
        info: '11'
    },
    actions: {
       
        ['login']({ commit, state }, params) {
            commit('APP_QUERY',{info:'登录成功',arr:['1','2','3']})
        }
    },
    mutations: {
        ['APP_QUERY'](state, data) {
            
            state.info = data.info;
            state.homeList = data.arr;
            console.log('到达这步');
        }
    },
    getters: {
       checkoutStatus: state => state.code
    }

}

export default LoginMutation