
const AppController = () => import('./home/AppController.vue');    

/**
 * css components
 */
const BasicController = () => import('./csscomponents/BasicController.vue'); 
const ButtonController = () => import('./csscomponents/ButtonController.vue');
const FormController = () => import('./csscomponents/FormController.vue');
const IconController = () => import('./csscomponents/IconController.vue'); 
const LayoutController = () => import('./csscomponents/LayoutController.vue');
const GridController = () => import('./csscomponents/GridController.vue');
const PanelController = () => import('./csscomponents/PanelController.vue'); 
const CellController = () => import('./csscomponents/CellController.vue'); 
const ListController = () => import('./csscomponents/ListController.vue');

/**
 * js components
 */
const DialogController = () => import('./jscomponents/DialogController.vue'); 
const CounterController = () => import('./jscomponents/CounterController.vue'); 
const PickerController = () => import('./jscomponents/PickerController.vue');
const DateTimeController = () => import('./jscomponents/DateTimeController.vue');
const SearchController = () => import('./jscomponents/SearchController.vue');
const SendCodeController = () => import('./jscomponents/SendCodeController.vue');
const MessageBoxController = () => import('./jscomponents/MessageBoxController.vue');
const ViewerController = () => import('./jscomponents/ViewerController.vue');
const ActionSheetController = () => import('./jscomponents/ActionSheetController.vue');
const UploadController = () => import('./jscomponents/UploadController.vue');
const InfiniteScrollController = () => import('./jscomponents/InfiniteScrollController.vue');
const ScrollNavController = () => import('./jscomponents/ScrollNavController.vue');
const ScrollTabController = () => import('./jscomponents/ScrollTabController.vue');
const TabController = () => import('./jscomponents/TabController.vue');
const CarkeyboardController = () => import('./jscomponents/CarkeyboardController.vue');

/**
 * js application //JS 组合应用
 */
const SaveInfiniteScrollController = () => import('./application/SaveInfiniteScrollController.vue');
export default {
    AppController,
    BasicController,
    ButtonController,
    FormController,
    IconController,
    LayoutController,
    GridController,
    PanelController,
    CellController,
    ListController,
    DialogController,
    CounterController,
    PickerController,
    DateTimeController,
    SearchController,
    SendCodeController,
    MessageBoxController,
    ViewerController,
    ActionSheetController,
    UploadController,
    InfiniteScrollController,
    ScrollNavController,
    ScrollTabController,
    TabController,
    CarkeyboardController,
    SaveInfiniteScrollController
}
