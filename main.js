import Vue from "vue"
import App from "./App"
import uView from "@/plugin/uview-ui";
import $uConfig from "@/config/index.config.js";
import httpInterceptor from "@/request/http.interceptor.js"
import router from "@/router"
import { RouterMount } from "uni-simple-router"
import Loading from "@/pages/components/loading.vue"
import LoadMore from "@/pages/components/loadMore.vue"
import Empty from "@/pages/components/empty.vue"
import ListItem from "@/pages/components/listItem.vue"

Vue.config.productionTip = false
App.mpType = "app"
const app = new Vue({ ...App })

/**
 * 引入全局配置
 * */
Vue.prototype.$uConfig = $uConfig;

/**
 * 注册全局组件
 * */
Vue.use(uView);
Vue.component("Loading", Loading)
Vue.component("LoadMore", LoadMore)
Vue.component("Empty", Empty)
Vue.component("ListItem", ListItem)

/**
 * 接口配置
 * */
Vue.use(httpInterceptor, app)

//#ifdef H5
RouterMount(app, "#app");
//#endif

//#ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
//#endif
