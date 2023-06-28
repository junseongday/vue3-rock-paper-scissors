import { defineComponent } from "vue";

const NotFound = defineComponent({
  name: "NotFound",
  template: "<div>Not Found</div>",
});
const sample = defineComponent({
  name: "sample",
  template: "<div>this is sample</div>",
});

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: () => import("~/pages/home/Home.vue"),
  },
  {
    path: "/sample",
    name: "sample",
    component: sample,
  },
  { path: "/:catchAll(.*)+", component: NotFound },
];

export default routes;
