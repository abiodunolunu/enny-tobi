import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/admin/login"
  },

  {
    path: "/admin/login",
    name: "Admin-Login",
    component: () =>
      import(/* webpackChunkName: "Admin/Login" */ "../views/Admin/Login.vue")
  },
  {
    path: "/admin/Dashboard",
    name: "Admin-Dashboard",
    component: () =>
      import(
        /* webpackChunkName: "Admin/Dashboard" */ "../views/Admin/Dashboard.vue"
      )
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
