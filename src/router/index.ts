import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import AppTop from "@/views/AppTop.vue";

const routeSettings: RouteRecordRaw[] = [
  {
    path: "/",
    name: "AppTop",
    component: AppTop,
  },
  {
    path: "/member/memberList",
    name: "MemberList",
    component: () => {
      return import("@/views/MemberList.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routeSettings,
});

export default router;
