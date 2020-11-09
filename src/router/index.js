/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/HomeTemplate"),
    children: [
      {
        path: "/",
        component: () => import("../views/HomeTemplate/HomePage"),
      },
      {
        path: "/about",
        component: () => import("../views/HomeTemplate/AboutPage"),
      },
      {
        path: "/station",
        component: () => import("../views/HomeTemplate/StationPage"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("../views/AdminTemplate"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/PageNotFound"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: "active",
  routes,
});

export default router;
