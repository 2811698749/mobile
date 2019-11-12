import {
    Button,//按扭
    Swipe,//轮播
    SwipeItem,//轮播
    Search,
    InfiniteScroll,
    Popup,
    MessageBox,
    Toast,
    Indicator
} from 'mint-ui';
//加载组件
export function initMint(Vue) {
    [Button,
        Swipe,
        SwipeItem,
        Search,
        Popup
    ].forEach(item => Vue.component(item.name, item));
    //加载指令
    [InfiniteScroll].forEach(item => Vue.use(item));
    window.MessageBox = MessageBox;
    window.Toast = Toast;
    window.alertMsg = (msg, className = 'icon-wenxintishi') => {
        className = "iconfont " + className;
        Toast({
            message: msg,
            iconClass: className
        });
    };
    window.Indicator = Indicator;
}
