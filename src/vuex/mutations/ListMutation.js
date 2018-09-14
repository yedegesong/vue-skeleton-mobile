const ListMutation = {
    namespaced: true,
    state: {
        links: [{
            title: 'vuex(数据状态)',
            url: '/vuex'
        },
        {
            title: 'tree(树)',
            url: '/tree'
        },
        {
            title: 'picker(下拉选择)',
            url: '/picker'
        },
        {
            title: 'dialog(弹框)',
            url: '/dialog'
        },
        {
            title: 'messageBox(自定义弹出内容)',
            url: '/messageBox'
        },
        {
            title: 'counter（计步器）',
            url: '/counter'
        },
        {
            title: 'sendCode（计时按钮）',
            url: '/code'
        },
        {
            title: 'search（搜索框）',
            url: '/search'
        },
        {
            title: 'infiniteScroll（持续滚动加载)',
            url: '/infiniteScroll'
        },
        {
            title: 'carkeyboard（自定义车牌键盘)',
            url: '/carkeyboard'
        },
        {
            title: 'actionsheet(下拉弹出选择)',
            url: '/actionsheet'
        },
        {
            title: 'upload(图片上传)',
            url: '/upload'
        },
        {
            title: 'scrollNav(滚动菜单)',
            url: '/scrollNav'
        },
        {
            title: 'scrolltab(分类菜单)',
            url: '/scrolltab'
        },
        {
            title: 'tabs(元素模块切换)',
            url: '/tabs'
        },
        {
            title: 'cellSwipe(左拉删除)',
            url: '/pullleft'
        },
        {
            title: '下拉刷新',
            url: '/pulldown'
        },
        {
            title: '上拉刷新',
            url: '/pullup'
        },
        {
            title: '上拉,下拉刷新',
            url: '/pull'
        },

        {
            title: '左拉实时滑动',
            url: '/pulllefttwo'
        },
        {
            title: 'jQuery插件结合',
            url: '/jQuery'
        },
        ]
    },
    actions: {
        queryList({ commit, state, rootState, dispatch }, pramas) {
           
            commit('QUERY_LIST', pramas)
        },
    },
    mutations: {
        ['QUERY_LIST'](state, data) {
            state.links = data;
        }
    }

}

export default ListMutation