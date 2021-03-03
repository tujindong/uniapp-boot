import Vue from 'vue'
import App from './App'
import request from 'common/request.js'
import uView from "./plugin/uview-ui";

Vue.use(uView);

Vue.prototype.$http = request
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})

app.$mount()
