import Vue from 'vue';
import Loading from './Loading.vue';

class LoadingConstructor extends Vue.extend(Loading) {
   
   constructor() {
        super();
        this.message = '';
        this.instance = null;
    }
    open(message){
        instance.message = message || '正在加载';
        document.body.appendChild(instance.$el);
    }
    close(){
        const el = instance.$el;
        el.parentNode && el.parentNode.removeChild(el);
    }
}
const instance = new LoadingConstructor().$mount(document.createElement('div'));
export default {
    open: instance.open,
    close: instance.close
};