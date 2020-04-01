import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    // 重定向
    {
        path: "/",
        redirect: "login"
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Login/index.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;
