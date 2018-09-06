import Vue from 'vue';
import Confirm from './Confirm.vue';


class ConfirmConstructor extends Vue.extend(Confirm) {
    
    constructor() {
        super();
        this.mes = '';
        this.title = '';
        this.opts = [];
        this.instance = null;
    }

    closeConfirm(callback) {
        typeof callback == 'function' && callback();
        const el = this.instance.$el;
        el.parentNode && el.parentNode.removeChild(el);
    }

    init(opts, instance) {
        this.mes = opts.mes;
        this.title = opts.title;
        this.opts = opts.opts;
        this.instance = instance;
        
    }
}

let alert = (content) => {
    let opts = {
            title: '',
            mes: content,
            opts: [
                {
                    txt: '确定',
                    color: true
                }
            ]
        }
    init(opts);
};


let confirm = (content = {}) => {
    init(content);
};


let init = (opts) => {
   
    let dialogHolder = document.createElement('div');
    let instance = new ConfirmConstructor().$mount(dialogHolder);
    instance.init(opts, instance);
    document.body.appendChild(instance.$el);
};




export { confirm, alert };