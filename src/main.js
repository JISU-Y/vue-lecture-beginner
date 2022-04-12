import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = false

new Vue({
  router, // 정의한 router 사용 (app을 마운트할 때 router를 사용할 수 있는 구조)
  render: (h) => h(App),
}).$mount("#app")
