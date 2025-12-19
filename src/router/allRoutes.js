import Home from "../views/Home.vue"
import Display from "../views/Display.vue"
import CounterApp from "../views/CounterApp.vue"
import { createRouter, createWebHistory } from "vue-router"
import ProfileApp from "../views/ProfileApp.vue"

const routes=[
{path:'/',component:Home},
{path:'/counter',component:CounterApp},
{path:'/profile',component:ProfileApp}
]

const router=createRouter({
  history:createWebHistory(),
  routes
})

export default router;