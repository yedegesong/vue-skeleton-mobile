import Vue from 'vue'
import Router from 'vue-router'
import Modeules from '@controller/index';
import Tool from '@utils/tool';

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      component: Modeules.AppController,
      meta: { title: "首页" }
    },
    {
      path: '/CssComponents/basic',
      component: Modeules.BasicController,
      meta: { title: "基本样式" }
    },
    {
      path: '/CssComponents/button',
      component: Modeules.ButtonController,
      meta: { title: "按钮样式" }
    },
    {
      path: '/CssComponents/form',
      component: Modeules.FormController,
      meta: { title: "表单样式" }
    },
    {
      path: '/CssComponents/icon',
      component: Modeules.IconController,
      meta: { title: "图标(Icon)" }
    },
    {
      path: '/CssComponents/layout',
      component: Modeules.LayoutController,
      meta: { title: "布局(Layout)" }
    },
    {
      path: '/CssComponents/grid',
      component: Modeules.GridController,
      meta: { title: "格式化布局(Grid)" }
    },
    {
      path: '/CssComponents/panel',
      component: Modeules.PanelController,
      meta: { title: "面板(Panel)" }
    },
    {
      path: '/CssComponents/cell',
      component: Modeules.CellController,
      meta: { title: "列表(Cell)" }
    },
    {
      path: '/CssComponents/list',
      component: Modeules.ListController,
      meta: { title: "列表(List)" }
    },
    {
      path: '/JsComponents/dialog',
      component: Modeules.DialogController,
      meta: { title: "弹框(Dialog)" }
    },
    {
      path: '/JsComponents/counter',
      component: Modeules.CounterController,
      meta: { title: "计步器(Counter)" }
    },
    {
      path: '/JsComponents/picker',
      component: Modeules.PickerController,
      meta: { title: "下拉选择(Picker)" }
    },
    {
      path: '/JsComponents/dateTime',
      component: Modeules.DateTimeController,
      meta: { title: "日期时间(dateTime)" }
    },
    {
      path: '/JsComponents/search',
      component: Modeules.SearchController,
      meta: { title: "搜索框(search))" }
    },
    {
      path: '/JsComponents/sendCode',
      component: Modeules.SendCodeController,
      meta: { title: "倒计时按钮(sendCode)" }
    },
    {
      path: '/JsComponents/messageBox',
      component: Modeules.MessageBoxController,
      meta: { title: "倒计时按钮(messageBox)" }
    },
    {
      path: '/JsComponents/viewer',
      component: Modeules.ViewerController,
      meta: { title: "图片预览(Viewer)" }
    },
    {
      path: '/JsComponents/actionSheet',
      component: Modeules.ActionSheetController,
      meta: { title: "图片预览(Viewer)" }
    },
    {
      path: '/JsComponents/upload',
      component: Modeules.UploadController,
      meta: { title: "图片上传(Upload)" }
    },
    {
      path: '/JsComponents/infiniteScroll',
      component: Modeules.InfiniteScrollController,
      meta: { title: "infiniteScroll(持续滚动加载)" }
    },
    {
      path: '/JsComponents/scrollNav',
      component: Modeules.ScrollNavController,
      meta: { title: "ScrollNav" }
    },
    {
      path: '/JsComponents/ScrollTab',
      component: Modeules.ScrollTabController,
      meta: { title: "ScrollTab" }
    },
    {
      path: '/JsComponents/tab',
      component: Modeules.TabController,
      meta: { title: "tab" }
    },
    {
      path: '/JsComponents/carkeyboard',
      component: Modeules.CarkeyboardController,
      meta: { title: "Carkeyboard" }
    },
    {
      path: '/myinfo',
      component: Modeules.CarkeyboardController,
      meta: { title: "Carkeyboard" ,requireAuth:true}
    }
  ]
})

/**
 * 全局设置标题
 */
router.afterEach((to) => {
  Tool.setTitle(to.meta.title?to.meta.title:'DEMO案例');
})

let auth = false;
/**跳转拦截**/
router.beforeEach((to, from, next) => {
   
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (auth) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
          console.log('您未登录')
            next({
                path: '/login',
                query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})

export default router