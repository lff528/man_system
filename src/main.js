// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/reset.css";
import './until/axios';
import BaiduMap from 'vue-baidu-map';
    Vue.use(BaiduMap, {
          /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
          ak: 'AiH9Cx6IAOXQ28tudiRF6OBcmplGOWP9'
    })

// import store from './store'
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
