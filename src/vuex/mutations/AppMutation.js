
import * as AppTypes from '../types/app.types';
const HomeMutation = {
    namespaced: true,
    state: {
        code:123,
        homeList: [
            {
                title: '世界最大玻璃观景台来中国了！去的人都吓跪了…',
                cover: 'https://img.alicdn.com/bao/uploaded/i1/100000229582992594/TB2RC0DpVXXXXc7XXXXXXXXXXXX_!!0-0-travel.jpg_300x300q75'
            },
            {
                title: '这个被冯小刚赶出娱乐圈的男人，花了120亿造出最美酒店',
                cover: 'https://img.alicdn.com/bao/uploaded/i4/100000232957612006/TB2sAR9qXXXXXXQXpXXXXXXXXXX_!!0-0-travel.jpg_300x300q75'
            }
        ]
    },
    actions: {
        gProgress({commit,dispatch}, params) {
            console.log('触发appHome事件')
            dispatch('rootIncrement', {name:'as'}, { root: true })
        },
        ['queryList']({ commit, state }, params) {
            
            /*  Api.queryContent().then((data)=>{
                console.log(data)
            })  */

            /* Api.getRes().then((data)=>{
                console.log(data)
            }) */
            //console.log(this.)
            /* state.homeList.push({
                 title:'世界最大玻璃观景台来中国了！去的人都吓跪了…',
                 cover:'https://img.alicdn.com/bao/uploaded/i1/100000229582992594/TB2RC0DpVXXXXc7XXXXXXXXXXXX_!!0-0-travel.jpg_300x300q75'
             })*/
            //console.log(state)
            /*Api.queryContent().then((data)=>{
                console.log(data)
            })*/
            //console.log('触发到这步')
            //console.log(params)
            //console.log('执行到这步')
            commit('APP_QUERY',[
			{
				title:'1:世界最大玻璃观景台来中国了！去的人都吓跪了…',
				cover:'https://img.alicdn.com/bao/uploaded/i1/100000229582992594/TB2RC0DpVXXXXc7XXXXXXXXXXXX_!!0-0-travel.jpg_300x300q75'
			},
			{
				title:'2:这个被冯小刚赶出娱乐圈的男人，花了120亿造出最美酒店',
				cover:'https://img.alicdn.com/bao/uploaded/i4/100000232957612006/TB2sAR9qXXXXXXQXpXXXXXXXXXX_!!0-0-travel.jpg_300x300q75'
			},
            {
				title:'3:这个被冯小刚赶出娱乐圈的男人，花了120亿造出最美酒店',
				cover:'https://img.alicdn.com/bao/uploaded/i4/100000232957612006/TB2sAR9qXXXXXXQXpXXXXXXXXXX_!!0-0-travel.jpg_300x300q75'
			}
		])
        }
    },
    mutations: {
        [AppTypes.APP_QUERY](state, data) {
            state.homeList = data;
        }
    },
    getters: {
       checkoutStatus: state => state.code
    }

}

export default HomeMutation