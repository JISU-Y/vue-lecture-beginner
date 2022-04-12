import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./views/Home"
import About from "./views/About"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history", // mode
  routes: [
    { path: "/", component: Home }, // routing 주소와 컴포넌트
    { path: "/about", component: About },
  ],
})

export default router
