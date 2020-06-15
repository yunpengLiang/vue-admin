import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout/index.vue";

Vue.use(VueRouter);

const routes = [
    // 重定向
    {
        path: "/",
        redirect: "login",
        hidden: true,
        meta: {
            name: "主页"
        }
    },
    {
        path: "/login",
        name: "login",
        hidden: true,
        meta: {
            name: "登陆"
        },
        component: () => import("../views/Login/index.vue")
    },
    {
        path: "/console",
        name: "Console",
        redirect: "index",
        hidden: false,
        meta: {
            name: "控制台",
            icon: "console"
        },
        component: Layout,
        children: [
            {
                path: "/index",
                name: "Index",
                hidden: false,
                meta: {
                    name: "首页"
                },
                component: () => import("../views/Console/index.vue")
            }
        ]
    },
    // 信息管理
    {
        path: "/info",
        name: "Info",
        hidden: false,
        meta: {
            name: "信息管理",
            icon: "info"
        },
        component: Layout,
        children: [
            {
                path: "/infoIndex",
                name: "InfoIndex",
                hidden: false,
                meta: {
                    name: "信息列表"
                },
                component: () => import("../views/Info/index.vue")
            },
            {
                path: "/infoCategory",
                name: "InfoCategory",
                hidden: false,
                meta: {
                    name: "信息分类"
                },
                component: () => import("../views/Info/category.vue")
            }
        ]
    },
    // 用户管理
    {
        path: "/user",
        name: "User",
        hidden: false,
        meta: {
            name: "用户管理",
            icon: "user"
        },
        component: Layout,
        children: [
            {
                path: "/userIndex",
                name: "UserIndex",
                hidden: false,
                meta: {
                    name: "用户列表"
                },
                component: () => import("../views/User/index.vue")
            }
        ]
    }
];

const router = new VueRouter({
    routes
});

export default router;
