import { createWebHistory, createRouter } from "vue-router";
// import Home from "@/views/Home.vue";
// import About from "@/views/About.vue";

import Home from "@/components/Home.vue";
import Create from "@/components/Create.vue";
import Edit from "@/components/Edit.vue";
import List from "@/components/List.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create",
    name: "create",
    component: Create,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: Edit,
  },
  {
    path: "/view",
    name: "view",
    component: List,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
