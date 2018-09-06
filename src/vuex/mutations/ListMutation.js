

import * as AppTypes from '../types/app.types';
const ListMutation = {
    namespaced: true,
    state: {
        items:[
            {
                name:'1'
            },
            {
                name:'1'
            },
            {
                name:'1'
            },
            {
                name:'1'
            },
            {
                name:'1'
            },
            {
                name:'1'
            },
            {
                name:'1'
            },
            {
                name:'1'
            },
            {
                name:'1'
            },
            {
                name:'1'
            },
        ]
    },
    actions: {
        queryList({ commit, state, rootState, dispatch }, pramas){
            commit('QUERY_LIST',pramas)
         },
    },
    mutations: {
        ['QUERY_LIST'](state, data) {
            state.items = data;
        }
    }

}

export default ListMutation