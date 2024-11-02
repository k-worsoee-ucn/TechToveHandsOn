import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ProdukterView from "@/views/ProdukterView.vue"
import LoginView from "@/views/LoginView.vue"
import CheckoutView from "@/views/CheckoutView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: "/produkter",
      name: "produkter",
      component: ProdukterView,
    }
  ]
})

export default router
