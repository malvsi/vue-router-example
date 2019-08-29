// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/app.css'
import Util from './lib/utils'

Vue.use(Util)

Vue.config.productionTip = false

/* // 自定义插件的方法
let custom = {
  install: function (Vue, options) {
    Vue.prototype.$abc = '自定义'
  }
}

Vue.use(custom) */

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
