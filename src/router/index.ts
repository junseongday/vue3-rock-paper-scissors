import { createRouter, createWebHashHistory } from "vue-router";
import routes from "~/router/routes.ts";

export const router = createRouter({
  history: createWebHashHistory("/vue3-rock-paper-scissors/"), // createWebHistory("/vue3-rock-paper-scissors/"),
  linkActiveClass: "active",
  routes,
});
