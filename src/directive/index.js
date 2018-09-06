/**
 * 
 * @param {} value 自定义指令路由跳转
 */
let router = (value) => {
    return {
        bind:(el, binding, vnode) =>{
            let $router = binding.value.router;
            let path = binding.value.path;
            el.addEventListener("click",()=>{
                if(path){
                    $router.push(path);
                    return;
                }
                $router.go(-1);
            },false);
        }
    }
}

export default {
    router:router()
}