import { Tool } from 'utilities/index';
import {xfdActionSheet} from './actionSheet';
import {xfdContainerbox,xfdRow,xfdFlex,xfdCol} from './layout';
import xfdDialog from './dialog';
import {xfdButton} from './button';
import {xfdCountDown} from './countdown';
import {xfdCell,xfdCellItem} from './cell';
import {xfdCode} from './code';
import {xfdMessageBox} from './messageBox';
import {xfdCarKeyBoard} from './carKeyBoard';
import {xfdInput,xfdSwitch} from './form';
import {xfdTabs,xfdTabPane} from './tabs';
import {xfdSearch} from './search';
import {xfdPull,xfdPullLeft,xfdPullLeftTwo,xfdInfiniteScroll} from './pull';
import {xfdCounter} from './counter';
import xfdTree from './tree';
/* import {xfdScrollNav} from './scrollNav';
import {xfdScrollTab} from './scrollTab';
import xfdUpload from './upload/upload';
import xfdTree from './tree'; */
const iview = {
    xfdContainerbox,
    xfdButton,
    xfdRow,
    xfdFlex,
    xfdCol,
    xfdCountDown,
    xfdCell,
    xfdCellItem,
    xfdCode,
    xfdMessageBox,
    xfdActionSheet,
    xfdCarKeyBoard,
    xfdSwitch,
    xfdInput,
    xfdTabs,
    xfdTabPane,
    xfdPull,
    xfdPullLeft,
    xfdPullLeftTwo,
    xfdCounter,
    xfdSearch,
    xfdInfiniteScroll,
    xfdTree
}

const install = function (Vue) {
    Object.keys(iview).forEach((key) => {
        Vue.component(key, iview[key]);
    });
    /**
     * 全局注定弹框
     */
    Vue.prototype.$xfdDialog = xfdDialog;
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
/*export {
install,
iview
} ;*/
//export default install;
export default install;