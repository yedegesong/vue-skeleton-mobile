const ListMutation = {
    namespaced: true,
    state: {
        links: [{
            title: 'vuex(数据状态)',
            url: '/vuex',
            status:0
        },
        {
            title: 'tree(树)',
            url: '/tree',
            status:0
        },
        {
            title: 'picker(下拉选择)',
            url: '/picker',
            status:0
        },
        {
            title: 'dialog(弹框)',
            url: '/dialog',
            status:0
        },
        {
            title: 'messageBox(自定义弹出内容)',
            url: '/messageBox',
            status:0
        },
        {
            title: 'counter（计步器）',
            url: '/counter',
            status:0
        },
        {
            title: 'sendCode（计时按钮）',
            url: '/code',
            status:0
        },
        {
            title: 'search（搜索框）',
            url: '/search',
            status:0
        },
        {
            title: 'infiniteScroll（持续滚动加载)',
            url: '/infiniteScroll',
            status:0
        },
        {
            title: 'carkeyboard（自定义车牌键盘)',
            url: '/carkeyboard',
            status:0
        },
        {
            title: 'actionsheet(下拉弹出选择)',
            url: '/actionsheet',
            status:0
        },
        {
            title: 'upload(图片上传)',
            url: '/upload',
            status:0
        },
        {
            title: 'scrollNav(滚动菜单)',
            url: '/scrollNav',
            status:0
        },
        {
            title: '上拉刷新',
            url: '/pullup',
            status:0
        },
        {
            title: '上拉,下拉刷新',
            url: '/pull',
            status:0
        }
        ]
    },
    actions: {
        queryList({ commit, state, rootState, dispatch }, pramas) {
            commit('QUERY_LIST', pramas)
        },
        setList({ commit, state, rootState, dispatch }, pramas) {
            state.links[pramas].status = 1
        
            commit('QUERY_LIST', state.links)
        },
    },
    mutations: {
        ['QUERY_LIST'](state, data) {
            state.links = data;
        }
    }

}

export default ListMutation