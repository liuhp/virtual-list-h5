//引入相关基础插件
import Vue from 'vue'
import App from './App'
//引入路由相关配置
import router from './router'

//引入axios，并加到原型链中
import axios from 'axios';
Vue.prototype.$axios = axios;

//引入定制化虚拟滚动插件并注册到Vue全局实例上，这里需要注意先后顺序，我们的定制化插件中会用到iView中的组件
import VirtualBlock from "./plugins/VirtualBlock";
Vue.use(VirtualBlock);

//阻止启动生产环境提醒
Vue.config.productionTip = true;
//实例化Vue对象，挂载对应Dom节点、加入路由依赖、核心入口组件

const app = new Vue({
  router,
  render: h => h(App)
});

app.$mount("#app")